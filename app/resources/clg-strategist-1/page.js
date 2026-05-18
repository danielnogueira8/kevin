import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "The Customer-Led Growth Strategist — Kevin Lau",
  description:
    "R.I.P. customer marketing as a support function. A Claude-powered Customer-Led Growth strategist that replaces dashboard busywork and senior-consultant decks with a real post-sale operating system — modeled on the Freshworks rebuild.",
};

const resource = {
  slug: "clg-strategist-1",
  eyebrow: "Free playbook",
  title: "The Customer-Led Growth Strategist",
  subtitle:
    "R.I.P. customer marketing as a support function. This Customer-Led Growth strategist replaces it — a senior CLG operator that runs inside your own Claude account in 10 minutes. Modeled on the Freshworks rebuild that scaled the community to 50,000+ members, with 96.1% of last quarter's questions answered by other customers and community-active customers retaining 3–4x longer.",
  bullets: [
    "The exact system prompt behind the strategist",
    "A 7-pillar diagnostic that scores your post-sale function in 60 seconds",
    "The 5-layer architecture map: strategy, data, agents, orchestration, governance",
    "A 90-day post-sale rebuild plan generator, tuned to your stage and team size",
    "A starter prompt library: 15 questions that produce strategy, not summaries",
    "The Freshworks case study — the rebuild this Strategist is modeled on",
    "A pre-built Claude Project, ready to import in seconds",
  ],
  format: "Playbook",
  coverEmoji: "🧠",
  coverImage: "/assets/customer-led-2.png",
  coverImageAlt: "The Customer-Led Growth Strategist cover",
  downloadUrl:
    "https://glimmer-farmhouse-441.notion.site/The-Customer-Led-Growth-Strategist-A-Claude-Powered-Post-Sale-Operating-System-35f93aa14ae4806484b7c0fd1cd92804?source=copy_link",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
