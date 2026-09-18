import Link from "next/link";
import { Activity } from "lucide-react";
import { APP_NAME } from "@/lib/metrics";

const navItems = [
  { href: "/", label: "Dashboard" },
  { href: "/about", label: "About CI" },
] as const;

export function Header() {
  return (
    <header className="border-b border-slate-200/80 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-slate-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white">
            <Activity className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="text-sm font-semibold tracking-tight sm:text-base">
            {APP_NAME}
          </span>
        </Link>
        <nav className="flex items-center gap-1" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
