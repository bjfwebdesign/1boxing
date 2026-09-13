import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Intro } from "@/components/sections/intro";
import { Programs } from "@/components/sections/programs";
import { WhyUs } from "@/components/sections/why-us";
import { Coaches } from "@/components/sections/coaches";
import { Gallery } from "@/components/sections/gallery";
import { Testimonials } from "@/components/sections/testimonials";
import { Membership } from "@/components/sections/membership";
import { Location } from "@/components/sections/location";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Intro />
        <Programs />
        <WhyUs />
        <Coaches />
        <Gallery />
        <Testimonials />
        <Membership />
        <Location />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
