"use client";

import { useState } from "react";
import { Eye, EyeOff, LockKeyhole } from "lucide-react";

import { Button } from "@/components/ui/Button";

type LoginFormProps = {
  error?: boolean;
};

export function LoginForm({ error = false }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form action="/api/admin/login" method="post" className="mt-8">
      <label
        htmlFor="admin-password"
        className="mb-2 block text-[0.58rem] font-bold uppercase tracking-[0.16em] text-brand-navy"
      >
        Password
      </label>
      <div className="relative">
        <LockKeyhole
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-brand-slate/60"
          strokeWidth={1.75}
        />
        <input
          id="admin-password"
          name="password"
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
          required
          autoFocus
          placeholder="Enter admin password"
          aria-invalid={error}
          aria-describedby={error ? "admin-password-error" : undefined}
          className="h-12 w-full border border-brand-line bg-white pl-11 pr-12 text-sm text-brand-navy outline-none transition-[border-color,box-shadow] placeholder:text-brand-slate/40 focus:border-brand-red focus:ring-2 focus:ring-brand-red/10"
        />
        <button
          type="button"
          onClick={() => setShowPassword((current) => !current)}
          aria-label={showPassword ? "Hide password" : "Show password"}
          className="absolute right-1 top-1/2 grid size-10 -translate-y-1/2 place-items-center text-brand-slate transition-colors hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
        >
          {showPassword ? (
            <EyeOff aria-hidden="true" className="size-4" strokeWidth={1.75} />
          ) : (
            <Eye aria-hidden="true" className="size-4" strokeWidth={1.75} />
          )}
        </button>
      </div>

      {error ? (
        <p
          id="admin-password-error"
          role="alert"
          className="mt-2.5 border-l-2 border-brand-red bg-brand-red/5 px-3 py-2 text-xs leading-5 text-brand-red"
        >
          Incorrect password. Please check your credentials and try again.
        </p>
      ) : null}

      <Button
        type="submit"
        fullWidth
        className="mt-5 justify-center"
      >
        Sign in to dashboard
      </Button>

      <p className="mt-5 text-center text-[0.6rem] leading-5 text-brand-slate">
        Authorised personnel only. Access attempts are restricted.
      </p>
    </form>
  );
}
