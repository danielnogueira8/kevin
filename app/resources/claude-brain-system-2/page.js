import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "The Claude Brain System for Customer Success, Part 2: 22 Skills and 7 Agents — Kevin Lau",
  description:
    "Part 2 of the Claude Brain System for Customer Success: 22 new Claude Skills and 7 agents that put the shared account brain to work, from the sales handoff to the renewal. Free.",
};

const resource = {
  slug: "claude-brain-system-2",
  eyebrow: "Free system",
  title: "The Claude Brain System for Customer Success, Part 2",
  subtitle:
    "Part 1 gave your CS team one shared memory of every account. Part 2 puts that memory to work with 22 new Claude Skills and 7 new agents for the jobs a CS team does every week, all reading from the same account brain.",
  bullets: [
    "The handoff from sales, so kickoff starts with what the customer was promised.",
    "First value and onboarding milestones, checked against usage every week.",
    "Business reviews, drafted two weeks before the meeting.",
    "The renewal runway, opened 120 days out and kept current.",
    "Accounts ready to grow, with the proof behind them, plus a bank of customer proof and reference requests.",
    "Escalation timelines, recovery plans and exec sponsor coverage.",
    "Product requests ranked by the revenue asking for them, and follow-ups and change notices to customers."
  ],
  description:
    "Every agent drafts, and nothing reaches a customer until a human on your team approves it. Start with Part 1's four core skills, then add these.",
  format: "Skills and agents",
  coverEmoji: "🧠",
  coverImage: "/assets/claude_brain_system_2.png",
  coverImageAlt:
    "The Claude Brain System, Part 2: seven agents along the customer lifecycle on top of the account brain",
  coverAspectRatio: "2160 / 2700",
  downloadUrl: "/guides/claude-brain-system-2",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
