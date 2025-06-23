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
  title: "VitaMind - Your AI Companion for Bipolar Disorder",
  description:
    "An intelligent agent that talks with you to manage your daily life and provide personalized support for bipolar disorder.",
  keywords: "AI, artificial intelligence, bipolar disorder, mental health, support, virtual companion",
  authors: [{ name: "VitaMind Team" }],
  openGraph: {
    title: "VitaMind - Your AI Companion for Bipolar Disorder",
    description: "An intelligent agent that talks with you to manage your daily life.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VitaMind - Your AI Companion",
    description: "Intelligent support for bipolar disorder.",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-poppins antialiased bg-white text-black">{children}</body>
    </html>
  )
}
