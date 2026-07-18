import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "The Ultimate Claude Guide for B2B Revenue Teams — Kevin Lau",
  description:
    "The guide I wish I'd had: how to move Claude from single-player to a full post-sale revenue system. For anyone who owns pipeline, retention, or expansion, not just customer marketers.",
};

const resource = {
  slug: "claude-guide-b2b-revenue",
  eyebrow: "Free guide",
  title: "The Ultimate Claude Guide for B2B Revenue Teams",
  subtitle:
    "Everyone in B2B uses Claude now. Most of us are still using it to reword emails, one person, one prompt, one tab, nothing compounds. I spent the last year building my entire post-sale system inside Claude: 135 agents across seven pillars, a copilot trained on 15 years of my work, an app I shipped in a weekend as a non-technical marketer. This is the guide I wish I'd had. Written for anyone who owns revenue, not just customer marketers. If you're responsible for pipeline, retention, or expansion, it's for you.",
  bullets: [
    "The setup that makes Claude actually know your business, so you stop re-explaining your ICP, your metrics, and your standards in every single chat",
    "How to turn your customer base into your cheapest source of pipeline: the advocacy system behind $50M+ in influenced pipeline and a 40% lift in win rates",
    "How to turn scattered revenue data into decisions: which accounts are about to expand, which are about to leave, and what each one is worth in NRR",
    "How to move your team from single-player to multi-player: shared agents running parts of the system, and how to scale that across the org without leadership pulling the plug",
  ],
  format: "Guide",
  coverEmoji: "📘",
  coverImage: "/assets/CLAUDE_GUIDE.png",
  coverImageAlt: "The Ultimate Claude Guide for B2B Revenue Teams cover",
  downloadUrl:
    "https://glimmer-farmhouse-441.notion.site/The-Ultimate-Claude-Guide-for-B2B-Revenue-Teams-3a093aa14ae4806aa46eecf23df9fe3a?source=copy_link",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
