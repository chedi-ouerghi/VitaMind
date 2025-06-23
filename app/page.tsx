import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
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
      <Header />
      <HeroSection />
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
