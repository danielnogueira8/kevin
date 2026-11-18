import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title: "The Claude Customer Success Team — Kevin Lau",
  description:
    "Five Claude agent squads for onboarding, education, voice of customer, renewals and advocacy: 20 agents built on 15 open-source GitHub projects, with every customer-facing draft waiting for your approval. Full setup guide, free.",
};

const resource = {
  slug: "claude-cs-team",
  eyebrow: "Free access",
  title: "The Claude Customer Success Team",
  subtitle:
    "Building agents for customer success usually means weeks of prompts, wiring every agent into your tools by hand and agents doing each other's jobs. So I started with what's already on GitHub: 15 open-source projects that cover most of the plumbing, and five squads in Claude with one job each.",
  bullets: [
    "The onboarding squad: books the kickoff, writes the setup steps and flags any account that stalls before first value.",
    "The education squad: finds the questions customers keep asking and drafts the help doc that answers each one once.",
    "The voice of customer squad: sends the surveys, groups the feedback by ARR and writes one brief for product every month.",
    "The renewals squad: scores account health, starts every renewal plan 120 days out and drafts the save plan when an account is at risk.",
    "The advocacy squad: finds the wins worth telling, scored with the PROP model, and matches the right advocate to each open deal.",
  ],
  description:
    "Nothing about price, terms or a customer ask goes out without your yes. The guide has every Skill file, the /team command, the 15 repos, the schedule and the approval rules, and the first squad runs in about 15 minutes.",
  format: "Setup guide",
  coverEmoji: "🤖",
  coverImage: "/assets/claude_cs_team.gif",
  coverImageAlt:
    "The Claude Customer Success Team: five agent squads for onboarding, education, voice of customer, renewals and advocacy, built on 15 GitHub repos",
  coverAspectRatio: "1080 / 1350",
  downloadUrl: "/guides/claude-cs-team",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
