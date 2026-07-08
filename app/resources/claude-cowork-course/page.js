import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "Claude Cowork for Customer Marketers — Kevin Lau",
  description:
    "The complete free video course. Set up Claude Cowork, connect it to your files and apps, and automate NRR reporting, QBR prep, and advocacy workflows like an AI-Native customer marketer.",
};

const resource = {
  slug: "claude-cowork-course",
  eyebrow: "Free video course",
  title: "Claude Cowork for Customer Marketers",
  subtitle:
    "After 15+ years in Customer-Led Growth and hundreds of conversations with customer marketing teams, here's what I keep seeing: most customer marketers use AI. Very few know how to use AI to actually run the work — automate reporting, pull from their own tools, and prove their value faster. This free video course fixes that. It's for customer marketers, CS and post-sale teams, lifecycle marketers, founders, and anyone who wants to become an AI-First operator.",
  bullets: [
    "Set up Claude Cowork from scratch",
    "Connect Cowork to your files, folders, and apps",
    "Automate NRR reporting, QBR prep, and advocacy workflows",
    "Use Cowork to build docs, decks, and customer trackers on autopilot",
    "Learn connectors, MCP, and scheduled tasks the practical way",
    "Discover use cases every customer marketer can apply immediately",
  ],
  format: "Course",
  coverEmoji: "🎓",
  coverImage: "/assets/claudecowork.png",
  coverImageAlt: "Claude Cowork for Customer Marketers course cover",
  downloadUrl:
    "https://glimmer-farmhouse-441.notion.site/Claude-Cowork-for-Customer-Marketers-The-Complete-Certification-Course-39093aa14ae48065a0edc8b27379167c?source=copy_link",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
