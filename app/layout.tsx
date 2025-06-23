import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "VitaminD - Votre Compagnon AI pour le Trouble Bipolaire",
  description:
    "Un agent intelligent qui parle avec vous pour gérer votre quotidien et offrir un soutien personnalisé pour le trouble bipolaire.",
  keywords: "IA, intelligence artificielle, trouble bipolaire, santé mentale, soutien, compagnon virtuel",
  authors: [{ name: "VitaminD Team" }],
  openGraph: {
    title: "VitaminD - Votre Compagnon AI pour le Trouble Bipolaire",
    description: "Un agent intelligent qui parle avec vous pour gérer votre quotidien.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VitaminD - Votre Compagnon AI",
    description: "Un soutien intelligent pour le trouble bipolaire.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-poppins antialiased">{children}</body>
    </html>
  )
}
