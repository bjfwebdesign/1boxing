import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function FinalCta() {
  return (
    <section id="join" className="bg-ink px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-paper/50 uppercase">
            Your first class is on us
          </p>
          <h2 className="mt-6 font-heading text-5xl leading-[0.95] tracking-tight text-paper uppercase sm:text-6xl md:text-7xl">
            Ready to throw
            <br />
            your first punch?
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base text-paper/65 md:text-lg">
            Book a free trial class — no pressure, no contracts, just one
            honest hour in the gym.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              render={<Link href="mailto:trial@1boxing.gym" />}
              nativeButton={false}
              className="group h-14 gap-2 rounded-none px-8 text-xs font-semibold tracking-[0.16em] uppercase"
            >
              Book a Free Trial
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <a
              href="tel:+31617748995"
              className="text-xs font-semibold tracking-[0.2em] text-paper/70 uppercase hover:text-paper"
            >
              or call +31 6 17748995
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
