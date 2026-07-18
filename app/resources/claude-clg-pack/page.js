import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "The Claude CLG Pack — Kevin Lau",
  description:
    "5 free tools Kevin runs inside his own post-sale team: the CLG Strategist, a 15-agent library, the Advocacy Vault, the Customer Continuum Copilot, and the Cowork Context Layer.",
};

const resource = {
  slug: "claude-clg-pack",
  eyebrow: "Free Claude pack",
  title: "The Claude CLG Pack",
  subtitle:
    "5 free tools I run inside my own post-sale team. Same architecture I've refined for 15 years across Marketo, Adobe, F5, and Freshworks — the playbook underneath it took NDR from 95% to 108% across 50,000+ accounts. A system you install once, teach your seven pillars, and use over and over.",
  bullets: [
    "The CLG Strategist — a senior Customer-Led Growth advisor inside your own Claude account. Scores your function across the seven pillars in 60 seconds, names the one to fix first, and builds your 90-day plan.",
    "The 15-Agent Library — one agent, one job, across retention, advocacy, community, voice of customer, and exec engagement. Each with the signals it reads, when it fires, and a copy-paste prompt.",
    "The Advocacy Vault — 15 templates that turn quiet customers into advocates: qualifying them, the opening message that earns a reply, the move from \"I'm in\" to a booked commitment, and the two objections advocates raise most.",
    "The Customer Continuum Copilot — the career side. Your promotion case, the script that turns the QBR from defense to offense, the four patterns blocking most customer marketers, plus a writing mode that drafts your posts in your own voice.",
    "The Cowork Context Layer — 20 files that teach Claude how your function actually runs, so it builds your Monday health report, drafts your customer updates, and compiles your quarter-end numbers. On schedule. Without you.",
  ],
  format: "Pack",
  coverEmoji: "🛠️",
  coverImage: "/assets/CLG.png",
  coverImageAlt: "The Claude CLG Pack cover",
  downloadUrl:
    "https://glimmer-farmhouse-441.notion.site/The-Claude-CLG-Pack-5-Free-Tools-I-Run-Inside-My-Own-Post-Sale-Team-3a093aa14ae480b6a1c8f1270329edd0?source=copy_link",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
