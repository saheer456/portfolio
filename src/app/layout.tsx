import type { Metadata } from "next"
import { Syne, DM_Sans } from "next/font/google"
import "./globals.css"

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
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%F0%9F%96%A5%EF%B8%8F%3C/text%3E%3C/svg%3E"
        />
        <link
          rel="apple-touch-icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%F0%9F%96%A5%EF%B8%8F%3C/text%3E%3C/svg%3E"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link rel="canonical" href="https://saheerkhan.app/" />
        <meta name="theme-color" content="#070707" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
