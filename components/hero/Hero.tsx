"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Play, Code, Users, Award, Clock } from "lucide-react"

const HeroSection = () => {
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
      className="relative min-h-screen flex items-center overflow-hidden" style={{backgroundColor:"var(--bg-color)"}}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto py-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div
              className={`inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium transition-all duration-1000 ${
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
                MalangCode{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Innovators
                </span>
              </h1>

              <p
                className={`text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl transition-all duration-1000 delay-400 ${
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

              <button className="group flex items-center space-x-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
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
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
            >
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                    <div className="h-4 bg-blue-200 dark:bg-blue-800 rounded w-2/3"></div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg p-4">
                    <div className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Project Status: In Development
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
