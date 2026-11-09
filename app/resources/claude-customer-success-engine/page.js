import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "The Claude Customer Success Engine — Kevin Lau",
  description:
    "One router and eight Claude agents that flag quiet accounts, brief every call, onboard, spot expansion, build QBRs, find advocates, plan renewals and brief product, with every draft waiting for your approval. Full setup guide, free.",
};

const resource = {
  slug: "claude-customer-success-engine",
  eyebrow: "Free access",
  title: "The Claude Customer Success Engine",
  subtitle:
    "Doing customer success properly means watching every account, walking into every call with the full history, getting new customers to first value and having every QBR, renewal plan and reference ask ready on time. So I set up 8 agents in Claude that do the first draft of all of it in the background and drop everything into one review board.",
  bullets: [
    "The scout: reads product usage, tickets, chats and the CRM, and flags the accounts going quiet.",
    "The briefer: builds a one-page brief before every customer call, from the last 90 days of history.",
    "The onboarding guide: nudges new accounts toward first value, triggered by milestones, not calendar dates.",
    "The expansion spotter: flags accounts hitting seat or usage limits and hands them over without pitching anyone.",
    "The QBR builder: builds the business review around the outcomes the customer actually got.",
    "The advocate finder: scores advocacy readiness with the PROP model and drafts the reference ask only when it's earned.",
    "The renewal desk: starts every renewal plan 120 days out and drafts the save plan when an account is at risk.",
    "The voice of customer agent: groups the feedback and tickets into one brief for product every month.",
  ],
  description:
    "Nothing reaches a customer until you approve it. The guide has every Skill file, first prompt, schedule and approval rule, and the first version runs in about 10 minutes.",
  format: "Setup guide",
  coverEmoji: "🤖",
  coverImage: "/assets/claude_customer_success_engine.gif",
  coverImageAlt:
    "The Claude Customer Success Engine: one router and eight agents running a customer success week, with every draft waiting in an approval queue",
  coverAspectRatio: "1080 / 1350",
  downloadUrl: "/guides/claude-customer-success-engine",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
