import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "The Claude Cowork Customer-Led Growth Playbook — Kevin Lau",
  description:
    "A free 20-file playbook that teaches Claude Cowork how your post-sale function actually runs. Setup templates, context modules, scheduled workflows, and filled-in examples for customer-led growth teams.",
};

const resource = {
  slug: "clg-cowork-playbook",
  eyebrow: "Free playbook",
  title: "The Claude Cowork Customer-Led Growth Playbook",
  subtitle:
    "I finally cracked Claude Cowork for customer-led growth teams — 20 files, the full playbook. Most post-sale leaders open Cowork and treat it like ChatGPT with folder access: ask one question, get one document, close it. That's leaving 95% of the tool on the table. What changes everything is the context layer — a small set of files that teach Cowork how your post-sale function actually runs. With it, Cowork carries your SOPs, your 7 pillars, your NRR targets, and your standards, then builds the health report, preps the QBR, and drafts customer updates on schedule, without you. Copy, fill in the blanks, run.",
  bullets: [
    "5 setup templates by post-sale function — lifecycle, advocacy, community, voice of customer, and executive engagement",
    "7 plug-in context modules — company profile, the 7 pillars, KPIs & NRR targets, CS/CM org roles, data sources, brand tone, and escalation rules",
    "6 scheduled workflow files — Monday health report, renewal risk sweep, QBR prep, advocacy-to-deal match, leadership readout, and quarter-end metrics",
    "2 filled-in examples from real B2B SaaS post-sale builds — works with Gmail, Google Drive, Slack, Notion, Sheets, and more",
  ],
  format: "Playbook",
  coverEmoji: "📗",
  coverImage: "/assets/clgplaybook.png",
  coverImageAlt: "The Claude Cowork Customer-Led Growth Playbook cover",
  downloadUrl:
    "https://glimmer-farmhouse-441.notion.site/The-Claude-Cowork-Customer-Led-Growth-Playbook-39793aa14ae4804fa0cfd77d04da90d2?source=copy_link",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
