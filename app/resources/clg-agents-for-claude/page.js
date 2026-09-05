import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "Customer-Led Growth Agents for Claude — Kevin Lau",
  description:
    "Kevin Lau's entire post-sale agent team, open-sourced. Nine Claude agents that run a full customer marketing department: Champion Scout, At-Risk Flag, Sentiment Cluster, Reference Match, Briefing Prep, CLG Signal Router, Proof Library Orchestrator, Account Intelligence Hub, and Revenue Attribution Engine. Free.",
};

const resource = {
  slug: "clg-agents-for-claude",
  eyebrow: "Free access",
  title: "Customer-Led Growth Agents for Claude",
  subtitle:
    "I open-sourced my entire post-sale agent team. A full customer marketing department. Each agent gets a job, and each one runs it on its own, day and night.",
  bullets: [
    "Champion Scout · scores every account on PROP, product usage, relationship strength, outcomes, persona fit. Never nominates on gut feel.",
    "At-Risk Flag · watches usage and sentiment for the accounts going quiet, raises them long before the renewal call.",
    "Sentiment Cluster · groups raw customer feedback by theme and repetition. Never builds a trend out of one loud voice.",
    "Reference Match · matches a live deal to the customer who already solved that problem, holds every ask for your yes.",
    "Briefing Prep · builds the exec brief before the QBR, pulls only from what the account actually did.",
    "CLG Signal Router · decides which pillar owns an incoming signal and who picks it up. Never routes the same one twice.",
    "Proof Library Orchestrator · turns one captured outcome into the quote, the slide and the case study, tags where each version can be used.",
    "Account Intelligence Hub · holds one view of the account across CS, support, community and product. Precise with numbers, never invents a stat.",
    "Revenue Attribution Engine · ties advocacy, community and education activity back to retention and expansion, in the language finance already uses.",
  ],
  description:
    "Here's how they chain together: Champion Scout surfaces every account scoring 70+ on PROP, you pick 10, Proof Library Orchestrator captures the outcome and builds the assets, Reference Match puts them in front of the deals that need them, and Revenue Attribution Engine ties the result back to revenue. It never asks a customer for anything without an exact yes. All live and open source. Install it inside Claude and turn it into your post-sale team.",
  format: "Agent system",
  coverEmoji: "🤖",
  coverImage: "/assets/grok_team.png",
  coverImageAlt:
    "Customer-Led Growth Agents for Claude — a nine-agent post-sale customer marketing team",
  coverAspectRatio: "3200 / 4000",
  downloadUrl:
    "https://glimmer-farmhouse-441.notion.site/3d293aa14ae48094a7eae4a9140cb01c?source=copy_link",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
