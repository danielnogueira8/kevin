import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "The Customer Marketing Team You Never Got Budget to Hire — Kevin Lau",
  description:
    "Three Claude specialists: a Career Coach, a CLG Strategist, and a Content Writer. One install, zero prompt engineering, free.",
};

const resource = {
  slug: "customer-continuum-copilot-team",
  eyebrow: "Free Claude install",
  title: "The Customer Marketing Team You Never Got Budget to Hire",
  subtitle:
    "I built the customer marketing team you never got budget to hire, and I'm giving them away for free. Three specialists. One install. Zero prompt engineering.",
  bullets: [
    "Agent 1: Career Coach — for the promotion case, the stakeholder map, the \"show me revenue impact\" conversation, the path from Director to VP. Coaches with one clear recommendation, not a menu of options.",
    "Agent 2: CLG Strategist — for the seven-pillar strategy, the 30-60-90 roadmap, the measurement plan, the org design conversation. Produces structured playbooks, never brainstorms.",
    "Agent 3: Content Writer — for the LinkedIn post and the newsletter draft. Story-first method. Runs five checks on every draft before it shows you anything. Writes in your voice, not mine.",
  ],
  format: "Install Guide",
  coverEmoji: "🧑‍🤝‍🧑",
  coverImage: "/assets/COPILOT.png",
  coverImageAlt: "The Customer Continuum Copilot install guide cover",
  downloadUrl:
    "https://glimmer-farmhouse-441.notion.site/Install-Guide-The-Customer-Continuum-Copilot-39a93aa14ae48070ace0fe5d560b0cf2?source=copy_link",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
