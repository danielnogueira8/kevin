import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title:
    "The 12 B2B Revenue Skills: Build Numbers That Survive the Business Review — Kevin Lau",
  description:
    "Twelve Claude skills across the full revenue motion — ICP, campaigns, positioning, pipeline, attribution, onboarding, churn, expansion, advocacy, proof, and community economics. Every one runs the play and the proof it worked, side by side. Free.",
};

const resource = {
  slug: "b2b-revenue-skills",
  eyebrow: "Free Claude install",
  title: "The 12 B2B Revenue Skills",
  subtitle:
    "Every one runs the play and the proof it worked, side by side. Most revenue leaders think AI can't touch the business case — too much context, too much on the line. They're half right. Ask Claude what your community is worth twice, phrased two ways, and you get two numbers. Neither one survives the first follow-up question. An agent with no context is a very confident stranger. That's not a business case, that's a number with a countdown on it, and the timer runs out in the business review. Skills fix that: you write the methodology once, Claude loads it every time the job matches, and NRR means the same thing in March and in October.",
  bullets: [
    "ICP definition and segment prioritization.",
    "Campaign briefs and channel mix.",
    "Competitive positioning and battlecards.",
    "Content production and repurposing.",
    "Pipeline reporting and stage-to-stage leak analysis.",
    "Attribution and revenue modeling.",
    "Onboarding and time to first value.",
    "Churn risk scoring and renewal forecasting.",
    "Expansion signals and account qualification.",
    "Advocate scoring and reference matching.",
    "Case study and proof production.",
    "Community economics and the retention case.",
  ],
  description:
    "Each one outputs the play, the number it moves, how that number is defined, the data it pulls from by name, what has to be tracked before the quarter starts instead of after, and where the claim breaks under a follow-up question. Because a program that drove $21.1M and can't survive that question didn't prove anything. It bought you one quarter.",
  format: "Skill pack",
  coverEmoji: "📊",
  coverImage: "/assets/b2b-revenue-claude-skills.png",
  coverImageAlt:
    "The 12 B2B Revenue Skills — build numbers that survive the business review",
  downloadUrl:
    "https://glimmer-farmhouse-441.notion.site/The-12-B2B-Revenue-Skills-Build-Numbers-That-Survive-the-Business-Review-3c193aa14ae480c4a378dbfd3558e0ae?source=copy_link",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
