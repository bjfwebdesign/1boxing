"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/nav-links";
import { cn } from "cn";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "bg-ink border-b border-paper/10"
          : "bg-gradient-to-b from-black/60 to-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-10">
        <Link
          href="#top"
          className="font-heading text-xl tracking-wide text-paper md:text-2xl"
          onClick={() => setOpen(false)}
        >
          <span className="text-brand">1</span>BOXING
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs tracking-[0.2em] text-paper/70 uppercase transition-colors hover:text-paper"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            render={<Link href="#join" />}
            nativeButton={false}
            className="group h-11 gap-2 rounded-none px-6 text-xs font-semibold tracking-[0.16em] uppercase"
          >
            Book Free Trial
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-paper md:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="h-[calc(100vh-4rem)] border-t border-paper/10 bg-ink px-6 py-8 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-paper/10 py-4 font-heading text-3xl tracking-wide text-paper"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button
            render={<Link href="#join" onClick={() => setOpen(false)} />}
            nativeButton={false}
            className="group mt-8 h-14 w-full gap-2 rounded-none text-xs font-semibold tracking-[0.16em] uppercase"
          >
            Book Free Trial
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      )}
    </header>
  );
}
