"use client"

import { motion } from "framer-motion"
import { Award, Heart, Linkedin, Mail, MapPin, Phone, Shield, Twitter } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const footerLinks = {
    
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Press", href: "#press" },
      { name: "Contact", href: "#contact" },
    ],
    Resources: [
      { name: "Documentation", href: "#docs" },
      { name: "Help Center", href: "#help" },
      { name: "Community", href: "#community" },
      { name: "Blog", href: "#blog" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "HIPAA Compliance", href: "#hipaa" },
      { name: "Security", href: "#security" },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-blue-500" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/vitamind216", label: "LinkedIn", color: "hover:bg-blue-600" },
  ]

  const certifications = [
    { icon: Shield, label: "HIPAA Compliant", color: "text-green-600" },
    { icon: Award, label: "SOC 2 Certified", color: "text-blue-600" },
    { icon: Heart, label: "FDA Approved", color: "text-red-500" },
  ]

  return (
    <footer
      className="bg-white border-t border-[#518591]/10"
      style={{
        background: "linear-gradient(135deg, #ffffff 70%, #518591 100%)"
      }}
    >
      <div className="container mx-auto px-4 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0">
            <motion.div
              className="flex items-center space-x-2 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
            <motion.div
                      className="relative w-24 h-24 flex-shrink-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image
                        src="/logo.png"
                        alt="VitaMind Logo"
                        fill
                        className="object-contain"
                        priority
                      />
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#518591] to-[#e3b01c] bg-clip-text text-transparent">
                VitaMind
              </span>
            </motion.div>
            <p className="text-[#518591]/80 mb-6 max-w-md leading-relaxed">
              Empowering individuals with bipolar disorder through intelligent AI companionship. Your mental health
              journey, supported by cutting-edge technology and compassionate care.
            </p>
            {/* Contact Info */}
          <div className="space-y-3 mb-6">
  <div className="flex items-center justify-center lg:justify-start space-x-3 text-[#518591]/80">
    <Mail className="w-4 h-4 text-[#e3b01c]" />
    <a href="mailto:vitamind.216@outlook.com" className="hover:underline">
      support@vitamind.tn
    </a>
  </div>

  <div className="flex items-center justify-center lg:justify-start space-x-3 text-[#518591]/80">
    <Phone className="w-4 h-4 text-[#e3b01c]" />
    <a href="tel:+21612345678" className="hover:underline">
      +216 25 02 59 17
    </a>
  </div>

  <div className="flex items-center justify-center lg:justify-start space-x-3 text-[#518591]/80">
    <MapPin className="w-4 h-4 text-[#e3b01c]" />
    <a
      href="https://www.google.com/maps/place/Tunisia"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
    >
      Tunisia, TN
    </a>
  </div>
</div>

       
          </div>
          {/* Links Sections */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-x-12 col-span-3">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="flex-1 mb-8 md:mb-0">
                <h3 className="text-[#518591] font-semibold mb-4 text-center md:text-left">
                  {category}
                </h3>
                <ul className="space-y-2 text-center md:text-left">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-[#518591]/80 hover:text-[#e3b01c] transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* Newsletter Signup */}
        <motion.div
          className="bg-white rounded-3xl p-6 sm:p-8 mb-12 border border-[#518591]/10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-[#518591] mb-2">Stay Connected</h3>
              <p className="text-[#518591]/80">
                Get the latest updates on VitaMind features, mental health insights, and breakthrough AI innovations.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white border border-[#518591]/20 rounded-xl text-[#518591] placeholder-[#518591]/40 focus:outline-none focus:border-[#518591] focus:ring-2 focus:ring-[#518591]/20 transition-all"
              />
              <motion.button
                className="px-6 py-3 bg-[#518591] text-white rounded-xl hover:bg-[#e3b01c] hover:text-[#518591] transition-all duration-300 shadow-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#518591]/10 gap-6 md:gap-0">
          <div className="text-[#518591]/80 text-sm text-center md:text-left">
            © 2025 VitaMind. All rights reserved
            for mental health.
          </div>
          {/* Social Links */}
          <div className="flex space-x-3 justify-center md:justify-end">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className={`w-10 h-10 bg-white border border-[#518591]/10 rounded-xl flex items-center justify-center text-[#518591] hover:text-white hover:bg-[#e3b01c] transition-all duration-300 shadow-sm`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
        {/* Trust Indicators */}
        <motion.div
          className="mt-8 pt-8 border-t border-[#518591]/10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-[#518591]/60 mb-4">
            VitaMind is committed to the highest standards of data protection and mental health care.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 text-xs text-[#518591]/40">
            <span>🔒 256-bit SSL Encryption</span>
            <span>•</span>
            <span>🏥 HIPAA Compliant</span>
            <span>•</span>
            <span>🛡️ SOC 2 Type II</span>
            <span>•</span>
            <span>✅ FDA Approved</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
