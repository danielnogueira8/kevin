import { notFound } from "next/navigation";

import ReportPage from "../../components/report/ReportPage";
import { getReport, reports } from "../../../lib/reports";
import { SITE_URL } from "../../../lib/site";

// The on-site guides from lib/reports. Landing pages stay under /resources.
export const dynamicParams = false;

export function generateStaticParams() {
  return reports.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const report = getReport(slug);
  if (!report) return {};
  const url = `${SITE_URL}/guides/${report.slug}`;
  return {
    title: `${report.title} | Kevin Lau`,
    description: report.description,
    alternates: { canonical: url },
    openGraph: {
      title: report.title,
      description: report.description,
      url,
      type: "article",
      images: report.cover ? [{ url: `${SITE_URL}${report.cover.src}`, alt: report.cover.alt }] : undefined,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const report = getReport(slug);
  if (!report) notFound();
  return <ReportPage report={report} />;
}
