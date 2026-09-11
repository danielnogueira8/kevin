import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "The Claude B2B Revenue System: 50 Skills Across 11 Stages — Kevin Lau",
  description:
    "A full Claude Revenue System for B2B teams. 50 Claude Skills for finding where your leads come from, why deals aren't closing, and which customers might be ready to spend more. Each one does one job. Free.",
};

const resource = {
  slug: "claude-b2b-revenue-system",
  eyebrow: "Free access",
  title: "The Claude B2B Revenue System",
  subtitle:
    "I built a full Claude Revenue System for B2B teams. 50 Claude Skills for finding where your leads come from, why deals aren't closing, and which customers might be ready to spend more. There are 50 Claude Skills in total, and each one does one job. You don't need to use all 50. Just use the ones you need for whatever you're working on.",
  bullets: [
    "Getting clear on who you should sell to based on the deals you've already won",
    "Turning one webinar or case study into a month of content",
    "Writing offers and landing pages that bring in leads",
    "Researching the company and people before every sales call",
    "Putting together your weekly sales report",
    "Finding where people are dropping out of your sales process",
    "Helping with the objections that keep coming up on calls",
    "Finding the best customer story to use for each deal",
    "Spotting customers going quiet before it's time to renew",
    "Finding happy customers you can ask for a quote or case study",
    "Finding customers who might be ready to buy more from you",
  ],
  description:
    "If deals keep dying at the same point, there's a Skill that goes through them and helps you figure out why. If you want to find customers who'd probably be happy to give you a reference, there's one for that too. Same for cleaning up a lead list, writing emails to old leads, or putting together a report for the board. A lot of this stuff usually means pulling the same numbers every week, digging through your CRM for things you've already looked at, and making the same reports over and over. These Skills save you from doing a lot of that by hand. If you're a founder, marketer, RevOps lead, or agency owner, use whatever helps and ignore the rest. I'm giving away all 50.",
  format: "Skill pack",
  coverEmoji: "🧰",
  coverImage: "/assets/claude-b2b-revenue-system-2.png",
  coverImageAlt:
    "The Claude B2B Revenue System — 50 Claude Skills across 11 stages",
  coverAspectRatio: "3200 / 4000",
  downloadUrl:
    "https://glimmer-farmhouse-441.notion.site/The-Claude-B2B-Revenue-System-50-Skills-Across-11-Stages-66e93aa14ae483068b0f812d8f88ff5a?source=copy_link",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
