import Navbar from "@/app/components/Navbar"
import Hero from "@/app/components/Hero"
import FlagshipProject from "@/app/components/FlagshipProject"
import EngineeringProjects from "@/app/components/EngineeringProjects"
import TechnicalStack from "@/app/components/TechnicalStack"
import GitHubActivity from "@/app/components/GitHubActivity"
import Blogs from "@/app/components/Blogs"
import CybersecurityLabs from "@/app/components/CybersecurityLabs"
import EngineeringTimeline from "@/app/components/EngineeringTimeline"
import Contact from "@/app/components/Contact"
import Footer from "@/app/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FlagshipProject />
        <EngineeringProjects />
        <TechnicalStack />
        <GitHubActivity />
        <Blogs />
        <CybersecurityLabs />
        <EngineeringTimeline />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
