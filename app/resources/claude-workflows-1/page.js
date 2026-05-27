import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "Claude Workflows for Post-Sale Operators — Kevin Lau",
  description:
    "10 Claude workflows for senior post-sale operators — with prompts, inputs, and example outputs included. Small workflows pointed at the one problem bleeding revenue this quarter.",
};

const resource = {
  slug: "claude-workflows-1",
  eyebrow: "Free workflows",
  title: "Claude Workflows for Post-Sale Operators",
  subtitle:
    "Most AI tools don't survive 6 weeks inside a post-sale team. The teams winning with AI pick the one problem that matters this quarter, build a Claude workflow for it, ship it Monday, run it weekly, and measure what moved. So I built 10 Claude workflows for senior post-sale operators — with prompts, inputs, and example outputs included.",
  bullets: [
    "Renewal risk briefs from your CRM export",
    "Advocate-to-deal matching for open sales opportunities",
    "VoC theme synthesis from tickets + NPS verbatim",
    "Community super-user scoring (weekly)",
    "Executive QBR briefs from account data",
    "Win/loss synthesis into customer marketing themes",
    "Adoption nudges for the bottom 10% of accounts",
    "Customer reference matching in under 24 hours",
    "Expansion opportunities ranked by named account signals",
    "Post-sale board update bullets",
  ],
  format: "Workflow pack",
  coverEmoji: "⚙️",
  coverImage: "/assets/claude-workflows-1.png",
  coverImageAlt: "Claude Workflows for Post-Sale Operators cover",
  downloadUrl:
    "https://glimmer-farmhouse-441.notion.site/Claude-Workflows-for-Post-Sale-Operators-36693aa14ae4810cb2c8d45adee6ece5?source=copy_link",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
