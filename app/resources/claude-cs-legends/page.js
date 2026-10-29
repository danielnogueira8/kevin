import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "The AI Customer Success Board: 5 Claude Skills Built on CS's Best Minds — Kevin Lau",
  description:
    "Five Claude Skills built on the published frameworks of Lincoln Murphy, Donna Weber, Dan Steinman, Jeanne Bliss and Bill Price. Install once, run on your own accounts. Free.",
};

const resource = {
  slug: "claude-cs-legends",
  eyebrow: "Free Claude Skills",
  title: "The AI Customer Success Board",
  subtitle:
    "I cloned 5 customer success legends into Claude. I pulled the frameworks from their books, talks and public playbooks and turned each into a Skill you install once and reuse forever. Now they define the outcome, map the onboarding, and find the support tickets that should never have happened.",
  bullets: [
    "Lincoln Murphy, The Desired Outcome Strategist: defines what each customer has to achieve and how, so success becomes something you can actually manage.",
    "Donna Weber, The Onboarding Strategist: maps onboarding from the last weeks of the sale to first value, so new customers don't stall early.",
    "Dan Steinman, The Customer Success Operator: runs your book against the ten laws of customer success and shows you where retention is leaking.",
    "Jeanne Bliss, The Chief Customer Officer: makes customers gained and lost a number every leader in the company owns.",
    "Bill Price, The Service Strategist: finds the support contacts that should never have happened and fixes them where they start."
  ],
  description:
    "Upload the Skills to Claude, pick the advisor you need, and get a full breakdown on your own accounts in minutes. Free, and it takes about 2 minutes to set up.",
  format: "Claude Skills",
  coverEmoji: "🧭",
  coverImage: "/assets/claude_cs_legends.png",
  coverImageAlt:
    "My Claude Customer Success Board: five Claude Skills built on Lincoln Murphy, Donna Weber, Dan Steinman, Jeanne Bliss and Bill Price",
  coverAspectRatio: "2160 / 2700",
  downloadUrl: "/guides/claude-cs-legends",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
