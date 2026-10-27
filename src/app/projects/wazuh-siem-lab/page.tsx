import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Wazuh SIEM Home Lab — Case Study · Saheer Khan MK",
  description:
    "Case study of a single-node Wazuh SIEM home lab on Kali Linux using Docker Compose. Covers architecture, detection scenarios, alert investigation workflow, and lessons learned. Training-lab experience, not paid SOC employment.",
  openGraph: {
    title: "Wazuh SIEM Home Lab — Case Study · Saheer Khan MK",
    description:
      "Single-node Wazuh SIEM home lab case study: architecture, detection scenarios, alert investigation. Training-lab experience, not paid SOC employment.",
    type: "article",
    url: "https://saheerkhan.app/projects/wazuh-siem-lab",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wazuh SIEM Home Lab — Case Study · Saheer Khan MK",
    description:
      "Single-node Wazuh SIEM home lab case study: architecture, detection scenarios, alert investigation.",
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function WazuhCaseStudy() {
  return (
    <div className="min-h-screen bg-[#070707] text-[#ede9e3] flex flex-col">
      <header className="h-[70px] border-b border-white/[.07] bg-black/40 backdrop-blur-md sticky top-0 left-0 w-full flex items-center justify-between px-5 sm:px-8 md:px-12 z-50">
        <Link href="/" className="font-display text-xl font-extrabold tracking-tight">
          SK<span className="text-gold">.</span>
        </Link>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#8a8a8a] hover:text-[#ede9e3] transition-colors"
        >
          ← Back to Projects
        </Link>
      </header>

      <main className="flex-1 py-16 px-5 sm:px-8 md:px-12 max-w-4xl mx-auto w-full">
        <article className="w-full">
          <div className="flex items-center gap-3 text-[0.65rem] tracking-[.1em] uppercase text-gold mb-4">
            <span>Case Study</span>
            <span>·</span>
            <span>Blue Team · SIEM</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Wazuh SIEM Home Lab
          </h1>

          <p className="text-[#8a8a8a] text-sm md:text-base leading-relaxed mb-8">
            A single-node Security Information and Event Management (SIEM) lab built with Wazuh,
            Docker Compose, and Kali Linux. The lab collects endpoint telemetry, surfaces alerts,
            and supports alert-investigation practice in an isolated environment.
          </p>

          <p className="text-xs text-[#5a5a5a] mb-8 border border-white/[.07] bg-white/[.02] rounded p-4">
            <strong>Training-lab experience, not paid SOC employment.</strong> All work was performed
            in an authorized, self-directed lab environment.
          </p>
          <p className="text-xs text-[#5a5a5a] mb-8 border border-white/[.07] bg-white/[.02] rounded p-4">
            <strong>Draft / sample template.</strong> The investigation table below uses placeholder
            data only. Replace with real screenshots, logs, and a verified investigation before
            deploying this page publicly.
          </p>

          {/* Overview */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold mb-4">Overview and Goal</h2>
            <p className="text-[#8a8a8a] leading-relaxed mb-4">
              The goal of this lab was to understand how security events are collected, analyzed,
              and investigated in a SIEM. I deployed a single-node Wazuh stack (manager, indexer,
              dashboard) on Kali Linux using Docker Compose, then practiced endpoint onboarding,
              alert triage, and detection rule analysis.
            </p>
            <p className="text-[#8a8a8a] leading-relaxed">
              This is a learning lab. No production systems were involved, and no real incidents
              were investigated.
            </p>
          </section>

          {/* Architecture */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold mb-4">Architecture</h2>
            <p className="text-[#8a8a8a] text-sm mb-6">
              Data flow: endpoint activity is captured by the Wazuh agent, forwarded to the Wazuh
              manager, indexed, and surfaced in the Wazuh dashboard for investigation.
            </p>
            <div className="bg-white/[.035] border border-white/[.07] rounded-xl p-6 mb-4">
              <svg
                width="100%"
                height="220"
                viewBox="0 0 700 220"
                role="img"
                aria-labelledby="wazuh-arch-title"
                tabIndex={0}
              >
                <title id="wazuh-arch-title">Wazuh SIEM architecture: Endpoint VM to Wazuh Agent to Wazuh Manager to Indexer to Dashboard</title>
                <defs>
                  <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0,0 10,3 0,6" fill="#c8a44a" />
                  </marker>
                </defs>
                {/* Nodes */}
                <g fill="#0d0d0d" stroke="#c8a44a" stroke-width="2">
                  <rect x="40" y="60" width="120" height="100" rx="8" />
                  <rect x="220" y="60" width="120" height="100" rx="8" />
                  <rect x="400" y="40" width="120" height="100" rx="8" />
                  <rect x="560" y="60" width="100" height="100" rx="8" />
                </g>
                <text x="100" y="110" text-anchor="middle" fill="#ede9e3" font-size="13" font-family="DM Sans, sans-serif">Endpoint VM</text>
                <text x="280" y="110" text-anchor="middle" fill="#ede9e3" font-size="13" font-family="DM Sans, sans-serif">Wazuh Agent</text>
                <text x="460" y="90" text-anchor="middle" fill="#ede9e3" font-size="13" font-family="DM Sans, sans-serif">Wazuh Manager</text>
                <text x="610" y="110" text-anchor="middle" fill="#ede9e3" font-size="13" font-family="DM Sans, sans-serif">Dashboard</text>
                {/* Arrows */}
                <line x1="160" y1="110" x2="220" y2="110" stroke="#c8a44a" stroke-width="2" marker-end="url(#arrow)" />
                <line x1="340" y1="110" x2="400" y2="90" stroke="#c8a44a" stroke-width="2" marker-end="url(#arrow)" />
                <line x1="520" y1="90" x2="560" y2="110" stroke="#c8a44a" stroke-width="2" marker-end="url(#arrow)" />
                <text x="190" y="100" fill="#8a8a8a" font-size="11" font-family="DM Sans, sans-serif">telemetry</text>
                <text x="360" y="78" fill="#8a8a8a" font-size="11" font-family="DM Sans, sans-serif">alerts</text>
                <text x="530" y="78" fill="#8a8a8a" font-size="11" font-family="DM Sans, sans-serif">view</text>
              </svg>
              <p className="text-[0.65rem] text-[#5a5a5a] mt-3 text-center">
                Endpoint VM → Wazuh Agent → Wazuh Manager → Indexer → Dashboard
              </p>
            </div>
          </section>

          {/* Environment */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold mb-4">Environment</h2>
            <ul className="list-disc list-inside text-[#8a8a8a] space-y-2 text-sm leading-relaxed">
              <li>Host: Kali Linux</li>
              <li>Orchestration: Docker Compose (single-node)</li>
              <li>Components: Wazuh manager, indexer, dashboard</li>
              <li>Endpoint: lightweight VM with Wazuh agent (planned/verified as available)</li>
            </ul>
          </section>

          {/* Problems solved */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold mb-4">Problems Solved</h2>
            <p className="text-[#8a8a8a] text-sm mb-4">
              During setup, the following connectivity, certificate, and resource-allocation issues
              were encountered and worked through:
            </p>
            <ul className="list-disc list-inside text-[#8a8a8a] space-y-2 text-sm leading-relaxed">
              <li>Agent-to-manager connectivity and port exposure</li>
              <li>Certificate trust and TLS configuration between Wazuh components</li>
              <li>Docker Compose resource allocation (memory/CPU limits for indexer)</li>
              <li>[document exact fixes and commands applied for each issue]</li>
            </ul>
          </section>

          {/* Detection scenarios */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold mb-4">Detection Scenarios</h2>
            <p className="text-[#8a8a8a] text-sm mb-4">
              Detection scenarios reviewed in the lab (planned tests; results to be confirmed with
              evidence):
            </p>
            <ul className="list-disc list-inside text-[#8a8a8a] space-y-2 text-sm leading-relaxed">
              <li>Failed-login / brute-force telemetry from authentication logs</li>
              <li>Suspicious process execution review</li>
              <li>File Integrity Monitoring (FIM) on sensitive system binaries and configs</li>
              <li>Privilege and administrative activity monitoring</li>
            </ul>
          </section>

          {/* Investigation template */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold mb-4">Worked Investigation Template (sample)</h2>
            <p className="text-[#8a8a8a] text-sm mb-4">
              The following template structures each alert investigation. Values below are sample
              placeholders only — replace with real data before publishing.
            </p>
            <div className="bg-white/[.035] border border-white/[.07] rounded-xl p-6">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/[.07]">
                    <th className="text-[#5a5a5a] font-display uppercase tracking-wider pb-3">Field</th>
                    <th className="text-[#5a5a5a] font-display uppercase tracking-wider pb-3">Sample template value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/[.07]">
                    <td className="text-[#ede9e3] font-mono py-3">Timestamp</td>
                    <td className="text-[#8a8a8a] py-3">[insert real alert timestamp]</td>
                  </tr>
                  <tr className="border-b border-white/[.07]">
                    <td className="text-[#ede9e3] font-mono py-3">Source</td>
                    <td className="text-[#8a8a8a] py-3">[endpoint / agent name]</td>
                  </tr>
                  <tr className="border-b border-white/[.07]">
                    <td className="text-[#ede9e3] font-mono py-3">Rule ID</td>
                    <td className="text-[#8a8a8a] py-3">[Wazuh rule identifier]</td>
                  </tr>
                  <tr className="border-b border-white/[.07]">
                    <td className="text-[#ede9e3] font-mono py-3">Evidence</td>
                    <td className="text-[#8a8a8a] py-3">[raw event / log excerpt]</td>
                  </tr>
                  <tr className="border-b border-white/[.07]">
                    <td className="text-[#ede9e3] font-mono py-3">Verdict</td>
                    <td className="text-[#8a8a8a] py-3">True / False positive [determine]</td>
                  </tr>
                  <tr className="border-b border-white/[.07]">
                    <td className="text-[#ede9e3] font-mono py-3">Recommended Action</td>
                    <td className="text-[#8a8a8a] py-3">[escalate / close / monitor]</td>
                  </tr>
                  <tr className="border-b border-white/[.07]">
                    <td className="text-[#ede9e3] font-mono py-3">MITRE ATT&CK (optional)</td>
                    <td className="text-[#8a8a8a] py-3">[technique ID, if mapped]</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-[#5a5a5a] mt-3">
                MITRE ATT&CK mapping is included only as an optional field in this template and is
                not claimed as a site-wide skill.
              </p>
            </div>
          </section>

          {/* Lessons learned */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold mb-4">Lessons Learned</h2>
            <ul className="list-disc list-inside text-[#8a8a8a] space-y-2 text-sm leading-relaxed">
              <li>SIEM value comes from verified telemetry, not just tool deployment.</li>
              <li>Agent connectivity and certificate trust are common first-week blockers.</li>
              <li>Alert triage requires separating baseline noise from suspicious events.</li>
              <li>Documentation (timestamps, rule IDs, evidence) makes investigations repeatable.</li>
            </ul>
          </section>

          {/* Screenshot placeholders */}
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold mb-4">Screenshots</h2>
            <p className="text-[#8a8a8a] text-sm mb-4">
              Placeholder slots for lab evidence. Replace with real screenshots once captured.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Wazuh dashboard showing agent status",
                "Sample alert detail view",
              ].map((label) => (
                <div
                  key={label}
                  className="aspect-[4/3] bg-white/[.035] border border-white/[.07] rounded-xl flex flex-col items-center justify-center text-[0.65rem] text-[#5a5a5a]"
                >
                  <span className="mb-2">[ Screenshot placeholder ]</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#5a5a5a] mt-4">
              Add real screenshots with alt text; redact credentials, tokens, and secrets before
              publishing.
            </p>
          </section>
        </article>
      </main>
    </div>
  )
}
