export interface SkillCategory {
  title: string
  icon: string
  skills: { name: string; icon?: string }[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "AI Systems",
    icon: "fa-brain",
    skills: [
      { name: "RAG" },
      { name: "Vector Search" },
      { name: "Multi-Agent Systems" },
      { name: "LLM Integration" },
      { name: "Prompt Engineering" },
    ],
  },
  {
    title: "Backend",
    icon: "fa-server",
    skills: [
      { name: "FastAPI" },
      { name: "Python" },
      { name: "APIs" },
      { name: "Auth" },
      { name: "Databases" },
    ],
  },
  {
    title: "Security",
    icon: "fa-shield-halved",
    skills: [
      { name: "OSINT" },
      { name: "Web Security" },
      { name: "Vulnerability Scanning" },
      { name: "Linux" },
      { name: "Networking" },
    ],
  },
  {
    title: "Infrastructure",
    icon: "fa-cloud",
    skills: [
      { name: "Docker" },
      { name: "Cloudflare" },
      { name: "GitHub Actions" },
      { name: "Deployment" },
      { name: "Linux Servers" },
    ],
  },
]
