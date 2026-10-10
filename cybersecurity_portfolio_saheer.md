# Cybersecurity Portfolio — Saheer Khan MK

**Target role:** SOC Analyst L1 / Blue Team  
**Portfolio:** [saheerkhan.app](https://saheerkhan.app)  
**GitHub:** [github.com/saheer456](https://github.com/saheer456)  
**CTF repository:** [github.com/saheer456/ctf](https://github.com/saheer456/ctf)

> **Accuracy note:** This document distinguishes work already performed from work that remains in progress. Do not describe planned tests as successful results. Update project statuses only when you have evidence.

---

## Profile

I'm a BCA Data Science student focused on cybersecurity, with hands-on practice in security labs, web application vulnerability assessment, API security testing, and SIEM setup.

My current learning focus is Blue Team security operations: understanding endpoint telemetry, reviewing security events, investigating alerts, and documenting evidence. I also practice web and API security in authorized lab environments and develop CTF challenge concepts.

My goal is to build practical, reproducible projects that demonstrate a structured approach to security monitoring, investigation, and reporting.

## Technical Skills

List only skills you can explain and demonstrate in an interview.

### Security monitoring and Blue Team
- Wazuh and SIEM fundamentals
- Log analysis and alert triage concepts
- Endpoint monitoring concepts
- Incident investigation and reporting fundamentals
- Detection-rule testing concepts

### Web and API security
- HTTP/HTTPS request and response analysis
- Burp Suite
- SQL injection fundamentals
- Access-control testing concepts
- REST API security testing
- OWASP Top 10 concepts

### Reconnaissance and assessment
- Nmap
- Nuclei
- Gobuster
- dirsearch
- Vulnerability validation and false-positive review

### Systems and development
- Kali Linux
- Linux and Windows fundamentals
- Docker
- TCP/IP and networking fundamentals
- Git and GitHub

---

# Projects

## 1. Wazuh SIEM Home Lab

**Status:** In progress  
**Category:** Blue Team · SIEM · Security Monitoring  
**Environment:** Kali Linux · Docker · Wazuh

### Overview

Building a local Security Information and Event Management (SIEM) lab to explore centralized security monitoring, endpoint telemetry, alert investigation, and detection engineering.

### Work performed

- Set up the Wazuh Docker deployment environment on Kali Linux.
- Inspected Wazuh indexer configuration and administrator-related settings.
- Prepared the environment for further endpoint integration and security event analysis.

### Current focus

- Deploy a lightweight endpoint virtual machine.
- Connect and validate Wazuh agents.
- Generate controlled security events for testing.
- Investigate alerts and understand the relevant detection rules.

### Learning objectives

- Understand SIEM architecture and endpoint telemetry.
- Develop a repeatable alert-investigation workflow.
- Distinguish normal activity from suspicious behavior.
- Document detection logic, evidence, and remediation.

### Planned deliverables

- Lab architecture diagram.
- Evidence of agent connectivity.
- Sample alerts and investigation notes.
- Detection-rule documentation.
- A final report describing test results and limitations.

### Evidence checklist

- [ ] Screenshot of Wazuh services running.
- [ ] Screenshot showing the endpoint agent connected.
- [ ] Example of an event generated on the endpoint.
- [ ] Corresponding alert or documented explanation if no alert was generated.
- [ ] Investigation notes and remediation guidance.

**Current outcome:** The Wazuh Docker environment has been set up and configuration inspected. Endpoint telemetry, alert generation, and detection effectiveness remain unverified.

Links: [GitHub profile](https://github.com/saheer456) · [Portfolio](https://saheerkhan.app)

---

## 2. API Security Testing with crAPI

**Status:** In progress  
**Category:** API Security · Vulnerability Assessment  
**Environment:** Kali Linux · Docker · API testing tools

### Overview

Exploring API security testing through crAPI, an intentionally vulnerable application designed for practicing API security assessments in a controlled environment.

### Scope

- Map API endpoints and observe HTTP request/response behavior.
- Understand authentication and authorization mechanisms.
- Test object-level and function-level access controls.
- Investigate input validation, excessive data exposure, and business logic weaknesses.
- Document test cases and validate any suspected vulnerabilities.

### Methodology

1. Map the available API endpoints.
2. Understand request parameters, authentication, and expected responses.
3. Establish normal application behavior.
4. Test authorized lab scenarios for security weaknesses.
5. Validate suspected findings and assess potential impact.
6. Document evidence and remediation recommendations.

### Planned deliverables

- Endpoint inventory.
- API security test matrix.
- Reproducible evidence for confirmed findings.
- Findings report with severity rationale.
- Remediation guidance.

### Evidence checklist

- [ ] Document the lab setup and scope.
- [ ] Record endpoints and their intended behavior.
- [ ] Capture relevant requests and responses with secrets redacted.
- [ ] Validate each suspected finding.
- [ ] Include remediation and retest results where available.

**Current outcome:** API security learning and lab work are in progress. Do not list individual vulnerabilities as findings until they have been tested and verified.

---

## 3. Vulnerability Assessment and Web Security Labs

**Status:** Individual lab exercises performed; consolidated report pending  
**Category:** Web Security · Vulnerability Assessment · Reconnaissance  
**Tools used:** Kali Linux · Nmap · Nuclei · Gobuster · dirsearch

### Overview

Practiced reconnaissance and vulnerability assessment against lab targets to understand service discovery, exposed web attack surfaces, scanner output, and manual validation.

### Work performed

- Used Nmap to examine network services and exposed ports.
- Ran Nuclei templates against a lab web target.
- Reviewed HTTP-related findings and potential CSRF issues.
- Explored web content discovery and endpoint enumeration.
- Examined the need to validate automated scanner output.

### Key lesson

Automated scanners produce leads, not proof. A suspected vulnerability should be manually validated and supported with evidence before it is reported as confirmed.

### Reporting format

For each validated finding, document:

- Affected endpoint or service.
- Scope and prerequisites.
- Steps to reproduce in the authorized lab.
- Expected versus observed behavior.
- Evidence and security impact.
- Severity rationale.
- Recommended remediation.
- Retest result, if performed.

### Evidence checklist

- [ ] Record the target scope and authorization.
- [ ] Save relevant scan output.
- [ ] Manually validate suspected issues.
- [ ] Document false positives and limitations.
- [ ] Produce a concise assessment report.

**Current outcome:** Individual scanning exercises have been performed. A complete, validated assessment report has not yet been established as finished.

---

## 4. CTF Challenge Development

**Status:** Challenge development and documentation  
**Category:** Security Research · CTF Engineering · Web Security  
**Repository:** [saheer456/ctf](https://github.com/saheer456/ctf)

### Overview

Developing cybersecurity challenge concepts that encourage structured investigation, logical reasoning, and multi-stage problem-solving instead of relying only on straightforward vulnerability exploitation.

### Areas explored

- Multi-stage challenge progression.
- Nested files and directories.
- Encoded data and scripted clues.
- Password-based progression between stages.
- Web security and business logic challenge concepts.
- Challenge deployment and reproducible testing.

### Engineering goals

- Define a clear objective and flag-validation mechanism for each challenge.
- Ensure each stage has a logical solution path.
- Test challenges for unintended shortcuts.
- Provide setup instructions and walkthroughs.
- Isolate intentionally vulnerable components from production systems.

### Evidence checklist

- [ ] README with setup and solve instructions.
- [ ] Challenge files and configuration.
- [ ] Verified flag-checking behavior.
- [ ] Walkthrough or solution guide.
- [ ] Deployment and cleanup instructions.
- [ ] Confirmation that the challenge works from a clean environment.

**Current outcome:** CTF concepts and repository work are documented in project history. Verify the completion and deployment status of each challenge before labeling it complete.

---

## 5. Security Labs and CTF Practice

**Status:** Ongoing learning  
**Category:** Practical Security · Web Application Testing · Methodology

### Overview

Building practical cybersecurity knowledge through authorized learning environments, including TryHackMe, Hack The Box, and PortSwigger Web Security Academy.

### Areas of study

- Network reconnaissance and service enumeration.
- HTTP request and response analysis.
- SQL injection and access-control testing.
- Web application security fundamentals.
- Vulnerability validation and technical documentation.
- Structured CTF investigation and problem-solving.

### Write-up format

For each completed lab, record:

1. Objective and authorized scope.
2. Environment and tools.
3. Methodology.
4. Evidence and key observations.
5. Root cause, where applicable.
6. Remediation or defensive lesson.
7. What remains uncertain.

**Current outcome:** Practice is ongoing. Publish only individually completed and documented labs as finished case studies.

---

# Detailed Case Study: Wazuh SIEM Home Lab

**Author:** Saheer Khan MK  
**Project type:** Personal cybersecurity lab  
**Status:** In progress

## 1. Objective

Build a local SIEM environment to understand how security events are collected, analyzed, and investigated. The longer-term goal is to develop practical skills in endpoint monitoring, alert triage, detection engineering, and incident investigation.

## 2. Architecture

The lab uses Kali Linux as the host environment and Docker to run the Wazuh deployment. A lightweight virtual machine is planned as an endpoint for generating and collecting test events.

**Planned data flow:**

`Endpoint activity → Wazuh agent → Wazuh server → Alert analysis → Investigation notes`

This is the intended architecture, not a claim that every component has been connected successfully.

## 3. Implementation progress

### Work performed

- Set up the Wazuh Docker deployment environment on Kali Linux.
- Inspected indexer configuration files and administrator-related settings.
- Began preparing the environment for endpoint integration.

### Remaining work

- Install and configure the endpoint agent.
- Verify agent registration and connectivity.
- Confirm that endpoint events reach the monitoring platform.
- Generate controlled test events.
- Investigate resulting alerts and record the evidence.

## 4. Planned detection scenarios

| Scenario | Validation objective |
|---|---|
| Repeated failed logins | Determine whether relevant authentication events are collected and whether an alert is generated. |
| Suspicious process execution | Inspect process-related telemetry and applicable detection rules. |
| Changes to monitored files | Validate file integrity monitoring and alert behavior. |
| Privileged activity | Examine relevant authentication and privilege-related events. |

These are planned tests. No detection result is claimed until each scenario has been executed and its output verified.

## 5. Investigation workflow

For every generated alert:

1. Record the timestamp, source endpoint, rule identifier, and severity.
2. Review the raw event and related logs.
3. Establish which activity triggered the alert.
4. Determine whether the behavior is expected, suspicious, or inconclusive.
5. Record supporting evidence and limitations.
6. Document appropriate containment or remediation recommendations where applicable.

## 6. Evidence and validation

The final report should include genuine screenshots of agent status, relevant events, alert details, and investigation results. Redact credentials, tokens, and other secrets.

A successful test should be supported by evidence that the event was generated, collected, processed, and interpreted correctly.

## 7. Current outcome

The current outcome is a partially implemented local SIEM lab and a plan for endpoint integration and detection testing.

Detection effectiveness, incident response performance, and successful alert generation remain unverified until the remaining tests are completed.

## 8. Next steps

- Complete endpoint onboarding.
- Validate telemetry collection.
- Execute the planned detection scenarios.
- Record false positives and detection gaps.
- Publish a final lab report with evidence and remediation notes.

---

# Portfolio Improvement Plan

For SOC Analyst L1 applications, prioritize these next steps:

1. **Finish the Wazuh project:** connect an endpoint, generate a controlled event, investigate the evidence, and document the result.
2. **Complete the crAPI project:** produce an API testing report with verified findings, impact, evidence, and remediation.
3. **Publish two or three strong write-ups:** a well-explained investigation is more useful than a long list of tools.
4. **Improve GitHub repositories:** add a README, architecture diagram, setup instructions, screenshots, and a clear status.
5. **Keep claims evidence-based:** distinguish lab practice from production experience, and planned tests from verified results.

## Suggested next milestone

Get one endpoint connected to Wazuh, generate a controlled event, investigate the resulting evidence, and publish that investigation as a completed case study. One verified investigation is more persuasive than several unfinished project cards.
