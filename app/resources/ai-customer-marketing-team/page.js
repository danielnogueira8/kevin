import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "The AI Customer Marketing Team — Kevin Lau",
  description:
    "Nine Claude agents that turn post-sale into a system. Built on the seven-pillar Customer-Led Growth system, packaged for post-sale teams at B2B SaaS companies.",
};

const resource = {
  slug: "ai-customer-marketing-team",
  eyebrow: "Free copilot",
  title: "The AI Customer Marketing Team",
  subtitle:
    "I built an AI customer marketing team using Claude — nine specialist agents on the exact seven-pillar Customer-Led Growth system I've run for 15 years at Marketo, Adobe, and Freshworks. A senior CM hire runs $150K-$250K a year and an agency runs $5K-$15K a month — most teams need the system, not another headcount they can't justify. This gives you the system, for free.",
  bullets: [
    "Adoption Signal Watcher — flags adoption gaps months before the renewal forecast",
    "At-Risk Detector — combines weak signals into one churn-risk score and triggers an early save",
    "Renewal Orchestrator — runs the T-180/120/90/30 sequence with value framing and a risk sweep",
    "Expansion Nudge — surfaces expansion openings with peer-matched proof and a warm exec entry",
    "Advocate ID + Reference Match — finds advocates and matches them to live deals in under 24 hours",
    "Advocacy + Community ROI — defends the pipeline, revenue, and deflected cost in a QBR",
  ],
  format: "Copilot",
  coverEmoji: "🧑‍🤝‍🧑",
  coverImage: "/assets/ai-marketing-team.png",
  coverImageAlt: "The AI Customer Marketing Team cover",
  downloadUrl:
    "https://glimmer-farmhouse-441.notion.site/The-AI-Customer-Marketing-Team-9-Claude-Agents-That-Turn-Post-Sale-Into-a-System-38a93aa14ae48099895ff403475653a9?source=copy_link",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
