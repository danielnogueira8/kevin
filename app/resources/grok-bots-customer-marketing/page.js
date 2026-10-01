import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "The 9 Grok Bots That Run Customer Marketing — Kevin Lau",
  description:
    "9 Grok bots for customer marketing teams: onboarding, reviews, AI answers, community, academy, voice of customer, newsletters, exec follow-ups and renewal reporting. Free setup guide for all 9.",
};

const resource = {
  slug: "grok-bots-customer-marketing",
  eyebrow: "Free setup guide",
  title: "The 9 Grok Bots That Run Customer Marketing",
  subtitle:
    "I built 9 Grok bots for customer marketing teams, each with one job, from catching accounts that stalled in onboarding to the exec follow-up after every QBR. And they ask you before anything reaches a customer.",
  bullets: [
    "Onboarding Grok: flags accounts that stalled before they saw any value, drafts the nudge, and checks again every week",
    "Review Grok: spots the customers who just hit a milestone and drafts the review ask",
    "AI Answer Grok: shows you what ChatGPT and Gemini say when a buyer asks about you, then turns your customer stories into pages that get you mentioned",
    "Community Grok: finds every question nobody answered in 24 hours, tags the member who solved it last time and drafts the reply",
    "Academy Grok: groups last month's support tickets by feature and drafts a help article for the top five every week",
    "Voice of Customer Grok: reads your call recordings and surveys, works out why customers leave, and writes the brief for your product team",
    "Newsletter, Exec and Reporting Grok: customer updates by the features each account uses, exec follow-ups after every QBR, and live renewal dashboards",
  ],
  description:
    "Plenty of happy customers have never been asked for anything, and plenty of stuck accounts never get noticed until renewal. Each bot connects to the data you already have (product usage, your CRM, your community, support tickets, call recordings) and does the checking every week so your team doesn't have to. I wrote the full setup for all 9, and it's free.",
  format: "Setup guide",
  coverEmoji: "🤖",
  coverVideo: "/assets/kevin_lau_grok_bots_video.mp4",
  coverImageAlt: "The 9 Grok bots for customer marketing teams",
  coverAspectRatio: "1 / 1",
  downloadUrl:
    "https://glimmer-farmhouse-441.notion.site/The-9-Grok-Bots-That-Run-Customer-Marketing-Setup-Guide-3eb93aa14ae481aabd81cf4c9f2a745d?source=copy_link",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
