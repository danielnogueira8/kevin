import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "Build Your First Post-Sale AI Agent — Kevin Lau",
  description:
    "A starter kit for non-technical CM and CS leaders: how to pick your first agent, what to feed it, and how to build it without writing code from scratch.",
};

const resource = {
  slug: "build-first-postsale-agent",
  eyebrow: "Free starter kit",
  title: "Build Your First Post-Sale AI Agent",
  subtitle:
    "Claude just shipped an agent quickstart. Zero to a working agent in an afternoon, no dev team, no budget, no experience needed. This is the breakdown for non-technical CM and CS leaders: how to pick your first agent, what to feed it, and how to build it without writing code from scratch.",
  bullets: [
    "A Churn Radar agent that flags at-risk accounts before the QBR",
    "A Feedback Cluster agent that groups raw customer feedback into themes",
    "A Reference Match agent that matches a live deal to the right customer story",
    "An Advocate Scout agent that surfaces who's ready to go on record",
    "An Exec Briefing agent that drafts the briefing doc before the call",
  ],
  format: "Starter kit",
  coverEmoji: "🤖",
  coverImage: "/assets/claude_managed_agents.png",
  coverImageAlt: "Build Your First Post-Sale AI Agent cover",
  downloadUrl:
    "https://glimmer-farmhouse-441.notion.site/Build-Your-First-Post-Sale-AI-Agent-No-Code-A-Starter-Kit-for-CM-CS-Leaders-38393aa14ae4808194c7fd14c31d1936?source=copy_link",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
