import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createHash, createHmac, timingSafeEqual } from "node:crypto";

const SESSION_COOKIE = "rs_admin_session";
const SESSION_MAX_AGE = 60 * 60 * 8;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "rodger2026";
const SESSION_SECRET =
  process.env.ADMIN_SESSION_SECRET ??
  "rodger-surveying-admin-session-secret-change-in-production";

function hashPassword(value: string) {
  return createHash("sha256").update(value).digest();
}

function sign(value: string) {
  return createHmac("sha256", SESSION_SECRET).update(value).digest("hex");
}

function safeCompare(left: string, right: string) {
  const leftBuffer = Buffer.from(left, "hex");
  const rightBuffer = Buffer.from(right, "hex");

  if (leftBuffer.length !== rightBuffer.length) return false;
  return timingSafeEqual(leftBuffer, rightBuffer);
}

export function isValidAdminPassword(password: string) {
  return timingSafeEqual(hashPassword(password), hashPassword(ADMIN_PASSWORD));
}

export async function createAdminSession() {
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_MAX_AGE;
  const payload = `admin.${expiresAt}`;
  const token = `${payload}.${sign(payload)}`;
  const cookieStore = await cookies();

  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;

  if (!token) return false;

  const [role, expiresAt, signature] = token.split(".");
  if (role !== "admin" || !expiresAt || !signature) return false;

  const expires = Number(expiresAt);
  if (!Number.isFinite(expires) || expires < Math.floor(Date.now() / 1000)) {
    return false;
  }

  const expected = sign(`${role}.${expiresAt}`);
  return safeCompare(expected, signature);
}

export async function requireAdmin() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }
}

export async function redirectIfAdmin() {
  if (await isAdminAuthenticated()) {
    redirect("/admin");
  }
}
