import type { Metadata, Viewport } from "next"
import { Syne, DM_Sans } from "next/font/google"
import "./globals.css"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
  title: "Saheer Khan MK — Aspiring SOC Analyst L1 · Security Operations",
  description:
    "Saheer Khan MK — BCA (Data Science) graduate 2026, Kerala, India. Aspiring SOC Analyst L1 focused on security monitoring, SIEM operations (Wazuh, Splunk), endpoint telemetry, and incident investigation. Open to Bengaluru, Kochi and across India.",
  keywords: [
    "Saheer Khan MK",
    "SOC Analyst L1",
    "Security Operations",
    "Blue Team",
    "Cybersecurity",
    "Wazuh",
    "Splunk",
    "SIEM",
    "Incident Investigation",
    "CTF",
    "Vulnerability Assessment",
    "Security Monitoring",
    "Kali Linux",
    "Kerala, India",
    "Bengaluru",
    "Kochi",
  ],
  authors: [{ name: "Saheer Khan MK" }],
  openGraph: {
    title: "Saheer Khan MK — Aspiring SOC Analyst L1 · Security Operations",
    description:
      "Aspiring SOC Analyst L1 focused on security monitoring, SIEM operations (Wazuh, Splunk), endpoint telemetry, and incident investigation. Kerala, India · open to Bengaluru, Kochi.",
    url: "https://saheerkhan.app/",
    siteName: "Saheer Khan MK",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saheer Khan · Aspiring SOC Analyst L1",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saheer Khan MK — Aspiring SOC Analyst L1 · Security Operations",
    description:
      "Aspiring SOC Analyst L1 focused on security monitoring, SIEM operations (Wazuh, Splunk), endpoint telemetry, and incident investigation. Kerala, India · open to Bengaluru, Kochi.",
    images: ["/og-image.png"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Saheer Khan MK",
              givenName: "Saheer Khan",
              familyName: "MK",
              jobTitle: "Aspiring SOC Analyst L1 · Security Operations",
              description:
                "BCA (Data Science) graduate 2026 from Acharya Institute of Graduate Studies, Bengaluru. Aspiring SOC Analyst L1 focused on security monitoring, SIEM operations (Wazuh, Splunk), endpoint telemetry, and incident investigation. Kerala, India · open to Bengaluru, Kochi and across India.",
              url: "https://saheerkhan.app/",
              sameAs: [
                "https://www.linkedin.com/in/saheer-khan-900b9a26a",
                "https://github.com/saheer456",
                "https://github.com/saheer456/ctf",
              ],
              email: "khansaheer424@gmail.com",
              telephone: "+919778550480",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kozhikode",
                addressRegion: "Kerala",
                addressCountry: "India",
              },
              knowsAbout: [
                "Security Monitoring",
                "SIEM",
                "Wazuh",
                "Splunk",
                "Log Analysis",
                "Alert Triage",
                "Incident Investigation",
                "Vulnerability Assessment",
                "Web Security",
                "API Security",
                "CTF",
                "Docker",
                "Kali Linux",
                "Python",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Acharya Institute of Graduate Studies",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
