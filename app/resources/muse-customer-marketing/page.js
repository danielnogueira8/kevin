import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "Muse for Customer Marketing: 7 Jobs, One per Pillar — Kevin Lau",
  description:
    "Meta's Muse connected to a full post-sale stack: 7 customer marketing jobs it runs for you, from onboarding milestones and reference rotation to community replies, help articles, send limits, feature requests and exec sponsor outreach. Free setup guide.",
};

const resource = {
  slug: "muse-customer-marketing",
  eyebrow: "Free setup guide",
  title: "Muse for Customer Marketing: 7 Jobs, One per Pillar",
  subtitle:
    "I connected Meta's Muse to a full post-sale stack. Now it runs the 70% of customer marketing that doesn't need you, and nothing reaches a customer until you hit approve.",
  bullets: [
    "Gets new customers to value: tracks every new account against four milestones and drafts the nudge for the CSM when one stalls for 14 days",
    "Rests your tired references: counts every reference call and case study ask this quarter, gives anyone asked twice a break, and sends the next ask to someone who's never been asked",
    "Answers the quiet threads: finds community questions with no reply after 24 hours and drafts a reply that tags three members who've answered something similar",
    "Writes the missing help articles: groups last week's tickets by the question behind them and drafts an article for anything asked 20+ times",
    "Stops you spamming customers: pauses marketing sends to any account that got more than three messages in seven days, and shows you who sent what",
    "Brings product the real list: ranks the top five feature requests by the revenue of the accounts asking, and sends it to product every month",
    "Keeps exec sponsors warm: flags top accounts where execs haven't talked in 90 days and drafts a reason to reach out, built on a result they actually got",
  ],
  description:
    "It also sends a one-page summary every Monday, pulls together QBR docs from real usage, and drafts case studies from the wins your CSMs log. No spreadsheets and no chasing six teams for updates. The setup for all 7 jobs is in the guide, and it's free.",
  format: "Setup guide",
  coverEmoji: "🧭",
  coverVideo: "/assets/kevin_lau_muse_connect.mp4",
  coverImageAlt: "Meta's Muse connected to a full post-sale stack",
  coverAspectRatio: "16 / 9",
  downloadUrl:
    "https://glimmer-farmhouse-441.notion.site/Muse-for-Customer-Marketing-7-Jobs-One-per-Pillar-Setup-Guide-3eb93aa14ae48132b10ff4e60d4a6ad8?source=copy_link",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
