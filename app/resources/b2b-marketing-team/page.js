import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title:
    "Your B2B Marketing Team in Claude: 5 Roles, 5 Ready-Made Instructions — Kevin Lau",
  description:
    "Demand gen, content, advocacy, lifecycle, and revenue analysis — 5 marketing roles running inside Claude. No engineering. No code. Just paste what you already have. Free.",
};

const resource = {
  slug: "b2b-marketing-team",
  eyebrow: "Free Claude install",
  title: "I Hired a Full B2B Marketing Team Inside Claude",
  subtitle:
    "5 roles covering everything from demand gen to renewal. No engineering team. No code. Just paste what you already have — your ICP notes, your CRM exports, your survey results. Claude reads it and hands back finished work, plus a call on each piece: ship it, test it, or escalate it.",
  bullets: [
    "Demand Gen Manager — builds campaign briefs straight from your ICP and past winners, then drafts the ad angles and landing copy variants to test.",
    "Content Marketer — turns one webinar or case study into a month of content, drafted in your voice, not in AI's.",
    "Advocacy Manager — scores customers for case study and reference readiness, then drafts the case study from a single call transcript.",
    "Lifecycle Marketer — writes onboarding and adoption comms in your voice, and builds the win-back and renewal sequences most teams never get to.",
    "Revenue Analyst — pulls funnel numbers into one honest readout and shows exactly where pipeline leaks between stages.",
  ],
  format: "Install Guide",
  coverEmoji: "🧑‍💼",
  coverImage: "/assets/marketing_team.png",
  coverImageAlt:
    "Your B2B Marketing Team in Claude — 5 roles, 5 ready-made instructions install guide cover",
  downloadUrl:
    "https://glimmer-farmhouse-441.notion.site/Your-B2B-Marketing-Team-in-Claude-5-Roles-5-Ready-Made-Instructions-3b293aa14ae4804d9674da79f86de9cf?source=copy_link",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
