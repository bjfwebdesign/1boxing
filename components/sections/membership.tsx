import Link from "next/link";
import { Check } from "lucide-react";
import { Kicker } from "@/components/kicker";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "cn";

const tiers = [
  {
    name: "Open Gym",
    price: "$89",
    description: "Access to open training hours and community classes.",
    features: [
      "Unlimited open-gym hours",
      "Group Fundamentals classes",
      "Locker & shower access",
    ],
    featured: false,
  },
  {
    name: "Unlimited",
    price: "$149",
    description: "Full access to every group class, including Fight Camp.",
    features: [
      "Everything in Open Gym",
      "Unlimited group classes",
      "Fight Camp eligibility",
      "2 guest passes / month",
    ],
    featured: true,
  },
  {
    name: "Private",
    price: "$320",
    description: "One-on-one coaching plus full gym access.",
    features: [
      "Everything in Unlimited",
      "4 private sessions / month",
      "Personalized program",
      "Priority scheduling",
    ],
    featured: false,
  },
];

export function Membership() {
  return (
    <section id="membership" className="bg-ink px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Kicker>Membership</Kicker>
          <h2 className="mt-5 max-w-2xl font-heading text-4xl tracking-tight text-paper uppercase md:text-6xl">
            Pick your plan
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-0 md:divide-x md:divide-paper/15 md:border md:border-paper/15">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 80}>
              <div
                className={cn(
                  "flex h-full flex-col border border-paper/15 p-8 md:border-0 md:p-10",
                  tier.featured && "bg-ink-2"
                )}
              >
                {tier.featured && (
                  <span className="mb-6 inline-block w-fit font-mono text-[0.65rem] tracking-[0.18em] text-brand uppercase">
                    Most popular
                  </span>
                )}
                <h3 className="font-heading text-2xl tracking-tight text-paper uppercase">
                  {tier.name}
                </h3>
                <p className="mt-4 flex items-baseline gap-1">
                  <span className="font-heading text-5xl text-paper">
                    {tier.price}
                  </span>
                  <span className="font-mono text-xs text-paper/50 uppercase">
                    / month
                  </span>
                </p>
                <p className="mt-4 text-sm leading-relaxed text-paper/60">
                  {tier.description}
                </p>
                <ul className="mt-8 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-paper/75"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  render={<Link href="#join" />}
                  nativeButton={false}
                  variant={tier.featured ? "default" : "outline"}
                  className="mt-10 h-12 w-full rounded-none text-xs tracking-[0.2em] uppercase"
                >
                  Get Started
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
