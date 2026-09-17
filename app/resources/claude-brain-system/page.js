import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title:
    "The Claude Brain System for Customer Success: 22 Skills and 7 Agents — Kevin Lau",
  description:
    "A complete Claude Brain System for Customer Success teams. 22 specialist Claude Skills and a 7-agent team that give your CS team one shared memory of every account, from the kickoff call to the renewal. Free.",
};

const resource = {
  slug: "claude-brain-system",
  eyebrow: "Free access",
  title: "The Claude Brain System for Customer Success",
  subtitle:
    "I built a collection of 22 specialist Claude Skills and a 7-agent team designed to give your CS team one shared memory of every account, from the kickoff call to the renewal, so your AI stops starting from zero every time you open it.",
  bullets: [
    "Memory between sessions",
    "Importing your past ChatGPT, Claude and Codex chats",
    "Account context (contacts, goals, what they bought and why)",
    "Call notes and early signs an account is going quiet",
    "Searching everything your team knows about a customer",
    "Turning lessons from lost renewals into standing rules",
    "Building your own agents",
    "Daily account briefs and end-of-day handoffs",
    "Keeping the account history clean",
    "Renewal reporting behind a private link",
    "Sharing it all with sales, support and product",
  ],
  description:
    "Inside you'll find 22 specialist Claude Skills and 7 ready-to-run agents, each built to solve a specific challenge in running post-sale on AI. The goal isn't to replace your CSMs. It's to stop the re-explaining, keep every customer conversation and promise in one place, and let each session pick up exactly where the last one ended. So your team can spend more time with customers, and none of it reminding the AI who they are. Whether you're a CS leader, CSM, customer marketer or founder, I hope you'll find something useful inside. I'm giving away the complete system.",
  format: "Skill pack",
  coverEmoji: "🧠",
  coverImage: "/assets/claude_brain_system.png",
  coverImageAlt:
    "The Claude Brain System for Customer Success — 22 Claude Skills and 7 agents",
  coverAspectRatio: "2160 / 2700",
  downloadUrl:
    "https://glimmer-farmhouse-441.notion.site/The-Claude-Brain-System-for-Customer-Success-22-Skills-and-7-Agents-3de93aa14ae4813aa643e64d44bf133a?source=copy_link",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
