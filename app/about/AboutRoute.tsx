"use client"

import { useRef } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import LazyIcon from "@/components/LazyIcon"
import Image from "next/image"
import { Users, Quote} from "lucide-react"


const AboutSection = ({ teamMembers, timeline, technologies, features }:any) => {
    
    // Removed unused testimonialIndex and setTestimonialIndex (now handled by react-slick)
    const sectionRef = useRef<HTMLElement>(null)

    return (
        <>
            <section
                ref={sectionRef}
                id="about"
                className="relative py-5 " style={{ backgroundColor: "var(--bg-color)" }}
            >
                {/* Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),rgba(255,255,255,0))]" />
                </div>

                {/* Floating Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 8}s`,
                                animationDuration: `${4 + Math.random() * 6}s`,
                            }}
                        />
                    ))}
                </div>

                <div className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 overflow-visible">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <div
                            className={`inline-flex shadow items-center space-x-2 backdrop-blur-sm rounded-full px-4 py-2 text-sm mb-3 transition-all duration-1000 translate-y-0 opacity-100`}
                        style={{backgroundColor: "var(--card-bg)"}}>
                            <Users className="w-4 h-4 text-blue-500" />
                            <span className="" style={{ color: "var(--text-color)" }}>About Malang Coders</span>
                        </div>

                        <h2
                            className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-200 translate-y-0 opacity-100`}
                            style={{ color: "var(--text-color)" }}>
                            Crafting Digital{" "}
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Excellence
                            </span>
                        </h2>

                        <p
                            className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-200 translate-y-0 opacity-100`}
                            style={{ color: "var(--text-color)" }}>
                            We are a passionate team of developers, designers, and innovators dedicated to transforming your ideas into
                            powerful digital solutions that drive business growth and user engagement.
                        </p>
                    </div>

                
                    {/* Company Story */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                        {/* Left Content */}
                        <div className="space-y-6">
                            <h3 className="text-3xl md:text-4xl font-bold " style={{ color: "var(--text-color)" }}>Our Story</h3>
                            <p className="text-lg  leading-relaxed" style={{ color: "var(--text-color)" }}>
                                Founded in 2019 with a mission to bridge the gap between innovative technology and real-world business
                                solutions. We&apos;ve grown from a small team of passionate developers into a full-service digital agency.
                            </p>
                            <p className="text-lg  leading-relaxed" style={{ color: "var(--text-color)" }}>
                                We believe great software is about understanding your business, users, and goals. Every project is a
                                partnership aimed at creating lasting digital success.
                            </p>
                        </div>

                        {/* Right Content */}
                        <div className="relative shadow-md">
                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                                <h4 className="text-xl font-bold mb-4">Why Choose Us?</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span>Expert team with 5+ years experience</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span>Modern technologies and best practices</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span>24/7 support and maintenance</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                        <span>Transparent pricing and communication</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Values Section */}
                    <div
                        className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 transition-all duration-1000 delay-800 translate-y-0 opacity-100`}
                    >
                        {features.map((value:any , index:any) => (
                            <div
                                key={index}
                                className="text-center p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                                style={{ backgroundColor: "var(--card-bg)" }}>
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <LazyIcon iconName={value.icon} className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-lg font-semibold mb-2" style={{ color: "var(--text-color)" }}>{value.title}</h4>
                                <p className="text-gray-600 text-sm" style={{ color: "var(--text-color)" }}>{value.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Timeline */}
                    <div
                        className={`max-sm:hidden mb-20 transition-all duration-1000 delay-1400 translate-y-0 opacity-100`}
                    >
                        <div className="text-center mb-12">
                            <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--text-color)" }}>Our Journey</h3>
                            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-color)" }}>
                                Key milestones that shaped our company&apos;s growth and success
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
                            <div className="space-y-12">
                                {timeline.map((item:any, index:any) => (
                                    <div
                                        key={index}
                                        className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                                        style={{ animationDelay: `${index * 200}ms` }}
                                    >
                                        <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                                            <div className="shadow-md flex flex-col items-center justify-center group p-4 backdrop-blur-sm rounded-2xl transition-all duration-300 transform hover:scale-105" style={{ backgroundColor: "var(--card-bg)" }}>
                                                <div className="max-md:text-xl text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">{item.year}</div>
                                                <h4 className="max-md:text-lg text-xl font-semibold mb-2" style={{ color: "var(--text-color)" }}>{item.title}</h4>
                                                <p className="max-md:text-sm" style={{ color: "var(--text-color)" }}>{item.description}</p>
                                            </div>
                                        </div>
                                        <div className="relative z-10 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                                            <LazyIcon iconName={item.icon} className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="w-1/2"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Technologies */}
                    <div
                        className={`mb-20 transition-all duration-1000 delay-1600 translate-y-0 opacity-100`}
                    >
                        <div className="text-center mb-12">
                            <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--text-color)" }}>Our Expertise</h3>
                            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-color)" }}>
                                Technologies and skills that power our innovative solutions
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {technologies.map((tech:any, index:any) => (
                                <div
                                    key={index}
                                    className="group p-6 backdrop-blur-sm rounded-2xl transition-all duration-300 shadow-md"
                                    style={{ animationDelay: `${index * 100}ms` , backgroundColor: "var(--card-bg)" }}
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                                <LazyIcon iconName={tech.icon} className="w-5 h-5 text-white" />
                                            </div>
                                            <span className="text-lg font-semibold" style={{ color: "var(--text-color)" }} >{tech.name}</span>
                                        </div>
                                        <span className="text-sm" style={{ color: "var(--text-color)" }}>{tech.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                        <div
                                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: `${tech.level}%`}}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Testimonials - Carousel Slider */}
                    <div
                        className={`mb-20 transition-all duration-1000 delay-1800 translate-y-0 opacity-100`}
                    >
                        <div className="text-center mb-12">
                            <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--text-color)" }}>Our Team</h3>
                            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-color)" }}>
                                Real feedback from real clients who trusted us with their projects
                            </p>
                        </div>
                        <div className="relative max-w-5xl w-full mx-auto">
                            <Slider
                                dots={true}
                                infinite={true}
                                speed={500}
                                slidesToShow={3}
                                slidesToScroll={1}
                                arrows={true}
                                autoplay={true}
                                autoplaySpeed={4000}
                                rtl={false}
                                responsive={[
                                    {
                                        breakpoint: 1024,
                                        settings: {
                                            slidesToShow: 2,
                                        },
                                    },
                                    {
                                        breakpoint: 640,
                                        settings: {
                                            slidesToShow: 1,
                                        },
                                    },
                                ]}
                                cssEase="cubic-bezier(0.4,0,0.2,1)"
                                pauseOnHover={true}
                                pauseOnFocus={false}
                                swipeToSlide={true}
                                draggable={true}
                            >
                                {teamMembers.map((testimonial:any, i:any) => (
                                    <div key={i} className="px-2 sm:px-4 py-10 testimonial-slide">
                                        <div className="testimonial-card shadow-md group p-6 backdrop-blur-sm rounded-2xl transition-all duration-300 h-full flex flex-col justify-between" style={{ backgroundColor: "var(--card-bg)"}}>
                                            {/* Image at the top, centered, rounded, even larger size */}
                                            <div className="flex justify-center mb-5">
                                                <Image
                                                    src={testimonial.image || "/placeholder.svg"}
                                                    alt={testimonial.name}
                                                    width={120}
                                                    height={120}
                                                    className="w-[120px] h-[120px] aspect-square rounded-full object-cover border-4 border-white shadow-lg"
                                                />
                                            </div>
                                            <Quote className="w-8 h-8 text-blue-500 mb-4 mx-auto" />
                                            <p className="mb-6 italic text-center" style={{ color: "var(--text-color)" }}>
                                                &quot;{testimonial.bio}&quot;
                                            </p>
                                            <div className="flex items-center justify-center space-x-4 mb-2" style={{ color: "var(--text-color)" }}>
                                                <div>
                                                    <div className="font-semibold text-center" style={{ color: "var(--text-color)" }}>{testimonial.name}</div>
                                                    <div className="text-sm text-center" style={{ color: "var(--text-color)" }}>{testimonial.role}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                    {/* CTA Section */}

                </div> {/* END: relative z-10 container mx-auto px-6 */}

                <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(180deg); }
          }
          
          .animate-float {
            animation: float 8s ease-in-out infinite;
          }
          /* Testimonial slider hover effect: only scale up hovered card, do not affect others */
          .testimonial-slide {
            transition: z-index 0.2s;
          }
          .testimonial-card {
            transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s, background 0.3s, border-color 0.3s;
            z-index: 1;
          }
          .testimonial-card:hover {
            transform: scale(1.06);
            z-index: 20;
            box-shadow: 0 8px 32px 0 rgba(59,130,246,0.18);
            border-color: #3b82f6;
            background: rgba(59,130,246,0.08);
          }
          @media (max-width: 1024px) {
            .testimonial-card {
              transform: scale(1) !important;
            }
          }
        `}</style>



            </section>


        </>
    )
}

export default AboutSection
