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
  title: "Saheer Khan — Aspiring SOC Analyst L1 · Blue Team",
  description:
    "Aspiring SOC Analyst focused on security monitoring, SIEM operations, endpoint telemetry, incident investigation, and Blue Team defense. Based in Bangalore, India.",
  keywords: [
    "Saheer Khan",
    "SOC Analyst",
    "Blue Team",
    "Cybersecurity",
    "Wazuh",
    "SIEM",
    "Incident Investigation",
    "CTF",
    "Vulnerability Assessment",
    "Security Monitoring",
    "Kali Linux",
    "Python",
  ],
  authors: [{ name: "Saheer Khan" }],
  openGraph: {
    title: "Saheer Khan — Aspiring SOC Analyst L1 · Blue Team",
    description:
      "Aspiring SOC Analyst focused on security monitoring, SIEM operations, endpoint telemetry, incident investigation, and Blue Team defense.",
    url: "https://saheerkhan.app/",
    siteName: "Saheer Khan",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saheer Khan — Aspiring SOC Analyst L1 · Blue Team",
    description:
      "Aspiring SOC Analyst focused on security monitoring, SIEM operations, endpoint telemetry, incident investigation, and Blue Team defense.",
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
