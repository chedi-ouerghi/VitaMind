"use client"

import Image from "next/image";
import { motion } from "framer-motion";

const team = [
  {
    name: "Roua Bellasswed",
    role: "CEO ",
    img: "/roua.jpg",
    desc: "As CEO and co-founder of VitaMind, Roua leads the company’s vision to revolutionize mental health through AI. With deep expertise in NLP and computer vision, she bridges innovation and impact by designing intelligent systems that empower real-world solutions.",
  },
    {
    name: "Chedi Ouerghi",
    role: "CWO ",
    img: "/chedi.jpg",
    desc: "Chief Web Officer at VitaMind, Chedi is a full-stack developer specializing in performant web, mobile, and desktop experiences. With a sharp focus on clean architecture and modern UI/UX, he transforms ideas into seamless, user-centric digital solutions.",
  },
  {
    name: "Ichrak Aguir",
    role: "COO ",
    img: "/ichrak.jpg",
    desc: "COO at VitaMind, Ichrak drives strategic operations and product innovation. Her dual background in engineering and full-stack development allows her to create scalable, inclusive platforms that put user well-being at the center of digital health.",
  },
  {
    name: "Omar Zribi",
    role: "CTO",
    img: "/omar.jpg",
    desc: "CTO at VitaMind, Omar leads the AI research direction of the company. With a strong academic foundation in intelligent systems, his work spans computer vision, reinforcement learning, and medical imaging—bridging cutting-edge research and practical innovation.",
  },
];


export default function TeamSection() {
  return (
    <section
      className="py-28 bg-gradient-to-br from-[#f7fafc] via-white to-[#e3b01c]/10 relative overflow-hidden"
      id="team"
    >
      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-light text-[#518591] mb-4">
            Meet Our <span className="bg-gradient-to-r from-[#518591] to-[#e3b01c] bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-[#518591]/80 max-w-2xl mx-auto">
            A team of innovators bridging AI and mental health care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              className="bg-white rounded-3xl shadow-xl border border-[#518591]/10 px-6 py-10 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="w-28 h-28 mb-6 rounded-full overflow-hidden border-4 border-[#e3b01c]/40 animate-float">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={112}
                  height={112}
                  className="object-contain w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-semibold text-[#518591] mb-1">{member.name}</h3>
              <div className="text-[#e3b01c] font-medium text-sm uppercase tracking-wide mb-2">{member.role}</div>
              <p className="text-gray-600 text-sm">{member.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
