"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Play, Code, Users, Award, Clock } from "lucide-react"
import Image from "next/image"    

type HeroSectionProps = {
  data: any; // Define the type of data if known
}

const HeroSection = ({data}: HeroSectionProps) => {

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {

    setIsVisible(true)

  }, [])

  const stats = [
    { number: "200+", label: "Projects Completed", icon: Code },
    { number: "50+", label: "Happy Clients", icon: Users },
    { number: "5+", label: "Years Experience", icon: Award },
    { number: "24/7", label: "Support Available", icon: Clock },
  ]

  return (
    <section
      id="home"
      className="relative py-4 sm:py-6 md:py-8 lg:py-10 flex items-center overflow-hidden" style={{backgroundColor:"var(--bg-color)"}}>
      {/* Background Pattern */}

      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div
              className={`inline-flex items-center space-x-2 bg-blue-100 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium transition-all duration-100 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available for New Projects</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1
                className={`text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight transition-all duration-1000 delay-200 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}

                style={{color:"var(--text-color)"}}
              >
                {data.name}{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Innovators
                </span>
              </h1>

              <p
                className={`text-xl text-gray-600  leading-relaxed max-w-2xl transition-all duration-1000 delay-400 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{color:"var(--text-color)"}}
              >
                We are a professional IT company delivering cutting-edge software solutions, web applications, and
                digital experiences that drive business success.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-600 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
                <span className="flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button className="group flex items-center space-x-2 bg-white border border-gray-300  hover:bg-gray-50  text-gray-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                <Play className="w-5 h-5" />
                <span>View Portfolio</span>
              </button>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 transition-all duration-1000 delay-800 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold"style={{color:"var(--text-color)"}}>{stat.number}</div>
                  <div className="text-sm"style={{color:"var(--text-color)"}}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Right Image */}
          {/* "/image/grp2.png" */}
          <Image src={data.image} width={500} height={500} alt="Hero Image" className=" lg:block" />

        </div>
      </div>
    </section>
  )
}

export default HeroSection
