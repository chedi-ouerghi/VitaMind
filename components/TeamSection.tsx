"use client"

import Image from "next/image";
import { motion } from "framer-motion";

const team = [
	{
		name: "Roua Bellasswed",
		role: "CEO",
		img: "/roua.jpeg",
		desc: "Roua guides the company's vision in mental health innovation. With expertise in NLP and computer vision, she creates AI systems that deliver real impact.",
	},
	{
		name: "Chedi Ouerghi",
		role: "COO",
		img: "/chedi.jpg",
		desc: "Chedi drives operational excellence through full-stack development and DevOps. He ensures scalable engineering practices that support digital health solutions.",
	},
	{
		name: "Habiba Kamoun",
		role: "CPO",
		img: "/habiba.png",
		desc: "Habiba defines the product strategy with her engineering and full-stack expertise. She designs inclusive platforms that enhance user well-being and growth.",
	},
	{
		name: "Omar Zribi",
		role: "CTO",
		img: "/omar.png",
		desc: "Omar directs the company's AI research strategy. With a strong background in intelligent systems, he advances innovation in computer vision and healthcare AI.",
	},
];
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.2, delayChildren: 0.3 },
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 40, scale: 0.9 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { type: "spring", stiffness: 80, damping: 15 },
	},
};

export default function TeamSection() {
	return (
		<section
			id="team"
			className="relative py-24 bg-gradient-to-br from-[#f7fafc] via-white to-[#e3b01c]/10 overflow-hidden"
		>
			{/* Arrière-plan dynamique */}
			<div className="absolute inset-0 overflow-hidden">
				<motion.div
					className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-gradient-to-br from-[#518591]/20 to-transparent rounded-full blur-[140px]"
					animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
					transition={{ duration: 8, repeat: Infinity }}
				/>
				<motion.div
					className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#e3b01c]/20 to-transparent rounded-full blur-[160px]"
					animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.1, 0.22, 0.1] }}
					transition={{ duration: 10, repeat: Infinity }}
				/>
			</div>

			<div className="relative container mx-auto px-6">
				{/* Titre Section */}
				<motion.div
					className="text-center mb-20"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
						Meet Our{" "}
						<span className="bg-gradient-to-r from-[#518591] to-[#e3b01c] bg-clip-text text-transparent font-medium">
							Team
						</span>
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
						A passionate group merging{" "}
						<span className="text-[#518591] font-semibold">AI innovation</span> and{" "}
						<span className="text-[#e3b01c] font-semibold">human empathy</span> to shape the future of mental health.
					</p>
				</motion.div>

				{/* Cartes du Team */}
				<motion.div
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
				>
					{team.map((member) => (
						<motion.div
							key={member.name}
							variants={cardVariants}
							whileHover={{
								y: -10,
								scale: 1.04,
								rotateY: 5,
								boxShadow: "0px 20px 35px rgba(81,133,145,0.25)",
							}}
							transition={{ type: "spring", stiffness: 200, damping: 15 }}
							className="group relative bg-white rounded-2xl shadow-md border border-[#518591]/10 overflow-hidden backdrop-blur-sm"
						>
							{/* Halo animé */}
							<motion.div
								className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#518591]/5 via-transparent to-[#e3b01c]/5 opacity-0 group-hover:opacity-100 blur-2xl pointer-events-none"
								animate={{ opacity: [0.05, 0.1, 0.05] }}
								transition={{ duration: 6, repeat: Infinity }}
							/>

							{/* Image occupant toute la carte — on montre seulement l'image par défaut */}
							<div className="relative w-full aspect-square">
								<Image
									src={member.img}
									alt={member.name}
									fill
									className="object-cover transition-transform duration-700 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
							</div>

							{/* Overlay textuel masqué par défaut et qui "s'ouvre" au hover */}
							<div className="absolute left-0 right-0 bottom-0 p-6 bg-gradient-to-t from-white/90 via-white/80 to-transparent backdrop-blur-sm transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
								<h3 className="text-xl font-semibold text-[#518591] group-hover:text-[#e3b01c] transition-colors duration-300">
									{member.name}
								</h3>
								<p className="text-sm font-medium text-[#e3b01c] mb-2">{member.role}</p>
								<p className="text-gray-600 text-sm leading-relaxed">
									{member.desc}
								</p>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
