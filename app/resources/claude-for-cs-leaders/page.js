import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "Claude for CS Leaders: The Workbook — Kevin Lau",
  description:
    "A complete workbook on Claude for Customer Success leaders. Every section ends in a worksheet you fill in for your own book of business: which CS deliverables should touch AI, which shouldn't, and how to report it to the board in retention and hours. Free.",
};

const resource = {
  slug: "claude-for-cs-leaders",
  eyebrow: "Free access",
  title: "Claude for CS Leaders: The Workbook",
  subtitle:
    "A complete workbook on Claude for post-sale leaders. Every section ends in a worksheet you fill in for your own book of business. Most AI training for post-sale teaches the chat window, and that was never the hard part. The hard part is deciding which of the forty things on your desk should touch AI at all, then defending that call to a CFO who's already asking what the license is doing for NRR. So the workbook is built around the decisions.",
  bullets: [
    "The 12 recurring CS deliverables Claude handles well, scored on hours saved and review burden.",
    "The 5 where it costs you more than it returns, and why.",
    "A one-page process scoring worksheet to pick your first candidate this week.",
    "14 prompts written for post-sale leadership, not for marketers.",
    "The data boundary worksheet: what never goes in the window, agreed with your security lead before you start.",
    "A 40-minute weekly cadence that keeps this from becoming another abandoned tool.",
    "The board slide: how to report AI progress in retention and hours, instead of adjectives.",
  ],
  description:
    "Build the city first. Then add traffic. This is the triage Kevin runs before a single agent goes into the CLG Agentic Blueprint, turned into something you can run yourself.",
  format: "Workbook",
  coverEmoji: "📒",
  coverImage: "/assets/claude_for_cs_leaders.png",
  coverImageAlt:
    "Claude for CS Leaders: The Workbook — worksheets for deciding which post-sale work should touch AI",
  coverAspectRatio: "1086 / 1448",
  downloadUrl:
    "https://glimmer-farmhouse-441.notion.site/Resource-Claude-for-CS-Leaders-The-Workbook-3ce93aa14ae48029916deb2dcaf01dc5?source=copy_link",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
