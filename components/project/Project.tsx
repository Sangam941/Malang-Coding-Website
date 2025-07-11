"use client"

import { useState, useRef } from "react"
// Dynamically import react-slick to avoid SSR issues
import dynamic from "next/dynamic"
const Slider = dynamic(() => import("react-slick"), { ssr: false })
import { ExternalLink, Github, Globe, Smartphone, ShoppingCart, FolderKanban, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const sectionRef = useRef<HTMLElement>(null)

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
          
  //       }
  //     },
  //     { threshold: 0.1 },
  //   )

  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current)
  //   }

  //   return () => observer.disconnect()
  // }, [])

  const filters = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Apps" },
    { id: "mobile", name: "Mobile" },
    { id: "ecommerce", name: "E-commerce" },
  ]

  const projects = [
    {
      id: 1,
      title: "EcoShop E-commerce Platform",
      category: "ecommerce",
      description: "Modern e-commerce platform with AI-powered recommendations and sustainable product focus.",
      image: "/image/projects/p1.webp",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "HealthCare Management System",
      category: "web",
      description: "Comprehensive healthcare management system for hospitals with patient portal integration.",
      image: "/image/projects/p2.jpeg",
      technologies: ["Next.js", "PostgreSQL", "AWS", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "FitTracker Mobile App",
      category: "mobile",
      description: "Cross-platform fitness tracking app with social features and AI workout plans.",
      image: "/image/projects/p1.webp",
      technologies: ["React Native", "Firebase", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Learning Management Platform",
      category: "web",
      description: "Modern LMS with interactive courses, live streaming, and progress analytics.",
      image: "/image/projects/p2.jpeg",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Restaurant Delivery App",
      category: "mobile",
      description: "Multi-vendor food delivery platform with real-time tracking and payments.",
      image: "/image/projects/p1.webp",
      technologies: ["Flutter", "Node.js", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Fashion Store Website",
      category: "ecommerce",
      description: "Luxury fashion e-commerce site with virtual try-on and AR features.",
      image: "/image/projects/p2.jpeg",
      technologies: ["React", "Shopify", "Three.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section ref={sectionRef} id="project" className="py-15 transition-colors duration-300" style={{ backgroundColor: "var(--bg-color)" }}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center space-x-2 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 rounded-full px-4 py-2 text-sm mb-6 transition-all duration-200 translate-y-0 opacity-100`}
          >
            <FolderKanban className="w-4 h-4 text-blue-500" />
            <span className="" style={{ color: "var(--text-color)" }}>Our Projects</span>
          </div>
          <h2
            className={`text-3xl md:text-5xl font-bold mb-6 transition-all duration-200 translate-y-0 opacity-100`}
            style={{ color: "var(--text-color)" }}>
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto leading-relaxed transition-all duration-200 delay-200 translate-y-0 opacity-100`}
            style={{ color: "var(--text-color)" }}>
            Explore our portfolio of successful projects that have helped businesses achieve their digital goals.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-200 delay-400 translate-y-0 opacity-100`}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`cursor-pointer px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeFilter === filter.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-gray-100  text-gray-700  hover:bg-gray-200"
                }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Carousel Slider for mobile view */}
        <div className="mb-12 md:hidden">
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={3}
            slidesToScroll={1}
            arrows={true}
            autoplay={true}
            autoplaySpeed={4000}
            responsive={[
              {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
              },
              {
                breakpoint: 640,
                settings: { slidesToShow: 1 }
              }
            ]}
          >
            {filteredProjects.map((project, index) => (
              <div key={index} className="px-2">
                <div
                  className={`dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 translate-y-0 opacity-100`}
                  style={{ backgroundColor: "var(--card-bg)" }}
                >
                  <div className="relative group">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      width={500}
                      height={300}
                    />
                    <div className="absolute inset-0 bg-black/50 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <a
                        href={project.liveUrl}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-100 transition-colors"
                        target="_blank" rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-100 transition-colors"
                        target="_blank" rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full font-medium uppercase">
                        {project.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        {project.category === "web" && <Globe className="w-4 h-4 " style={{ color: "var(--text-color)" }} />}
                        {project.category === "mobile" && <Smartphone className="w-4 h-4 " style={{ color: "var(--text-color)" }} />}
                        {project.category === "ecommerce" && <ShoppingCart className="w-4 h-4 " style={{ color: "var(--text-color)" }} />}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: "var(--text-color)" }}>{project.title}</h3>
                    <p className="text-sm mb-4 leading-relaxed" style={{ color: "var(--text-color)" }}>{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Projects Grid for laptop view*/}
                <div className="max-md:hidden grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.slice(0,3).map((project, index) => (
                    <div
                      key={index}
                      className={` dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 translate-y-0 opacity-100`}
                      style={{ backgroundColor: "var(--card-bg)" }}
                    >
                      <div className="relative group">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-48 object-cover"
                          width={500}
                          height={300}
                        />
                        <div className="absolute inset-0 bg-black/50 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                          <a
                            href={project.liveUrl}
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-100 transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                          <a
                            href={project.githubUrl}
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-100 transition-colors"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
        
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full font-medium uppercase">
                            {project.category}
                          </span>
                          <div className="flex items-center space-x-1">
                            {project.category === "web" && <Globe className="w-4 h-4 "  style={{ color: "var(--text-color)" }} />}
                            {project.category === "mobile" && <Smartphone className="w-4 h-4 " style={{ color: "var(--text-color)" }} />}
                            {project.category === "ecommerce" && <ShoppingCart className="w-4 h-4 " style={{ color: "var(--text-color)" }} />}
                          </div>
                        </div>
        
                        <h3 className="text-lg font-bold mb-2" style={{ color: "var(--text-color)" }}>{project.title}</h3>
                        <p className="text-sm mb-4 leading-relaxed" style={{ color: "var(--text-color)" }}>{project.description}</p>
        
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
        <div
                    className={`py-10 text-center transition-all duration-1000 delay-1600 translate-y-0 opacity-100`}
                >
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Want to see more projects?</h3>
                            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                                Please click on the button below, you will be redirected to our project page.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/project" className="cursor-pointer group bg-white text-blue-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                                    <span className="flex items-center justify-center space-x-2">
                                        <span>View More Project</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
        
      </div>
    </section>
  )
}

export default ProjectsSection
