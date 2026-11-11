import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "The Claude Customer Advocacy Team — Kevin Lau",
  description:
    "Six Claude agents that find the customer wins worth telling, write the case study in the customer's words, make the visuals, check every claim, ask for reviews and match references to open deals. Full setup guide, free.",
};

const resource = {
  slug: "claude-customer-advocacy-team",
  eyebrow: "Free access",
  title: "The Claude Customer Advocacy Team",
  subtitle:
    "Running advocacy by hand means weeks chasing one case study, another week getting one quote approved, and reference requests from sales on a Friday afternoon. So I built a full customer advocacy team inside Claude: six agents, one job each, and nothing reaches a customer unless the proof checker and you both sign off.",
  bullets: [
    "The story scout: reads call notes, tickets, reviews and community threads, and flags the wins worth telling, scored with the PROP model.",
    "The case study writer: turns a 30-minute customer call into a case study draft in the customer's own words.",
    "The designer: makes the quote cards, one-pagers and slides for every story, in your fonts and colors.",
    "The proof checker: checks every draft for facts, numbers and customer sign-off before it ever reaches you.",
    "The review collector: asks happy customers for a review right after a milestone, never right after a ticket.",
    "The reference matcher: goes through your open deals and flags which advocate would move each one.",
  ],
  description:
    "The guide has every Skill file, first prompt, schedule and proof rule, and the first version runs in about 12 minutes.",
  format: "Setup guide",
  coverEmoji: "🤝",
  coverImage: "/assets/claude_customer_advocacy_team.gif",
  coverImageAlt:
    "The Claude Customer Advocacy Team: six agents around Claude taking one customer story from win to matched deal",
  coverAspectRatio: "1080 / 1350",
  downloadUrl: "/guides/claude-customer-advocacy-team",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
