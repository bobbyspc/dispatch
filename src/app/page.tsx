import SiteHeader from "@/components/site/SiteHeader";
import Hero from "@/components/site/Hero";
import Statement from "@/components/site/Statement";
import Apart from "@/components/site/Apart";
import Features from "@/components/site/Features";
import Agents from "@/components/site/Agents";
import Steps from "@/components/site/Steps";
import Testimonials from "@/components/site/Testimonials";
import Pricing from "@/components/site/Pricing";
import Faq from "@/components/site/Faq";
import Integrations from "@/components/site/Integrations";
import FinalCta from "@/components/site/FinalCta";
import SiteFooter from "@/components/site/SiteFooter";
import Intro from "@/components/site/Intro";
import Capabilities from "@/components/site/Capabilities";
import Pricing2 from "@/components/site/Pricing2";
import Testimonials2 from "@/components/site/Testimonials2";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Intro />
        <Apart />
        <Capabilities />
        <Agents />
        <Steps />
        <Testimonials2 />
        <Pricing2 />
        <Faq />
        <Integrations />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
