import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "The AI Marketing Engine for B2B Teams: 5 Workflows — Kevin Lau",
  description:
    "Campaign briefs, content, customer proof, nurture, and reporting — the 5 jobs B2B marketing teams still do by hand, rebuilt as Claude workflows. Free PDF.",
};

const resource = {
  slug: "ai-marketing-engine",
  eyebrow: "Free PDF",
  title: "The AI Marketing Engine for B2B Teams",
  subtitle:
    "Most teams ask for more people or another tool. The issue is usually simpler: five important jobs are still being done by hand. Campaign briefs start from a blank page. Good webinars become one post, then get forgotten. Customer proof sits inside call recordings. Nurture emails get planned but never written. Monday reporting takes half a day. This is all five, rebuilt as workflows that run in Claude — nothing to code, connect, or send to engineering.",
  bullets: [
    "The Scoring Table — which workflow to fix first, based on where your week actually goes.",
    "Workflow 01, Campaign Brief Builder — ICP and past winners in, full brief out.",
    "Workflow 02, Content Multiplier — one webinar turned into a month of content.",
    "Workflow 03, Proof Assembler — a call transcript turned into a drafted case study.",
    "Workflow 04, Nurture Builder — the sequences you keep planning, actually written.",
    "Workflow 05, Funnel Readout — exports in, one honest pipeline readout out.",
    "The full copy-paste prompt for all five, plus the 30-day rollout plan to have the whole engine running.",
  ],
  format: "PDF",
  coverEmoji: "⚙️",
  coverImage: "/assets/ai-marketing-engine.png",
  coverImageAlt:
    "The AI Marketing Engine for B2B Teams — 5 Claude workflows PDF cover",
  downloadUrl:
    "https://drive.google.com/file/d/1tmOBQnpsRgLJK8t5bnO_RuKjqeT-Iype/view",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
