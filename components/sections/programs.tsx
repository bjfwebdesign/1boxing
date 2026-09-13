import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Kicker } from "@/components/kicker";
import { Reveal } from "@/components/reveal";

const programs = [
  {
    index: "01",
    title: "Boxing Fundamentals",
    description:
      "For complete beginners. Learn proper stance, footwork, and the core punches in a supportive, no-judgment environment.",
    tags: ["Beginner-friendly", "Small groups", "No experience needed"],
    image:
      "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1200&auto=format&fit=crop",
  },
  {
    index: "02",
    title: "Fight Camp",
    description:
      "Structured training for competitive amateur and semi-pro fighters. Sparring, conditioning, and fight-specific strategy.",
    tags: ["Competition-focused", "Sparring included", "Coach-vetted entry"],
    image:
      "https://images.unsplash.com/photo-1517438322307-e67111335449?q=80&w=1200&auto=format&fit=crop",
  },
  {
    index: "03",
    title: "Boxing Fitness",
    description:
      "All the intensity of boxing training without the contact. Torch calories, build strength, and sharpen your reflexes.",
    tags: ["No sparring", "High intensity", "All levels"],
    image:
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    index: "04",
    title: "Private Coaching",
    description:
      "One-on-one sessions tailored to your goals, schedule, and skill level — with full access to a dedicated coach.",
    tags: ["1-on-1", "Flexible scheduling", "Personalized plan"],
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1200&auto=format&fit=crop",
  },
];

export function Programs() {
  return (
    <section id="programs" className="bg-ink px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Kicker>Training Programs</Kicker>
          <h2 className="mt-5 max-w-2xl font-heading text-4xl tracking-tight text-paper uppercase md:text-6xl">
            Find your program
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-paper/10 border-t border-paper/10">
          {programs.map((program, i) => (
            <Reveal key={program.index} delay={i * 60}>
              <div className="group grid gap-6 py-10 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-10">
                <span className="font-mono text-sm text-brand">
                  {program.index}
                </span>

                <div className="grid gap-6 sm:grid-cols-[160px_1fr] sm:items-center sm:gap-8">
                  <div className="relative aspect-[4/3] w-full overflow-hidden shadow-[0_0_0_1px_rgba(243,240,234,0.1)] transition-shadow duration-500 sm:w-40 group-hover:shadow-[0_0_0_1px_rgba(179,36,44,0.6),0_0_24px_-4px_rgba(179,36,44,0.45)]">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      sizes="160px"
                      className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl tracking-tight text-paper uppercase md:text-3xl">
                      {program.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-paper/65 md:text-base">
                      {program.description}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
                      {program.tags.map((tag) => (
                        <li
                          key={tag}
                          className="font-mono text-[0.65rem] tracking-[0.14em] text-paper/45 uppercase"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  href="#join"
                  className="group/link inline-flex items-center gap-2 font-mono text-xs tracking-[0.18em] text-paper uppercase md:justify-self-end"
                >
                  Start this program
                  <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
