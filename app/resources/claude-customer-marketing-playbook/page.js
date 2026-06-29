import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "The Claude for Customer Marketing Playbook — Kevin Lau",
  description:
    "Practical AI workflows for post-sale teams. A post-sale-specific playbook pulled from the real system built across the seven CLG pillars as a non-technical marketer.",
};

const resource = {
  slug: "claude-customer-marketing-playbook",
  eyebrow: "Free playbook",
  title: "The Claude for Customer Marketing Playbook",
  subtitle:
    "Most customer marketers are using maybe 9% of what Claude can actually do. The gap between post-sale teams getting real leverage from AI and the teams that aren't has nothing to do with the tool — it's knowing the prompts and the use cases for the work we actually do. This is a post-sale-specific playbook, pulled from the real system I built across the seven CLG pillars as a non-technical marketer.",
  bullets: [
    "Build customer-led growth workflows directly, with zero technical background",
    "Stand up a working tool using only your voice with Voice Mode on your phone",
    "Build interactive retention and expansion calculators execs actually use",
    "Flex NRR, expansion, and pillar maturity assumptions in real time",
    "Keep the human review step that gets Claude's 80-90% to a real 100%",
  ],
  format: "Playbook",
  coverEmoji: "📘",
  coverImage: "/assets/claude-customer-marketing-playbook.png",
  coverImageAlt: "The Claude for Customer Marketing Playbook cover",
  downloadUrl:
    "https://glimmer-farmhouse-441.notion.site/The-Claude-for-Customer-Marketing-Playbook-Practical-AI-Workflows-for-Post-Sale-Teams-38a93aa14ae48006abe8c35d73647ca3?source=copy_link",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
