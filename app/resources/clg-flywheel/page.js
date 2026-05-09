import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "The AI-Powered CLG Flywheel — Kevin Lau",
  description:
    "A free playbook on wiring adoption, retention, expansion, and advocacy into one compounding customer-led growth system.",
};

const resource = {
  slug: "clg-flywheel",
  eyebrow: "Free playbook",
  title: "The AI-Powered CLG Flywheel",
  subtitle:
    "Wire adoption, retention, expansion, and advocacy into one compounding system.",
  description:
    "The exact framework I use to turn post-sale into a measurable revenue engine — without hiring a bigger team.",
  bullets: [
    "The 4 stages of the modern CLG flywheel (and where most teams leak revenue)",
    "How to plug AI into each stage to compress cycle time",
    "Metrics that actually predict expansion (not just lagging NRR)",
    "A 30-day rollout plan you can run with your existing CS + marketing stack",
  ],
  pages: 18,
  format: "PDF",
  coverEmoji: "🎯",
  // Placeholder destination until the real PDF is ready. When you have the
  // asset, either point this at /assets/clg-flywheel.pdf (drop the file in
  // /public/assets/) or a CDN link.
  downloadUrl: "/resources/clg-flywheel/download",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
