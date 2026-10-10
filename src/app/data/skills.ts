export interface SkillCategory {
  title: string
  icon: string
  skills: { name: string; icon?: string }[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Security Monitoring & Blue Team",
    icon: "fa-shield-halved",
    skills: [
      { name: "Wazuh SIEM" },
      { name: "Log Analysis" },
      { name: "Alert Triage" },
      { name: "Endpoint Monitoring" },
      { name: "Incident Investigation" },
      { name: "Detection Rules" },
    ],
  },
  {
    title: "Web & API Security",
    icon: "fa-bug",
    skills: [
      { name: "Burp Suite" },
      { name: "SQL Injection" },
      { name: "OWASP Top 10" },
      { name: "API Testing" },
      { name: "Access Control Testing" },
      { name: "HTTP Analysis" },
    ],
  },
  {
    title: "Reconnaissance & Assessment",
    icon: "fa-crosshairs",
    skills: [
      { name: "Nmap" },
      { name: "Nuclei" },
      { name: "Gobuster" },
      { name: "dirsearch" },
      { name: "Vulnerability Validation" },
    ],
  },
  {
    title: "Systems & Infrastructure",
    icon: "fa-server",
    skills: [
      { name: "Kali Linux" },
      { name: "Docker" },
      { name: "TCP/IP & Networking" },
      { name: "Python" },
      { name: "Git & GitHub" },
      { name: "Linux Administration" },
    ],
  },
]
