import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "The Post-Sale AI Agents System — Kevin Lau",
  description:
    "Claude just released Fable 5 — and it can run post-sale work start to finish. I packaged my entire system of ready-to-use AI agents for QBRs, advocacy, VoC, and lifecycle comms. No engineering team, no code, working in under an hour.",
};

const resource = {
  slug: "claude-fable",
  eyebrow: "Free agent system",
  title: "The Post-Sale AI Agents System",
  subtitle:
    "Claude just released Fable 5 and it's about to change post-sale work forever. A year ago I didn't know how to use a terminal — 15 years in customer marketing, zero code ever written. Today AI agents handle the work I used to lose entire days to, and Fable 5 is the first model I've used that can run it from start to finish. If your team of 3 is doing the work of 10, this is the way out. No engineering team, no complex setup — just a laptop, a Claude subscription, and about an hour to get started.",
  bullets: [
    "QBR-ready account stories in minutes, not days",
    "Accounts scored for advocacy and expansion readiness",
    "Raw VoC turned into themes execs actually act on",
    "Lifecycle comms drafted and reviewed before you finish coffee",
    "Ready-to-use AI agents for every post-sale job — QBRs, advocacy, VoC, comms",
    "Copy-paste setup: no code, working in under an hour",
    "The exact instructions that make every agent sound like you, not a robot",
    "A simple checklist so nothing goes to a customer without your approval",
  ],
  format: "Agent system",
  coverEmoji: "🤖",
  coverImage: "/assets/claude-fable-1.png",
  coverImageAlt: "The Post-Sale AI Agents System cover",
  downloadUrl:
    "https://glimmer-farmhouse-441.notion.site/The-Claude-Fable-5-Post-Sale-Pack-4-Agents-for-QBRs-Advocacy-VoC-and-Comms-37c93aa14ae48076b019c39bbf3ae9e0?source=copy_link",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
