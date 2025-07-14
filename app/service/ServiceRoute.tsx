"use client"

import { useState, useEffect, useRef } from "react"
import dynamic from "next/dynamic"
const Slider = dynamic(() => import("react-slick"), { ssr: false })
import LazyIcon from "@/components/LazyIcon"
import { Code, Palette, Cog, Users, ArrowRight, CheckCircle, Clock, Target, Lightbulb, Rocket, HeadphonesIcon, Play, Award, TrendingUp} from "lucide-react"

const Service = ({ services }:any) => {
    const [activeProcess, setActiveProcess] = useState(0)
    const [activeProcessMobile, setActiveProcessMobile] = useState(0)
    const sectionRef = useRef<HTMLElement>(null)

    const processSteps = [
        {
            step: "01",
            title: "Discovery & Planning",
            description: "We analyze your requirements and create a detailed project roadmap",
            icon: Lightbulb,
            duration: "1-2 weeks",
        },
        {
            step: "02",
            title: "Design & Prototyping",
            description: "Creating wireframes, mockups, and interactive prototypes",
            icon: Palette,
            duration: "2-3 weeks",
        },
        {
            step: "03",
            title: "Development",
            description: "Building your solution with cutting-edge technologies",
            icon: Code,
            duration: "4-12 weeks",
        },
        {
            step: "04",
            title: "Testing & QA",
            description: "Rigorous testing to ensure quality and performance",
            icon: CheckCircle,
            duration: "1-2 weeks",
        },
        {
            step: "05",
            title: "Deployment",
            description: "Launching your solution and ensuring smooth operation",
            icon: Rocket,
            duration: "1 week",
        },
        {
            step: "06",
            title: "Support & Maintenance",
            description: "Ongoing support and continuous improvements",
            icon: HeadphonesIcon,
            duration: "Ongoing",
        },
    ]

    const packages = [
        {
            name: "Starter",
            price: "$2,999",
            description: "Perfect for small businesses and startups",
            features: [
                "Custom Website/App",
                "Responsive Design",
                "Basic SEO",
                "3 Months Support",
                "Source Code",
                "Documentation",
            ],
            popular: false,
            color: "from-gray-500 to-gray-600",
        },
        {
            name: "Professional",
            price: "$7,999",
            description: "Ideal for growing businesses",
            features: [
                "Everything in Starter",
                "Advanced Features",
                "Database Integration",
                "API Development",
                "6 Months Support",
                "Performance Optimization",
                "Security Implementation",
                "Analytics Integration",
            ],
            popular: true,
            color: "from-blue-500 to-purple-600",
        },
        {
            name: "Enterprise",
            price: "Custom",
            description: "For large-scale applications",
            features: [
                "Everything in Professional",
                "Custom Architecture",
                "Scalable Infrastructure",
                "Advanced Security",
                "12 Months Support",
                "Dedicated Team",
                "Priority Support",
                "Training & Consultation",
            ],
            popular: false,
            color: "from-purple-500 to-pink-500",
        },
    ]

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

    const benefits = [
        {
            icon: Target,
            title: "Results-Driven",
            description: "We focus on delivering measurable business outcomes",
        },
        {
            icon: Clock,
            title: "On-Time Delivery",
            description: "98% of our projects are delivered on or ahead of schedule",
        },
        {
            icon: Award,
            title: "Quality Assured",
            description: "Rigorous testing and quality control processes",
        },
        {
            icon: Users,
            title: "Expert Team",
            description: "Certified professionals with years of experience",
        },
        {
            icon: TrendingUp,
            title: "Scalable Solutions",
            description: "Built to grow with your business needs",
        },
        {
            icon: HeadphonesIcon,
            title: "24/7 Support",
            description: "Round-the-clock support and maintenance",
        },
    ]


    useEffect(() => {
        const interval = setInterval(() => {
            setActiveProcess((prev) => (prev + 1) % processSteps.length)
        }, 3000)

        return () => clearInterval(interval)
    })
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

            <div className="relative z-10 container mx-auto px-3">
                {/* Header */}
                <div className="text-center mb-20">
                    <div
                        className={`inline-flex items-center space-x-2 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 rounded-full px-4 py-2 text-sm mb-6 transition-all duration-1000 translate-y-0 opacity-100`}
                    >
                        <Cog className="w-4 h-4 text-blue-500 animate-spin" />
                        <span style={{ color: "var(--text-color)" }}>Our Services</span>
                    </div>

                    <h2
                        className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-300 translate-y-0 opacity-100`}
                        style={{ color: "var(--text-color)" }}>
                        Transforming Ideas Into{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Digital Reality
                        </span>
                    </h2>

                    <p
                        className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-300 translate-y-0 opacity-100`}
                        style={{ color: "var(--text-color)" }}>
                        From concept to deployment, we provide comprehensive digital solutions that drive growth, enhance user
                        experience, and deliver measurable results for your business.
                    </p>
                </div>

                {/* Main Services Grid */}
                <div
                    className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 transition-all duration-300 translate-y-0 opacity-100`}
                >
                    {services.map((service:any, index:any) => (
                        <div
                            key={service.title}
                            className="group relative shadow-md backdrop-blur-sm sm:px-4 rounded-2xl p-8 transition-all duration-500 transform hover:scale-105 cursor-pointer"
                            style={{ animationDelay: `${index * 150}ms` , backgroundColor: "var(--team-card-bg)"}}
                        >
                            {/* Gradient Background */}
                            <div
                                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} style={{ background: service.color}}
                            ></div>

                            {/* Icon */}
                            <div
                                className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`} style={{ background: service.color }}
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

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    <div className="text-center">
                                        <div className="text-lg font-bold" style={{ color: "var(--text-color)" }}>{service.price}</div>
                                        <div className="text-xs" style={{ color: "var(--text-color)" }}>Starting Price</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-lg font-bold" style={{ color: "var(--text-color)" }}>{service.deliveryTime}</div>
                                        <div className="text-xs" style={{ color: "var(--text-color)" }}>Delivery</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-green-600 dark:text-green-400">{service.projects}</div>
                                        <div className="text-xs" style={{ color: "var(--text-color)" }}>Projects</div>
                                    </div>
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
                    ))}
                </div>

                {/* Process Section */}
                <div
                    className={`mb-20 transition-all duration-1000 delay-800 translate-y-0 opacity-100`}
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--text-color)" }}>Our Process</h3>
                        <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-color)" }}>
                            A proven methodology that ensures successful project delivery every time
                        </p>
                    </div>
                    {/* Process Timeline */}

                    <div className="relative">
                        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform -translate-y-1/2"></div>

                        <div className="max-sm:hidden grid md:grid-cols-2 lg:grid-cols-6 gap-8">
                            {processSteps.map((step:any, index:any) => (
                                <div
                                    key={index}
                                    className={`relative group text-center transition-all duration-500 ${activeProcess === index ? "scale-110" : "scale-100"
                                        }`}
                                    style={{ animationDelay: `${index * 200}ms` }}
                                >
                                    {/* Step Circle */}
                                    <div
                                        className={`relative w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-500 ${activeProcess === index
                                            ? "bg-gradient-to-r from-blue-500 to-purple-600 scale-110"
                                            : "bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20"
                                            }`}
                                    >
                                        <step.icon
                                            className={`w-8 h-8 transition-colors duration-500 ${activeProcess === index ? "text-white" : "text-blue-500"
                                                }`}
                                        />
                                        <div
                                            className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${activeProcess === index ? "bg-white text-blue-600" : "bg-blue-500 text-white"
                                                }`}
                                        >
                                            {step.step}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div
                                        className={`bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 rounded-xl p-4 transition-all duration-500 ${activeProcess === index ? "bg-white/20 dark:bg-gray-800/30 border-blue-500/30" : ""
                                            }`}
                                    >
                                        <h4 className="text-lg font-semibold" style={{ color: "var(--text-color)" }}>{step.title}</h4>
                                        <p className="text-sm mb-2" style={{ color: "var(--text-color)" }}>{step.description}</p>
                                        <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">{step.duration}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="md:hidden p-5">
                            <Slider
                            
                                dots={true}
                                infinite={true}
                                speed={500}
                                slidesToShow={1}
                                slidesToScroll={1}
                                arrows={true}
                                autoplay={true}
                                autoplaySpeed={3000}
                                beforeChange={(_:any, next:any) => setActiveProcessMobile(next)}
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
                                {processSteps.map((step, index) => (
                                    <div key={index}>
                                        <div
                                            className={`relative group text-center transition-all duration-500 ${activeProcessMobile === index ? "scale-105" : "scale-100"}`}
                                            style={{ animationDelay: `${3000}ms` }}
                                        >
                                            {/* Step Circle */}
                                            <div
                                                className={`relative w-15 h-15 mx-auto mb-4 mt-4 rounded-full flex items-center justify-center transition-all duration-500 ${activeProcessMobile === index
                                                    ? "bg-gradient-to-r from-blue-500 to-purple-600 scale-105"
                                                    : "bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20"
                                                    }`}
                                            >
                                                <step.icon
                                                    className={`w-8 h-8 transition-colors duration-500 ${activeProcessMobile === index ? "text-white" : "text-blue-500"}`}
                                                />
                                                <div
                                                    className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${activeProcessMobile === index ? "bg-white text-blue-600" : "bg-blue-500 text-white"}`}
                                                >
                                                    {step.step}
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div
                                                className={`bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 rounded-xl p-4 transition-all duration-500 ${activeProcessMobile === index ? "bg-white/20 dark:bg-gray-800/30 border-blue-500/30" : ""
                                                    }`}
                                            >
                                                <h4 className="text-lg font-semibold" style={{ color: "var(--text-color)" }}>{step.title}</h4>
                                                <p className="text-sm mb-2" style={{ color: "var(--text-color)" }}>{step.description}</p>
                                                <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">{step.duration}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>

                    </div>
                </div>

                {/* Pricing Packages */}
                <div
                    className={`mb-20 transition-all duration-1000 delay-1000 translate-y-0 opacity-100`}
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--text-color)" }}>Choose Your Package</h3>
                        <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-color)" }}>
                            Flexible pricing options designed to fit businesses of all sizes
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {packages.map((pkg:any, index:any) => (
                            <div
                                key={index}
                                className={`w-[87vw] m-auto shadow-md relative group backdrop-blur-sm rounded-2xl px-4 py-6 transition-all duration-500 transform hover:scale-105 ${pkg.popular ? "ring-2 ring-blue-500 scale-105" : ""
                                    }`}
                                style={{ animationDelay: `${index * 200}ms` , backgroundColor: "var(--team-card-bg)"}}
                            >
                                {/* Popular Badge */}
                                {pkg.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                            Most Popular
                                        </div>
                                    </div>
                                )}

                                {/* Gradient Background */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-r ${pkg.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                                ></div>

                                <div className="relative z-10">
                                    <h4 className="text-2xl font-bold mb-2" style={{ color: "var(--text-color)" }}>{pkg.name}</h4>
                                    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">{pkg.price}</div>
                                    <p className="mb-6" style={{ color: "var(--text-color)" }}>{pkg.description}</p>

                                    <div className="space-y-3 mb-8">
                                        {pkg.features.map((feature:any, idx:any) => (
                                            <div key={idx} className="flex items-center space-x-3">
                                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                <span style={{ color: "var(--text-color)" }}>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        className={`w-full font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white`}
                                    >
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technologies */}
                <div
                    className={`mb-20 transition-all duration-1000 delay-1200 translate-y-0 opacity-100`}
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--text-color)" }}>Technologies We Use</h3>
                        <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-color)" }}>
                            Cutting-edge tools and frameworks that power our solutions
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                        {technologies.map((tech:any, index:any) => (
                            <div
                                key={index}
                                className="shadow-md group text-center p-4 backdrop-blur-sm rounded-xl transition-all duration-300 transform hover:scale-105"
                                style={{ animationDelay: `${index * 100}ms` , backgroundColor: "var(--team-card-bg)" }}
                            >
                                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{tech.icon}</div>
                                <div className="text-sm font-semibold mb-1" style={{ color: "var(--text-color)" }}>{tech.name}</div>
                                <div className="text-xs" style={{ color: "var(--text-color)" }}>{tech.category}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Benefits */}
                <div
                    className={`mb-20 transition-all duration-1000 delay-1400 translate-y-0 opacity-100`}
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--text-color)" }}>Why Choose Us</h3>
                        <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-color)" }}>
                            The advantages that set us apart from the competition
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit:any, index:any) => (
                            <div
                                key={index}
                                className="shadow-md group text-center p-6 backdrop-blur-sm rounded-2xl transition-all duration-300 transform hover:scale-105"
                                style={{ animationDelay: `${index * 150}ms`, backgroundColor: "var(--team-card-bg)" }}
                            >
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <benefit.icon className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-xl font-semibold mb-3" style={{ color: "var(--text-color)" }}>{benefit.title}</h4>
                                <p style={{ color: "var(--text-color)" }}>{benefit.description}</p>
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
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h3>
                            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                                Let&apos;s discuss your project requirements and create something amazing together
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="group bg-white text-blue-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                                    <span className="flex items-center justify-center space-x-2">
                                        <span>Start Your Project</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </button>
                                <button className="group flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                                    <Play className="w-5 h-5" />
                                    <span>View Portfolio</span>
                                </button>
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
