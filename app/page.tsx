import FuturisticHeader from "@/components/navigation/FuturisticHeader"
import QuantumHeroSection from "@/components/hero/QuantumHeroSection"
import IntelligenceShowcase from "@/components/sections/IntelligenceShowcase"
import ProblemSolutionSection from "@/components/ProblemSolutionSection"
import HowItWorksSection from "@/components/HowItWorksSection"
import BenefitsSection from "@/components/BenefitsSection"
import FeaturesSection from "@/components/FeaturesSection"
import TechnologySection from "@/components/TechnologySection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      <FuturisticHeader />
      <QuantumHeroSection />
      <IntelligenceShowcase />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <BenefitsSection />
      <FeaturesSection />
      <TechnologySection />
      <CTASection />
      <Footer />
    </div>
  )
}
