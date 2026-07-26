import LeadMagnetGate from "../../components/LeadMagnetGate";

export const metadata = {
  title:
    "How Snowflake, HubSpot, Atlassian & Notion Grew From the Customers They Already Had — Kevin Lau",
  description:
    "4 B2B companies, billions in ARR. Their biggest growth lever was the customers they already had. The exact playbook, mapped and ready to steal. Free.",
};

const resource = {
  slug: "b2b-retention-playbook",
  eyebrow: "Free playbook",
  title: "They Grew From the Customers They Already Had",
  subtitle:
    "4 B2B companies. Billions in ARR. Snowflake, HubSpot, Atlassian, and Notion never chose between demand gen and retention — they built loops where every customer they kept made the next one easier to win. I mapped exactly how each one did it and turned it into a playbook you can steal.",
  bullets: [
    "How Snowflake hit a record 158% net revenue retention by making expansion, not new logos, the growth engine.",
    "How HubSpot turned content and community into an acquisition machine that keeps compounding for free.",
    "How Atlassian scaled into a $20B+ company with almost no traditional sales team.",
    "How Notion turned its own users into a volunteer marketing army through community and templates.",
    "The 4 principles all four of them share, and the 3 leaks quietly draining most B2B pipelines right now.",
  ],
  format: "Playbook",
  coverEmoji: "📈",
  coverImage: "/assets/b2bcompanies.png",
  coverImageAlt:
    "How Snowflake, HubSpot, Atlassian, and Notion grew from the customers they already had — playbook cover",
  downloadUrl:
    "https://glimmer-farmhouse-441.notion.site/How-Snowflake-HubSpot-Atlassian-Notion-Grew-From-the-Customers-They-Already-Had-3a893aa14ae480bc8970e7d39c3b8400?source=copy_link",
};

export default function Page() {
  return <LeadMagnetGate resource={resource} />;
}
