import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "The Complete Claude B2B Marketing Playbook — Kevin Lau",
  description:
    "The entire B2B marketing workflow mapped inside Claude — competitive research, demand gen, content production, pipeline reporting, outreach, and expansion. 6 agents, ready-to-use prompts, one quick-reference block. Free.",
};

const resource = {
  slug: "claude-b2b-marketing-playbook",
  eyebrow: "Free Claude playbook",
  title: "I Mapped the Entire B2B Marketing Workflow Inside Claude",
  subtitle:
    "A full Claude setup for competitive research, demand gen, content production, pipeline reporting, outreach, and the expansion motion most teams never get to. Each skill produces one marketing deliverable. Each agent handles one specialised job. And they follow the same execution chain: Research → Plan → Produce → Distribute → Report → Expand.",
  bullets: [
    "The Claude tool-selection framework — a decision table for choosing between Claude Chat, Claude Cowork, and Claude Code based on the marketing job in front of you.",
    "Competitive Intelligence system — Monday morning briefs, pricing-page change tracking, hiring signals, competitor teardowns, and battlecard updates.",
    "Market Analyst agent — runs deeper competitive research on demand and turns raw market data into positioning insights and sales intelligence.",
    "Pipeline Reporting system — a 10-minute verification checklist, a ready-to-use Friday report prompt, and a repeatable process for numbers you can actually defend.",
    "Analytics Engineer agent — handles attribution, stage-to-stage conversion, and the pipeline leaks standard dashboards quietly hide.",
    "Content Production system — LinkedIn strategy for 2026, three defensible content moats, carousel automation, and 10 ready-to-use hook formulas.",
    "Brand Voice Skill — keeps every post, carousel, and asset consistent with your tone, positioning, and writing rules.",
    "Outreach and Lead Generation system — list building, enrichment, a three-provider data waterfall, and outreach personalised for each prospect.",
    "Customer Marketing system — advocate scoring, case studies drafted from one call, and the reference matching that lifts win rates.",
    "Expansion and Lifecycle system — onboarding and adoption comms, win-back sequences, and the expansion plays that turn your base into pipeline.",
    "6 marketing agents — analytics, competitive intelligence, email, landing pages, content, and advocacy, each built for one specific B2B job.",
    "Ready-to-use prompts for actual deliverables — competitive briefs, pipeline reports, carousels, personalised sequences, landing pages, and case studies.",
    "One copy-paste quick-reference block — the entire system in one place, including the failure modes to avoid.",
  ],
  format: "Playbook",
  coverEmoji: "🗺️",
  coverImage: "/assets/claude_marketing.jpg",
  coverImageAlt:
    "The Complete Claude B2B Marketing Playbook — the entire B2B marketing workflow mapped inside Claude",
  downloadUrl:
    "https://glimmer-farmhouse-441.notion.site/The-Complete-Claude-B2B-Marketing-Playbook-3ba93aa14ae4807ea853f83f28b4b8aa?source=copy_link",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
