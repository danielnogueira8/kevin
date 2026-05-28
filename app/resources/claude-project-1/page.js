import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "The Customer Continuum Copilot — Kevin Lau",
  description:
    "Fifteen years of customer marketing practice — Marketo, Adobe, F5, Freshworks — packaged into a free Claude Project kit. Three modes: Career Coach, CLG Strategist, Content Writer. Drops in as a Project or loads as a skill in three minutes.",
};

const resource = {
  slug: "claude-project-1",
  eyebrow: "Free Claude Project",
  title: "The Customer Continuum Copilot",
  subtitle:
    "I packaged fifteen years of customer marketing practice into a free Claude Project kit. Built from the patterns I kept seeing at Marketo, Adobe, F5, and Freshworks — the arguments that got leaders promoted, the ones that didn't, and the customer programs that actually changed the revenue conversation. Distilled into three modes you can run on demand.",
  bullets: [
    "Career Coach mode — promotion case structure, four named career patterns, the four-stakeholder map, and the script that turns the QBR from defense to offense",
    "CLG Strategist mode — the seven pillars, the lifecycle engine, four output shapes (framework, playbook, measurement plan, 30-60-90 roadmap), and the handoffs to Sales, CS, Product, and PMM",
    "Content Writer mode — the eight-step LinkedIn structure, the eight-part newsletter structure, the five gates, three hook patterns, and the vocabulary list that catches AI tells before they reach the page",
    "The Seven Pillars reference file — benchmarks for what good looks like (community retention rates, time-to-first-value targets, advocacy story throughput, CAB cadence)",
    "Voice rules baked into every mode — coaches in plain language, won't put words in your mouth you'd never say out loud",
    "Drops into a Claude Project as knowledge, or loads as a skill — three minutes to set up",
    "Five more reference files ship over the next eight weeks — drop each one into the same Project as it lands",
  ],
  format: "Claude Project kit",
  coverEmoji: "🤖",
  coverImage: "/assets/claude-project-1.png",
  coverImageAlt: "The Customer Continuum Copilot — three modes",
  downloadUrl:
    "https://glimmer-farmhouse-441.notion.site/36e93aa14ae480de8a50e3480a2ffa47?source=copy_link",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
