export interface TimelineEntry {
  year: string
  title: string
  subtitle: string
  description: string
  tags: string[]
}

export const timeline: TimelineEntry[] = [
  {
    year: "2023",
    title: "Built first production website",
    subtitle: "Web Development",
    description:
      "Built my first production website using HTML, CSS, and JavaScript with responsive design. [confirm this claim]",
    tags: ["HTML/CSS", "JavaScript", "Responsive"],
  },
  {
    year: "2024",
    title: "Web development internship at Connectfor",
    subtitle: "Web Development · 1 month",
    description:
      "Web development internship at Connectfor (one word). Dates and deliverables [confirm exact dates and what I personally built].",
    tags: ["Connectfor", "Internship", "Web Development"],
  },
  {
    year: "2025",
    title: "Built FRIDAY and VulnScan; started cybersecurity lab practice",
    subtitle: "AI Engineering & Cybersecurity",
    description:
      "Built FRIDAY (multi-agent AI assistant) and VulnScan (web vulnerability scanner). Began cybersecurity lab practice with Wazuh and web/API security testing.",
    tags: ["AI/LLM", "Python", "VulnScan", "Cybersecurity Lab"],
  },
  {
    year: "2026",
    title: "Targeting SOC Analyst L1 roles",
    subtitle: "Current Focus",
    description:
      "Completed BCA (Data Science) at Acharya Institute of Graduate Studies, Bengaluru (graduation 2026). Offenso cybersecurity training (status/dates TODO). Wazuh home lab and institutional Splunk & Wazuh lab practice. Targeting SOC Analyst L1, Security Operations Associate, and Junior Security Analyst roles in India.",
    tags: ["SOC Analyst", "SIEM", "Wazuh", "Splunk", "Blue Team"],
  },
]
