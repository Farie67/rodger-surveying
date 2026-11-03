import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient() {
  const adapter = new PrismaLibSQL({
    url: process.env.TURSO_DATABASE_URL ?? "file:./prisma/dev.db",
    authToken: process.env.TURSO_AUTH_TOKEN || undefined,
  });

  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

// Cache the client in every environment. In production this prevents
// separate server bundles from creating additional Prisma instances, and in
// development it survives Next.js hot reloads.
globalForPrisma.prisma = prisma;
