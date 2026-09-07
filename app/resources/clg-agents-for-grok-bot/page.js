import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "Customer-Led Growth Agents for Grok Bot — Kevin Lau",
  description:
    "Kevin Lau's entire B2B marketing agent team, given away. Nine AI agents that take the customers who already said yes and turn them into pipeline, proof and retention: Champion Scout, At-Risk Flag, Sentiment Cluster, Reference Match, Briefing Prep, Signal Router, Proof Library Orchestrator, Account Intelligence Hub, and Revenue Attribution Engine. Free.",
};

const resource = {
  slug: "clg-agents-for-grok-bot",
  eyebrow: "Free access",
  title: "Customer-Led Growth Agents for Grok Bot",
  subtitle:
    "I'm giving away my entire B2B marketing agent team. 9 AI agents that take the customers who already said yes and turn them into pipeline, proof and retention. Each one has a job. Each one runs it on its own, day and night.",
  bullets: [
    "Champion Scout · finds the customers worth building a campaign around, scored on usage, results and relationship strength, not on who's loudest",
    "At-Risk Flag · spots the accounts going quiet long before the renewal, so churn stops arriving as a surprise",
    "Sentiment Cluster · turns raw customer feedback into themes you can write messaging from, never a trend out of one loud voice",
    "Reference Match · pairs a live deal with the customer who already solved that exact problem",
    "Briefing Prep · writes the exec brief before the QBR from what the account actually did",
    "Signal Router · decides who owns an incoming signal, never routes the same one twice",
    "Proof Library Orchestrator · turns one customer win into the quote, the slide and the case study, tagged for where each can run",
    "Account Intelligence Hub · one view of the account across CS, support, community and product, never invents a stat",
    "Revenue Attribution Engine · ties advocacy, community and education back to retention and expansion, in the language finance already uses",
  ],
  description:
    "Here's what they look like working together, start to finish: Champion Scout surfaces the customers with the strongest results → you pick 10 → Proof Library Orchestrator captures the outcome and builds the assets → Reference Match puts them in front of the deals that need them → Revenue Attribution Engine shows what it moved → and nobody asks a customer for anything without an exact yes. All live and open source. Build it inside Grok Bot and it becomes the half of your marketing team nobody ever hired.",
  format: "Agent system",
  coverEmoji: "🤖",
  coverImage: "/assets/grok_team.png",
  coverImageAlt:
    "Customer-Led Growth Agents for Grok Bot — a nine-agent B2B marketing team",
  coverAspectRatio: "3200 / 4000",
  downloadUrl:
    "https://glimmer-farmhouse-441.notion.site/3d293aa14ae48094a7eae4a9140cb01c?source=copy_link",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
