import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/docs", label: "Docs" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-[var(--z-sticky)] border-b border-line/10 bg-night/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-sm uppercase tracking-[0.14em] text-text-primary"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-cyanGlow shadow-glow-sm" />
          HOLO<span className="text-cyanGlow">//</span>EXH
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-sm px-3 py-2 text-sm text-text-secondary transition-colors duration-fast hover:bg-white/5 hover:text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyanGlow"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Login
          </Button>
          <Button size="sm">Launch</Button>
          <button
            type="button"
            aria-label="Open menu"
            className="md:hidden text-text-secondary hover:text-text-primary"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
