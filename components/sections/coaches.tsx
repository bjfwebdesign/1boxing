import Image from "next/image";
import { Kicker } from "@/components/kicker";
import { Reveal } from "@/components/reveal";

const coaches = [
  {
    name: "Marcus Reid",
    role: "Head Coach & Founder",
    bio: "Former national amateur champion with 15 years in the corner.",
    image:
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Elena Castillo",
    role: "Fight Camp Coach",
    bio: "Specializes in competition prep, fight IQ, and sparring strategy.",
    image:
      "https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Jordan Blake",
    role: "Fitness Coach",
    bio: "Boxing conditioning specialist obsessed with pad-work intensity.",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Sam Okafor",
    role: "Fundamentals Coach",
    bio: "Patient, technical, and completely beginner-obsessed.",
    image:
      "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?q=80&w=1000&auto=format&fit=crop",
  },
];

export function Coaches() {
  return (
    <section id="coaches" className="bg-ink px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Kicker>The Coaches</Kicker>
          <h2 className="mt-5 max-w-2xl font-heading text-4xl tracking-tight text-paper uppercase md:text-6xl">
            Learn from people who&rsquo;ve done it
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {coaches.map((coach, i) => (
            <Reveal key={coach.name} delay={i * 70} className="group">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-ink-2">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <h3 className="mt-5 font-heading text-xl tracking-tight text-paper uppercase">
                {coach.name}
              </h3>
              <p className="mt-1 font-mono text-[0.65rem] tracking-[0.16em] text-brand uppercase">
                {coach.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-paper/60">
                {coach.bio}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
