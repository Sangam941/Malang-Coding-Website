"use client"

import type React from "react"
import LazyIcon from "@/components/LazyIcon"
// import { useState } from "react"
import {
  Code,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  ArrowRight,
  ExternalLink,
} from "lucide-react" 

const Footer = () => {

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-700" },
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { name: "GitHub", icon: Github, href: "#", color: "hover:text-gray-600 dark:hover:text-gray-400" },
  ]
  
  const navigationLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const serviceLinks = [
    { name: "Web Development", href: "#services" },
    { name: "Mobile Development", href: "#services" },
    { name: "UI/UX Design", href: "#services" },
    { name: "Backend Development", href: "#services" },
    { name: "Cybersecurity", href: "#services" },
    { name: "Cloud Solutions", href: "#services" },
  ]

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "GDPR Compliance", href: "#" },
  ]

  return (
    <footer className="relative overflow-hidden" style={{backgroundColor:"var(--card-bg)"}}>
      {/* Decorative Waves */}
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)]"></div>
      </div>  

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold" style={{color:"var(--text-color)"}}>Malang Coders</h3>
                  <p className="text-gray-400 text-sm">Digital Solutions</p>
                </div>
              </div>
              <p className="mb-6 leading-relaxed" style={{color:"var(--text-color)"}}>
                Transforming ideas into powerful digital solutions. We specialize in web development, mobile apps, and
                innovative technology solutions that drive business growth.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span style={{color:"var(--text-color)"}}>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span style={{color:"var(--text-color)"}}>hello@malangcoders.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span style={{color:"var(--text-color)"}}>123 Tech Street, NY 10001</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6" style={{color:"var(--text-color)"}}>Quick Links</h4>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-white transition-colors flex items-center group" style={{color:"var(--text-color)"}}
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all " />
                      <span className="group-hover:translate-x-1 transition-transform ">{link.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6" style={{color:"var(--text-color)"}}>Our Services</h4>
              <ul className="space-y-3">
                {serviceLinks.map((service) => (
                  <li key={service.name}>
                    <button
                      onClick={() => scrollToSection(service.href)}
                      className="text-gray-300 hover:text-white transition-colors flex items-center group" style={{color:"var(--text-color)"}}
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                      <span className="group-hover:translate-x-1 transition-transform ">
                        {service.name}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-6" style={{color:"var(--text-color)"}}>Stay Updated</h4>
              <p className="text-gray-300 mb-6" style={{color:"var(--text-color)"}}>
                Subscribe to our newsletter for the latest updates, tech insights, and project showcases.
              </p>

              

              {/* Social Links */}
              <div>
                <h5 className="text-sm font-semibold mb-4 " style={{color:"var(--text-color)"}}>Follow Us</h5>
                <div className="flex space-x-4">
                  {socialLinks.map((social:any, index:any) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white ${social.color} transition-all duration-300 transform hover:scale-110 hover:bg-none`}
                      aria-label={social.name}
                    >
                      <LazyIcon iconName={social.icon} className="w-5 h-5 text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="flex items-center space-x-2 text-gray-400">
                <span style={{color:"var(--text-color)"}}>&copy; 2024 Malang Coders. All rights reserved.</span>
                  
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap justify-center md:justify-end space-x-6" >
                {legalLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className=" hover:text-white transition-colors duration-300 text-sm flex items-center space-x-1" style={{color:"var(--text-color)"}}
                  >
                    <span style={{color:"var(--text-color)"}}>{link.name}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 pt-6 border-t border-gray-800">
              <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
                <div>
                  <h6 className="text-sm font-semibold  mb-2" style={{color:"var(--text-color)"}}>Business Hours</h6>
                  <p className=" text-sm" style={{color:"var(--text-color)"}}>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p className=" text-sm" style={{color:"var(--text-color)"}}>Saturday: 10:00 AM - 4:00 PM EST</p>
                </div>
                <div>
                  <h6 className="text-sm font-semibold  mb-2" style={{color:"var(--text-color)"}}>Response Time</h6>
                  <p className=" text-sm" style={{color:"var(--text-color)"}}>Email: Within 24 hours</p>
                  <p className=" text-sm" style={{color:"var(--text-color)"}}>Phone: Immediate during business hours</p>
                </div>
                <div>
                  <h6 className="text-sm font-semibold" style={{color:"var(--text-color)"}}>Certifications</h6>
                  <p className="text-sm" style={{color:"var(--text-color)"}}>ISO 27001 Certified</p>
                  <p className="text-sm" style={{color:"var(--text-color)"}}>AWS Partner Network</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
