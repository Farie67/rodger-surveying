/**
 * Push the current Prisma schema to a Turso / libSQL database.
 *
 * Prisma's own `migrate diff` command generates the SQL from schema.prisma,
 * then @libsql/client executes the resulting statements against Turso.
 *
 * Usage:
 *   pnpm db:push
 *   pnpm db:push --dry-run
 *
 * Required environment variables for a real push:
 *   TURSO_DATABASE_URL=libsql://your-database.turso.io
 *   TURSO_AUTH_TOKEN=your-token
 */

import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { createClient } from "@libsql/client";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const schemaPath = join(projectRoot, "prisma", "schema.prisma");
const dryRun = process.argv.includes("--dry-run");

function parseEnvFile(filePath: string) {
  const values: Record<string, string> = {};

  if (!existsSync(filePath)) return values;

  for (const rawLine of readFileSync(filePath, "utf8").split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;

    const separator = line.indexOf("=");
    if (separator <= 0) continue;

    const key = line.slice(0, separator).trim();
    let value = line.slice(separator + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    values[key] = value;
  }

  return values;
}

function loadEnvironment() {
  const values = {
    ...parseEnvFile(join(projectRoot, ".env")),
    ...parseEnvFile(join(projectRoot, ".env.local")),
  };

  for (const [key, value] of Object.entries(values)) {
    if (process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

function getPrismaCliPath() {
  const require = createRequire(import.meta.url);
  const packageJsonPath = require.resolve("prisma/package.json");
  const packageJson = JSON.parse(
    readFileSync(packageJsonPath, "utf8"),
  ) as {
    bin?: string | Record<string, string>;
  };

  const relativeBin =
    typeof packageJson.bin === "string"
      ? packageJson.bin
      : packageJson.bin?.prisma;

  if (!relativeBin) {
    throw new Error("Could not locate the Prisma CLI executable.");
  }

  return join(dirname(packageJsonPath), relativeBin);
}

function generateSchemaSql() {
  const prismaCliPath = getPrismaCliPath();

  const sql = execFileSync(
    process.execPath,
    [
      prismaCliPath,
      "migrate",
      "diff",
      "--from-empty",
      "--to-schema-datamodel",
      schemaPath,
      "--script",
    ],
    {
      cwd: projectRoot,
      encoding: "utf8",
      env: process.env,
      stdio: ["ignore", "pipe", "pipe"],
    },
  ).trim();

  if (!sql) {
    throw new Error(
      "Prisma returned an empty schema diff. Check prisma/schema.prisma.",
    );
  }

  return sql;
}

function describeDatabaseUrl(rawUrl: string) {
  try {
    const url = new URL(rawUrl);
    return `${url.protocol}//${url.host}`;
  } catch {
    return rawUrl;
  }
}

async function main() {
  loadEnvironment();

  console.log("Generating SQL from prisma/schema.prisma...");
  const sql = generateSchemaSql();

  console.log(
    `Generated ${sql.split(";").filter((part) => part.trim()).length} SQL statement(s).`,
  );

  if (dryRun) {
    console.log("\n--- SQL preview ---\n");
    console.log(sql);
    console.log("\nDry run complete. No database changes were made.");
    return;
  }

  const url = process.env.TURSO_DATABASE_URL;
  const authToken = process.env.TURSO_AUTH_TOKEN;

  if (!url) {
    throw new Error(
      "TURSO_DATABASE_URL is not set. Add your Turso libsql:// URL to .env.",
    );
  }

  if (/^file:/i.test(url)) {
    throw new Error(
      "TURSO_DATABASE_URL points to a local file. This command is for Turso. Set it to a libsql:// URL or use `pnpm db:push:local` for local SQLite.",
    );
  }

  if (!authToken) {
    throw new Error(
      "TURSO_AUTH_TOKEN is not set. Add your Turso database token to .env.",
    );
  }

  console.log(`Applying schema to ${describeDatabaseUrl(url)}...`);

  const client = createClient({ url, authToken });

  try {
    await client.executeMultiple(sql);
    console.log("Schema applied successfully.");
  } finally {
    client.close();
  }
}

main().catch((error: unknown) => {
  console.error(
    "\nSchema push failed:",
    error instanceof Error ? error.message : error,
  );
  process.exitCode = 1;
});
