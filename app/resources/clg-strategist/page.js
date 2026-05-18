import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "The Customer-Led Growth Strategist — Kevin Lau",
  description:
    "A Claude-powered post-sale operating system: the exact system prompt, 7-pillar diagnostic, 5-layer architecture, and 90-day rebuild plan refined across Marketo, Adobe, F5, and Freshworks.",
};

const resource = {
  slug: "clg-strategist",
  eyebrow: "Free playbook",
  title: "The Customer-Led Growth Strategist",
  subtitle:
    "A world-class CLG strategist built inside Claude — the same architecture I've refined for 15 years across Marketo, Adobe, F5, and Freshworks. The playbook underneath it took NDR from 95% to 108% across 50,000+ accounts, and is now scaling the Freshworks community to 50,000+ members with 96.1% of last quarter's questions answered by other customers.",
  bullets: [
    "The exact system prompt behind the strategist",
    "A 7-pillar diagnostic that scores your post-sale function in 60 seconds",
    "The 5-layer architecture map: strategy, data, agents, orchestration, governance",
    "A 90-day post-sale rebuild plan generator, tuned to your stage and team size",
    "A starter prompt library: 15 questions that produce strategy, not summaries",
    "The Freshworks case study as a worked example for retention + community",
    "A pre-built Claude Project, ready to import in seconds",
  ],
  format: "Playbook",
  coverEmoji: "🧠",
  coverImage: "/assets/customer-led.png",
  coverImageAlt: "The Customer-Led Growth Strategist cover",
  downloadUrl:
    "https://glimmer-farmhouse-441.notion.site/The-Customer-Led-Growth-Strategist-A-Claude-Powered-Post-Sale-Operating-System-35f93aa14ae4806484b7c0fd1cd92804?source=copy_link",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
