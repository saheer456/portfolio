import type { Metadata, Viewport } from "next"
import { Syne, DM_Sans } from "next/font/google"
import "./globals.css"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
}

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
})

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
})

export const metadata: Metadata = {
  title: "Saheer Khan — AI Systems & Cybersecurity Engineer",
  description:
    "AI Systems & Cybersecurity Engineer building autonomous AI agents, security tools, and scalable cloud-native applications. Based in Bangalore, India.",
  keywords: [
    "Saheer Khan",
    "AI engineer",
    "cybersecurity engineer",
    "AI systems",
    "AI agent developer",
    "Bangalore developer",
    "full stack developer",
    "Python",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Saheer Khan" }],
  openGraph: {
    title: "Saheer Khan — AI Systems & Cybersecurity Engineer",
    description:
      "Building autonomous AI agents, security tools, and scalable cloud-native applications.",
    url: "https://saheerkhan.app/",
    siteName: "Saheer Khan",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saheer Khan — AI Systems & Cybersecurity Engineer",
    description:
      "Building autonomous AI agents, security tools, and scalable cloud-native applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://saheerkhan.app/"),
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en-IN"
      className={`${syne.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <meta name="theme-color" content="#070707" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
