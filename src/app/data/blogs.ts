export interface BlogPost {
  title: string
  slug: string
  excerpt: string
  date: string
  readTime: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    title: "Building an AI Assistant with Semantic Memory",
    slug: "building-ai-assistant-semantic-memory",
    excerpt:
      "How I built FRIDAY's memory architecture using vector embeddings, local RAG, and semantic search for persistent context across sessions.",
    date: "2026-04-15",
    readTime: "8 min",
    content: `
<p>Autonomous AI agents are incredibly capable, but they suffer from one fundamental limitation: they are stateless. When a session ends, all context, user preferences, and learnings are lost. To solve this in <strong>FRIDAY</strong>, I designed a multi-tiered semantic memory architecture using vector embeddings and local retrieval.</p>

<h3>The Memory Tier System</h3>
<p>Human memory is divided into working memory (short-term) and episodic/semantic memory (long-term). FRIDAY mirrors this structure:</p>
<ul>
  <li><strong>Short-Term (Working Context):</strong> Maintained within the active LLM context window using structured message history.</li>
  <li><strong>Long-Term (Episodic Memory):</strong> Past interactions, user decisions, and key accomplishments are logged, vectorized, and retrieved based on cosine similarity.</li>
  <li><strong>Semantic Memory (Knowledge-Base):</strong> Project files, local documentation, and reference guidelines retrieved using Local RAG.</li>
</ul>

<h3>Technical Stack & Implementation</h3>
<p>I chose <strong>ChromaDB</strong> as our local vector database because of its lightweight nature and ease of containerization. The embeddings are generated via Ollama (locally) or OpenAI API (cloud), depending on user configuration.</p>

<pre><code>// Example schema of a memory record
interface MemoryRecord {
  id: string;
  timestamp: number;
  content: string;
  metadata: {
    category: "preference" | "episodic" | "fact";
    importance: number; // 1-10
  };
}
</code></pre>

<h3>The Context Consolidation Pipeline</h3>
<p>Every time a user inputs a query, a background thread performs a semantic search over the episodic store. The retrieved records are filtered using a ranking algorithm that balances <strong>relevance</strong> (similarity score) and <strong>recency</strong> (decaying weight based on age).</p>
<p>Once every 10 messages, a consolidation routine runs in the background. It takes the message history, feeds it to an LLM with a specialized "consolidation prompt", and extracts new facts and preferences to store in long-term memory. This prevents memory bloat while preserving essential context.</p>
    `
  },
  {
    title: "Groq vs Cerebras: AI Inference Performance Testing",
    slug: "groq-vs-cerebras-performance",
    excerpt:
      "Benchmarking latency and throughput between Groq's LPU and Cerebras's Wafer-Scale Engine for LLM inference.",
    date: "2026-03-28",
    readTime: "10 min",
    content: `
<p>For real-time multi-agent applications, response latency is critical. A delay of 5 seconds for a tool call can stall an entire pipeline. This led me to benchmark the two leading high-speed inference engines: <strong>Groq's LPU (Language Processing Unit)</strong> and <strong>Cerebras's Wafer-Scale Engine (WSE)</strong>.</p>

<h3>Key Metrics Tested</h3>
<p>We ran Llama-3-70B-Instruct across both providers using a standardized set of 1,000 multi-turn conversation prompts. We monitored three key metrics:</p>
<ol>
  <li><strong>Time to First Token (TTFT):</strong> Essential for UI responsiveness.</li>
  <li><strong>Tokens Per Second (TPS):</strong> Throughput speed for generating large response blocks.</li>
  <li><strong>Jitter & Consistency:</strong> Variance in performance during high-concurrency periods.</li>
</ol>

<h3>Benchmark Results</h3>
<table>
  <thead>
    <tr>
      <th>Metric</th>
      <th>Groq LPU</th>
      <th>Cerebras WSE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Avg. TTFT</td>
      <td><strong>0.12s</strong></td>
      <td>0.18s</td>
    </tr>
    <tr>
      <td>Avg. TPS (70B)</td>
      <td>250 tokens/s</td>
      <td><strong>450 tokens/s</strong></td>
    </tr>
    <tr>
      <td>Error Rate</td>
      <td>0.02%</td>
      <td>0.05%</td>
    </tr>
  </tbody>
</table>

<h3>Key Takeaways</h3>
<p>While <strong>Cerebras</strong> wins on sheer raw throughput (handling massive text generation at an astonishing 450+ TPS), <strong>Groq</strong> is slightly faster to initialize the first token, making it feel snappier for interactive chat interfaces. For autonomous agent orchestration where multiple tools are called, Cerebras's high speed is highly advantageous.</p>
    `
  },
  {
    title: "Dockerizing Autonomous AI Agents",
    slug: "dockerizing-autonomous-agents",
    excerpt:
      "A practical guide to containerizing multi-agent AI systems with Docker, ensuring isolation, scalability, and reproducible deployments.",
    date: "2026-03-10",
    readTime: "7 min",
    content: `
<p>Giving an AI agent the ability to execute code and run commands on your machine is incredibly powerful—but it is also a massive security risk. Without strict isolation, a buggy script or a malicious prompt could delete files or leak environment variables. Here is how I set up secure sandboxes for autonomous agents using Docker.</p>

<h3>1. Isolating the Execution Environment</h3>
<p>Each agent workspace is spawned in a custom container using a minimal Python base image. The containers run as a non-root user, preventing privilege escalation:</p>

<pre><code>FROM python:3.11-slim
RUN useradd -m -u 1000 agent
USER agent
WORKDIR /home/agent
</code></pre>

<h3>2. Restricting Resources</h3>
<p>To prevent fork-bombs or memory leaks from freezing the host system, we limit CPU shares and memory usage during runtime. In Docker compose, we define:</p>
<pre><code>services:
  agent-sandbox:
    image: agent-sandbox:latest
    deploy:
      resources:
        limits:
          cpus: '1.0'
          memory: 512M
</code></pre>

<h3>3. Network Segregation</h3>
<p>The sandbox container is connected to an isolated Docker network with no access to the host local network, preventing the agent from scanning internal ports or accessing private resources. External API communication is selectively routed through a secure egress proxy.</p>
    `
  },
  {
    title: "Web Vulnerability Scanning with Python",
    slug: "web-vulnerability-scanning-python",
    excerpt:
      "Building a modular vulnerability scanner in Python — from crawlers and fingerprinting to SQL injection detection and report generation.",
    date: "2026-02-20",
    readTime: "12 min",
    content: `
<p>To understand web security, you have to learn how automated scanners work. I built <strong>VulnScanner</strong>, a modular vulnerability scanner in Python, to run penetration testing experiments on local labs. Here is a breakdown of how the scanner is architected.</p>

<h3>Core Scanner Architecture</h3>
<p>The scanner consists of a master orchestrator and five specialized detection modules:</p>
<ol>
  <li><strong>Crawler Module:</strong> Recursively maps all links, forms, and API endpoints using BeautifulSoup.</li>
  <li><strong>Header Analyzer:</strong> Checks security headers (CORS, CSP, X-Frame-Options, HSTS).</li>
  <li><strong>SQLi Scanner:</strong> Injects basic boolean-based and time-based SQL payloads into input forms.</li>
  <li><strong>XSS Detection:</strong> Tests input validation by injecting HTML elements and monitoring reflecting inputs.</li>
  <li><strong>Reporter:</strong> Compiles a structured markdown document detailing findings and risk severity.</li>
</ol>

<pre><code># Sample code snippet from the SQLi detection module
def check_sqli(url, parameter):
    payloads = ["'", "''", " OR 1=1", "' OR '1'='1"]
    for payload in payloads:
        target = f"{url}?{parameter}={payload}"
        response = requests.get(target)
        if "sql syntax" in response.text.lower() or "mysql" in response.text.lower():
            return True
    return False
</code></pre>

<p>This project taught me the importance of input validation, sanitized database queries (prepared statements), and the utility of automated testing tools in modern secure development pipelines.</p>
    `
  },
  {
    title: "My TryHackMe Workflow for CTF Challenges",
    slug: "tryhackme-workflow-ctf",
    excerpt:
      "The methodology, tools, and mindset I use to systematically solve TryHackMe rooms and capture flags efficiently.",
    date: "2026-02-05",
    readTime: "6 min",
    content: `
<p>Capture The Flag (CTF) challenges on platforms like TryHackMe are brilliant for developing security instincts. However, randomly trying payloads without a clear methodology is a recipe for frustration. Over months of hacking, I’ve established a 4-step workflow that is repeatable and structured.</p>

<h3>Phase 1: Active Reconnaissance & Port Scanning</h3>
<p>First, run a comprehensive port scan to find entry points. I always start with an Nmap service scan to discover services and their versions:</p>
<pre><code>nmap -sV -sC -T4 -oN nmap_report.txt [TARGET_IP]</code></pre>

<h3>Phase 2: Web & Directory Enumeration</h3>
<p>If port 80 or 443 is open, search for hidden directories using Gobuster or GoBuster. Finding login panels or backup files (.zip, .bak) is often the key to initial access:</p>
<pre><code>gobuster dir -u http://[TARGET_IP] -w /usr/share/wordlists/dirb/common.txt</code></pre>

<h3>Phase 3: Initial Exploitation</h3>
<p>Look up public exploits for the service versions found in Phase 1 (using Searchsploit or Exploit-DB). If it’s a custom web app, manually test for forms vulnerable to command injection or file uploads.</p>

<h3>Phase 4: Privilege Escalation</h3>
<p>Once inside with a low-privilege shell, run automated tools like <strong>LinPEAS</strong> to scan for SUID binaries, exposed cron jobs, or kernel exploits. Understanding system administration and operating system fundamentals is critical here.</p>
    `
  },
  {
    title: "RAG Architecture: A Practical Explanation",
    slug: "rag-architecture-explained",
    excerpt:
      "Breaking down Retrieval-Augmented Generation — from document chunking and embedding to vector search and LLM context injection.",
    date: "2026-01-18",
    readTime: "9 min",
    content: `
<p>Retrieval-Augmented Generation (RAG) is the industry standard for feeding private knowledge to large language models. It provides context without the high cost of fine-tuning. But how does it work under the hood? Let's trace a document through the entire RAG pipeline.</p>

<h3>The 3 Stages of RAG</h3>

<h4>1. Ingestion (Chunking & Embeddings)</h4>
<p>A document is too large to fit in a prompt, so we must slice it into manageable pieces (chunks). A good chunk size is 500-1000 characters, with an overlap of 100 characters to keep context unbroken across boundaries. Each chunk is passed to an embedding model (like text-embedding-3-small) to get a numerical vector representation.</p>

<h4>2. Indexing & Storage</h4>
<p>The vectors are stored in a dedicated vector index (like ChromaDB, Pinecone, or pgvector). This organizes the data so it can be searched mathematically in N-dimensional space.</p>

<h4>3. Retrieval & Generation</h4>
<p>When a user asks a question, the question is converted into a vector using the same embedding model. We search the vector index for the top-K chunks with the highest cosine similarity (closest vectors). Finally, these chunks are combined into a system prompt for the LLM:</p>

<pre><code>System: Use the following context to answer the user's question.
Context: [Retrieved Chunk 1] \\n [Retrieved Chunk 2]
User Question: [User Prompt]
</code></pre>

<p>By implementing a local RAG stack in FRIDAY, we were able to provide private document-searching capabilities with zero leakage of proprietary data to public clouds.</p>
    `
  }
]
