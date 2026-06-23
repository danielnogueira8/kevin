import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "The Customer Continuum Copilot — Kevin Lau",
  description:
    "A free Claude skill that turns customer marketing into a system: three advisors, three pillar modules, eighteen agents, and a benchmark to find your gaps.",
};

const resource = {
  slug: "customer-continuum-copilot",
  eyebrow: "Free Claude skill",
  title: "The Customer Continuum Copilot",
  subtitle:
    "Most customer marketing teams run two or three of the seven pillars by hand and get blamed for the other four. The reason isn't headcount. The function was never built as a system. This is the full stack: a Claude skill that runs as a career coach, a CLG strategist, and a content writer, with the agent blueprints for lifecycle, advocacy, and community built in. New pillar dropping every week until all seven are live.",
  bullets: [
    "The base install: a Claude skill that runs as three advisors in any Claude account (no API, no code)",
    "Three pillar modules so far: lifecycle, advocacy, and community, six agents each, eighteen in total",
    "Every agent fully specced: the signals it reads, the logic that fires it, the action it triggers",
    "A benchmark to hold your current program against the agents, pillar by pillar, and turn the gaps into your build list",
    "The README that adds the whole thing to your Claude account in minutes",
    "A new pillar dropping every week until all seven are built",
  ],
  format: "Claude skill",
  coverEmoji: "🤖",
  coverImage: "/assets/marketing_copilot .png",
  coverImageAlt: "The Customer Continuum Copilot cover",
  downloadUrl:
    "https://glimmer-farmhouse-441.notion.site/The-Customer-Continuum-Copilot-The-Free-Claude-Skill-That-Turns-Customer-Marketing-Into-a-System-38293aa14ae481b49fb8e27e8e6fea2e?source=copy_link",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
