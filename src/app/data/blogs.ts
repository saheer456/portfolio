export interface BlogPost {
  title: string
  slug: string
  excerpt: string
  date: string
  readTime: string
}

export const blogPosts: BlogPost[] = [
  {
    title: "Building an AI Assistant with Semantic Memory",
    slug: "building-ai-assistant-semantic-memory",
    excerpt:
      "How I built FRIDAY's memory architecture using vector embeddings, local RAG, and semantic search for persistent context across sessions.",
    date: "2026-04-15",
    readTime: "8 min",
  },
  {
    title: "Groq vs Cerebras: AI Inference Performance Testing",
    slug: "groq-vs-cerebras-performance",
    excerpt:
      "Benchmarking latency and throughput between Groq's LPU and Cerebras's Wafer-Scale Engine for LLM inference.",
    date: "2026-03-28",
    readTime: "10 min",
  },
  {
    title: "Dockerizing Autonomous AI Agents",
    slug: "dockerizing-autonomous-agents",
    excerpt:
      "A practical guide to containerizing multi-agent AI systems with Docker, ensuring isolation, scalability, and reproducible deployments.",
    date: "2026-03-10",
    readTime: "7 min",
  },
  {
    title: "Web Vulnerability Scanning with Python",
    slug: "web-vulnerability-scanning-python",
    excerpt:
      "Building a modular vulnerability scanner in Python — from crawlers and fingerprinting to SQL injection detection and report generation.",
    date: "2026-02-20",
    readTime: "12 min",
  },
  {
    title: "My TryHackMe Workflow for CTF Challenges",
    slug: "tryhackme-workflow-ctf",
    excerpt:
      "The methodology, tools, and mindset I use to systematically solve TryHackMe rooms and capture flags efficiently.",
    date: "2026-02-05",
    readTime: "6 min",
  },
  {
    title: "RAG Architecture: A Practical Explanation",
    slug: "rag-architecture-explained",
    excerpt:
      "Breaking down Retrieval-Augmented Generation — from document chunking and embedding to vector search and LLM context injection.",
    date: "2026-01-18",
    readTime: "9 min",
  },
]
