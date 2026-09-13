import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Kicker } from "@/components/kicker";
import { Reveal } from "@/components/reveal";

const hours = [
  { days: "Monday — Friday", time: "6:00 AM – 9:00 PM" },
  { days: "Saturday", time: "8:00 AM – 4:00 PM" },
  { days: "Sunday", time: "9:00 AM – 2:00 PM" },
];

export function Location() {
  return (
    <section id="visit" className="bg-paper px-6 py-24 text-ink md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Kicker light>Visit Us</Kicker>
          <h2 className="mt-5 max-w-2xl font-heading text-4xl tracking-tight uppercase md:text-6xl">
            Come see the gym
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={80} className="order-2 space-y-10 lg:order-1">
            <div className="flex gap-4">
              <MapPin className="mt-1 size-5 shrink-0 text-brand" />
              <div>
                <p className="font-heading text-xl tracking-tight uppercase">
                  Address
                </p>
                <p className="mt-1 text-ink/70">
                  Albert Cuypmarkt 213
                  <br />
                  Amsterdam
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="mt-1 size-5 shrink-0 text-brand" />
              <div>
                <p className="font-heading text-xl tracking-tight uppercase">
                  Hours
                </p>
                <dl className="mt-2 space-y-1">
                  {hours.map((row) => (
                    <div key={row.days} className="flex justify-between gap-6 text-sm text-ink/70 sm:max-w-xs">
                      <dt>{row.days}</dt>
                      <dd className="text-ink">{row.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="mt-1 size-5 shrink-0 text-brand" />
              <div>
                <p className="font-heading text-xl tracking-tight uppercase">
                  Phone
                </p>
                <a
                  href="tel:+31617748995"
                  className="mt-1 inline-block text-ink/70 hover:text-ink"
                >
                  +31 6 17748995
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="mt-1 size-5 shrink-0 text-brand" />
              <div>
                <p className="font-heading text-xl tracking-tight uppercase">
                  Email
                </p>
                <a
                  href="mailto:hello@1boxing.gym"
                  className="mt-1 inline-block text-ink/70 hover:text-ink"
                >
                  hello@1boxing.gym
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal
            delay={160}
            className="order-1 aspect-[4/3] w-full border border-ink/15 lg:order-2 lg:aspect-auto"
          >
            <div
              className="relative h-full w-full overflow-hidden bg-ink"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(243,240,234,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(243,240,234,0.08) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            >
              <div className="absolute inset-x-0 top-1/3 h-px bg-paper/15" />
              <div className="absolute inset-y-0 left-1/4 w-px bg-paper/15" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
                <MapPin className="size-10 fill-brand text-brand" />
              </div>
              <span className="absolute bottom-6 left-6 font-mono text-[0.65rem] tracking-[0.18em] text-paper/40 uppercase">
                Amsterdam
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
