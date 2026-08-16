import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title:
    "Claude for Customer-Led Growth: The Complete Playbook — Kevin Lau",
  description:
    "Six post-sale skill sets pulled out of the CLG Agentic Blueprint: 135 agents across the seven pillars. Signal and risk, retention reporting, proof production, advocacy and expansion, and the agent layer. Each one ends in something you can hand a CRO. Free.",
};

const resource = {
  slug: "claude-clg-playbook",
  eyebrow: "Free Claude playbook",
  title: "Claude for Customer-Led Growth",
  subtitle:
    "The whole playbook, free. Six post-sale skill sets, pulled out of the CLG Agentic Blueprint I built in Claude Code: 135 agents across the seven pillars. Each one ends in something you can hand a CRO — a risk brief, a renewal report, a reference match, a customer story. Same spine every time: Outcomes → Trust → Proof → Adoption → Advocacy. None of it works without the trust layer underneath, because an agent can be correct and still get ignored.",
  bullets: [
    "Which tool for which job — Chat, Cowork, and Claude Code do different work. A decision table sends every post-sale job where it belongs, so a weekly risk sweep stops living in a thread nobody reopens.",
    "Signal and risk — Claude checks usage drops, support volume, and champion departures on a set cadence. It flags the accounts that need a human this week, and an at-risk agent runs the teardown on demand.",
    "Retention reporting — the renewal and expansion report nobody finishes, and the verification pass that keeps a wrong number out of a board deck. An agent traces expansion back to the program that caused it.",
    "Proof production — one customer outcome becomes a case study, a reference line, a slide, and a community post. Includes a voice skill so the story still sounds like the customer said it.",
    "Advocacy and expansion — PROP scores your base on usage, relationship, outcomes, and fit, then surfaces who is ready to be asked. Plus reference matching against live deals, and the list of customers nobody has ever asked.",
    "The agent layer — five post-sale agents: at-risk flag, champion scout, sentiment cluster, reference match, briefing prep. One block you can paste in, plus what breaks each one.",
  ],
  format: "Playbook",
  coverEmoji: "🧭",
  coverImage: "/assets/claude_growth_playbook.png",
  coverImageAlt:
    "Claude for Customer-Led Growth: The Complete Playbook — six post-sale skill sets from the CLG Agentic Blueprint",
  downloadUrl:
    "https://glimmer-farmhouse-441.notion.site/Resource-Claude-for-Customer-Led-Growth-The-Complete-Playbook-3be93aa14ae481969c4ec9f9da6b7f3c?source=copy_link",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
