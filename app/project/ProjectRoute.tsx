"use client"

import React from "react"
import { useState, useRef } from "react"
import { ExternalLink, Github, Globe, Smartphone, ShoppingCart, FolderKanban } from "lucide-react"
import Image from "next/image"
import dynamic from "next/dynamic"
// Dynamically import react-slick to avoid SSR issues
const Slider = dynamic(() => import("react-slick"), { ssr: false })

type ProjectProps = {
    data: any;
    category: any;
}

const ProjectsSection = ({ data, category }: ProjectProps) => {
    const [activeFilter, setActiveFilter] = useState("all")
    const sectionRef = useRef<HTMLElement>(null)


    const filteredProjects = React.useMemo(() => {
        if (!data) return []; // fallback if data is undefined
        return activeFilter === "all"
            ? data
            : data.filter((project: any) => project.category === activeFilter);
    }, [data, activeFilter]);

    return (
        <section ref={sectionRef} id="project" className="py-10 transition-colors duration-300" style={{ backgroundColor: "var(--bg-color)" }}>
            <div className="container mx-auto px-3">
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
                    {category.slice().reverse().map((filter: any, index: any) => (
                        <button
                            key={index}
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
                <div className="mb-12 sm:hidden">
                    {filteredProjects && filteredProjects.length > 0 ? (
                        <Slider className="project-slider"
                            dots={true}
                            infinite={filteredProjects.length > 3}
                            speed={500}
                            slidesToShow={3}
                            slidesToScroll={1}
                            autoplay={true}
                            autoplaySpeed={4000}
                            responsive={[
                                {
                                    breakpoint: 1024,
                                    settings: {
                                        slidesToShow: Math.min(3, filteredProjects.length),
                                        infinite: filteredProjects.length > 3,
                                        arrows: true,
                                    }
                                },
                                {
                                    breakpoint: 640,
                                    settings: {
                                        slidesToShow: 1,
                                        infinite: filteredProjects.length > 1,
                                        arrows: false,
                                    }
                                }
                            ]}
                        >
                            {filteredProjects.map((project: any, index: any) => (
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
                                                {project.technologies.map((tech: any) => (
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
                    ) : (
                        <div className="text-center text-gray-500">No projects found.</div>
                    )}
                </div>
 

                {/* Projects Grid */}
                <div className="max-sm:hidden grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects && filteredProjects.length > 0 ? (

                        filteredProjects.map((project: any, index: any) => (
                            <div
                                key={index}
                                className={`dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-md transition-all duration-200 transform hover:scale-105 translate-y-0 opacity-100`}
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
                                            {project.category === "web" && <Globe className="w-4 h-4 " style={{ color: "var(--text-color)" }} />}
                                            {project.category === "mobile" && <Smartphone className="w-4 h-4 " style={{ color: "var(--text-color)" }} />}
                                            {project.category === "ecommerce" && <ShoppingCart className="w-4 h-4 " style={{ color: "var(--text-color)" }} />}
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-bold mb-2" style={{ color: "var(--text-color)" }}>{project.title}</h3>
                                    <p className="text-sm mb-4 leading-relaxed line-clamp-2" style={{ color: "var(--text-color)" }}>{project.description}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech: any) => (
                                            <span
                                                key={tech}
                                                className="tech-scroll scroll-auto px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))

                    ) : (
                        <div className="col-span-3 text-center text-gray-500">No projects found.</div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection
