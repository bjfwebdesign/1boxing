import { ShieldCheck, Target, Users, Dumbbell } from "lucide-react";
import { Kicker } from "@/components/kicker";
import { Reveal } from "@/components/reveal";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Expert-led coaching",
    description:
      "Every coach is a former competitive boxer with years of teaching experience — not a certificate-mill instructor.",
  },
  {
    icon: Target,
    title: "Structured progression",
    description:
      "A clear path from your first jab to your first sparring round. No guesswork, no plateaus.",
  },
  {
    icon: Users,
    title: "All levels welcome",
    description:
      "From total beginners to seasoned fighters, every class is built to challenge you at your own level.",
  },
  {
    icon: Dumbbell,
    title: "Premium facility",
    description:
      "A purpose-built ring, heavy bags, and recovery space designed for serious, consistent training.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-paper px-6 py-24 text-ink md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Kicker light>Why 1Boxing</Kicker>
          <h2 className="mt-5 max-w-2xl font-heading text-4xl tracking-tight uppercase md:text-6xl">
            Built for people who show up
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-14 border-t border-ink/10 pt-14 sm:grid-cols-2">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 70}>
              <reason.icon className="size-7 text-brand" strokeWidth={1.5} />
              <h3 className="mt-5 font-heading text-2xl tracking-tight uppercase">
                {reason.title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/65 md:text-base">
                {reason.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
