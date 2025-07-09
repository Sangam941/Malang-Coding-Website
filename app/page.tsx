
// import AboutSection from "@/components/about/About";
// import HeroSection from "@/components/hero/Hero";
import ProjectsSection from "@/components/project/Project";
import Contact from "@/components/contact/Contact";
import HeroApi from "@/components/hero/HeroApi";
import Service from "@/components/service/Service";
import AboutApi from "@/components/about/AboutApi";

export default function Home() {
  return (
    <>
      <HeroApi />
      <AboutApi />
      <ProjectsSection />
      <Service />
      <Contact />
    </>
  )
}
