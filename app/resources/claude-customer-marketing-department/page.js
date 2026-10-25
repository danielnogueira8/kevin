import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "The Complete Claude Customer Marketing Department — Kevin Lau",
  description:
    "A complete Customer Marketing Department inside Claude with 69 ready-to-use resources: 6 specialized Claude agents, 24 reusable skills, 30 prompts, 6 end-to-end workflows and 3 playbooks, from the first login to the renewal. Free.",
};

const resource = {
  slug: "claude-customer-marketing-department",
  eyebrow: "Free access",
  title: "The Complete Claude Customer Marketing Department",
  subtitle:
    "A lot of customer marketing teams still only use Claude to write emails and case studies. But it can support almost every stage of the customer lifecycle. So I built a complete Customer Marketing Department in Claude with 69 ready-to-use resources.",
  bullets: [
    "Onboarding & Adoption: Define first value, catch stalled accounts and write the nudge that gets them moving.",
    "Customer Advocacy: Score who's ready to be a reference, draft the case study from one call and match advocates to live deals.",
    "Community & Education: Answer the questions nobody got to and turn repeat tickets into help articles.",
    "Voice of Customer: Turn tickets, surveys and calls into themes, ranked by the revenue behind them.",
    "Renewals & Expansion: Spot quiet accounts months early and write the renewal and upgrade plays.",
    "Executive Engagement: Prep every QBR and send the exec follow-up while the meeting is still fresh.",
  ],
  description:
    "6 specialized Claude agents, 24 reusable Claude skills, 30 ready-to-use prompts, 6 end-to-end workflows and 3 practical playbooks. Everything is designed to help customer marketing, CX and advocacy teams run post-sale as a structured, repeatable system.",
  format: "Claude kit",
  coverEmoji: "🏢",
  coverImage: "/assets/claude_customer_marketing_dept.png",
  coverImageAlt:
    "The Complete Claude Customer Marketing Department: 6 agents, 24 skills, 30 prompts, 6 workflows and 3 playbooks",
  coverAspectRatio: "1080 / 1350",
  downloadUrl: "/guides/claude-customer-marketing-department",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
