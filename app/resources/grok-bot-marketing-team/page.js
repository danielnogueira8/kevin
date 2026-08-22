import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title:
    "My Grok Bot Marketing Team: 8 Roles, Set Up in an Afternoon — Kevin Lau",
  description:
    "xAI just shipped Grok Bot and it works like texting a coworker. Eight B2B marketing roles you can staff inside it — competitive signal, campaign research, repurposing, outreach, pipeline reporting, inbox triage, advocacy, and expansion. Free.",
};

const resource = {
  slug: "grok-bot-marketing-team",
  eyebrow: "Free build",
  title: "My Grok Bot Marketing Team",
  subtitle:
    "8 roles, set up in an afternoon. xAI just released Grok Bot and it's one of the best products I've used. It works like texting a coworker. It even looks like WhatsApp. No prompts. No workflow builder. You message a bot, it does the job, and it keeps working after you close your laptop. And you don't just get one assistant — you can have a full team. @ them in the same chat and they can work together. So I mapped out what a full B2B marketing team could look like inside it.",
  bullets: [
    "Competitive Signal Bot — watches competitor pricing pages, job posts and launches, then messages you when something changes.",
    "Campaign Research Bot — pulls together the market, the audience and what's worked before, then gives you a brief.",
    "Content Repurposer — turns one webinar into a week of posts that sound like you.",
    "Outreach Bot — researches each prospect and writes an email based on something specific about them.",
    "Pipeline Report Bot — you record yourself making the report once, then it does it every Friday.",
    "Inbox Triage Bot — sorts what actually needs your attention and drafts the replies.",
    "Advocate Scout — finds customers who might be ready to share their story, before sales even has to ask.",
    "Expansion Watcher — spots accounts that are growing and tells you which ones might be ready for the next tier.",
  ],
  description:
    "Setup is pretty simple. You tell the bot what you want it to do in plain English and it starts working. For harder jobs, you can screen-record yourself doing it once and show the bot how it's done. Hiring another person to cover this kind of work can cost $150K+ a year. Most teams don't need another hire. They just need help getting this stuff done.",
  format: "Build guide",
  coverEmoji: "💬",
  coverImage: "/assets/grok_bot_team.jpg",
  coverImageAlt:
    "My Grok Bot Marketing Team — 8 roles, set up in an afternoon",
  downloadUrl:
    "https://glimmer-farmhouse-441.notion.site/My-Grok-Bot-Marketing-Team-8-Roles-Set-Up-in-an-Afternoon-3c493aa14ae4802e9b1bc2f7e7c6b391?source=copy_link",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
