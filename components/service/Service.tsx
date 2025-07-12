"use client"

import { useRef } from "react"
import dynamic from "next/dynamic"
// Dynamically import react-slick to avoid SSR issues
import LazyIcon from "@/components/LazyIcon"
const Slider = dynamic(() => import("react-slick"), { ssr: false })
import { Cog, ArrowRight, CheckCircle} from "lucide-react"
import Link from "next/link"

const Service = ({ services }:any) => {
    const sectionRef = useRef<HTMLElement>(null)


    const technologies = [
        { name: "React", icon: "⚛️", category: "Frontend" },
        { name: "Node.js", icon: "🟢", category: "Backend" },
        { name: "Python", icon: "🐍", category: "Backend" },
        { name: "AWS", icon: "☁️", category: "Cloud" },
        { name: "Docker", icon: "🐳", category: "DevOps" },
        { name: "MongoDB", icon: "🍃", category: "Database" },
        { name: "PostgreSQL", icon: "🐘", category: "Database" },
        { name: "TypeScript", icon: "📘", category: "Language" },
    ]


    return (
        <section
            ref={sectionRef}
            id="services"
            className="relative py-10 overflow-hidden transition-colors duration-300"
           style={{ color: "var(--bg-color)" }}>
            {/* Background Elements */}
           

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 10}s`,
                            animationDuration: `${5 + Math.random() * 8}s`,
                        }}
                    ></div>
                ))}
            </div>

            <div className="relative z-10 container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-20">
                    <div
                        className={`inline-flex items-center space-x-2 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 rounded-full px-4 py-2 text-sm mb-6 transition-all duration-1000 translate-y-0 opacity-100`}
                    >
                          <Cog className="w-4 h-4 text-blue-500 animate-spin" />
                        <span style={{color:"var(--text-color)"}}>Our Services</span>
                    </div>

                    <h2
                        className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-300  translate-y-0 opacity-100`}
                    style={{color:"var(--text-color)"}}>
                        Transforming Ideas Into{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Digital Reality
                        </span>
                    </h2>

                    <p
                        className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-300 translate-y-0 opacity-100`}
                    style={{color:"var(--text-color)"}}>
                        From concept to deployment, we provide comprehensive digital solutions that drive growth, enhance user
                        experience, and deliver measurable results for your business.
                    </p>
                </div>

                {/* Main Services Grid */}
                <div className="mb-20">
                  <Slider
                    dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={3}
                    slidesToScroll={1}
                    arrows={true}
                    autoplay={true}
                    autoplaySpeed={3000}
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
                    {services.map((service:any, index:any) => (
                      <div key={index} className="p-6">
                        <div
                          className="group relative shadow-md backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 transform hover:scale-105 cursor-pointer"
                          style={{ animationDelay: `${index * 150}ms` , backgroundColor: "var(--team-card-bg)" }}
                        >
                          {/* Gradient Background */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                          ></div>

                          {/* Icon */}
                          <div
                            className={`relative w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <LazyIcon iconName={service.icon} className="w-8 h-8 text-white" />
                          </div>

                          {/* Content */}
                          <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--text-color)" }}>{service.title}</h3>
                            <p className="mb-6 leading-relaxed" style={{ color: "var(--text-color)" }}>{service.description}</p>

                            {/* Features */}
                            <div className="space-y-2 mb-6">
                              {service.features.map((feature:any, idx:any) => (
                                <div key={idx} className="flex items-center space-x-2">
                                  <CheckCircle className="w-4 h-4 text-green-500" />
                                  <span className="text-sm" style={{ color: "var(--text-color)" }}>{feature}</span>
                                </div>
                              ))}
                            </div>

                            {/* CTA */}
                            <button className="group/btn w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                              <span className="flex items-center justify-center space-x-2">
                                <span>Learn More</span>
                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
                
                {/* Technologies */}
                <div
                    className={`mb-20 transition-all duration-1000 delay-1200 translate-y-0 opacity-100`}
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4"style={{color:"var(--text-color)"}}>Technologies We Use</h3>
                        <p className="text-lg max-w-2xl mx-auto"style={{color:"var(--text-color)"}}>
                            Cutting-edge tools and frameworks that power our solutions
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                        {technologies.map((tech, index) => (
                            <div
                                key={index}
                                className="group text-center p-4 shadow-md backdrop-blur-sm rounded-xl transition-all duration-300 transform hover:scale-105"
                                style={{ animationDelay: `${index * 100}ms` , backgroundColor: "var(--team-card-bg)"}}
                            >
                                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{tech.icon}</div>
                                <div className="text-sm font-semibold mb-1"style={{color:"var(--text-color)"}}>{tech.name}</div>
                                <div className="text-xs"style={{color:"var(--text-color)"}}>{tech.category}</div>
                            </div>
                        ))}
                    </div>
                </div>
                

                {/* CTA Section */}
                <div
                    className={`text-center transition-all duration-1000 delay-1600 translate-y-0 opacity-100`}
                >
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Explore our services</h3>
                            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                                Click on the button below to explore to explore our services
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/service" className="group bg-white text-blue-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                                    <span className="flex items-center justify-center space-x-2">
                                        <span>Start Your Project</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
      `}</style>
        </section>
    )
}

export default Service
