import { Quote } from "lucide-react";
import { Kicker } from "@/components/kicker";
import { Reveal } from "@/components/reveal";
import { Marquee } from "@/components/magicui/marquee";

const testimonials = [
  {
    quote:
      "I walked in nervous and out of shape. Six months later I sparred for the first time and didn't want to stop.",
    name: "Priya N.",
    role: "Member since 2023",
  },
  {
    quote:
      "The coaching here is next level. They actually watch your technique and correct it, every single class.",
    name: "Daniel K.",
    role: "Fight Camp",
  },
  {
    quote:
      "Best workout I've found. I've lost 18 pounds and I actually look forward to bag day.",
    name: "Morgan T.",
    role: "Boxing Fitness",
  },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <div className="w-[380px] shrink-0 border border-paper/10 p-8">
      <Quote className="size-6 text-brand" strokeWidth={1.5} />
      <p className="mt-5 text-lg leading-relaxed text-paper/85">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <p className="mt-6 font-mono text-xs tracking-[0.14em] text-paper/50 uppercase">
        {testimonial.name} — {testimonial.role}
      </p>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-ink-2 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <Kicker>What Members Say</Kicker>
          <h2 className="mt-5 max-w-2xl font-heading text-4xl tracking-tight text-paper uppercase md:text-6xl">
            Real people, real progress
          </h2>
        </Reveal>
      </div>

      <Reveal className="relative mt-16 border-t border-paper/10 pt-14">
        <Marquee pauseOnHover className="[--duration:50s]">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink-2 to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink-2 to-transparent md:w-32" />
      </Reveal>
    </section>
  );
}
