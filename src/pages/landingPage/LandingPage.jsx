import Footer from "./Footer"
import HeroSection from "./HeroSection"
import HowItWorks from "./HowItWorks"
import Questions from "./Questions"
import WhyPickMe from "./WhyPickMe"

function LandingPage() {
  return (
    <div className="bg-white px-2 overflow-x-hidden">
      <HeroSection />
      <WhyPickMe />
      <HowItWorks />
      <Questions />
      <Footer />
    </div>
  )
}

export default LandingPage
