import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "Claude for B2B Marketing Leaders: The Workbook — Kevin Lau",
  description:
    "A complete workbook on Claude for B2B marketing leaders. Every section ends in a worksheet you fill in for your own pipeline: which marketing work should touch AI, which shouldn't, and how to report it to the board in hours and output. Free.",
};

const resource = {
  slug: "claude-b2b-marketing-workbook",
  eyebrow: "Free access",
  title: "Claude for B2B Marketing Leaders: The Workbook",
  subtitle:
    "A complete workbook on Claude for B2B marketing leaders. Every section ends in a worksheet you fill in for your own pipeline. Most AI training for marketing teaches the prompt, and that was never the hard part. The hard part is deciding which of the forty things on your desk should touch AI at all, then defending that call to a CFO who's already asking what the license is doing for pipeline. So the workbook is built around the decisions.",
  bullets: [
    "The 12 recurring marketing deliverables Claude handles well, scored on hours saved and review burden.",
    "The 5 where it costs you more than it returns, starting with the pipeline number you commit to.",
    "A one-page scoring worksheet to pick your first candidate this week.",
    "14 prompts written for the person who owns pipeline, not the person writing the copy.",
    "The data boundary worksheet, agreed with security and legal before anything runs.",
    "A 40-minute weekly cadence that keeps this from becoming another abandoned tool.",
    "The board slide: how to report AI progress in hours and output, instead of adjectives."
  ],
  description:
    "A brief that takes you two hours, drafted by Claude in five minutes, still costs you an hour if someone has to check every line. This is the triage Kevin would run before a single agent touches a marketing team's week, turned into something you can run yourself.",
  format: "Workbook",
  coverEmoji: "📙",
  coverImage: "/assets/claude_b2b_marketing_workbook.png",
  coverImageAlt:
    "The Claude Workbook for B2B marketing leaders: six worksheets feeding one board slide",
  coverAspectRatio: "2160 / 2700",
  downloadUrl: "/guides/claude-b2b-marketing-workbook",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
