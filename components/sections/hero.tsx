import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { TextAnimate } from "@/components/magicui/text-animate";
import { ShineBorder } from "@/components/magicui/shine-border";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { DotPattern } from "@/components/magicui/dot-pattern";

const stats: { value: number; suffix?: string; label: string }[] = [
  { value: 2016, label: "Founded" },
  { value: 1200, suffix: "+", label: "Members trained" },
  { value: 4, label: "Core programs" },
  { value: 7, label: "Days a week" },
];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh items-end overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?q=80&w=2400&auto=format&fit=crop"
          alt="Two boxers exchanging punches in the ring"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_25%] grayscale"
        />
        <DotPattern
          width={22}
          height={22}
          cr={1}
          className="text-paper opacity-[0.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-40 pb-16 md:px-10 md:pb-20">
        <p className="font-mono text-xs tracking-[0.3em] text-paper/60 uppercase">
          1Boxing Gym — Est. 2016
        </p>

        <h1 className="mt-5 font-heading text-[clamp(2.75rem,11vw,7.5rem)] leading-[0.92] tracking-tight text-paper uppercase">
          <TextAnimate
            as="span"
            by="word"
            animation="blurInUp"
            duration={0.6}
            startOnView={false}
            className="block"
          >
            Train hard.
          </TextAnimate>
          <TextAnimate
            as="span"
            by="word"
            animation="blurInUp"
            duration={0.6}
            delay={0.5}
            startOnView={false}
            className="block"
          >
            Fight smart.
          </TextAnimate>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 md:text-lg">
          A premium boxing gym for beginners, competitive fighters, and everyone
          in between. Real coaching, real results — no ego required.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
          <span className="group relative inline-block">
            <ShineBorder shineColor="#b3242c" duration={4} />
            <Button
              render={<Link href="#join" />}
              nativeButton={false}
              className="group/button relative h-14 gap-2 rounded-none px-8 text-xs font-semibold tracking-[0.16em] uppercase"
            >
              Book a Free Trial
              <ArrowRight className="size-4 transition-transform group-hover/button:translate-x-1" />
            </Button>
          </span>
          <Link
            href="#programs"
            className="group inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-paper uppercase"
          >
            View Programs
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <Reveal>
          <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-paper/15 pt-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-heading text-3xl text-paper md:text-4xl">
                  <NumberTicker value={stat.value} className="text-paper" />
                  {stat.suffix}
                </dt>
                <dd className="mt-1 font-mono text-[0.65rem] tracking-[0.2em] text-paper/50 uppercase">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
