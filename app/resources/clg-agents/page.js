import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "The 8-Agent CLG Playbook — Kevin Lau",
  description:
    "A Claude-powered post-sale revenue system for B2B SaaS: 7 CLG pillar agents + 1 Master Director, with prompts, workflows, and a maturity benchmark.",
};

const resource = {
  slug: "clg-agents",
  eyebrow: "Free playbook",
  title: "The 8-Agent CLG Playbook",
  subtitle:
    "A Claude-powered post-sale revenue system for B2B SaaS. Most teams use Claude to write follow-up emails. The smarter play is operationalizing your post-sale flywheel so your team focuses on the customer work that actually compounds NRR. This is the full architecture — 7 CLG pillar agents plus a Master Director — that handles the busywork eating 20+ hours of your CS, advocacy, and customer marketing team's week.",
  bullets: [
    "8 Claude agents: one per CLG pillar + a Master CLG Director that orchestrates them",
    "Adoption, Advocacy, Community, Customer Education, Voice of Customer, Scaled Comms, Lifecycle & Retention, and the CDP data backbone",
    "Every prompt, workflow, and pillar playbook ready to plug into your post-sale org",
    "The CLG maturity benchmark and ROI calculator to size impact before you roll it out",
  ],
  format: "Playbook",
  coverEmoji: "🤖",
  coverImage: "/assets/clg_revenue_system.png",
  coverImageAlt: "The Claude Revenue System for post-sale B2B SaaS: a Director that runs the week and 7 agents, one per day",
  coverAspectRatio: "2160 / 2700",
  downloadUrl: "/guides/8-agent-clg-playbook",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
