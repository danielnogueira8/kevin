import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "The 24 Revenue Agents: How Each One Is Built — Kevin Lau",
  description:
    "24 AI revenue agents to build for 2027, across finding accounts, account research, a company brain, writing in your voice, replies and inbound, content, and keeping customers. Free guide with the tools and prompts behind each one.",
};

const resource = {
  slug: "2027-revenue-agents",
  eyebrow: "Free agent guide",
  title: "The 24 Revenue Agents",
  subtitle:
    "No need to pay $10k+ a month for fractional GTM work. The hardest part about building agents isn't the tools, it's knowing what you should actually build. These are the 24 revenue agents I'd start with for 2027, and how each one is built.",
  bullets: [
    "Find the accounts: lookalikes of your closed-won customers, ICP people engaging with your posts, your profile and your competitors, plus hiring, funding and tech stack signals",
    "Know the account: enrichment that learns which data provider works best, ICP checks before anyone hits a list, one-page account briefs and meeting prep",
    "The brain and the vault: a company brain that searches every call, playbook and objection, and a people vault that remembers everyone your agents find",
    "Write in your voice: personalized details per account, something useful to send with the first email, and a check of every claim against your own data",
    "Replies and inbound: positive replies scored and sent to Slack, lead routing, and a personal email to new inbound leads within minutes",
    "Content, plus keep and grow customers: posts drafted from your own calls, customers going quiet months before renewal, and the ones ready to be a case study or spend more",
  ],
  description:
    "Each agent has one job, sorted into the seven places revenue actually gets made or lost, from the first account you find to the renewal you keep. For every one I wrote down how I built it, which tools I use, and how the prompts work, so you're not starting from a blank page. The agents all check your own database before looking anywhere else, so what one learns, the rest can use. All 24 are free.",
  format: "Agent guide",
  coverEmoji: "🤖",
  coverImage: "/assets/revenue_agents.gif",
  coverImageAlt: "The 24 revenue agents for 2027, grouped into seven categories",
  coverAspectRatio: "864 / 1080",
  downloadUrl:
    "https://glimmer-farmhouse-441.notion.site/The-24-Revenue-Agents-How-Each-One-Is-Built-6c193aa14ae4831b8c1401f5e8ab0104?source=copy_link",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
