/**
 * Long-form guides hosted on the site at /guides/<slug>, laid out like a
 * playbook: a sidebar with an "On this page" index, a proof band, then numbered
 * sections built from the blocks below.
 *
 * Each one is converted from its Notion setup guide and keeps Kevin's copy word
 * for word. To publish a new one, add its module to `reports`: the route, the
 * /resources library and the schema pick it up. `landingSlug` is the existing
 * Substack-gated landing page at /resources/<landingSlug>, whose unlock button
 * opens the guide. Guides live under /guides so they never collide with the
 * landing pages under /resources.
 *
 * Text markup: **bold**, ==accent==, `code` and [label](url).
 *
 * Block types:
 *   p, lead, h3, h4                 text
 *   list { items, ordered?, arrow? } arrow lists use Kevin's → markers
 *   code { label, text, pre? }      monospace panel with a copy button; pre keeps file trees unwrapped
 *   table { head, rows }
 *   callout { tone: accent|light|warn, emoji, title, body[] }
 *   quote { text }                  pull quote
 *   image { src, alt, width, height }
 *   card { id, num, title, summary, blocks }  collapsible entry (a job, a role)
 *   link { href, title, detail, action }      outbound resource, e.g. a folder
 *   cta { href, label, detail }     the fit-call button
 */

import muse from "./muse-customer-marketing";
import csTeam from "./claude-customer-success-team";
import b2bTeam from "./b2b-marketing-team";

export const reports = [muse, csTeam, b2bTeam];

export function getReport(slug) {
  return reports.find((r) => r.slug === slug);
}
