import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "The Claude Chief of Staff for Customer Success — Kevin Lau",
  description:
    "A chief of staff in Claude that plans the customer success week, runs 19 agents through a project manager and a quality check, and brings you a Monday brief with only the decisions that need you. Full setup guide, free.",
};

const resource = {
  slug: "claude-cs-chief-of-staff",
  eyebrow: "Free access",
  title: "The Claude Chief of Staff for Customer Success",
  subtitle:
    "Most CS leaders spend their week chasing CSMs for updates, rebuilding the same renewal list and walking into exec meetings with numbers nobody checked. So I built a chief of staff in Claude that reads every account, plans the week, hands each agent one job and brings you a Monday brief with only the calls that need you.",
  bullets: [
    "The chief of staff: reads the account brain, plans the week and assigns all 19 agents.",
    "The project manager: runs the handoffs, so no two agents research the same account twice.",
    "5 signal agents: watch usage, tickets, calls and health scores, and flag churn risk while there's still time.",
    "3 account agents: handle onboarding, the brief before every call and the QBR deck.",
    "3 revenue agents: plan every renewal 120 days out, spot accounts hitting seat limits and draft save plans.",
    "3 voice of customer agents: read the surveys, group the themes and brief product every month.",
    "2 advocacy agents: find the stories worth telling and match advocates to open deals, scored with the PROP model.",
    "2 quality agents: check every number and claim before anything lands in your brief.",
  ],
  description:
    "Nothing reaches a customer without a human, and only decisions reach you. The guide has every Skill file, the Monday brief template, the schedule and the decision rules, and the first brief runs in about 15 minutes.",
  format: "Setup guide",
  coverEmoji: "🤖",
  coverImage: "/assets/claude_cs_chief_of_staff.gif",
  coverImageAlt:
    "The Claude Chief of Staff for Customer Success: a chief of staff and a project manager running 18 specialist agents into one verified Monday brief",
  coverAspectRatio: "1080 / 1350",
  downloadUrl: "/guides/claude-cs-chief-of-staff",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
