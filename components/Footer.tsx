"use client"

import { motion } from "framer-motion"
import { Brain, Mail, Phone, MapPin, Twitter, Linkedin, Github, Heart, Shield, Award } from "lucide-react"

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
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: Github, href: "#", label: "GitHub", color: "hover:bg-gray-700" },
  ]

  const certifications = [
    { icon: Shield, label: "HIPAA Compliant", color: "text-green-600" },
    { icon: Award, label: "SOC 2 Certified", color: "text-blue-600" },
    { icon: Heart, label: "FDA Approved", color: "text-red-500" },
  ]

  return (
    <footer className="bg-gradient-to-br from-violet-50 via-white to-purple-50 border-t border-violet-100">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center space-x-2 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative">
                <Brain className="w-8 h-8 text-violet-600" />
                <motion.div
                  className="absolute inset-0 bg-violet-400 rounded-full opacity-20"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                VitaMind
              </span>
            </motion.div>

            <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
              Empowering individuals with bipolar disorder through intelligent AI companionship. Your mental health
              journey, supported by cutting-edge technology and compassionate care.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-4 h-4 text-violet-600" />
                <span>hello@vitamind.ai</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="w-4 h-4 text-violet-600" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="w-4 h-4 text-violet-600" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700 mb-3">Certifications & Compliance</p>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2 bg-white rounded-full px-3 py-1 border border-violet-100 shadow-sm"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <cert.icon className={`w-4 h-4 ${cert.color}`} />
                    <span className="text-xs text-gray-600">{cert.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-black font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-violet-600 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="bg-gradient-to-r from-violet-100 to-purple-100 rounded-3xl p-8 mb-12 border border-violet-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-black mb-2">Stay Connected</h3>
              <p className="text-gray-600">
                Get the latest updates on VitaMind features, mental health insights, and breakthrough AI innovations.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white border border-violet-200 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
              />
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-violet-200">
          <div className="text-gray-600 text-sm mb-4 md:mb-0">
            © 2024 VitaMind. All rights reserved. Made with <Heart className="inline w-4 h-4 text-red-500 mx-1" />
            for mental health.
          </div>

          {/* Social Links */}
          <div className="flex space-x-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className={`w-10 h-10 bg-white border border-violet-200 rounded-xl flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 shadow-sm ${social.color}`}
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
          className="mt-8 pt-8 border-t border-violet-200 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-gray-500 mb-4">
            VitaMind is committed to the highest standards of data protection and mental health care.
          </p>
          <div className="flex justify-center items-center space-x-6 text-xs text-gray-400">
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
