/**
 * The Claude Customer Success Team: five agent squads (20 agents) built on
 * 15 open-source GitHub projects. Lead magnet for the 18 Nov 2026 post
 * (keyword TEAM), modelled on the "Grok Bot Teams" format. The Notion
 * resource holds the same copy.
 */
const report = {
  "slug": "claude-cs-team",
  "landingSlug": "claude-cs-team",
  "notionUrl": "https://app.notion.com/p/41c93aa14ae481bb8268d758329058db",
  "kind": "Free setup guide",
  "title": "The Claude Customer Success Team",
  "cardDescription": "Five Claude agent squads for onboarding, education, voice of customer, renewals and advocacy, built on 15 open-source GitHub projects. Skill files, the /team command, schedules and approval rules included.",
  "headline": [
    "Five squads, 20 agents,",
    "==0 built from scratch=="
  ],
  "description": "A setup guide for a customer success team built in Claude: five squads and 20 agents covering onboarding, education, voice of customer, renewals and advocacy, built on 15 open-source projects already on GitHub. Every Skill file, the /team command, the schedule and the approval rules are included.",
  "lead": "Building customer success agents usually means weeks of prompts, wiring every agent into your tools by hand, and agents doing each other's jobs. This guide starts from what's already on GitHub, gives each squad one job, and keeps everything customer-facing behind your approval.",
  "meta": [
    "Free setup guide",
    "5 squads",
    "20 agents",
    "15 GitHub repos"
  ],
  "proof": [
    {
      "label": "Squads",
      "value": "5",
      "detail": "One job each"
    },
    {
      "label": "Agents",
      "value": "20",
      "detail": "Onboarding to advocacy"
    },
    {
      "label": "First version",
      "value": "15 min",
      "detail": "The onboarding squad"
    }
  ],
  "cover": {
    "src": "/assets/claude_cs_team.gif",
    "alt": "The Claude Customer Success Team: five agent squads for onboarding, education, voice of customer, renewals and advocacy, built on 15 GitHub repos",
    "width": 1080,
    "height": 1350
  },
  "updated": "2026-11-18",
  "sections": [
    {
      "id": "read-this-first",
      "nav": "Read this first",
      "eyebrow": "Read this first",
      "heading": "Start with what ==already exists==",
      "blocks": [
        {
          "type": "p",
          "text": "Hey, I'm Kevin Lau. I've spent 16+ years in post-sale at Marketo, Adobe, F5 and Freshworks, and along the way grew the Freshworks community to 50,000 members."
        },
        {
          "type": "p",
          "text": "Building customer success agents usually means weeks of writing prompts for every role, wiring each agent into your CRM, inbox and help center by hand, and agents doing each other's jobs because nobody gave them one. Most of that work has already been done, and it's sitting on GitHub."
        },
        {
          "type": "p",
          "text": "So this guide sets up a customer success team in Claude: five squads, 20 agents, each squad with one job. The plumbing comes from 15 open-source projects, from a support agent Anthropic publishes to open-source CRM, survey and community tools. The part you write is the part that's yours: the Skill files, your playbook and your rules."
        },
        {
          "type": "quote",
          "text": "One agent doing one task is a demo. Many agents coordinating is a system."
        },
        {
          "type": "p",
          "text": "By the end of this guide you'll have the five squad Skills, a /team command that runs them, a weekly schedule and the approval rules that keep every customer-facing word behind your yes."
        },
        {
          "type": "callout",
          "tone": "accent",
          "emoji": "📬",
          "title": "Want the thinking behind the build?",
          "body": [
            "Every Thursday I publish The Customer Continuum: playbooks and POVs on adoption, retention, expansion and advocacy. [Subscribe free → kevinkennethlau.substack.com](https://kevinkennethlau.substack.com)"
          ]
        },
        {
          "type": "h3",
          "text": "What's Inside"
        },
        {
          "type": "list",
          "arrow": true,
          "items": [
            "**The 15-minute version**: the onboarding squad, if you want to see it work today",
            "**Before you start**: access, the folder and the files every squad reads",
            "**The 15 repos**: what each one does and when to skip it",
            "**The five squads at a glance**: what each one hands you and what needs your yes",
            "**The /team command**: one command that runs the whole team",
            "**The five squads**: Skill file, first prompt and schedule for each",
            "**Approval rules**: what to paste in before any squad runs",
            "**Week one**: what to check, and what usually goes wrong"
          ]
        },
        {
          "type": "callout",
          "tone": "light",
          "emoji": "✍️",
          "title": "A note on the writing.",
          "body": [
            "The setup sections are written in plain, short sentences with one action each. It reads flat on purpose, because a setup step that can be read two ways is a step somebody gets wrong."
          ]
        }
      ]
    },
    {
      "id": "the-15-minute-version",
      "nav": "The 15-minute version",
      "eyebrow": "The 15-minute version",
      "heading": "See it work ==today==",
      "blocks": [
        {
          "type": "p",
          "text": "You don't need all five squads, or any of the 15 repos, to see this work. Start with the onboarding squad and two exports."
        },
        {
          "type": "list",
          "ordered": true,
          "items": [
            "Export accounts signed in the last 90 days from your CRM as a CSV. Keep: account, signed date, plan, CSM, champion, champion email.",
            "Export product usage for the same accounts as a CSV. One row per account per week is enough.",
            "Write down your definition of first value in one sentence. Save it as playbook.md.",
            "Open Claude and create a Project called **CS Team**.",
            "Upload the two CSVs and playbook.md to the Project.",
            "Paste the onboarding squad Skill from Section 7 into the Project instructions.",
            "Run its first prompt. Read the stalled accounts it found and check two of them by hand."
          ]
        },
        {
          "type": "p",
          "text": "If the stalled list matches what your CSMs would have told you, the squad works. Add the next one."
        }
      ]
    },
    {
      "id": "before-you-start",
      "nav": "Before you start",
      "eyebrow": "Before you start",
      "heading": "Access, the folder, ==the files==",
      "blocks": [
        {
          "type": "h4",
          "text": "Access"
        },
        {
          "type": "list",
          "arrow": true,
          "items": [
            "A paid Claude plan. Use Claude Code if you want the /team command and scheduled runs, or a Claude Project if you'd rather click than type.",
            "Read access to your CRM, product usage, help desk and call notes. Use a connector where one exists. Where it doesn't, drop a weekly export into inputs/.",
            "One person who owns review/. Every draft waits there."
          ]
        },
        {
          "type": "h4",
          "text": "The folder"
        },
        {
          "type": "code",
          "label": "Folder structure",
          "text": "cs-team/\n  .claude/\n    commands/team.md\n    skills/\n      onboarding-squad/SKILL.md\n      education-squad/SKILL.md\n      voc-squad/SKILL.md\n      renewals-squad/SKILL.md\n      advocacy-squad/SKILL.md\n  inputs/\n  squads/\n  review/\n  rules.md\n  playbook.md\n  team-log.md"
        },
        {
          "type": "h4",
          "text": "The files every squad reads"
        },
        {
          "type": "table",
          "head": [
            "File",
            "What goes in it"
          ],
          "rows": [
            [
              "`accounts.csv`",
              "Account, segment, ARR, signed date, renewal date, CSM, champion, champion title, champion email, exec sponsor, last time they were asked for anything."
            ],
            [
              "`usage.csv`",
              "Account, week, active users, seats paid, key actions done. One row per account per week."
            ],
            [
              "`tickets.csv`",
              "Ticket ID, account, opened, closed, the customer's question in their words, the answer that closed it."
            ],
            [
              "`playbook.md`",
              "Your onboarding steps, your definition of first value and your renewal motion, in your own words."
            ],
            [
              "`rules.md`",
              "The approval rules in Section 8. Every squad reads it first."
            ],
            [
              "`deals.csv`",
              "For the advocacy squad: open deals with account, industry, size, stage and the problem the buyer is trying to solve."
            ],
            [
              "`proof-library.csv`",
              "For the advocacy squad: every approved quote and number, its source, who approved it and when it expires."
            ]
          ]
        }
      ]
    },
    {
      "id": "the-15-repos",
      "nav": "The 15 repos",
      "eyebrow": "The 15 repos",
      "heading": "Three per squad, ==all on GitHub==",
      "blocks": [
        {
          "type": "p",
          "text": "Every repo here is open source and public. You don't need all 15. If you already pay for a tool that does the same job, use that and skip the repo. The repo is the free option, not a requirement."
        },
        {
          "type": "table",
          "head": [
            "Squad",
            "Repo",
            "What it is",
            "What the team uses it for"
          ],
          "rows": [
            [
              "Onboarding",
              "`anthropics/claude-quickstarts`",
              "Anthropic's ready-made customer support agent, one of the quickstart projects",
              "The base for an onboarding help agent that answers setup questions from your docs"
            ],
            [
              "Onboarding",
              "`calcom/cal.com`",
              "Open-source scheduling",
              "Kickoff and check-in booking links the Kickoff agent puts in its drafts"
            ],
            [
              "Onboarding",
              "`n8n-io/n8n`",
              "Open-source workflow automation",
              "Running the squads on a schedule and moving files between your tools"
            ],
            [
              "Education",
              "`chatwoot/chatwoot`",
              "Open-source customer support inbox",
              "The ticket and chat export the Triage agent reads"
            ],
            [
              "Education",
              "`outline/outline`",
              "Open-source team wiki",
              "Where help doc drafts land for review"
            ],
            [
              "Education",
              "`facebook/docusaurus`",
              "Open-source docs site builder",
              "Publishing approved help docs and lessons"
            ],
            [
              "Voice of customer",
              "`formbricks/formbricks`",
              "Open-source survey tool",
              "The milestone surveys the Survey agent drafts"
            ],
            [
              "Voice of customer",
              "`PostHog/posthog`",
              "Open-source product analytics",
              "The usage data behind first value, health scores and themes"
            ],
            [
              "Voice of customer",
              "`metabase/metabase`",
              "Open-source dashboards",
              "A shared view of themes and health scores for product and leadership"
            ],
            [
              "Renewals",
              "`twentyhq/twenty`",
              "Open-source CRM",
              "Accounts, renewal dates and deals"
            ],
            [
              "Renewals",
              "`documenso/documenso`",
              "Open-source document signing",
              "Renewal paperwork, once you've approved the terms"
            ],
            [
              "Renewals",
              "`anthropics/claude-cookbooks`",
              "Anthropic's recipes for building with Claude",
              "Patterns for classification and summarizing, used by Health Score and Save Plan"
            ],
            [
              "Advocacy",
              "`discourse/discourse`",
              "Open-source community forum",
              "The threads the Community Host reads and drafts replies for"
            ],
            [
              "Advocacy",
              "`anthropics/skills`",
              "Anthropic's example Agent Skills, including Word, PowerPoint and PDF skills",
              "Turning case studies into decks and one-pagers, and the skill-creator for writing your own"
            ],
            [
              "Advocacy",
              "`modelcontextprotocol/servers`",
              "Reference MCP servers",
              "Connecting Claude to your files, the web and a memory store"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "light",
          "emoji": "🔎",
          "title": "Read before you install.",
          "body": [
            "Open each repo's README before you run anything, and have whoever owns your security reviews look at anything that will touch customer data. Self-hosting is optional. Several of these projects also offer a hosted version."
          ]
        }
      ]
    },
    {
      "id": "squads-at-a-glance",
      "nav": "Squads at a glance",
      "eyebrow": "The five squads at a glance",
      "heading": "Five jobs, ==one review queue==",
      "blocks": [
        {
          "type": "table",
          "head": [
            "Squad",
            "Agents",
            "What it hands you",
            "Needs your yes for"
          ],
          "rows": [
            [
              "**Onboarding**",
              "Kickoff, Setup Guide, First Value, Stall Watch",
              "Kickoff drafts, setup steps per account, and a stalled list with reasons",
              "Every kickoff email"
            ],
            [
              "**Education**",
              "Triage, Help Docs, Courses, Deflection",
              "Repeat questions with counts, help doc drafts and monthly lessons",
              "Publishing any doc or lesson"
            ],
            [
              "**Voice of customer**",
              "Survey, Theme Finder, Product Brief",
              "Themes with counts, ARR and quotes, and one monthly brief for product",
              "Sending any survey"
            ],
            [
              "**Renewals**",
              "Health Score, Renewal Desk, Expansion, Save Plan",
              "Health scores with signals, renewal plans 120 days out, expansion flags, save plans",
              "Anything about price, discounts or terms"
            ],
            [
              "**Advocacy**",
              "Story Scout, Case Study, Review Asks, Reference Match, Community Host",
              "Wins scored with PROP, case study drafts, review asks, reference matches, community replies",
              "Every ask and every reply"
            ]
          ]
        }
      ]
    },
    {
      "id": "the-team-command",
      "nav": "The /team command",
      "eyebrow": "The /team command",
      "heading": "One command, ==five squads==",
      "blocks": [
        {
          "type": "p",
          "text": "In Claude Code, a file in .claude/commands/ becomes a slash command. Save this as .claude/commands/team.md. If you use a Claude Project, paste it at the top of the Project instructions instead."
        },
        {
          "type": "code",
          "label": ".claude/commands/team.md",
          "text": "---\ndescription: Runs the customer success team. Usage: /team up [squads], /team run [squad], /team status\n---\n\nYou coordinate five squads: onboarding, education, voc, renewals, advocacy.\nEach squad is a Skill with the same name plus \"-squad\".\n\nRead rules.md before anything else. It overrides every squad.\n\nIf the argument starts with \"up\":\n- Check that every input file the named squads need exists in inputs/.\n- List anything missing. Do not run a squad with a missing input.\n\nIf the argument starts with \"run\":\n- Run the named squad's Skill on the current inputs.\n- When it's done, add one line per role to team-log.md: time, squad, what it did.\n\nIf the argument is \"status\":\n- Read team-log.md and review/.\n- Show what each squad did this week, and every draft waiting for approval.\n\nNever send, publish, sign or post anything. Drafts go to review/. The user approves from there."
        },
        {
          "type": "p",
          "text": "Run **/team up onboarding education voc renewals advocacy** once to check your inputs. Then **/team run renewals** runs one squad, and **/team status** shows the week."
        },
        {
          "type": "p",
          "text": "To put it on a schedule, run Claude Code from n8n or any scheduler with **claude -p \"/team run renewals\"**, using the times in each squad's card."
        }
      ]
    },
    {
      "id": "the-five-squads",
      "nav": "The five squads",
      "eyebrow": "The five squads",
      "heading": "Skill file, first prompt, ==schedule==",
      "blocks": [
        {
          "type": "p",
          "text": "Save each one as its own Skill. Run the first prompt by hand once, read the output, fix your inputs, then turn on the schedule."
        },
        {
          "type": "card",
          "id": "squad-onboarding",
          "num": "01",
          "title": "The onboarding squad",
          "summary": "Gets new accounts to first value before they stall",
          "blocks": [
            {
              "type": "p",
              "text": "Most churn starts in the first 90 days, long before anyone looks at a health score. This squad books the kickoff, turns your onboarding plan into setup steps for each account, checks when the customer reaches first value, and flags anyone who stalls before they get there."
            },
            {
              "type": "p",
              "text": "**Agents:** Kickoff, Setup Guide, First Value, Stall Watch."
            },
            {
              "type": "code",
              "label": "SKILL.md: onboarding-squad",
              "text": "---\nname: onboarding-squad\ndescription: Runs onboarding for every account in its first 90 days. Books the kickoff, writes the setup steps, checks for first value and flags stalled accounts.\n---\n\nYou run four roles. Do them in this order.\n\nBefore you start, read accounts.csv, playbook.md and rules.md.\n\n1. Kickoff\n   - Find accounts signed in the last 7 days with no kickoff booked.\n   - Draft a kickoff email with three times from the CSM's calendar link and a one-page agenda.\n   - Save the draft to review/. Never send it.\n\n2. Setup Guide\n   - For each account in onboarding, turn playbook.md into the setup steps that apply to their plan and use case.\n   - Mark which steps the admin has done, based on usage.csv.\n\n3. First Value\n   - First value is defined in playbook.md. Do not invent your own definition.\n   - Check usage.csv for every onboarding account. Mark \"reached\", \"close\" or \"not yet\".\n\n4. Stall Watch\n   - Flag any account with no new setup step done in 14 days, or no first value by day 45.\n   - For each one, write the reason, the last activity date and one suggested next move for the CSM.\n\nWrite one file to squads/onboarding/onboarding-YYYY-MM-DD.md with four sections, one per role.\nNever contact a customer. Every customer-facing draft goes to review/."
            },
            {
              "type": "code",
              "label": "First prompt",
              "text": "Run the onboarding squad on every account signed in the last 90 days.\n\nShow me the stalled accounts first, with the reason for each."
            },
            {
              "type": "p",
              "text": "**Schedule:** Monday and Thursday at 8:00."
            }
          ]
        },
        {
          "type": "card",
          "id": "squad-education",
          "num": "02",
          "title": "The education squad",
          "summary": "Answers every repeat question once, then never again",
          "blocks": [
            {
              "type": "p",
              "text": "If customers ask the same question 40 times, the problem isn't the 40 tickets. It's the missing answer. This squad sorts the week's tickets, finds the repeat questions, drafts the help doc for each one, and turns the biggest themes into short lessons."
            },
            {
              "type": "p",
              "text": "**Agents:** Triage, Help Docs, Courses, Deflection."
            },
            {
              "type": "code",
              "label": "SKILL.md: education-squad",
              "text": "---\nname: education-squad\ndescription: Reads the week's tickets and chats, finds repeat questions, and drafts help docs and short lessons that answer them once.\n---\n\nYou run four roles. Do them in this order.\n\nBefore you start, read tickets.csv, the help center export in docs/ and rules.md.\n\n1. Triage\n   - Group this week's tickets by question, not by product area.\n   - Count each group. Keep the customer's own wording for the group name.\n\n2. Help Docs\n   - For every group with 5 or more tickets and no matching doc in docs/, draft a help doc.\n   - Use the steps the support agent gave in the ticket that closed fastest.\n   - Mark every step you could not confirm as [check].\n\n3. Courses\n   - Once a month, take the five biggest groups and draft a 5-minute lesson for each: the goal, the steps, one common mistake.\n\n4. Deflection\n   - For each new doc, list the tickets it would have answered.\n   - Next week, report how many tickets in that group came in after the doc went live.\n\nWrite to squads/education/education-YYYY-MM-DD.md. Save every doc and lesson draft to review/. Never publish."
            },
            {
              "type": "code",
              "label": "First prompt",
              "text": "Run the education squad on the last 30 days of tickets.\n\nShow me the 10 biggest repeat questions and which ones have no help doc yet."
            },
            {
              "type": "p",
              "text": "**Schedule:** Wednesday at 8:00. Courses on the first Wednesday of the month."
            }
          ]
        },
        {
          "type": "card",
          "id": "squad-voc",
          "num": "03",
          "title": "The voice of customer squad",
          "summary": "Turns surveys, tickets and calls into one brief for product",
          "blocks": [
            {
              "type": "p",
              "text": "Feedback usually lives in five places and reaches product as one loud anecdote. This squad sends the surveys at the right moments, groups everything customers said into themes with counts and ARR attached, and writes one brief product can actually act on."
            },
            {
              "type": "p",
              "text": "**Agents:** Survey, Theme Finder, Product Brief."
            },
            {
              "type": "code",
              "label": "SKILL.md: voc-squad",
              "text": "---\nname: voc-squad\ndescription: Sends milestone surveys, groups customer feedback into themes with counts and ARR, and writes one monthly brief for product.\n---\n\nYou run three roles. Do them in this order.\n\nBefore you start, read accounts.csv, survey-responses.csv, tickets.csv, the call notes in calls/ and rules.md.\n\n1. Survey\n   - Find accounts that hit a milestone this week (first value, 6 months, renewal).\n   - Draft a 3-question survey for each milestone. Save to review/. Never send.\n\n2. Theme Finder\n   - Group every piece of feedback from the last 30 days into themes.\n   - For each theme give: the count, the total ARR of the accounts behind it, and three quotes word for word with their source.\n   - Never merge two themes to make one look bigger.\n\n3. Product Brief\n   - Once a month, write one page for product: the top five themes, what customers said, what it costs (ARR at risk or blocked expansion), and what was already promised to whom.\n\nWrite to squads/voc/voc-YYYY-MM-DD.md. Every number needs a source."
            },
            {
              "type": "code",
              "label": "First prompt",
              "text": "Run the voice of customer squad on the last 90 days.\n\nShow me the top five themes ranked by ARR, not by count."
            },
            {
              "type": "p",
              "text": "**Schedule:** Themes every Friday at 8:00. The product brief on the last Friday of the month."
            }
          ]
        },
        {
          "type": "card",
          "id": "squad-renewals",
          "num": "04",
          "title": "The renewals squad",
          "summary": "Makes sure no renewal is a surprise",
          "blocks": [
            {
              "type": "p",
              "text": "A renewal that goes wrong was usually lost months earlier. This squad scores account health every week, starts every renewal plan 120 days out, flags accounts hitting seat or usage limits, and drafts a save plan when an account is at risk. Nothing about price or terms reaches a customer without your OK."
            },
            {
              "type": "p",
              "text": "**Agents:** Health Score, Renewal Desk, Expansion, Save Plan."
            },
            {
              "type": "code",
              "label": "SKILL.md: renewals-squad",
              "text": "---\nname: renewals-squad\ndescription: Scores account health weekly, starts renewal plans 120 days out, flags expansion signals and drafts save plans for at-risk accounts.\n---\n\nYou run four roles. Do them in this order.\n\nBefore you start, read accounts.csv, usage.csv, tickets.csv and rules.md.\n\n1. Health Score\n   - Score every account green, yellow or red.\n   - Use only the signals listed in rules.md. For each score, list the signals behind it.\n\n2. Renewal Desk\n   - For every account renewing in the next 120 days, write a renewal plan: the date, the value, the champion, the risks and the three things to do before the renewal call.\n\n3. Expansion\n   - Flag accounts at 85% or more of their seats or usage limit.\n   - Hand the account to the CSM with the numbers. Never pitch the customer.\n\n4. Save Plan\n   - For every red account renewing in the next 180 days, draft a save plan: what went wrong, what the customer said, and the next three moves.\n   - Discounts, pricing and terms are never in a draft. Write \"needs your call\" instead.\n\nWrite to squads/renewals/renewals-YYYY-MM-DD.md. Save every customer-facing draft to review/."
            },
            {
              "type": "code",
              "label": "First prompt",
              "text": "Run the renewals squad on every account renewing in the next 180 days.\n\nShow me the red accounts first, with the signals behind each score."
            },
            {
              "type": "p",
              "text": "**Schedule:** Monday at 7:00, before the onboarding squad."
            }
          ]
        },
        {
          "type": "card",
          "id": "squad-advocacy",
          "num": "05",
          "title": "The advocacy squad",
          "summary": "Earns the ask before it makes it",
          "blocks": [
            {
              "type": "p",
              "text": "Most advocacy programs ask the biggest logos and the happiest-sounding customers. This squad scores readiness first, with my PROP model, and only drafts an ask when it's earned. It also writes the case study in the customer's words, asks for reviews after milestones and matches the right advocate to each open deal."
            },
            {
              "type": "p",
              "text": "**Agents:** Story Scout, Case Study, Review Asks, Reference Match, Community Host."
            },
            {
              "type": "code",
              "label": "SKILL.md: advocacy-squad",
              "text": "---\nname: advocacy-squad\ndescription: Finds customer wins worth telling, scores advocacy readiness with PROP, drafts case studies, review asks and reference matches, and drafts replies for the community.\n---\n\nYou run five roles. Do them in this order.\n\nBefore you start, read accounts.csv, proof-library.csv, calls/ and rules.md.\n\n1. Story Scout\n   - Find results the customer stated in their own words this week. Quote the line and give the source.\n   - Score PROP out of 100: Product usage 40%, Relationship strength 25%, Outcomes achieved 25%, Persona fit 10%.\n   - Pass only wins at 70 or above.\n\n2. Case Study\n   - For wins the user approves, draft a case study from the call transcript. At least half of it is the customer's own words.\n\n3. Review Asks\n   - Draft a review ask only after a milestone. Never within 14 days of a support ticket.\n\n4. Reference Match\n   - For each open deal in deals.csv, suggest up to two advocates: same industry, similar size, same problem. Skip anyone asked for anything in the last 60 days.\n\n5. Community Host\n   - Find unanswered community threads older than 48 hours. Draft a reply, or name the customer best placed to answer.\n\nWrite to squads/advocacy/advocacy-YYYY-MM-DD.md. Every ask and every reply goes to review/. Never round a number up."
            },
            {
              "type": "code",
              "label": "First prompt",
              "text": "Run the advocacy squad on the last 30 days of calls and wins.\n\nShow me every win scored 70 or above, and the open deals each one could help."
            },
            {
              "type": "p",
              "text": "**Schedule:** Tuesday at 8:00. Reference Match also on Thursday at 14:00."
            }
          ]
        }
      ]
    },
    {
      "id": "approval-rules",
      "nav": "Approval rules",
      "eyebrow": "Approval rules",
      "heading": "Nothing ships ==without your yes==",
      "blocks": [
        {
          "type": "p",
          "text": "Paste this into rules.md before the first run. Every squad reads it first, and it overrides anything in a squad's Skill."
        },
        {
          "type": "code",
          "label": "rules.md",
          "text": "# rules.md\n\n## Nothing reaches a customer without a human\n- Every email, survey, review ask, reference ask, community reply and doc is a draft in review/.\n- Discounts, pricing, contract terms and renewal quotes: never in a draft. Write \"needs your call\".\n- Never contact the same person twice in 14 days, across all five squads.\n- Never ask a customer for anything within 14 days of a support ticket.\n\n## Numbers\n- Every number needs a source: file, row or timestamp.\n- Never round up. Never turn a feeling into a result.\n- If a number is missing, write \"not on file\".\n\n## Health signals (Health Score uses only these)\n- Usage trend over 90 days\n- Seats active vs seats paid\n- Open tickets older than 7 days\n- Champion still at the company\n- Last exec touchpoint\n\n## Who owns what\n- Onboarding: [CSM name]\n- Renewals and save plans: [renewals owner]\n- Advocacy asks: [advocacy owner]"
        },
        {
          "type": "p",
          "text": "Fill in the owners at the bottom. A draft with no owner is a draft nobody approves."
        }
      ]
    },
    {
      "id": "week-one",
      "nav": "Week one",
      "eyebrow": "Week one",
      "heading": "What to check, ==what goes wrong==",
      "blocks": [
        {
          "type": "table",
          "head": [
            "Day",
            "Run",
            "Check"
          ],
          "rows": [
            [
              "Monday",
              "/team up, then renewals and onboarding",
              "Do the red accounts match what your CSMs would say? If not, fix the health signals in rules.md."
            ],
            [
              "Tuesday",
              "advocacy",
              "Is every quote word for word, with a source? Any win under 70 that you'd still ask?"
            ],
            [
              "Wednesday",
              "education",
              "Are the repeat questions grouped the way customers ask them, not the way your product menu reads?"
            ],
            [
              "Friday",
              "voc, then /team status",
              "Do the top themes rank by ARR? Is anything waiting in review/ for more than two days?"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "What usually goes wrong"
        },
        {
          "type": "list",
          "arrow": true,
          "items": [
            "**Thin exports.** If usage.csv has no seats paid column, Expansion and Health Score guess. Fix the export, not the Skill.",
            "**No first value definition.** The onboarding squad can't flag a stall without it. Write it in one sentence.",
            "**Two squads, one customer.** If onboarding and advocacy both want the same champion, the 14-day rule in rules.md decides. Keep it.",
            "**review/ fills up.** If drafts sit for a week, the team is ahead of you. Run fewer squads until review keeps up."
          ]
        }
      ]
    },
    {
      "id": "whats-next",
      "nav": "What's next",
      "eyebrow": "What's next",
      "heading": "The next ==build==",
      "blocks": [
        {
          "type": "p",
          "text": "I publish the thinking behind builds like this every week in The Customer Continuum: the frameworks, the agent builds, and the post-sale patterns I've seen across Marketo, Adobe, F5 and Freshworks."
        },
        {
          "type": "p",
          "text": "**Subscribe free →** [kevinkennethlau.substack.com](https://kevinkennethlau.substack.com)"
        }
      ]
    },
    {
      "id": "want-help",
      "nav": "Want help?",
      "eyebrow": "Want help building this?",
      "heading": "Into ==your own org==",
      "blocks": [
        {
          "type": "p",
          "text": "Five squads in your Claude account is the blueprint. The judgment is the hard part: what your org should build first, in what order, and whether the data and governance underneath are ready for it."
        },
        {
          "type": "p",
          "text": "If you want a scored read on that, it's called the **CLG Agentic Readiness Index**. A facilitated session across all seven pillars of your post-sale engine that tells you where you stand today and what you're ready to build, delivered as an executive readout presented live. You keep the findings whether or not we do anything after."
        },
        {
          "type": "p",
          "text": "It tends to fit when:"
        },
        {
          "type": "list",
          "arrow": true,
          "items": [
            "You're a CCO, CMO, or senior revenue leader with budget and decision authority",
            "Retention and expansion carry real revenue weight in your business",
            "Your team is stuck in individual AI experimentation and ready for shared systems",
            "You're willing to fix the data and governance foundations, not just chase tools"
          ]
        },
        {
          "type": "p",
          "text": "If that's your situation, grab a time and we'll figure out whether it's a fit. If it isn't, I'll tell you that on the call."
        },
        {
          "type": "cta",
          "href": "https://calendly.com/kevinklau",
          "label": "Book a fit call",
          "detail": "calendly.com/kevinklau"
        },
        {
          "type": "p",
          "text": "P.S. If this helped, forward it to one CS leader who's been told to \"add AI\" with no time to build it."
        }
      ]
    }
  ]
};

export default report;
