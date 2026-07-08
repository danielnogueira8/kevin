import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "15 AI Agents for Customer Marketing & Post-Sale Teams — Kevin Lau",
  description:
    "A free library of 15 Claude agents for post-sale revenue teams. One agent, one job — built around retention, advocacy, community, voice of customer, and executive engagement.",
};

const resource = {
  slug: "15-ai-agents-post-sale",
  eyebrow: "Free agent library",
  title: "15 AI Agents for Customer Marketing & Post-Sale Teams",
  subtitle:
    "I built 15 AI agents for customer marketing and post-sale teams — and I'm giving them away free. One clever chatbot won't fix your retention. A team of specialists will: one agent, one job, each built around how post-sale revenue actually works. Most post-sale teams are holding 7 pillars together with spreadsheets and willpower, then catching heat for the ones they never got to. These 15 agents do the pushing for you — and you can set them up in a weekend.",
  bullets: [
    "Retention & lifecycle — spot quiet accounts before they churn, score who's at risk, and run renewals so they stop being last-minute",
    "Advocacy — find your next advocates before sales asks, match any deal to the right reference in minutes, and prove the revenue advocacy drove",
    "Community — surface members ready to become champions, turn activity into a weekly health check, and show what community saves and earns",
    "Voice of customer — turn feedback into owned themes, dig into every churn so it stops repeating, and flag accounts ready to expand",
    "Comms & executive engagement — see every customer message going out, get alerted when a key contact leaves, and draft your QBR in minutes",
    "Each agent ships with a clear role, no-code Claude setup, ready-to-use prompts, the workflow logic, and real B2B SaaS examples",
  ],
  format: "Agent library",
  coverEmoji: "🤖",
  coverImage: "/assets/agents.png",
  coverImageAlt:
    "15 AI Agents for Customer Marketing and Post-Sale Teams cover",
  downloadUrl:
    "https://glimmer-farmhouse-441.notion.site/15-AI-Agents-for-Customer-Marketing-and-Post-Sale-Teams-39793aa14ae4801bafc9e1f43b8e3089?source=copy_link",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
