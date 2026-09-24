import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "The Claude Opus 5.5 Workbook for CS Leaders — Kevin Lau",
  description:
    "A complete Claude Opus 5.5 workbook for customer success leaders: 12 CS jobs it handles well, 5 it doesn't, 14 prompts for post-sale leadership, Opus 5.5 vs Opus 5 side by side, and the board slide for reporting AI progress. Free.",
};

const resource = {
  slug: "claude-opus-5-5-cs-workbook",
  eyebrow: "Free workbook",
  title: "The Claude Opus 5.5 Workbook for CS Leaders",
  subtitle:
    "Anthropic just released Claude Opus 5.5. It does Fable-level work for about 40% less than the Opus before it. So I turned it into a complete workbook for CS leaders, built around the decisions, not the chat window.",
  bullets: [
    "The 12 recurring CS deliverables Opus 5.5 handles well, scored on hours saved and review burden",
    "The 5 where it costs you more than it returns",
    "14 prompts written for post-sale leadership, not for marketers",
    "Opus 5.5 vs Opus 5 side by side, so you know which to use for what",
    "The board slide: how to report AI progress in retention and hours, not adjectives",
    "The use-case map for your post-sale team",
  ],
  description:
    "12 CS jobs it handles well, 5 it doesn't, and 1 board slide that proves it's working. Every section ends in a worksheet for your own book of business, so it becomes a plug-and-play system for post-sale teams, not another thing to read. All five sections plus the use-case map are free.",
  format: "Workbook",
  coverEmoji: "📘",
  coverImage: "/assets/claudeopus5.5.png",
  coverImageAlt: "The Claude Opus 5.5 Workbook for CS Leaders",
  coverAspectRatio: "2160 / 2700",
  downloadUrl:
    "https://glimmer-farmhouse-441.notion.site/Resource-The-Claude-Opus-5-5-Workbook-for-CS-Leaders-3e593aa14ae48053b9e5d8560a70cc2a?source=copy_link",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
