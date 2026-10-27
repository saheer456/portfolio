// DRAFTS — NOT PUBLISHED, NOT LISTED ON THE SITE
// These are stub content outlines for future security blog posts.
// Marked draft. Do not import into Blogs.tsx or blog routes.

export interface DraftPost {
  title: string
  slug: string
  status: "draft"
  tag: "Security"
  outline: string[]
}

export const draftPosts: DraftPost[] = [
  {
    title: "Investigating failed SSH logins with Wazuh",
    slug: "investigating-failed-ssh-logins-wazuh",
    status: "draft",
    tag: "Security",
    outline: [
      "Objective: detect and investigate brute-force SSH attempts in a Wazuh lab.",
      "Environment: Wazuh manager + endpoint agent on Kali Linux (authorized lab only).",
      "Steps: generate failed SSH logins, locate relevant Wazuh rules (SSHD authentication), review alerts in dashboard.",
      "Investigation fields: timestamp, source IP, usernames attempted, rule ID, verdict, recommended action.",
      "Lessons: distinguishing failed-auth noise from a real brute-force pattern.",
      "TODO(saheer): add real screenshots, rule IDs, and sample alert evidence.",
    ],
  },
  {
    title: "My SOC L1 alert triage checklist",
    slug: "soc-l1-alert-triage-checklist",
    status: "draft",
    tag: "Security",
    outline: [
      "Purpose: repeatable checklist for L1 alert triage in a SOC.",
      "Step 1: validate the alert (timestamp, source, rule ID, severity).",
      "Step 2: gather evidence (raw logs, related events, endpoint context).",
      "Step 3: classify verdict — true positive / false positive / inconclusive.",
      "Step 4: document findings and recommend escalation or closure.",
      "Step 5: record lessons and detection gaps.",
      "TODO(saheer): confirm against institutional SOC lab workflow; add completion status.",
    ],
  },
  {
    title: "Nmap and Wireshark: reading a scan on the wire",
    slug: "nmap-wireshark-reading-a-scan",
    status: "draft",
    tag: "Security",
    outline: [
      "Objective: correlate Nmap scan traffic with packet captures in Wireshark.",
      "Environment: authorized lab target; Nmap scan run against lab host.",
      "Steps: capture traffic with Wireshark during an Nmap scan, identify SYN scan patterns, interpret port states.",
      "Defensive lesson: what a defender sees on the wire and how to detect reconnaissance.",
      "TODO(saheer): add pcap reference, packet screenshots, and lab authorization note.",
    ],
  },
]
