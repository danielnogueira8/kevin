import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title:
    "The Claude Expansion Engine: 5 Chained Agents That Turn Existing Customers Into Pipeline — Kevin Lau",
  description:
    "Signals, qualification, the value case, execution, and readouts — 5 Claude agents that turn the accounts you already won into your cheapest pipeline. Every agent owns one stage and chains into the next. Free.",
};

const resource = {
  slug: "claude-expansion-engine",
  eyebrow: "Free Claude install",
  title: "The Claude Expansion Engine",
  subtitle:
    "Most people use Claude like a tool. The real power is building it into an engine that runs alongside your team. Everyone pours budget into net new while the cheapest revenue in the building sits in the accounts they already won — and expansion gets treated as something that happens at renewal, instead of a motion you actually run. This is a complete, data-driven system of 5 chained agents that runs the whole loop, so you stop rebuilding context from scratch every quarter.",
  bullets: [
    "Signal Scout — turns usage, hiring, and product data into real expansion openings.",
    "Account Qualifier — tells you which accounts are actually ready, and which ones you'd burn by asking.",
    "Value Case Builder — assembles the proof and the peer story that make the upgrade obvious.",
    "Outreach Strategist — finds the exec entry point and writes the message, framed on value already delivered.",
    "Revenue Analyst — reports what closed, what stalled, and where the next quarter's expansion sits.",
    "The full chain — every agent owns one stage and chains straight into the next, plus the setup guide to plug it into your pipeline today.",
  ],
  format: "Agent system",
  coverEmoji: "📈",
  coverImage: "/assets/agent_team.jpg",
  coverImageAlt:
    "The Claude Expansion Engine — 5 chained agents that turn existing customers into pipeline",
  downloadUrl:
    "https://glimmer-farmhouse-441.notion.site/The-Claude-Expansion-Engine-5-Chained-Agents-That-Turn-Existing-Customers-Into-Pipeline-3ba93aa14ae48081a797cf6d03a4e076?source=copy_link",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
