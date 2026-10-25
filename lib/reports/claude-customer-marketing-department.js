/**
 * The Complete Claude Customer Marketing Department, converted from the Notion resource
 * (https://app.notion.com/p/40493aa14ae481d3a007d84883f74a5a).
 * The body text is Kevin's Notion copy; headings, cards and section furniture are page furniture.
 */
const report = {
  "slug": "claude-customer-marketing-department",
  "landingSlug": "claude-customer-marketing-department",
  "notionUrl": "https://app.notion.com/p/40493aa14ae481d3a007d84883f74a5a",
  "kind": "Free department kit",
  "title": "The Complete Claude Customer Marketing Department",
  "cardDescription": "69 resources for running customer marketing inside Claude: 6 agents, 24 skills, 30 prompts, 6 workflows and 3 playbooks, one part per job.",
  "headline": [
    "Seven customer marketing jobs,",
    "==one department inside Claude=="
  ],
  "description": "A complete customer marketing department built in Claude: 6 agents set up as Claude Projects, 24 skills ready to zip and upload, 30 prompts for one-off jobs, 6 workflows that chain the agents together, and 3 playbooks for setup, the weekly rhythm and the CFO readout.",
  "lead": "Most customer marketing teams run two or three of their seven jobs well and get judged on all seven. Claude can't fix the staffing, but set up as a department instead of a chat window, it takes the first draft of almost every job off your plate.",
  "meta": [
    "Free department kit",
    "6 agents",
    "24 skills",
    "30 prompts"
  ],
  "proof": [
    {
      "label": "Resources",
      "value": "69",
      "detail": "Organized the way the work flows"
    },
    {
      "label": "Agents",
      "value": "6",
      "detail": "One Claude Project per part"
    },
    {
      "label": "Skills",
      "value": "24",
      "detail": "Four per part, ready to upload"
    }
  ],
  "cover": {
    "src": "/assets/claude_customer_marketing_dept.png",
    "alt": "The Complete Claude Customer Marketing Department: 6 agents, 24 skills, 30 prompts, 6 workflows and 3 playbooks",
    "width": 1080,
    "height": 1350
  },
  "updated": "2026-10-25",
  "sections": [
    {
      "id": "read-this-first",
      "nav": "Read this first",
      "eyebrow": "Read this first",
      "heading": "Set it up as ==a department==",
      "blocks": [
        {
          "type": "p",
          "text": "Hey, I'm Kevin Lau. I've spent 15+ years building post-sale revenue engines at companies like Marketo and Adobe. Along the way that meant $50M+ in pipeline through customer advocacy, and post-sale turned into a $100M+ ARR expansion engine."
        },
        {
          "type": "p",
          "text": "Customer marketing has seven jobs: lifecycle and adoption, customer advocacy, community, customer education, customer communications, voice of customer and executive engagement. Most teams I meet run two or three of them well and get judged on all seven."
        },
        {
          "type": "p",
          "text": "Claude can't fix the staffing. It can take the first draft of almost every one of those jobs off your plate, if you set it up as a department instead of a chat window."
        },
        {
          "type": "p",
          "text": "This is that department. It's 69 resources, organized the way the work actually flows:"
        },
        {
          "type": "list",
          "items": [
            "**6 specialized Claude agents**, one per part, each a Claude Project with its own instructions",
            "**24 reusable Claude skills**, four per part, ready to zip and upload",
            "**30 ready-to-use prompts**, five per part, for the one-off jobs",
            "**6 end-to-end workflows** that chain the agents together",
            "**3 practical playbooks** for setting it up, running it every week and proving it worked"
          ],
          "arrow": true
        },
        {
          "type": "callout",
          "tone": "accent",
          "emoji": "📬",
          "title": "Want the thinking behind the build?",
          "body": [
            "Every Thursday I publish The Customer Continuum: playbooks and POVs on adoption, retention, expansion and advocacy. [Subscribe free → kevinkennethlau.substack.com](https://kevinkennethlau.substack.com)"
          ]
        }
      ]
    },
    {
      "id": "whats-inside",
      "nav": "What's inside",
      "eyebrow": "What's inside",
      "heading": "69 resources, ==in the order the work flows==",
      "blocks": [
        {
          "type": "list",
          "items": [
            "**How the department is built**: agents, skills, prompts, workflows and playbooks, and where each one lives in Claude",
            "**Before you start**: the plan you need, the exports to pull and the one file every agent reads",
            "**The 6 agents**: project instructions to paste, one per part",
            "**The 24 skills**: copy, zip and upload",
            "**The 30 prompts**: five per part",
            "**The 6 workflows**: how the parts hand work to each other",
            "**The 3 playbooks**: first 30 days, the weekly rhythm, and the CFO readout",
            "**Guardrails**: what never leaves Claude without a human"
          ],
          "ordered": true
        },
        {
          "type": "callout",
          "tone": "light",
          "emoji": "💡",
          "title": "A note on the writing.",
          "body": [
            "The setup steps and everything inside a code block are written in plain, short sentences with one action each. It reads flat on purpose, because an instruction that can be read two ways is an instruction Claude gets wrong half the time."
          ]
        }
      ]
    },
    {
      "id": "how-the-department-is-built",
      "nav": "How it's built",
      "eyebrow": "How the department is built",
      "heading": "Six parts, ==one Project each==",
      "blocks": [
        {
          "type": "table",
          "head": [
            "Part",
            "Agent",
            "Skills",
            "Covers these pillars"
          ],
          "rows": [
            [
              "I. Onboarding & Adoption",
              "Adoption Agent",
              "01 to 04",
              "Lifecycle and adoption"
            ],
            [
              "II. Customer Advocacy",
              "Advocacy Agent",
              "05 to 08",
              "Customer advocacy"
            ],
            [
              "III. Community & Education",
              "Community Agent",
              "09 to 12",
              "Community, customer education"
            ],
            [
              "IV. Voice of Customer",
              "VoC Agent",
              "13 to 16",
              "Voice of customer"
            ],
            [
              "V. Renewals & Expansion",
              "Renewal Agent",
              "17 to 20",
              "Lifecycle and adoption, expansion"
            ],
            [
              "VI. Executive Engagement",
              "Exec Agent",
              "21 to 24",
              "Executive engagement, customer communications"
            ]
          ]
        },
        {
          "type": "list",
          "items": [
            "**An agent is a Claude Project.** Each part gets its own Project. The Project instructions hold the rules that stay true every week, and the Project knowledge holds the files that part needs. One Project per part keeps each agent focused, and keeps the advocacy data out of the renewal conversations.",
            "**A skill is a saved process.** It's a folder with a `SKILL.md` file inside. Claude reads the skill's description and loads it when a request matches. Upload a skill once and it works in every Project.",
            "**A prompt is for one-off jobs.** If you'd only do it once a quarter, it's a prompt. If you'd do it every week, it should be a skill.",
            "**A workflow chains parts together.** One agent's output becomes the next agent's input. That's where the department starts to compound.",
            "**A playbook is the operating rhythm.** It tells you what to run, in what order, and what to show leadership."
          ],
          "arrow": true
        },
        {
          "type": "h3",
          "text": "The folder, if you want to keep it all in one place"
        },
        {
          "type": "code",
          "label": "The folder",
          "text": "customer-marketing-department/\n  01-onboarding-adoption/      agent.md, skills/, prompts.md\n  02-customer-advocacy/        agent.md, skills/, prompts.md\n  03-community-education/      agent.md, skills/, prompts.md\n  04-voice-of-customer/        agent.md, skills/, prompts.md\n  05-renewals-expansion/       agent.md, skills/, prompts.md\n  06-executive-engagement/     agent.md, skills/, prompts.md\n  workflows.md\n  playbooks.md\n  customer-context.md          the one file every agent reads",
          "pre": true
        }
      ]
    },
    {
      "id": "before-you-start",
      "nav": "Before you start",
      "eyebrow": "Before you start",
      "heading": "Start with exports, ==not live tools==",
      "blocks": [
        {
          "type": "h3",
          "text": "What you need"
        },
        {
          "type": "list",
          "items": [
            "A paid Claude plan with Projects and Skills. Check [Claude's skills docs](https://claude.com/docs/skills/how-to) for your plan before you start.",
            "Code execution turned on in your settings, so skills can run.",
            "About two hours for the first setup. After that, about an hour a week."
          ],
          "ordered": true
        },
        {
          "type": "h3",
          "text": "Pull these exports first"
        },
        {
          "type": "p",
          "text": "Every agent works from exports. Start with exports. Connect live tools later, once you trust the output."
        },
        {
          "type": "list",
          "items": [
            "Account list: account name, segment, ARR, renewal date, CSM owner",
            "Product usage by account: milestones reached with dates, weekly active users, features used",
            "Support tickets from the last 90 days: subject, feature, account, status",
            "Survey and NPS verbatims from the last two quarters",
            "Call transcripts: onboarding calls, QBRs, churn conversations, happy-customer calls",
            "Community questions from the last 30 days, with reply status",
            "Release notes for the last three months",
            "The escalation list: every account with an open escalation or a renewal at risk",
            "The advocacy log: who you asked for what, when, and what they said",
            "The approved-for-public-use list: customers who agreed to be quoted publicly"
          ]
        },
        {
          "type": "h3",
          "text": "Write the customer context file"
        },
        {
          "type": "p",
          "text": "Every agent reads this file. Add it to each Project's knowledge. Spend the most time here."
        },
        {
          "type": "code",
          "label": "customer-context.md",
          "text": "CUSTOMER CONTEXT\nThe only source the agents may use for facts about us and our customers.\n\nWhat we sell, in one sentence:\nOur segments (name, size, what they buy):\nFirst value for each segment (the moment a customer gets a real result):\nOur onboarding milestones, in order:\nRenewal cycle (annual, multi-year) and who owns renewals:\nWhat expansion looks like (seats, plan, new product):\nCustomers we may name publicly:\nResults we may quote, each with its source and date:\nOur voice: three customer emails we're proud of, pasted in:\nWords we never use:\nWho signs customer emails, and who signs exec emails:"
        },
        {
          "type": "callout",
          "tone": "warn",
          "emoji": "⚠️",
          "title": "Customer data stays inside your rules.",
          "body": [
            "Only upload what your company allows in Claude. Remove anything your security team flags, and never paste in payment details or personal data you don't need."
          ]
        }
      ]
    },
    {
      "id": "the-6-agents",
      "nav": "The 6 agents",
      "eyebrow": "The 6 agents",
      "heading": "One agent per part, ==one rule they all share==",
      "blocks": [
        {
          "type": "p",
          "text": "**The procedure is the same for every agent.**"
        },
        {
          "type": "list",
          "items": [
            "Create a new Project. Use the agent's name.",
            "Paste the instructions below into the Project instructions.",
            "Upload `customer-context.md` and the exports listed under \"Knowledge\" into the Project knowledge.",
            "Turn on that part's four skills (section 4).",
            "Run the first skill once on a copy of your data. Correct anything wrong in the same chat."
          ],
          "ordered": true
        },
        {
          "type": "p",
          "text": "Every agent ends with the same line, on purpose: nothing reaches a customer without a human."
        },
        {
          "type": "card",
          "id": "agent-adoption",
          "num": "01",
          "title": "Agent I: Adoption Agent",
          "summary": "You run onboarding and adoption for our customer base.",
          "blocks": [
            {
              "type": "p",
              "text": "**Knowledge:** customer context, account list, product usage, escalation list"
            },
            {
              "type": "code",
              "label": "Project instructions",
              "text": "You run onboarding and adoption for our customer base.\n\nYour job is to get every new account to first value, and to catch the ones that stall before a CSM does.\n\nRules that always apply:\n- Use only the files in this Project. Never estimate a number.\n- Track milestones in the order listed in customer context.\n- Show the date behind every flag.\n- Never draft anything for an account on the escalation list.\n- Write every customer message from the account owner, in the voice in customer context.\n- Nothing reaches a customer without a human approving it."
            }
          ]
        },
        {
          "type": "card",
          "id": "agent-advocacy",
          "num": "02",
          "title": "Agent II: Advocacy Agent",
          "summary": "You turn happy customers into proof, and you treat every ask as a relationship, not a transaction.",
          "blocks": [
            {
              "type": "p",
              "text": "**Knowledge:** customer context, account list, product usage, advocacy log, approved-for-public-use list, happy-customer call transcripts, open opportunities export"
            },
            {
              "type": "code",
              "label": "Project instructions",
              "text": "You turn happy customers into proof, and you treat every ask as a relationship, not a transaction.\n\nRules that always apply:\n- Never ask the same customer for anything twice in 90 days. Check the advocacy log first.\n- Never ask a customer with an open urgent ticket or on the escalation list.\n- Quote customers word for word. Never change a number they said.\n- Only use customers on the approved-for-public-use list in anything external.\n- Log every ask you draft in the advocacy log, with the date.\n- Nothing reaches a customer without a human approving it."
            }
          ]
        },
        {
          "type": "card",
          "id": "agent-community",
          "num": "03",
          "title": "Agent III: Community Agent",
          "summary": "You keep the community answered and turn repeat questions into lessons.",
          "blocks": [
            {
              "type": "p",
              "text": "**Knowledge:** customer context, community questions export, past threads with accepted answers, support tickets, help center article list, event attendee lists"
            },
            {
              "type": "code",
              "label": "Project instructions",
              "text": "You keep the community answered and turn repeat questions into lessons.\n\nRules that always apply:\n- A question is unanswered when it has no reply after 24 hours.\n- Route questions to members first, staff second.\n- Never suggest the same member more than twice in one week.\n- Write help content only from resolved tickets or product documentation. Mark any step you could not confirm \"check with product\".\n- Never post in the community or publish an article yourself.\n- Nothing reaches a customer without a human approving it."
            }
          ]
        },
        {
          "type": "card",
          "id": "agent-voc",
          "num": "04",
          "title": "Agent IV: VoC Agent",
          "summary": "You turn what customers say into decisions the business can make.",
          "blocks": [
            {
              "type": "p",
              "text": "**Knowledge:** customer context, account list with ARR, support tickets, survey verbatims, churn and downgrade notes, call transcripts, feature request export, release notes"
            },
            {
              "type": "code",
              "label": "Project instructions",
              "text": "You turn what customers say into decisions the business can make.\n\nRules that always apply:\n- Quote customers word for word. Never paraphrase a quote.\n- Count separate accounts, not mentions. A theme needs 3 or more accounts.\n- Show the ARR behind every theme.\n- Never state a cause the customers did not state.\n- Write for product and leadership: one page, ranked by ARR.\n- Nothing reaches a customer without a human approving it."
            }
          ]
        },
        {
          "type": "card",
          "id": "agent-renewal",
          "num": "05",
          "title": "Agent V: Renewal Agent",
          "summary": "You protect renewals and find the accounts ready to grow.",
          "blocks": [
            {
              "type": "p",
              "text": "**Knowledge:** customer context, account list with renewal dates, product usage, support tickets, plan limits by account, escalation list"
            },
            {
              "type": "code",
              "label": "Project instructions",
              "text": "You protect renewals and find the accounts ready to grow.\n\nScope: every account with a renewal in the next 120 days, and every account near a plan limit.\n\nRules that always apply:\n- Report what the data says. Never invent a health score.\n- Put the source and the date next to every number.\n- Never offer a discount, a credit or a contract change. Flag it for the account owner instead.\n- Never write an upgrade email to an account with an open escalation.\n- Nothing reaches a customer without a human approving it."
            }
          ]
        },
        {
          "type": "card",
          "id": "agent-exec",
          "num": "06",
          "title": "Agent VI: Exec Agent",
          "summary": "You run executive engagement and customer communications.",
          "blocks": [
            {
              "type": "p",
              "text": "**Knowledge:** customer context, account list, QBR notes and transcripts, release notes, product usage, the shared customer email calendar"
            },
            {
              "type": "code",
              "label": "Project instructions",
              "text": "You run executive engagement and customer communications.\n\nRules that always apply:\n- Use only the notes, transcripts and exports in this Project.\n- Include a commitment only if someone said it in the meeting. Never add a date nobody said.\n- Customer updates cover only releases that shipped. Never include roadmap items.\n- No segment gets more than 3 emails in a calendar month, across every team.\n- Write exec emails from our executive to theirs, under 200 words.\n- Nothing reaches a customer without a human approving it."
            }
          ]
        },
        {
          "type": "callout",
          "tone": "accent",
          "emoji": "🧭",
          "title": "Six agents is the build. Knowing which two your team needs first is the harder part.",
          "body": [
            "I work with a small number of B2B companies on exactly that, starting with a scored read on where their post-sale engine stands across all seven pillars. [Book a fit call → calendly.com/kevinklau](https://calendly.com/kevinklau)"
          ]
        }
      ]
    },
    {
      "id": "the-24-skills",
      "nav": "The 24 skills",
      "eyebrow": "The 24 skills",
      "heading": "Copy, zip ==and upload==",
      "blocks": [
        {
          "type": "h3",
          "text": "How to install a skill"
        },
        {
          "type": "list",
          "items": [
            "Make a folder with the skill's name, for example `milestone-mapper`.",
            "Inside it, make a file called `SKILL.md`. Paste the skill below into it.",
            "Zip the folder itself, not the file inside it.",
            "In Claude, go to **Customize > Skills**. Upload the zip and turn the skill on.",
            "Test it with a request that matches its description."
          ],
          "ordered": true
        },
        {
          "type": "p",
          "text": "The folder name must match the `name` line at the top of the skill."
        },
        {
          "type": "h3",
          "text": "Part I. Onboarding & Adoption"
        },
        {
          "type": "card",
          "id": "skill-milestone-mapper",
          "num": "01",
          "title": "Milestone Mapper",
          "summary": "define first value per segment",
          "blocks": [
            {
              "type": "code",
              "label": "SKILL.md",
              "text": "---\nname: milestone-mapper\ndescription: Define onboarding milestones and first value for each customer segment, using usage data and successful accounts. Use when setting up or reviewing onboarding milestones.\n---\n1. Read customer context and the product usage export.\n2. Find the 20 accounts in each segment that renewed and grew.\n3. List the actions those accounts took in their first 60 days, in order, with the median day for each.\n4. Propose 4 milestones per segment: admin setup, first value, feature depth, outcome captured.\n5. For each milestone, give the exact event in the usage data that proves it happened.\n6. Flag any milestone you cannot measure with the current data.\nReturn one table per segment: milestone, proving event, median day, % of renewed accounts that hit it."
            }
          ]
        },
        {
          "type": "card",
          "id": "skill-stalled-account-finder",
          "num": "02",
          "title": "Stalled Account Finder",
          "summary": "catch accounts stuck before value",
          "blocks": [
            {
              "type": "code",
              "label": "SKILL.md",
              "text": "---\nname: stalled-account-finder\ndescription: Find new accounts that stalled before reaching first value. Use for weekly onboarding sweeps.\n---\n1. Read the account list, product usage and escalation list.\n2. For every account that started in the last 90 days, find its last milestone and the date.\n3. Flag the account when admin setup is not done 14 days after start, or first value is not reached 30 days after admin setup, or weekly active users fell by half after first value.\n4. Skip every account on the escalation list.\n5. List any account flagged two weeks in a row under \"Tell the CSM\".\nReturn a table: account, owner, start date, last milestone and date, rule that fired, days stalled."
            }
          ]
        },
        {
          "type": "card",
          "id": "skill-nudge-writer",
          "num": "03",
          "title": "Nudge Writer",
          "summary": "the next step, tied to a milestone",
          "blocks": [
            {
              "type": "code",
              "label": "SKILL.md",
              "text": "---\nname: nudge-writer\ndescription: Write a short onboarding nudge for a stalled account that names the next milestone and one way to reach it. Use after the stalled account finder.\n---\n1. Read the stalled account table and customer context.\n2. For each account, name the next milestone in one plain sentence.\n3. Give one concrete way to reach it: a 15-minute call, a help article, or a feature to try.\n4. Write from the account owner, in the voice in customer context.\n5. Keep each nudge under 80 words, with a subject line under 6 words.\n6. Never mention that the account is \"behind\" or \"stalled\".\nReturn one draft per account, held for approval."
            }
          ]
        },
        {
          "type": "card",
          "id": "skill-adoption-readout",
          "num": "04",
          "title": "Adoption Readout",
          "summary": "one page per account before a QBR",
          "blocks": [
            {
              "type": "code",
              "label": "SKILL.md",
              "text": "---\nname: adoption-readout\ndescription: Build a one-page adoption readout for one account before a business review. Use before any QBR or renewal call.\n---\n1. Read the account's usage, tickets and milestones.\n2. Show milestones reached, with dates.\n3. Show the 3 features used most and the 3 features they pay for but don't use.\n4. Show ticket themes from the last 90 days.\n5. Write 3 talking points: one win, one gap, one next step.\nEvery number needs its source and date. Keep it to one page."
            }
          ]
        },
        {
          "type": "h3",
          "text": "Part II. Customer Advocacy"
        },
        {
          "type": "card",
          "id": "skill-advocate-scorer",
          "num": "05",
          "title": "Advocate Scorer",
          "summary": "who is ready to be a reference",
          "blocks": [
            {
              "type": "code",
              "label": "SKILL.md",
              "text": "---\nname: advocate-scorer\ndescription: Score customers on readiness to be a reference, review or case study. Use monthly to build the advocate bench.\n---\n1. Read the account list, usage, tickets, advocacy log and escalation list.\n2. Score each account out of 10: first value reached (3), usage up in the last 90 days (2), no urgent ticket in 60 days (2), positive survey or call quote (2), not asked in 90 days (1).\n3. Remove every account on the escalation list.\n4. For the top 15, say what they'd be good for: reference call, review, case study or speaker.\nReturn a table: account, contact, score, why, best ask."
            }
          ]
        },
        {
          "type": "card",
          "id": "skill-case-study-drafter",
          "num": "06",
          "title": "Case Study Drafter",
          "summary": "the full story from one call",
          "blocks": [
            {
              "type": "code",
              "label": "SKILL.md",
              "text": "---\nname: case-study-drafter\ndescription: Draft a customer case study from a single call transcript. Use after a happy-customer or results call.\n---\n1. Read the transcript and customer context.\n2. Pull the before, the decision, the rollout and the result, in the customer's own words.\n3. Write the case study: headline with the result, 3-line summary, the challenge, why they chose us, how they rolled it out, the result, 2 pull quotes.\n4. Use only numbers the customer said. Mark each one with its timestamp.\n5. List every claim that needs the customer's sign-off.\nKeep it under 600 words. Mark it \"DRAFT: needs customer approval\"."
            }
          ]
        },
        {
          "type": "card",
          "id": "skill-reference-matcher",
          "num": "07",
          "title": "Reference Matcher",
          "summary": "pair advocates with live deals",
          "blocks": [
            {
              "type": "code",
              "label": "SKILL.md",
              "text": "---\nname: reference-matcher\ndescription: Match ready advocates to open sales opportunities by industry, size and use case. Use weekly with the sales team.\n---\n1. Read the open opportunities export and the advocate bench.\n2. For each opportunity, find up to 2 advocates with the same industry, a similar size, or the same use case.\n3. Skip any advocate used for a reference in the last 60 days.\n4. Write one sentence on why each match works.\n5. Draft the ask to the advocate, from their account owner, under 90 words.\nReturn a table: opportunity, stage, advocate, match reason, last used."
            }
          ]
        },
        {
          "type": "card",
          "id": "skill-review-ask-writer",
          "num": "08",
          "title": "Review Ask Writer",
          "summary": "the ask, on the day of a win",
          "blocks": [
            {
              "type": "code",
              "label": "SKILL.md",
              "text": "---\nname: review-ask-writer\ndescription: Draft an honest review ask for customers who just reached a milestone. Use daily or weekly after milestone checks.\n---\n1. Find customers who reached a milestone in the last 7 days.\n2. Remove anyone with an open urgent ticket, on the escalation list, or asked in the last 90 days.\n3. Name the milestone in the first line.\n4. Ask for an honest review on the one site named in customer context. Never ask for a positive review or a star rating.\n5. Never offer an incentive unless customer context allows one and the site's rules allow it.\n6. Keep it under 90 words. Add each ask to the advocacy log."
            }
          ]
        },
        {
          "type": "h3",
          "text": "Part III. Community & Education"
        },
        {
          "type": "card",
          "id": "skill-unanswered-question-sweep",
          "num": "09",
          "title": "Unanswered Question Sweep",
          "summary": "nothing waits more than 24 hours",
          "blocks": [
            {
              "type": "code",
              "label": "SKILL.md",
              "text": "---\nname: unanswered-question-sweep\ndescription: Find community questions with no reply after 24 hours and route each one. Use every weekday.\n---\n1. Read the community questions export and past threads with accepted answers.\n2. List every question with no reply after 24 hours.\n3. For each one, find the best matching past thread and the member who answered it.\n4. Draft a short reply that links the past thread, when one matches.\n5. List questions with no match separately for staff.\nReturn a table: question, link, age, matching thread, suggested member."
            }
          ]
        },
        {
          "type": "card",
          "id": "skill-super-user-finder",
          "num": "10",
          "title": "Super User Finder",
          "summary": "your best members, every Friday",
          "blocks": [
            {
              "type": "code",
              "label": "SKILL.md",
              "text": "---\nname: super-user-finder\ndescription: Find the community members who helped most this week. Use every Friday to build the champion bench.\n---\n1. Count answers, accepted answers and helpful votes per member for the last 7 days.\n2. Rank the top 10 by accepted answers, then helpful votes.\n3. Link 2 of each member's best answers.\n4. Flag members who are also customers with a renewal in the next 120 days.\n5. Draft a thank-you note for each, under 50 words.\nReturn the top 10 with links, and send the list to the Advocacy Agent."
            }
          ]
        },
        {
          "type": "card",
          "id": "skill-ticket-to-lesson-writer",
          "num": "11",
          "title": "Ticket-to-Lesson Writer",
          "summary": "help articles from repeat tickets",
          "blocks": [
            {
              "type": "code",
              "label": "SKILL.md",
              "text": "---\nname: ticket-to-lesson-writer\ndescription: Turn repeated support questions into help articles. Use weekly on the last 30 days of tickets.\n---\n1. Group tickets by feature and by the question asked.\n2. Count separate accounts. A group needs 5 or more accounts.\n3. Check the help center list for an existing article.\n4. For the top 5 groups with no good article, draft one article each: title as the question, numbered steps, under 400 words.\n5. Write steps only from resolved tickets or product docs. Mark any unconfirmed step \"check with product\"."
            }
          ]
        },
        {
          "type": "card",
          "id": "skill-event-follow-up-writer",
          "num": "12",
          "title": "Event Follow-Up Writer",
          "summary": "turn attendees into next steps",
          "blocks": [
            {
              "type": "code",
              "label": "SKILL.md",
              "text": "---\nname: event-follow-up-writer\ndescription: Write segmented follow-ups after a customer webinar, user group or event. Use within 48 hours of an event.\n---\n1. Read the attendee list, the session list and the account list.\n2. Split attendees into: customers who attended, customers who registered but missed it, prospects.\n3. For customers, link the one session that matches the features they use.\n4. For no-shows, send the recording and one key takeaway.\n5. Offer one next step per segment: office hours, a training, a call.\nKeep each email under 120 words. Hold all drafts for approval."
            }
          ]
        },
        {
          "type": "h3",
          "text": "Part IV. Voice of Customer"
        },
        {
          "type": "card",
          "id": "skill-theme-finder",
          "num": "13",
          "title": "Theme Finder",
          "summary": "tickets, surveys and calls into themes",
          "blocks": [
            {
              "type": "code",
              "label": "SKILL.md",
              "text": "---\nname: theme-finder\ndescription: Group support tickets, survey verbatims and call notes into themes ranked by ARR. Use monthly.\n---\n1. Read tickets, survey verbatims and call notes from the period.\n2. Group every mention into themes. Count separate accounts per theme.\n3. A theme needs 3 or more accounts. Put the rest under \"single mentions\".\n4. Add the ARR of the accounts behind each theme.\n5. Give 2 word-for-word quotes per theme, with sources.\nReturn a table ranked by ARR: theme, accounts, ARR, sources, quotes."
            }
          ]
        },
        {
          "type": "card",
          "id": "skill-churn-reason-brief",
          "num": "14",
          "title": "Churn Reason Brief",
          "summary": "why they leave, in their words",
          "blocks": [
            {
              "type": "code",
              "label": "SKILL.md",
              "text": "---\nname: churn-reason-brief\ndescription: Explain why customers churned or downgraded, in their own words. Use monthly or after a churn spike.\n---\n1. Read the churn and downgrade list with CSM notes, transcripts and survey answers.\n2. Group reasons into themes. A theme needs 3 or more accounts.\n3. Show the ARR lost per theme and 2 quotes with sources.\n4. Never state a cause the customer did not state.\n5. End with the questions product and leadership should answer.\nKeep it to one page."
            }
          ]
        },
        {
          "type": "card",
          "id": "skill-request-ranker",
          "num": "15",
          "title": "Request Ranker",
          "summary": "feature asks ranked by ARR",
          "blocks": [
            {
              "type": "code",
              "label": "SKILL.md",
              "text": "---\nname: request-ranker\ndescription: Rank feature requests by the ARR and renewal dates of the accounts asking. Use before roadmap reviews.\n---\n1. Read the feature request export, account list and renewal dates.\n2. Merge duplicate requests. Count separate accounts.\n3. For each request, show total ARR and ARR renewing in the next 180 days.\n4. Quote one customer per request, word for word.\n5. Flag requests already shipped in release notes.\nReturn a table ranked by ARR renewing in 180 days."
            }
          ]
        },
        {
          "type": "card",
          "id": "skill-close-the-loop-writer",
          "num": "16",
          "title": "Close-the-Loop Writer",
          "summary": "tell customers what changed",
          "blocks": [
            {
              "type": "code",
              "label": "SKILL.md",
              "text": "---\nname: close-the-loop-writer\ndescription: Tell customers when something they asked for has shipped. Use after each release.\n---\n1. Read the release notes and the feature request export.\n2. For each shipped release, find every account that asked for it.\n3. Write a short note from the account owner: what they asked for, what shipped, how to try it.\n4. Quote their original request back to them, if they said it in writing.\n5. Keep it under 80 words.\nHold every note for approval."
            }
          ]
        },
        {
          "type": "h3",
          "text": "Part V. Renewals & Expansion"
        },
        {
          "type": "card",
          "id": "skill-quiet-account-spotter",
          "num": "17",
          "title": "Quiet Account Spotter",
          "summary": "silence, months before renewal",
          "blocks": [
            {
              "type": "code",
              "label": "SKILL.md",
              "text": "---\nname: quiet-account-spotter\ndescription: Find accounts going quiet before their renewal. Use every Monday.\n---\n1. Read the account list, usage and tickets for accounts renewing in the next 120 days.\n2. Flag an account when weekly active users dropped 30% or more over 6 weeks, or the main contact has not logged in for 30 days, or nobody has opened a ticket or attended anything in 90 days.\n3. Show the data and dates behind every flag.\n4. Rank by ARR, then by days to renewal.\nReturn the 10 accounts worth a call this week, with the reason for each."
            }
          ]
        },
        {
          "type": "card",
          "id": "skill-renewal-email-writer",
          "num": "18",
          "title": "Renewal Email Writer",
          "summary": "at 120, 90, 60 and 30 days",
          "blocks": [
            {
              "type": "code",
              "label": "SKILL.md",
              "text": "---\nname: renewal-email-writer\ndescription: Write renewal emails at 120, 90, 60 and 30 days before renewal, based on what the account actually achieved. Use weekly.\n---\n1. Find accounts at 120, 90, 60 or 30 days before renewal this week.\n2. For each, pull milestones reached and results from usage and customer context.\n3. 120 days: a value recap and a review invite. 90 days: the plan for next year. 60 days: the renewal details. 30 days: a short check-in.\n4. Never mention price changes, discounts or terms. Flag them for the owner.\n5. Keep each email under 150 words."
            }
          ]
        },
        {
          "type": "card",
          "id": "skill-expansion-signal-finder",
          "num": "19",
          "title": "Expansion Signal Finder",
          "summary": "accounts near a plan limit",
          "blocks": [
            {
              "type": "code",
              "label": "SKILL.md",
              "text": "---\nname: expansion-signal-finder\ndescription: Find accounts showing expansion signals. Use every two weeks.\n---\n1. Read usage, plan limits and the account list.\n2. Flag accounts at 80% or more of a plan limit, adding users faster than their plan allows, or using a feature from a higher plan in trial.\n3. Remove accounts with an open escalation or an urgent ticket.\n4. For each, name the upgrade that fits and the usage behind it.\n5. Draft an upgrade email from the owner, under 120 words, that leads with what they've achieved."
            }
          ]
        },
        {
          "type": "card",
          "id": "skill-save-play-builder",
          "num": "20",
          "title": "Save Play Builder",
          "summary": "a recovery plan for every red account",
          "blocks": [
            {
              "type": "code",
              "label": "SKILL.md",
              "text": "---\nname: save-play-builder\ndescription: Build a recovery plan for an at-risk renewal. Use for any account flagged red inside 90 days of renewal.\n---\n1. Read the account's usage, tickets, notes and churn themes that match it.\n2. Name the top 2 risks, with the evidence.\n3. Write a 30-day plan: 3 actions, each with an owner and a date.\n4. Draft the first message to the customer and the internal note to the exec sponsor.\n5. Say what would change your mind: the signal that means the plan is working.\nNever promise a discount or a product change."
            }
          ]
        },
        {
          "type": "h3",
          "text": "Part VI. Executive Engagement"
        },
        {
          "type": "card",
          "id": "skill-qbr-prep-brief",
          "num": "21",
          "title": "QBR Prep Brief",
          "summary": "value delivered, on one page",
          "blocks": [
            {
              "type": "code",
              "label": "SKILL.md",
              "text": "---\nname: qbr-prep-brief\ndescription: Prepare a one-page brief before a quarterly business review with a customer executive. Use 3 days before any QBR.\n---\n1. Run the adoption readout for the account.\n2. Add the goals the customer named at the last QBR, and progress on each.\n3. Add open tickets, open requests and anything shipped that they asked for.\n4. Write the 3 things our exec should say and the 1 question they should ask.\n5. List the people attending and their role.\nOne page. Every number with its source."
            }
          ]
        },
        {
          "type": "card",
          "id": "skill-exec-follow-up-writer",
          "num": "22",
          "title": "Exec Follow-Up Writer",
          "summary": "sent while the meeting is fresh",
          "blocks": [
            {
              "type": "code",
              "label": "SKILL.md",
              "text": "---\nname: exec-follow-up-writer\ndescription: Draft the executive follow-up email after a QBR or exec meeting. Use the same day as the meeting.\n---\n1. Read the meeting notes or transcript.\n2. Write four parts: what we heard, what we agreed, who owns each item, the dates.\n3. Include a commitment only if someone said it. Never add a date nobody said.\n4. Write from our exec to theirs, under 200 words.\n5. Build a separate internal action list with owners.\n6. List anything that sounded like a commitment but had no owner or date."
            }
          ]
        },
        {
          "type": "card",
          "id": "skill-segmented-update-writer",
          "num": "23",
          "title": "Segmented Update Writer",
          "summary": "only the releases each account uses",
          "blocks": [
            {
              "type": "code",
              "label": "SKILL.md",
              "text": "---\nname: segmented-update-writer\ndescription: Write the monthly customer update, one version per segment, based on the features each segment uses. Use monthly.\n---\n1. Read release notes and product usage.\n2. Map each release to the feature it changes.\n3. Build up to 4 segments by feature use.\n4. Each version covers at most 3 releases, only for features that segment uses.\n5. Keep each version under 200 words.\nReturn a table of segments and releases, then the drafts."
            }
          ]
        },
        {
          "type": "card",
          "id": "skill-comms-calendar-checker",
          "num": "24",
          "title": "Comms Calendar Checker",
          "summary": "no segment gets buried in email",
          "blocks": [
            {
              "type": "code",
              "label": "SKILL.md",
              "text": "---\nname: comms-calendar-checker\ndescription: Check the shared customer email calendar for overload and clashes before anything is scheduled. Use before every customer send.\n---\n1. Read the shared customer email calendar for the next 30 days.\n2. Count planned emails per segment, across every team.\n3. Flag any segment with more than 3 emails in a calendar month, or 2 emails within 3 days.\n4. Propose new dates or merges for each clash.\n5. Name the team that owns each clashing email.\nReturn a table: segment, planned emails, clashes, proposed fix."
            }
          ]
        },
        {
          "type": "callout",
          "tone": "accent",
          "emoji": "📬",
          "title": "This is the part I'd bookmark.",
          "body": [
            "I write about how these seven pillars fit into one system, and what breaks when you only run three of them, every Thursday in The Customer Continuum. [Subscribe free → kevinkennethlau.substack.com](https://kevinkennethlau.substack.com)"
          ]
        }
      ]
    },
    {
      "id": "the-30-prompts",
      "nav": "The 30 prompts",
      "eyebrow": "The 30 prompts",
      "heading": "Five per part, ==for the one-off jobs==",
      "blocks": [
        {
          "type": "p",
          "text": "Paste these into the matching agent's Project. Each one is a one-off job."
        },
        {
          "type": "h3",
          "text": "Part I. Onboarding & Adoption"
        },
        {
          "type": "code",
          "label": "Prompts 1-5",
          "text": "1. Compare the first 30 days of our 10 best-retained accounts with our 10 churned accounts. What did the retained ones do that the churned ones didn't?\n2. Rewrite our welcome email so it names first value in the first line and gives one action to take today. Keep it under 100 words.\n3. Turn our onboarding checklist into a 30-60-90 day plan a customer admin could follow without a call.\n4. List the 5 support tickets new customers open most in their first 30 days, and draft one help article for each.\n5. Write the agenda for a 30-minute kickoff call that ends with a date for first value."
        },
        {
          "type": "h3",
          "text": "Part II. Customer Advocacy"
        },
        {
          "type": "code",
          "label": "Prompts 6-10",
          "text": "6. Read these 5 transcripts and pull every sentence a customer said that we could use as a quote, with timestamps.\n7. Draft a one-page brief for our advocacy program: who it's for, what customers get, what we ask, and how we measure it.\n8. Write 3 versions of a reference call ask: one for a new champion, one for a long-time customer, one for an exec.\n9. Turn this case study into a LinkedIn post, a sales one-pager and 3 slide bullets.\n10. List what we could give advocates that isn't swag: access, recognition, influence, learning."
        },
        {
          "type": "h3",
          "text": "Part III. Community & Education"
        },
        {
          "type": "code",
          "label": "Prompts 11-15",
          "text": "11. Read our community questions from the last 90 days and list the 10 topics we should run office hours on.\n12. Draft a community launch plan for the first 90 days: who we invite, the first 10 discussions, and who answers them.\n13. Turn this help article into a 5-question quiz and a 3-minute video script.\n14. Write a nomination email for our customer champion program, with clear criteria.\n15. Plan a 12-month education calendar: one course per quarter, tied to the features with the lowest adoption."
        },
        {
          "type": "h3",
          "text": "Part IV. Voice of Customer"
        },
        {
          "type": "code",
          "label": "Prompts 16-20",
          "text": "16. Read these survey verbatims and separate praise, complaints and feature requests. Quote each one word for word.\n17. Write a 5-question churn interview guide that never leads the customer.\n18. Turn this month's themes into a one-slide summary for the exec team.\n19. Draft a 3-question survey to send after onboarding, and say what decision each question informs.\n20. Read these NPS detractor comments and write a reply plan for each, owned by the right team."
        },
        {
          "type": "h3",
          "text": "Part V. Renewals & Expansion"
        },
        {
          "type": "code",
          "label": "Prompts 21-25",
          "text": "21. Build a renewal risk checklist we can run 120 days out, using only data we already have.\n22. Write the talk track for a renewal call where usage dropped this year.\n23. List the signals in our usage data that came before the last 10 upgrades.\n24. Draft a value recap for this account: what they bought, what they achieved, and what's next.\n25. Turn our churn themes into 3 save plays, each with an owner and a first step."
        },
        {
          "type": "h3",
          "text": "Part VI. Executive Engagement"
        },
        {
          "type": "code",
          "label": "Prompts 26-30",
          "text": "26. Write an exec sponsor program brief: which accounts get a sponsor, what the sponsor does each quarter, and how we track it.\n27. Draft a thank-you note from our CEO to the exec at this account after their renewal.\n28. Plan an executive advisory board: who to invite, 4 meeting topics for the year, and what we'll do with their input.\n29. Turn this quarter's releases into a 5-line exec email customers would actually read.\n30. Draft the agenda for a QBR that spends more time on the customer's goals than on our product."
        }
      ]
    },
    {
      "id": "the-6-workflows",
      "nav": "The 6 workflows",
      "eyebrow": "The 6 workflows",
      "heading": "Where the department ==starts to compound==",
      "blocks": [
        {
          "type": "p",
          "text": "Each workflow chains skills from different parts. Run them in one chat, or pass the output from one Project to the next."
        },
        {
          "type": "p",
          "text": "**Workflow 1: Stalled to saved**"
        },
        {
          "type": "p",
          "text": "02 Stalled Account Finder → 03 Nudge Writer → after 14 days with no change → 20 Save Play Builder"
        },
        {
          "type": "p",
          "text": "Use it when an account stops moving in onboarding, before it turns into a renewal problem."
        },
        {
          "type": "p",
          "text": "**Workflow 2: Win to case study**"
        },
        {
          "type": "p",
          "text": "08 Review Ask Writer flags a milestone → 05 Advocate Scorer confirms readiness → 06 Case Study Drafter → 07 Reference Matcher puts it in front of a live deal"
        },
        {
          "type": "p",
          "text": "Use it every month. One result becomes a review, a case study and a reference."
        },
        {
          "type": "p",
          "text": "**Workflow 3: Ticket to lesson to update**"
        },
        {
          "type": "p",
          "text": "13 Theme Finder → 11 Ticket-to-Lesson Writer → 23 Segmented Update Writer tells the affected segment the article exists"
        },
        {
          "type": "p",
          "text": "Use it when the same question keeps hitting support."
        },
        {
          "type": "p",
          "text": "**Workflow 4: Churn reason to closed loop**"
        },
        {
          "type": "p",
          "text": "14 Churn Reason Brief → 15 Request Ranker → product ships → 16 Close-the-Loop Writer"
        },
        {
          "type": "p",
          "text": "Use it monthly. Customers see that what they said changed something."
        },
        {
          "type": "p",
          "text": "**Workflow 5: The 120-day renewal**"
        },
        {
          "type": "p",
          "text": "17 Quiet Account Spotter → 21 QBR Prep Brief → 18 Renewal Email Writer at 120, 90, 60 and 30 days → 19 Expansion Signal Finder for the accounts that are healthy"
        },
        {
          "type": "p",
          "text": "Use it for every renewal. No renewal should be a surprise."
        },
        {
          "type": "p",
          "text": "**Workflow 6: QBR in a box**"
        },
        {
          "type": "p",
          "text": "04 Adoption Readout → 21 QBR Prep Brief → the meeting → 22 Exec Follow-Up Writer → 24 Comms Calendar Checker before anything else goes to that account"
        },
        {
          "type": "p",
          "text": "Use it for every executive meeting."
        }
      ]
    },
    {
      "id": "the-3-playbooks",
      "nav": "The 3 playbooks",
      "eyebrow": "The 3 playbooks",
      "heading": "Set it up, run it, ==prove it worked==",
      "blocks": [
        {
          "type": "h3",
          "text": "Playbook 1: The first 30 days"
        },
        {
          "type": "table",
          "head": [
            "Week",
            "What you set up",
            "What you run"
          ],
          "rows": [
            [
              "1",
              "Customer context file, exports, Adoption Agent and VoC Agent",
              "Skills 01, 02, 13"
            ],
            [
              "2",
              "Advocacy Agent and Community Agent",
              "Skills 05, 06, 09, 11"
            ],
            [
              "3",
              "Renewal Agent",
              "Skills 17, 18, and Workflow 5 on 5 accounts"
            ],
            [
              "4",
              "Exec Agent",
              "Skills 21, 22, 24, and your first full weekly rhythm"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Start with the agents that only read and report. Add the ones that draft customer messages once you've seen two weeks of output and fixed the instructions."
        },
        {
          "type": "h3",
          "text": "Playbook 2: The weekly rhythm"
        },
        {
          "type": "table",
          "head": [
            "Day",
            "What runs",
            "Who reviews"
          ],
          "rows": [
            [
              "Monday",
              "02 Stalled Account Finder, 17 Quiet Account Spotter",
              "Customer marketing lead, then CSMs"
            ],
            [
              "Tuesday",
              "05 Advocate Scorer (monthly), 07 Reference Matcher",
              "Advocacy owner, then sales"
            ],
            [
              "Wednesday",
              "09 Unanswered Question Sweep, 11 Ticket-to-Lesson Writer",
              "Community and education owners"
            ],
            [
              "Thursday",
              "13 Theme Finder (monthly), 18 Renewal Email Writer",
              "VoC owner, renewal owners"
            ],
            [
              "Friday",
              "10 Super User Finder, 24 Comms Calendar Checker",
              "Customer marketing lead"
            ]
          ]
        },
        {
          "type": "p",
          "text": "About an hour of review a day across the team. The drafts take minutes, the judgment is the job."
        },
        {
          "type": "h3",
          "text": "Playbook 3: The CFO readout"
        },
        {
          "type": "p",
          "text": "Customer marketing gets cut when it shows up as a cost. Show up with these five numbers every quarter, each with its source:"
        },
        {
          "type": "list",
          "items": [
            "**Time to first value**, by segment, this quarter vs last",
            "**Net Dollar Retention and Gross Revenue Retention** for accounts touched by these programs vs accounts that weren't",
            "**Pipeline influenced by advocacy**: opportunities where a reference, review or case study was used, and their win rate",
            "**Expansion from flagged accounts**: upgrades that followed an Expansion Signal Finder flag",
            "**Renewals saved**: red accounts with a save play that renewed"
          ],
          "arrow": true
        },
        {
          "type": "p",
          "text": "Ask the Renewal Agent to build this readout from your exports with one line: \"Build the quarterly CFO readout from Playbook 3, using only these exports, with the source next to every number.\""
        }
      ]
    },
    {
      "id": "guardrails",
      "nav": "Guardrails",
      "eyebrow": "Guardrails",
      "heading": "What never leaves Claude ==without a human==",
      "blocks": [
        {
          "type": "p",
          "text": "Paste these at the end of every agent's instructions:"
        },
        {
          "type": "code",
          "label": "Guardrails",
          "text": "Nothing reaches a customer, a community member or a review site without a human approving it.\nNever offer a discount, credit, incentive or contract change.\nNever contact an account on the escalation list.\nNever use a quote from a customer who is not on the approved-for-public-use list in anything external.\nNever invent a number, a date or a quote. Write \"not in the data\" instead.\nPut the source and the date next to every number."
        },
        {
          "type": "p",
          "text": "Post-sale runs on relationships that took years to build. **First, build trust. Then, add agents.** One badly timed email from an agent can cost you the reference you were about to ask for."
        }
      ]
    },
    {
      "id": "what-i-actually-do",
      "nav": "What I actually do",
      "eyebrow": "What I actually do",
      "heading": "Outside of ==what I publish==",
      "blocks": [
        {
          "type": "p",
          "text": "Outside of what I publish, I work with a small number of B2B companies on their post-sale engine: retention, expansion, advocacy, and the systems that turn an installed base into real revenue."
        },
        {
          "type": "p",
          "text": "The work starts with a scored read on where your post-sale engine stands across all seven pillars, and what you're ready to build next. It's delivered as an executive readout, presented live. You keep the findings either way."
        },
        {
          "type": "p",
          "text": "It tends to fit when:"
        },
        {
          "type": "list",
          "items": [
            "You're a CCO, CMO or senior revenue leader with budget and decision authority",
            "Retention and expansion carry real revenue weight in your business",
            "Your team is ready to build systems that compound, not chase one-off tactics"
          ],
          "arrow": true
        },
        {
          "type": "p",
          "text": "If that sounds like your situation, grab a time and we'll work out whether it's a fit. If it isn't, I'll tell you that on the call."
        },
        {
          "type": "cta",
          "href": "https://calendly.com/kevinklau",
          "label": "Book a fit call",
          "detail": "calendly.com/kevinklau"
        },
        {
          "type": "p",
          "text": "Or get the next build free in The Customer Continuum → [kevinkennethlau.substack.com](https://kevinkennethlau.substack.com)"
        },
        {
          "type": "p",
          "text": "P.S. If this helped, forward it to one customer marketer who's been asked to cover all seven pillars with the same headcount this year."
        }
      ]
    }
  ]
};

export default report;
