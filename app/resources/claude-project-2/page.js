import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "Claude Project for CLG — Kevin Lau",
  description:
    "Fifteen years of customer marketing practice — Marketo, Adobe, F5, Freshworks — packaged into a free Claude Project kit. One Project, three modes, seven pillars. Drops in as knowledge or loads as a skill in three minutes.",
};

const resource = {
  slug: "claude-project-2",
  eyebrow: "Free Claude Project",
  title: "Claude Project for CLG",
  subtitle:
    "Seven pillars. Three modes. One Project. I packaged fifteen years of customer marketing practice — the patterns I kept seeing at Marketo, Adobe, F5, and Freshworks — into a free Claude Project kit. The promotion cases that worked, the customer programs that changed the revenue conversation, and the writing rules that keep AI tells off the page. All routed through a single SKILL.md.",
  bullets: [
    "SKILL.md — the master file that routes the three modes",
    "career-coach.md — promotion case structure, stakeholder map, VP path",
    "clg-strategist.md — seven pillars, lifecycle engine, 30-60-90 roadmaps",
    "content-writer.md — eight-step LinkedIn structure, five gates, anti-AI rules",
    "reference/seven-pillars.md — pillar definitions and benchmarks for what good looks like",
    "Five more reference files shipping over eight weeks — lifecycle engine, champions program, metrics, CAB program, case archive",
    "Drops into a Claude Project as knowledge, or loads as a skill — three minutes to set up",
  ],
  format: "Claude Project kit",
  coverEmoji: "🗂️",
  coverImage: "/assets/claude-project-2.png",
  coverImageAlt: "Claude Project for CLG — file structure",
  downloadUrl:
    "https://glimmer-farmhouse-441.notion.site/36e93aa14ae480de8a50e3480a2ffa47?source=copy_link",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
