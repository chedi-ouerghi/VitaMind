import FuturisticHeader from "@/components/navigation/FuturisticHeader"
import QuantumHeroSection from "@/components/hero/QuantumHeroSection"
import QuantumAdvantagesSection from "@/components/sections/QuantumAdvantagesSection"
import ProblemSolutionSection from "@/components/ProblemSolutionSection"
import HowItWorksSection from "@/components/HowItWorksSection"
import FeaturesSection from "@/components/FeaturesSection"
import TechnologySection from "@/components/TechnologySection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      <FuturisticHeader />
      <QuantumHeroSection />
      <QuantumAdvantagesSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <FeaturesSection />
      <TechnologySection />
      <CTASection />
      <Footer />
    </div>
  )
}
