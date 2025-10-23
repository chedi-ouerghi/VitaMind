import BenefitsSection from "@/components/BenefitsSection"
import CTASection from "@/components/CTASection"
import FeaturesSection from "@/components/FeaturesSection"
import FloatingMenu from "@/components/FloatingMenu"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import HowItWorksSection from "@/components/HowItWorksSection"
import ProblemSolutionSection from "@/components/ProblemSolutionSection"
import TeamSection from "@/components/TeamSection"
import { LazyMotion, domAnimation } from "framer-motion"

export default function Home() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-white text-black overflow-x-hidden">
        <Header />
        <FloatingMenu />
        <main>
          <section id="hero">
            <HeroSection />
          </section>
          <section id="problem-solution">
            <ProblemSolutionSection />
          </section>
          <section id="how-it-works">
            <HowItWorksSection />
          </section>
          <section id="benefits">
            <BenefitsSection />
          </section>
          <section id="features">
            <FeaturesSection />
          </section>
          <section id="team">
            <TeamSection />
          </section>
          <section id="cta">
            <CTASection />
          </section>
        </main>
        <Footer />
      </div>
    </LazyMotion>
  )
}
