"use client"

import type React from "react"
import { useState, useRef } from "react"
import axios from "axios"
import { Mail, Phone, MapPin, Send, CheckCircle, User, Building } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const sectionRef = useRef<HTMLElement>(null)


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post('https://malangcode.pythonanywhere.com/api/send-email/', {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.status === 200 || response.status === 201) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };


  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM EST",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@malangcoders.com",
      description: "We'll respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Tech Street, NY 10001",
      description: "Open for meetings by appointment",
    },
  ]

  return (

    <section ref={sectionRef} className="py-7 pb-20 transition-colors duration-300">
      <div className="container mx-auto px-3">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center shadow space-x-2 backdrop-blur-sm rounded-full px-4 py-2 text-sm mb-6 transition-all duration-1000 translate-y-0 opacity-100`}
          style={{backgroundColor: "var(--card-bg)"}}>
            <Phone className="w-4 h-4 text-blue-500" />
            <span className="" style={{ color: "var(--text-color)" }}>Contact</span>
          </div>

          <h2
            className={`text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-all duration-200 translate-y-0 opacity-100`}
            style={{ color: "var(--text-color)" }}>
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto leading-relaxed transition-all duration-200  translate-y-0 opacity-100`}
            style={{ color: "var(--text-color)" }}>
            Ready to start your project? Let&apos;s discuss how we can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-400 translate-x-0 opacity-100`}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: "var(--text-color)" }}>Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold" style={{ color: "var(--text-color)" }}>{info.title}</h4>
                      <p className="" style={{ color: "var(--text-color)" }}>{info.details}</p>
                      <p className="text-sm" style={{ color: "var(--text-color)" }}>{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Ready to Get Started?</h4>
              <p className="mb-6">
                We&apos;re here to help bring your ideas to life. Let&apos;s discuss your project and create something amazing
                together.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-600 translate-x-0 opacity-100`}
          >
            <div className="rounded-xl p-8 shadow-lg" style={{ backgroundColor: "var(--card-bg)" }}>
              <h3 className="text-2xl font-bold mb-6" style={{ color: "var(--text-color)" }}>Send us a message</h3>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-800 dark:text-green-300">
                    Thank you! Your message has been sent successfully.
                  </span>
                </div>
              )}

              <form onSubmit={(e) => {
                handleSubmit(e)
              }} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-color)" }}>
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 "
                        placeholder="Enter your full name"
                        style={{ color: "var(--text-color)", backgroundColor: "var(--input-color)" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-color)" }}>
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your email address"
                        style={{ color: "var(--text-color)", backgroundColor: "var(--input-color)" }}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-color)" }}>Subject</label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={(e) => { setFormData({ ...formData, subject: e.target.value }) }}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your subject here"
                      style={{ color: "var(--text-color)", backgroundColor: "var(--input-color)" }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-color)" }}>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none "
                    // placeholder="Type your message here"
                    style={{ color: "var(--text-color)", backgroundColor: "var(--input-color)" }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg"
                >
                  <span className="flex items-center justify-center space-x-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Contact
