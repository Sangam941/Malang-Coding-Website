import About from "@/components/about/About";
import HeroSection from "@/components/hero/Hero";
import ProjectsSection from "@/components/project/Project";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <ProjectsSection />
      <Contact />
    </>
  )
}
