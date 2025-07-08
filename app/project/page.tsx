"use client"

import { useState, useEffect, useRef } from "react"
import { ExternalLink, Github, Globe, Smartphone, ShoppingCart, FolderKanban } from "lucide-react"

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

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
            className={`inline-flex items-center space-x-2 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 rounded-full px-4 py-2 text-sm mb-6 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <FolderKanban className="w-4 h-4 text-blue-500" />
            <span className="" style={{ color: "var(--text-color)" }}>Our Projects</span>
          </div>
          <h2
            className={`text-3xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          style={{ color: "var(--text-color)" }}>
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
           style={{ color: "var(--text-color)" }}>
            Explore our portfolio of successful projects that have helped businesses achieve their digital goals.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-gray-100  text-gray-700  hover:bg-gray-200"
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={` dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms`, backgroundColor: "var(--card-bg)" }}
            >
              <div className="relative group">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover"
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
      </div>
    </section>
  )
}

export default ProjectsSection
