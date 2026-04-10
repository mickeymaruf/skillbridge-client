import { Hero } from "./_components/hero";
import Categories from "./_components/category";
import HowItWorks from "./_components/how-it-works";
import WhyUsSection from "./_components/why-us";
import TestimonialSection from "./_components/testimonials";
import SafetyTrustBento from "./_components/safety";
import FAQSection from "./_components/faq";
import MentorsGrid from "./_components/mentors";
import CTASection from "./_components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <HowItWorks />
      <TestimonialSection />
      <MentorsGrid />
      <SafetyTrustBento />
      <FAQSection />
      <WhyUsSection />
      <CTASection />
    </>
  );
}
