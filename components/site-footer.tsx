import Link from "next/link";
import { navLinks } from "@/lib/nav-links";
import { InstagramIcon, TiktokIcon, YoutubeIcon } from "@/components/social-icons";

const socials = [
  { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { label: "TikTok", href: "https://tiktok.com", icon: TiktokIcon },
  { label: "YouTube", href: "https://youtube.com", icon: YoutubeIcon },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-paper/10 bg-ink px-6 py-16 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link href="#top" className="font-heading text-2xl tracking-wide text-paper">
              <span className="text-brand">1</span>BOXING
            </Link>
            <p className="mt-4 max-w-xs text-sm text-paper/55">
              Train Hard. Fight Smart. A premium boxing gym for beginners,
              fighters, and everyone chasing something better.
            </p>
            <div className="mt-6 flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-paper/60 transition-colors hover:text-paper"
                >
                  <social.icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-paper/40 uppercase">
              Explore
            </p>
            <nav className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-paper/65 transition-colors hover:text-paper"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-paper/40 uppercase">
              Contact
            </p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-paper/65">
              <p>Albert Cuypmarkt 213, Amsterdam</p>
              <a href="tel:+31617748995" className="hover:text-paper">
                +31 6 17748995
              </a>
              <a href="mailto:hello@1boxing.gym" className="hover:text-paper">
                hello@1boxing.gym
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-paper/10 pt-8 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} 1Boxing. All rights reserved.</p>
          <p className="font-mono tracking-[0.2em] uppercase">
            Train Hard. Fight Smart.
          </p>
        </div>
      </div>
    </footer>
  );
}
