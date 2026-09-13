import { Kicker } from "@/components/kicker";
import { Reveal } from "@/components/reveal";

const facts = [
  { value: "2016", label: "Founded" },
  { value: "1,200+", label: "Members trained" },
  { value: "12", label: "Expert coaches" },
];

export function Intro() {
  return (
    <section className="bg-ink px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Kicker>Welcome to 1Boxing</Kicker>
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <Reveal delay={80}>
            <p className="font-heading text-3xl leading-[1.15] tracking-tight text-paper uppercase sm:text-4xl md:text-5xl">
              Boxing makes you better — sharper mind, stronger body, real
              discipline. Our coaches meet you where you are and push you
              further than you thought possible.
            </p>
          </Reveal>

          <Reveal delay={160} className="flex flex-col justify-between gap-10">
            <p className="text-base leading-relaxed text-paper/70">
              1Boxing isn&rsquo;t a fight club for show. It&rsquo;s a working
              gym for people who show up — whether that means your first jab
              or your next fight card. No egos, no gimmicks, just structured
              training that actually works.
            </p>
            <dl className="grid grid-cols-3 gap-4 border-t border-paper/15 pt-6">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-heading text-2xl text-paper md:text-3xl">
                    {fact.value}
                  </dt>
                  <dd className="mt-1 font-mono text-[0.6rem] tracking-[0.18em] text-paper/50 uppercase">
                    {fact.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
