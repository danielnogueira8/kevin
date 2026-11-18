/**
 * The Claude Chief of Staff for Customer Success: a chief of staff, a project
 * manager and 18 specialist agents that end in one Monday brief. Lead magnet
 * for the 18 Nov 2026 post (keyword CHIEF), modelled on the "Grok Bot
 * 20-agent-system" format. The Notion resource holds the same copy.
 */
const report = {
  "slug": "claude-cs-chief-of-staff",
  "landingSlug": "claude-cs-chief-of-staff",
  "notionUrl": "https://app.notion.com/p/41c93aa14ae48187bfa1f8b606f252f3",
  "kind": "Free setup guide",
  "title": "The Claude Chief of Staff for Customer Success",
  "cardDescription": "A chief of staff in Claude that plans the customer success week, runs 19 agents through a project manager and a quality check, and brings the CS leader a Monday brief with only the decisions that need them.",
  "headline": [
    "One chief of staff, 19 agents,",
    "==only the calls that need you=="
  ],
  "description": "A setup guide for a chief of staff for customer success leaders, built in Claude: a chief of staff, a project manager and 18 specialist agents across signals, accounts, revenue, voice of customer, advocacy and quality. Every Skill file, the Monday brief template, the schedule and the decision rules are included.",
  "lead": "CS leaders spend their week chasing updates, rebuilding the same renewal list and walking into exec meetings with numbers nobody checked. This guide hands that work to a chief of staff in Claude, and only brings you the decisions.",
  "meta": [
    "Free setup guide",
    "1 chief of staff",
    "19 agents",
    "1 Monday brief"
  ],
  "proof": [
    {
      "label": "Agents",
      "value": "19",
      "detail": "Run by one chief of staff"
    },
    {
      "label": "Decisions",
      "value": "3 to 5",
      "detail": "In your Monday brief"
    },
    {
      "label": "First version",
      "value": "15 min",
      "detail": "Chief of staff plus signals"
    }
  ],
  "cover": {
    "src": "/assets/claude_cs_chief_of_staff.gif",
    "alt": "The Claude Chief of Staff for Customer Success: a chief of staff and a project manager running 18 specialist agents into one verified Monday brief",
    "width": 1080,
    "height": 1350
  },
  "updated": "2026-11-18",
  "sections": [
    {
      "id": "read-this-first",
      "nav": "Read this first",
      "eyebrow": "Read this first",
      "heading": "Stop chasing updates, ==start making calls==",
      "blocks": [
        {
          "type": "p",
          "text": "Hey, I'm Kevin Lau. I've spent 15+ years in post-sale at Marketo, Adobe, F5 and Freshworks. Along the way that meant turning post-sale into a $100M+ ARR expansion engine, and increasing win rates by 40% by operationalizing customer proof and evidence."
        },
        {
          "type": "p",
          "text": "Most CS leaders spend their week chasing CSMs for account updates before the forecast call, rebuilding the same renewal list in three spreadsheets, finding out about a risky account the week it renews, and walking into the exec meeting with numbers nobody checked. That's a full-time job before a single decision gets made."
        },
        {
          "type": "p",
          "text": "So this guide sets up a chief of staff in Claude. It reads every account, plans the week, gives each agent group one job and hands the plan to a project manager, who runs the handoffs. Two quality agents check every number before anything reaches you. What you get is one Monday brief with three to five decisions in it."
        },
        {
          "type": "quote",
          "text": "One agent doing one task is a demo. Many agents coordinating is a system."
        },
        {
          "type": "p",
          "text": "By the end of this guide you'll have the chief of staff, the project manager and 18 specialist agents with their Skill files and first prompts, the Monday brief template, a weekly schedule and the decision rules that keep the brief short."
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
            "**The 15-minute version**: the chief of staff and the signal agents, if you want a brief this week",
            "**Before you start**: access, the folder and the files every agent reads",
            "**How the week runs**: who runs when, and what lands where",
            "**The 19 agents at a glance**: what each group hands the chief of staff",
            "**The chief of staff**: Skill file and first prompt",
            "**The project manager**: Skill file and first prompt",
            "**The six agent groups**: Skill file, first prompt and schedule for each",
            "**The Monday brief and the rules**: the template and what's allowed to reach you",
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
      "heading": "A brief ==this week==",
      "blocks": [
        {
          "type": "p",
          "text": "You don't need all 19 agents to see this work. Start with the chief of staff and the signal agents."
        },
        {
          "type": "list",
          "ordered": true,
          "items": [
            "Export your accounts from your CRM as a CSV. Keep: account, ARR, renewal date, CSM, champion, champion title.",
            "Export 120 days of product usage for the same accounts. One row per account per week is enough.",
            "Export open tickets as a CSV.",
            "Open Claude and create a Project called **CS Chief of Staff**.",
            "Upload the three CSVs and paste rules.md from Section 9.",
            "Paste the signal agents Skill from Section 8 and run its first prompt.",
            "Paste the chief of staff Skill from Section 6 and ask it for this week's brief."
          ]
        },
        {
          "type": "p",
          "text": "Read the decisions section. If it lists more than five items, tighten the decision rules. If it lists the accounts you were already worried about, it works. Add the next group."
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
            "A paid Claude plan. Use Claude Code if you want the agents on a schedule, or a Claude Project if you'd rather run them by hand.",
            "Read access to your CRM, product usage, help desk, call notes and calendar. Use a connector where one exists. Where it doesn't, drop a weekly export into inputs/.",
            "One person who owns review/. Every customer-facing draft waits there."
          ]
        },
        {
          "type": "h4",
          "text": "The folder"
        },
        {
          "type": "code",
          "label": "Folder structure",
          "text": "cs-chief-of-staff/\n  .claude/skills/\n    chief-of-staff/SKILL.md\n    project-manager/SKILL.md\n    signal-agents/SKILL.md\n    account-agents/SKILL.md\n    revenue-agents/SKILL.md\n    voc-agents/SKILL.md\n    advocacy-agents/SKILL.md\n    quality-agents/SKILL.md\n  inputs/\n  squads/\n  briefs/\n  review/\n  plan.md\n  handoffs.md\n  rules.md\n  playbook.md\n  team-log.md"
        },
        {
          "type": "h4",
          "text": "The files every agent reads"
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
              "Account, segment, ARR, signed date, renewal date, CSM, champion, champion title, exec sponsor, last time they were asked for anything."
            ],
            [
              "`usage.csv`",
              "Account, week, active users, seats paid, key actions done."
            ],
            [
              "`tickets.csv`",
              "Ticket ID, account, opened, closed, the customer's words, the answer that closed it."
            ],
            [
              "`calls/`",
              "This week's call transcripts or notes, one file per call."
            ],
            [
              "`deals.csv`",
              "Open deals: account, industry, size, stage and the problem the buyer is solving."
            ],
            [
              "`proof-library.csv`",
              "For the advocacy agents: every approved quote and number, its source, who approved it and when it expires."
            ],
            [
              "`playbook.md`",
              "Your onboarding steps, your definition of first value and your renewal motion."
            ],
            [
              "`rules.md`",
              "The decision rules in Section 9. Every agent reads it first."
            ]
          ]
        }
      ]
    },
    {
      "id": "how-the-week-runs",
      "nav": "How the week runs",
      "eyebrow": "How the week runs",
      "heading": "Who runs ==when==",
      "blocks": [
        {
          "type": "p",
          "text": "The chief of staff plans, the project manager sequences, the groups do the work and quality checks it. You read one brief."
        },
        {
          "type": "table",
          "head": [
            "When",
            "Who",
            "What lands"
          ],
          "rows": [
            [
              "Monday, 6:30",
              "Signal agents",
              "Health scores and the red list"
            ],
            [
              "Monday, 7:00",
              "Chief of staff",
              "plan.md: one job per group for the week"
            ],
            [
              "Monday, 8:00",
              "Chief of staff",
              "**Your Monday brief**: 3 to 5 decisions, risks, what's done"
            ],
            [
              "Monday, 9:00",
              "Account agents",
              "Briefs for this week's calls"
            ],
            [
              "Tuesday, 8:00",
              "Revenue agents",
              "Renewal plans, seat flags, save plans"
            ],
            [
              "Wednesday, 8:00",
              "Advocacy agents",
              "Wins at PROP 70+ and reference matches"
            ],
            [
              "Thursday, 8:00",
              "Account agents",
              "Onboarding check"
            ],
            [
              "Friday, 8:00",
              "VoC agents",
              "Themes by ARR, and the product brief once a month"
            ],
            [
              "After every group",
              "Quality agents",
              "Pass or block, with the reason"
            ]
          ]
        }
      ]
    },
    {
      "id": "agents-at-a-glance",
      "nav": "The 19 agents",
      "eyebrow": "The 19 agents at a glance",
      "heading": "Six groups, ==one brief==",
      "blocks": [
        {
          "type": "table",
          "head": [
            "Group",
            "Agents",
            "What it hands the chief of staff",
            "Never does"
          ],
          "rows": [
            [
              "**Project manager**",
              "Project Manager",
              "The handoff log and anything blocked",
              "Decide what matters"
            ],
            [
              "**Signals** (5)",
              "Usage Watcher, Ticket Reader, Call Notes, Health Scorer, Churn Flagger",
              "Health scores with signals, and the red list",
              "Contact a customer"
            ],
            [
              "**Accounts** (3)",
              "Onboarding Guide, Account Briefer, QBR Builder",
              "Stalled onboardings, call briefs, QBR drafts",
              "Send anything"
            ],
            [
              "**Revenue** (3)",
              "Renewal Planner, Seat Watcher, Save Planner",
              "Renewal plans, expansion flags, save plans",
              "Put a price or discount in a draft"
            ],
            [
              "**Voice of customer** (3)",
              "Survey Reader, Theme Finder, Product Briefer",
              "Themes with ARR and the monthly product brief",
              "Merge themes to make one look bigger"
            ],
            [
              "**Advocacy** (2)",
              "Story Scout, Ref Matcher",
              "Wins at PROP 70+ and matched advocates",
              "Ask a customer twice in 60 days"
            ],
            [
              "**Quality** (2)",
              "Fact Checker, Verifier",
              "Passed and blocked items, with reasons",
              "Fix a number itself"
            ]
          ]
        }
      ]
    },
    {
      "id": "the-chief-of-staff",
      "nav": "The chief of staff",
      "eyebrow": "The chief of staff",
      "heading": "Plans the week, ==brings you the calls==",
      "blocks": [
        {
          "type": "p",
          "text": "The chief of staff is the only agent that talks to you. It doesn't do the account work. It decides who does what this week, and it decides what's worth your attention. Save it as its own Skill."
        },
        {
          "type": "code",
          "label": "SKILL.md: chief-of-staff",
          "text": "---\nname: chief-of-staff\ndescription: Runs the customer success week. Reads every account, plans the week, assigns work to 19 agents and writes the Monday brief with only the decisions that need the CS leader.\n---\n\nYou are the chief of staff for a customer success leader.\nYou never contact a customer. You never decide on price, terms or headcount.\n\nBefore you start, read rules.md, accounts.csv and last week's brief in briefs/.\n\nEvery Monday at 7:00:\n1. Read the outputs from last week in squads/. List what is done, what is late and what changed.\n2. Plan the week. Give every agent group one job for the week, in plan.md:\n   - signals, accounts, revenue, voc, advocacy, quality\n   - for each job: the accounts in scope, the due day, and the file it hands back\n3. Hand plan.md to the project manager. The project manager runs the handoffs. You do not.\n\nEvery Monday at 8:00, write the brief to briefs/brief-YYYY-MM-DD.md:\n1. Decisions for you. Only items that need the leader's call: discounts, save plans on accounts over the ARR line in rules.md, exec asks, anything the quality agents blocked. Three to five items. For each: the account, the ask, the evidence, your recommendation, and the deadline.\n2. Risks this week. Red accounts and renewals inside 120 days, one line each.\n3. What the team finished. One line per group. Numbers only if the quality agents passed them.\n4. What you're not seeing. Anything the agents could not check because an input was missing.\n\nIf an item does not need a decision, it does not go in section 1.\nNever round up. Every number needs a source."
        },
        {
          "type": "code",
          "label": "First prompt",
          "text": "Run chief-of-staff for this week.\n\nWrite the plan, then the Monday brief. In the decisions section, tell me which items you almost included and why you left them out."
        },
        {
          "type": "p",
          "text": "**Schedule:** Monday at 7:00 for the plan, 8:00 for the brief."
        }
      ]
    },
    {
      "id": "the-project-manager",
      "nav": "The project manager",
      "eyebrow": "The project manager",
      "heading": "Runs the ==handoffs==",
      "blocks": [
        {
          "type": "p",
          "text": "Without this one, two agents research the same account, a customer gets two asks in one week and nobody notices a group is stuck on a missing file. The project manager keeps the groups in order and out of each other's way."
        },
        {
          "type": "code",
          "label": "SKILL.md: project-manager",
          "text": "---\nname: project-manager\ndescription: Runs the handoffs between the chief of staff's agent groups. Stops duplicate work, sequences the groups and passes every output through the quality agents.\n---\n\nRead plan.md and rules.md first.\n\n1. Sequence the week:\n   - signals runs first. Accounts and revenue wait for its health scores.\n   - voc and advocacy can run in parallel with accounts.\n   - quality runs last on every output before it goes to the chief of staff.\n2. Stop duplicate work:\n   - Keep a list in handoffs.md of every account each group is working on.\n   - If two groups need the same research, the first one does it and the second one reads its file.\n3. Stop contact clashes:\n   - No customer gets two asks from two groups in the same 14 days. If they would, flag it to the chief of staff.\n4. Log every handoff in team-log.md: time, from, to, file.\n\nIf a group is blocked by a missing input, write it in blockers.md and tell the chief of staff. Do not guess the input."
        },
        {
          "type": "code",
          "label": "First prompt",
          "text": "Run project-manager on this week's plan.md.\n\nShow me the sequence, any duplicate work you stopped and anything blocked."
        },
        {
          "type": "p",
          "text": "**Schedule:** right after the chief of staff writes plan.md, then after every group finishes."
        }
      ]
    },
    {
      "id": "the-six-groups",
      "nav": "The six agent groups",
      "eyebrow": "The six agent groups",
      "heading": "Skill file, first prompt, ==schedule==",
      "blocks": [
        {
          "type": "p",
          "text": "Save each group as its own Skill. Run the first prompt by hand once, read the output, fix your inputs, then turn on the schedule."
        },
        {
          "type": "card",
          "id": "group-signals",
          "num": "01",
          "title": "The signal agents (5)",
          "summary": "Watch every account and flag risk while there's still time",
          "blocks": [
            {
              "type": "p",
              "text": "Everything else in the system depends on knowing which accounts are healthy. These five read usage, tickets and calls every week, score each account on the signals in rules.md and flag churn risk early enough to act on it."
            },
            {
              "type": "p",
              "text": "**Agents:** Usage Watcher, Ticket Reader, Call Notes, Health Scorer, Churn Flagger."
            },
            {
              "type": "code",
              "label": "SKILL.md: signal-agents",
              "text": "---\nname: signal-agents\ndescription: Five roles that read usage, tickets and calls, score account health and flag churn risk.\n---\n\nRead accounts.csv, usage.csv, tickets.csv, calls/ and rules.md first.\n\n1. Usage Watcher: for each account, compare the last 30 days of usage to the 90 days before. Note any drop over 20%.\n2. Ticket Reader: list open tickets older than 7 days and any ticket where the customer mentions leaving, budget or a competitor.\n3. Call Notes: summarize this week's customer calls in five lines each. Quote risk lines word for word.\n4. Health Scorer: score every account green, yellow or red using only the signals in rules.md. List the signals behind each score.\n5. Churn Flagger: list every red account and every yellow account renewing in the next 180 days.\n\nWrite to squads/signals/signals-YYYY-MM-DD.md. Read-only. Never contact a customer."
            },
            {
              "type": "code",
              "label": "First prompt",
              "text": "Run the signal agents on every account.\n\nShow me the red accounts first, with the signals behind each score."
            },
            {
              "type": "p",
              "text": "**Schedule:** Monday at 6:30, before the chief of staff plans the week."
            }
          ]
        },
        {
          "type": "card",
          "id": "group-accounts",
          "num": "02",
          "title": "The account agents (3)",
          "summary": "Get customers to value and walk every meeting in prepared",
          "blocks": [
            {
              "type": "p",
              "text": "Most account work is preparation. These three keep onboarding moving, build a one-page brief before every customer call and draft the QBR deck around the outcomes the customer actually got."
            },
            {
              "type": "p",
              "text": "**Agents:** Onboarding Guide, Account Briefer, QBR Builder."
            },
            {
              "type": "code",
              "label": "SKILL.md: account-agents",
              "text": "---\nname: account-agents\ndescription: Three roles that run onboarding, brief every customer call and draft QBR decks.\n---\n\nRead accounts.csv, playbook.md, the signals file for this week and rules.md first.\n\n1. Onboarding Guide: for accounts in their first 90 days, list setup steps done and not done, and flag any account with no first value by day 45. First value is defined in playbook.md.\n2. Account Briefer: for every customer call on this week's calendar export, write a one-page brief: who's on the call, what they bought, health score and signals, open tickets, what was promised last time.\n3. QBR Builder: for QBRs due in the next 14 days, draft the deck outline: the outcomes they got (with sources), what's next, and one ask. Use the pptx skill if it's installed.\n\nWrite to squads/accounts/accounts-YYYY-MM-DD.md. Every customer-facing draft goes to review/."
            },
            {
              "type": "code",
              "label": "First prompt",
              "text": "Run the account agents on this week's calls and QBRs.\n\nShow me the briefs for the three biggest accounts first."
            },
            {
              "type": "p",
              "text": "**Schedule:** Monday at 9:00 for the week's calls. Onboarding again on Thursday."
            }
          ]
        },
        {
          "type": "card",
          "id": "group-revenue",
          "num": "03",
          "title": "The revenue agents (3)",
          "summary": "No renewal is a surprise, no expansion goes unseen",
          "blocks": [
            {
              "type": "p",
              "text": "These three start every renewal plan 120 days out, flag accounts hitting seat or usage limits and draft a save plan when an account turns red. Anything about price, discounts or terms goes to the chief of staff as a decision, never to a customer."
            },
            {
              "type": "p",
              "text": "**Agents:** Renewal Planner, Seat Watcher, Save Planner."
            },
            {
              "type": "code",
              "label": "SKILL.md: revenue-agents",
              "text": "---\nname: revenue-agents\ndescription: Three roles that plan renewals 120 days out, flag expansion signals and draft save plans.\n---\n\nRead accounts.csv, usage.csv, the signals file for this week and rules.md first.\n\n1. Renewal Planner: for every account renewing in the next 120 days, write a plan: date, value, champion, risks, and the three things to do before the renewal call.\n2. Seat Watcher: flag accounts at 85% or more of their seats or usage limit. Give the numbers. Never pitch the customer.\n3. Save Planner: for every red account renewing in the next 180 days, draft a save plan: what went wrong, what the customer said, the next three moves.\n\nDiscounts, pricing and terms never go in a draft. Write \"decision for the leader\" and hand it to the chief of staff.\n\nWrite to squads/revenue/revenue-YYYY-MM-DD.md."
            },
            {
              "type": "code",
              "label": "First prompt",
              "text": "Run the revenue agents on every renewal in the next 180 days.\n\nShow me the save plans first, and anything that needs a pricing decision."
            },
            {
              "type": "p",
              "text": "**Schedule:** Tuesday at 8:00."
            }
          ]
        },
        {
          "type": "card",
          "id": "group-voc",
          "num": "04",
          "title": "The voice of customer agents (3)",
          "summary": "Turn everything customers say into one brief for product",
          "blocks": [
            {
              "type": "p",
              "text": "Feedback usually reaches product as one loud anecdote. These three read the surveys, group everything customers said into themes with counts and ARR attached, and write one monthly brief product can act on."
            },
            {
              "type": "p",
              "text": "**Agents:** Survey Reader, Theme Finder, Product Briefer."
            },
            {
              "type": "code",
              "label": "SKILL.md: voc-agents",
              "text": "---\nname: voc-agents\ndescription: Three roles that read survey responses, group feedback into themes with ARR, and brief product monthly.\n---\n\nRead accounts.csv, survey-responses.csv, tickets.csv, calls/ and rules.md first.\n\n1. Survey Reader: summarize this week's survey responses. Quote the strongest five word for word with their source.\n2. Theme Finder: group the last 30 days of feedback into themes. For each: the count, the total ARR behind it and three quotes with sources. Never merge two themes to make one look bigger.\n3. Product Briefer: on the last Friday of the month, write one page for product: the top five themes, what they cost (ARR at risk or blocked expansion), and what was already promised to whom.\n\nWrite to squads/voc/voc-YYYY-MM-DD.md."
            },
            {
              "type": "code",
              "label": "First prompt",
              "text": "Run the voice of customer agents on the last 90 days.\n\nShow me the top five themes ranked by ARR, not by count."
            },
            {
              "type": "p",
              "text": "**Schedule:** Friday at 8:00. The product brief on the last Friday of the month."
            }
          ]
        },
        {
          "type": "card",
          "id": "group-advocacy",
          "num": "05",
          "title": "The advocacy agents (2)",
          "summary": "Find the proof and put it in front of the deal it can move",
          "blocks": [
            {
              "type": "p",
              "text": "Two agents, one job: earn the ask before making it. The story scout scores customer wins with my PROP model and only passes the ones that are ready. The ref matcher puts the right advocate in front of each open deal, and never asks the same customer twice in 60 days."
            },
            {
              "type": "p",
              "text": "**Agents:** Story Scout, Ref Matcher."
            },
            {
              "type": "code",
              "label": "SKILL.md: advocacy-agents",
              "text": "---\nname: advocacy-agents\ndescription: Two roles that find customer wins worth telling, scored with PROP, and match advocates to open deals.\n---\n\nRead accounts.csv, deals.csv, proof-library.csv, calls/ and rules.md first.\n\n1. Story Scout: find results customers stated in their own words this week. Quote the line and the source. Score PROP out of 100: Product usage 40%, Relationship strength 25%, Outcomes achieved 25%, Persona fit 10%. Pass only wins at 70 or above.\n2. Ref Matcher: for each open deal, suggest up to two advocates: same industry, similar size, same problem. Skip anyone asked for anything in the last 60 days.\n\nEvery ask goes to review/. Write to squads/advocacy/advocacy-YYYY-MM-DD.md."
            },
            {
              "type": "code",
              "label": "First prompt",
              "text": "Run the advocacy agents on the last 30 days of calls and this quarter's open deals.\n\nShow me every win scored 70 or above, and the deal each one could help."
            },
            {
              "type": "p",
              "text": "**Schedule:** Wednesday at 8:00."
            }
          ]
        },
        {
          "type": "card",
          "id": "group-quality",
          "num": "06",
          "title": "The quality agents (2)",
          "summary": "Nothing reaches the leader or a customer unchecked",
          "blocks": [
            {
              "type": "p",
              "text": "This is the part most agent setups skip, and it's why leaders end up babysitting the agents. The fact checker traces every number and quote back to its source. The verifier checks every output against rules.md before it goes to the chief of staff or into review/."
            },
            {
              "type": "p",
              "text": "**Agents:** Fact Checker, Verifier."
            },
            {
              "type": "code",
              "label": "SKILL.md: quality-agents",
              "text": "---\nname: quality-agents\ndescription: Two roles that check every number, quote and output against its source and rules.md before it reaches the chief of staff or a customer.\n---\n\nRun on every file the other groups write this week.\n\n1. Fact Checker:\n   - Trace every number and every quote to its source file, row or timestamp.\n   - If a number has no source, or the source says something else, mark it [blocked] with the reason.\n   - Never fix a number yourself. Send it back to the group that wrote it.\n2. Verifier:\n   - Check every output against rules.md: contact limits, no pricing in drafts, no customer asked within 14 days of a ticket.\n   - Pass, or block with the rule it broke.\n\nWrite a log to squads/quality/quality-YYYY-MM-DD.md: checked, passed, blocked. Blocked items go to the chief of staff."
            },
            {
              "type": "code",
              "label": "First prompt",
              "text": "Run the quality agents on everything in squads/ from this week.\n\nShow me every blocked item and why."
            },
            {
              "type": "p",
              "text": "**Schedule:** After every group finishes. The project manager triggers it."
            }
          ]
        }
      ]
    },
    {
      "id": "brief-and-rules",
      "nav": "The brief and the rules",
      "eyebrow": "The Monday brief and the rules",
      "heading": "Short brief, ==strict rules==",
      "blocks": [
        {
          "type": "p",
          "text": "The brief is only useful if it stays short. The template keeps the shape the same every week, and rules.md decides what's allowed into the decisions section."
        },
        {
          "type": "code",
          "label": "briefs/brief-template.md",
          "text": "# Monday brief: [date]\n\n## Decisions for you (3 to 5)\n1. [Account] · [the ask] · [evidence, with sources] · my recommendation: [ ] · decide by [day]\n\n## Risks this week\n- [Account] · red · renews [date] · [one-line reason]\n\n## What the team finished\n- Signals: [x] accounts scored, [x] red\n- Accounts: [x] call briefs, [x] QBR drafts\n- Revenue: [x] renewal plans, [x] save plans\n- VoC: top theme this week: [theme] ([x] accounts, $[ARR])\n- Advocacy: [x] wins at PROP 70+, [x] deals matched\n- Quality: [x] checked, [x] blocked\n\n## What you're not seeing\n- [missing input] · means [group] couldn't check [what]"
        },
        {
          "type": "code",
          "label": "rules.md",
          "text": "# rules.md\n\n## What reaches the leader\n- Only decisions go in section 1 of the brief: pricing, discounts, terms, save plans on accounts over $[ARR line], exec asks, and anything quality blocked.\n- Everything else is handled or logged. The leader can read the logs. The brief doesn't repeat them.\n\n## What reaches a customer\n- Nothing, without a human. Every email, ask, survey and deck is a draft in review/.\n- No customer gets two asks in 14 days, across all groups.\n- No ask within 14 days of a support ticket.\n\n## Numbers\n- Every number needs a source. Never round up. If it's missing, write \"not on file\".\n\n## Health signals (the Health Scorer uses only these)\n- Usage trend over 90 days\n- Seats active vs seats paid\n- Open tickets older than 7 days\n- Champion still at the company\n- Last exec touchpoint"
        },
        {
          "type": "p",
          "text": "Set the ARR line in the first rule. Below it, save plans are handled by the CSM and logged. Above it, they come to you."
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
            "Check"
          ],
          "rows": [
            [
              "Monday",
              "Does the red list match what your CSMs would say? Does the brief have 3 to 5 decisions, not 15?"
            ],
            [
              "Tuesday",
              "Do any save plans mention a discount? They shouldn't. Tighten the revenue Skill if they do."
            ],
            [
              "Wednesday",
              "Is every win quote word for word, with a source?"
            ],
            [
              "Friday",
              "Read the quality log. If nothing was blocked all week, it isn't checking hard enough."
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
            "**The brief gets long.** The chief of staff wants to be helpful. Raise the ARR line and cap section 1 at five.",
            "**Thin exports.** If usage.csv has no seats paid column, the Health Scorer and Seat Watcher guess. Fix the export, not the Skill.",
            "**Groups run out of order.** If accounts runs before signals, every brief uses last week's scores. Let the project manager trigger the groups.",
            "**review/ fills up.** If drafts sit for a week, the agents are ahead of the team. Run fewer groups until review keeps up."
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
          "text": "A chief of staff in your Claude account is the blueprint. The judgment is the hard part: what your org should build first, in what order, and whether the data and governance underneath are ready for it."
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
          "text": "P.S. If this helped, forward it to one CS leader who spent last Monday chasing updates instead of making calls."
        }
      ]
    }
  ]
};

export default report;
