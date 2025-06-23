import HeroSection from "@/components/HeroSection"
import ProblemSolutionSection from "@/components/ProblemSolutionSection"
import HowItWorksSection from "@/components/HowItWorksSection"
import BenefitsSection from "@/components/BenefitsSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import CTASection from "@/components/CTASection"

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <HeroSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}
