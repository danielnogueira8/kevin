import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title:
    "The Claude Customer Success Team: 7 Agents, One Account Brain — Kevin Lau",
  description:
    "An entire Claude AI customer success team. 6 Claude customer success agents with one job each, and 1 Head of Customer Success agent that runs them, all sharing one memory, one voice and one set of rules. Free setup guide.",
};

const resource = {
  slug: "claude-customer-success-team",
  eyebrow: "Free setup guide",
  title: "The Claude Customer Success Team",
  subtitle:
    "Most people use Claude like a tool: open a chat, paste in the account, write one email, close the tab, and tomorrow it knows nothing about your customers, your voice, or who went quiet last week. Single-player AI is the easy half, and getting a whole team onto one system is the hard half. So I built a team of agents that share one memory, one voice and one set of rules: 6 Claude customer success agents, one job each, and 1 Head of Customer Success agent that runs them.",
  bullets: [
    "Health Analyst: watches for accounts going quiet and flags the ones worth a call this week",
    "Account Intelligence: builds the brief on every account before anyone gets on a call",
    "Advocacy Scout: finds the happy customers ready to be a reference or a case study, and drafts the ask",
    "Renewal Desk: renewal and expansion emails written from the brief, never from a template",
    "Concierge: drafts replies to customer emails, tickets and pushback, hands the hot ones to you",
    "Revenue Analyst: one-page weekly renewal report, shared behind a private link",
  ],
  description:
    "The Head of Customer Success starts the day with a brief on who needs you, holds the decision queue, and closes the day with a handoff so nothing gets lost. Nothing reaches a customer without you approving it, and that's a rule the agents can't override. Each agent has one job, and none of them start from zero, because they all read the same account brain. Instead of writing random prompts, you drop one folder into Claude, fill in your accounts once, and it remembers tomorrow what you told it today. I've spent 15+ years in post-sale, and took net dollar retention from 95% to 108% across 50,000+ accounts. The thing that changes how a CS team works is shared memory, not a better prompt.",
  format: "Agent team",
  coverEmoji: "🤝",
  coverImage: "/assets/claude_agents.png",
  coverImageAlt:
    "The Claude Customer Success Team — 7 agents, one account brain",
  coverAspectRatio: "1099 / 1431",
  downloadUrl:
    "https://glimmer-farmhouse-441.notion.site/The-Claude-Customer-Success-Team-7-Agents-One-Account-Brain-Setup-Guide-3de93aa14ae481b88cc7c8073053afe0?source=copy_link",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
