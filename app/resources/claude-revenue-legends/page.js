import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "The AI Revenue Board: 5 Claude Skills Built on Hormozi, Sinek, Priestley, Voss and Slootman — Kevin Lau",
  description:
    "Five Claude Skills built on the published frameworks of Alex Hormozi, Simon Sinek, Daniel Priestley, Chris Voss and Frank Slootman. Offer, brand, demand, negotiation and execution. Free.",
};

const resource = {
  slug: "claude-revenue-legends",
  eyebrow: "Free Claude Skills",
  title: "Your AI Revenue Board",
  subtitle:
    "I cloned 5 B2B revenue legends into Claude. I pulled the frameworks from their books, talks and public playbooks and turned each into a Skill you install once and reuse forever. Put one hard question in front of all five and read where they disagree.",
  bullets: [
    "Alex Hormozi, The Offer Strategist: scores your offer on the Value Equation and rebuilds it into one people feel stupid saying no to.",
    "Simon Sinek, The Brand Strategist: finds the why behind everything you sell and rewrites your message from the inside out.",
    "Daniel Priestley, The Demand Strategist: turns chasing buyers all year into campaigns with a waiting list, fixed spots and a close date.",
    "Chris Voss, The Negotiator: preps your next renewal or price conversation word for word, from the accusation audit to the number.",
    "Frank Slootman, The Operator: cuts the priority list to three, picks up the pace, and only then sharpens the strategy.",
  ],
  description:
    "Upload the Skills to Claude, pick the advisor you need, or run all five on one question. Free, and it takes about 2 minutes to set up.",
  format: "Claude Skills",
  coverEmoji: "🧠",
  coverImage: "/assets/claude_revenue_legends.gif",
  coverImageAlt:
    "Your AI Revenue Board: five Claude Skills built on Alex Hormozi, Simon Sinek, Daniel Priestley, Chris Voss and Frank Slootman",
  coverAspectRatio: "1080 / 1350",
  downloadUrl: "/guides/claude-revenue-legends",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
