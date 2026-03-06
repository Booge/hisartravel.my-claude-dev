import { HeroSlider } from "@/components/sections/hero-slider";
import { TrustBar } from "@/components/sections/trust-bar";
import { Features } from "@/components/sections/features";
import { PackagesPreview } from "@/components/sections/packages-preview";
import { WhyHisar } from "@/components/sections/why-hisar";
import { Testimonials } from "@/components/sections/testimonials";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";
import { CountdownBar } from "@/components/sections/countdown-bar";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <TrustBar />
      <Features />
      <CountdownBar />
      <PackagesPreview />
      <WhyHisar />
      <Testimonials />
      <FaqSection />
      <CtaSection />
    </>
  );
}
