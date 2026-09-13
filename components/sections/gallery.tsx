import Image from "next/image";
import { Kicker } from "@/components/kicker";
import { Reveal } from "@/components/reveal";

const images = [
  {
    src: "https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?q=80&w=1400&auto=format&fit=crop",
    alt: "Boxing glove resting on the gym floor beside the ring",
    className: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1200&auto=format&fit=crop",
    alt: "Rows of dumbbells in the strength area",
    className: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200&auto=format&fit=crop",
    alt: "Member training with a barbell in the strength area",
    className: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1400&auto=format&fit=crop",
    alt: "Close-up of a barbell deadlift on the gym floor",
    className: "col-span-2 aspect-[16/9]",
  },
  {
    src: "https://images.unsplash.com/photo-1550259979-ed79b48d2a30?q=80&w=1200&auto=format&fit=crop",
    alt: "Member training with a kettlebell",
    className: "aspect-[4/3]",
  },
];

export function Gallery() {
  return (
    <section id="gym" className="bg-ink px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Kicker>The Gym</Kicker>
          <h2 className="mt-5 max-w-2xl font-heading text-4xl tracking-tight text-paper uppercase md:text-6xl">
            Built to train in
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
          {images.map((image, i) => (
            <Reveal
              key={image.src}
              delay={i * 60}
              className={`relative overflow-hidden ${image.className}`}
            >
              <div className="group relative h-full w-full shadow-[0_0_0_1px_rgba(243,240,234,0.1)] transition-shadow duration-500 hover:shadow-[0_0_0_1px_rgba(179,36,44,0.6),0_0_30px_-6px_rgba(179,36,44,0.5)]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
