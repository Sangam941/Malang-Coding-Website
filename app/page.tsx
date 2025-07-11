
// import AboutSection from "@/components/about/About";
// import HeroSection from "@/components/hero/Hero";
import ProjectsSection from "@/components/project/Project";
import ProjectApi from "@/components/project/ProjectApi";
import Contact from "@/components/contact/Contact";
import HeroApi from "@/components/hero/HeroApi";
import Service from "@/components/service/Service";
import AboutApi from "@/components/about/AboutApi";

export default function Home() {
  return (
    <>
      <HeroApi />
      <AboutApi />
      <ProjectApi />
      <Service />
      <Contact />
    </>
  )
}
