
import ProjectApi from "@/components/project/ProjectApi";
import Contact from "@/components/contact/Contact";
import HeroApi from "@/components/hero/HeroApi";
import ServiceApi from "@/components/service/ServiceApi";
import AboutApi from "@/components/about/AboutApi";

export default function Home() {
  return (
    <>
      <HeroApi />
      <AboutApi />
      <ProjectApi />
      <ServiceApi />
      <Contact />
    </>
  )
}
