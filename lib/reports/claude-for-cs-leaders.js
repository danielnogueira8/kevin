/**
 * Claude for CS Leaders: The Workbook, converted from the Notion resource
 * (https://glimmer-farmhouse-441.notion.site/Resource-Claude-for-CS-Leaders-The-Workbook-3ce93aa14ae48029916deb2dcaf01dc5).
 * The body text is Kevin's Notion copy; headings and the closing section are page furniture.
 */
const report = {
  "slug": "claude-for-cs-leaders",
  "landingSlug": "claude-for-cs-leaders",
  "notionUrl": "https://glimmer-farmhouse-441.notion.site/Resource-Claude-for-CS-Leaders-The-Workbook-3ce93aa14ae48029916deb2dcaf01dc5",
  "kind": "Free workbook",
  "title": "Claude for CS Leaders: The Workbook",
  "cardDescription": "Seven worksheets for deciding which post-sale work should touch AI, the prompts to run on the winner, and the board slide that reports it in numbers.",
  "headline": [
    "Seven worksheets,",
    "==one board slide=="
  ],
  "description": "A complete workbook on Claude for Customer Success leaders. The 12 deliverables Claude handles well, the 5 to refuse, a process scoring worksheet, 14 prompts for post-sale leadership, the data boundary agreement, a 40-minute weekly cadence and the board slide.",
  "lead": "Most AI training for post-sale teaches the chat window, and that was never the hard part. The hard part is deciding which of the forty things on your desk should touch AI at all, then defending that call to a CFO who's already asking what the license is doing for NRR. So the workbook is built around the decisions.",
  "meta": [
    "Free workbook",
    "7 worksheets",
    "14 prompts",
    "40 minutes a week"
  ],
  "proof": [
    {
      "label": "Worksheets",
      "value": "7",
      "detail": "One at the end of every section"
    },
    {
      "label": "Prompts",
      "value": "14",
      "detail": "Written for the person who owns the number"
    },
    {
      "label": "Cadence",
      "value": "40 min",
      "detail": "A week, one prompt in flight"
    }
  ],
  "cover": {
    "src": "/assets/claude_workbook_week.png",
    "alt": "A week with my Claude workbook for CS leaders",
    "width": 2160,
    "height": 2700
  },
  "updated": "2026-10-21",
  "sections": [
    {
      "id": "read-this-first",
      "nav": "Read this first",
      "eyebrow": "Read this first",
      "heading": "Built around ==the decisions==",
      "blocks": [
        {
          "type": "p",
          "text": "Hey, I'm Kevin Lau. I've spent 15+ years turning post-sale into a revenue engine, most recently as VP of Customer Marketing at Freshworks, and before that at Adobe, Marketo, F5, and Google."
        },
        {
          "type": "p",
          "text": "I built this workbook because most AI training for post-sale teaches the chat window, and that was never the hard part. The hard part is deciding which of the forty things on your desk should touch AI at all, then defending that call to a CFO who's already asking what the license is doing for NRR."
        },
        {
          "type": "p",
          "text": "What you'll get out of it: a scored shortlist of your own processes, the five you should refuse, the prompts to run on the winner, and the slide that reports it in numbers."
        },
        {
          "type": "callout",
          "tone": "accent",
          "emoji": "📬",
          "title": "Want the thinking behind this, every Thursday?",
          "body": [
            "The Customer Continuum is where I publish the frameworks these worksheets came from: adoption, retention, expansion, and advocacy. [Subscribe free →](https://kevinkennethlau.substack.com)"
          ]
        },
        {
          "type": "h3",
          "text": "What's inside"
        },
        {
          "type": "list",
          "items": [
            "**The 12 deliverables Claude handles well**: what to score them on, and why review burden matters more than hours saved.",
            "**The 5 where it costs you more than it returns**: five classes of work to refuse, and what to do instead.",
            "**The process scoring worksheet**: six criteria, one page, one candidate picked by Friday.",
            "**14 prompts for post-sale leadership**: deciding, running the book, seeing the base, reporting.",
            "**The data boundary worksheet**: what never goes in the window, and the four questions your security lead will ask.",
            "**The 40-minute weekly cadence**: how this survives past week three.",
            "**The board slide**: four numbers, one decision, zero adjectives."
          ],
          "ordered": true
        },
        {
          "type": "p",
          "text": "**A note on the writing.** The prompts, the run steps, and the worksheet instructions are written in simplified technical English: short sentences, no contractions, one instruction per line. That is deliberate. An instruction you can read two ways is an instruction that does not get followed. Everything else sounds like me."
        },
        {
          "type": "p",
          "text": "**How to use this.** Every section ends in a worksheet. Print them or copy them into a doc. The workbook is worth nothing read straight through and quite a lot filled in."
        }
      ]
    },
    {
      "id": "the-12-deliverables",
      "nav": "1. The 12 deliverables",
      "eyebrow": "Section 1",
      "heading": "The 12 deliverables ==Claude handles well==",
      "blocks": [
        {
          "type": "p",
          "text": "By the end of this section you'll have your own twelve, scored, instead of a general sense that AI could probably help with some of this."
        },
        {
          "type": "p",
          "text": "Every list like this you've seen scores on hours saved. That's the wrong lead. Hours saved is the number that gets you funded, but review burden is the number that decides whether anyone still uses it in March."
        },
        {
          "type": "p",
          "text": "The arithmetic goes like this. A task that takes you 90 minutes, done by Claude in four, still costs you 50 minutes if the output needs a careful line-by-line check against source data. Net saving is real but it's 40 minutes, not 86. Do that math on the wrong process and you've built something your team quietly abandons while telling you it's great."
        },
        {
          "type": "p",
          "text": "So each deliverable gets two scores. Hours you'd save, and how hard the output is to check."
        },
        {
          "type": "h3",
          "text": "The twelve"
        },
        {
          "type": "p",
          "text": "These are the recurring deliverables I'd put on the list for a CS or post-sale leader. Review burden is my judgment from running these, not a benchmark. The hours column is blank on purpose, because I'm not going to hand you an hours-saved figure for your team. Anyone who does is guessing."
        },
        {
          "type": "table",
          "head": [
            "#",
            "Deliverable",
            "Typical cadence",
            "Review burden",
            "Why it works here"
          ],
          "rows": [
            [
              "1",
              "QBR narrative, first draft",
              "Per account, quarterly",
              "Medium",
              "The structure is stable, the facts come from files you already have"
            ],
            [
              "2",
              "Renewal risk brief",
              "Per account, ahead of forecast",
              "Medium",
              "Synthesis across sources you'd otherwise open in eight tabs"
            ],
            [
              "3",
              "Weekly health digest for the stand-up",
              "Weekly",
              "Low",
              "Same shape every week, and stale beats absent"
            ],
            [
              "4",
              "Escalation recap and post-mortem",
              "Per incident",
              "Low",
              "The timeline is in the ticket thread already"
            ],
            [
              "5",
              "Segment onboarding plan",
              "Per new segment or motion",
              "Medium",
              "You're adapting a known pattern, not inventing one"
            ],
            [
              "6",
              "Executive meeting brief",
              "Per exec meeting",
              "Medium",
              "High value, tight format, clear inputs"
            ],
            [
              "7",
              "Win-to-proof capture",
              "Per win",
              "Medium",
              "One outcome should feed five assets, and rarely does"
            ],
            [
              "8",
              "Voice of customer theme roll-up",
              "Monthly",
              "Low",
              "Volume is the whole point, and humans cluster badly at scale"
            ],
            [
              "9",
              "Reference match to live deals",
              "On stage change",
              "Low",
              "Matching against structured fields"
            ],
            [
              "10",
              "Lifecycle and adoption sequences",
              "Per campaign",
              "High",
              "Customer-facing copy, so every line gets read twice"
            ],
            [
              "11",
              "Call notes into CRM fields and next steps",
              "Daily",
              "Low",
              "The most boring item here and probably your biggest single saving"
            ],
            [
              "12",
              "CSM enablement: playbooks, macros, objection handling",
              "Monthly",
              "Medium",
              "Internal audience, fast feedback loop"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Two observations before you fill in your own."
        },
        {
          "type": "p",
          "text": "Item 11 looks trivial and usually isn't. Across a team of ten CSMs, notes-to-CRM is the largest pile of low-review-burden minutes in the whole function, and it's the one everybody skips because it isn't strategic. Start where the arithmetic is, not where the prestige is."
        },
        {
          "type": "p",
          "text": "Item 10 is the one people start with, because copy feels like the obvious AI job. It has the highest review burden on the list. Customer-facing copy carries your voice and your risk, so every line gets checked by someone senior. The hours don't come back the way you expect."
        },
        {
          "type": "h3",
          "text": "Worksheet 1: Your twelve"
        },
        {
          "type": "p",
          "text": "Fill this in for your own book of business. Use your real cadence, not the one in my table."
        },
        {
          "type": "table",
          "head": [
            "Deliverable",
            "Times per month",
            "Minutes each, today",
            "Monthly hours today",
            "Review burden (L/M/H)",
            "Who signs it off"
          ],
          "rows": [
            [
              "",
              "",
              "",
              "",
              "",
              ""
            ],
            [
              "",
              "",
              "",
              "",
              "",
              ""
            ],
            [
              "",
              "",
              "",
              "",
              "",
              ""
            ]
          ]
        },
        {
          "type": "p",
          "text": "Three prompts to answer underneath:"
        },
        {
          "type": "list",
          "items": [
            "Which row has the most monthly hours attached to it?",
            "Which row has the lowest review burden?",
            "If those are two different rows, the second one is where you start."
          ],
          "ordered": true
        }
      ]
    },
    {
      "id": "the-5-to-refuse",
      "nav": "2. The 5 to refuse",
      "eyebrow": "Section 2",
      "heading": "The 5 where it ==costs you more than it returns==",
      "blocks": [
        {
          "type": "p",
          "text": "By the end of this section you'll have a refusal list, which is more useful in a leadership conversation than an adoption list."
        },
        {
          "type": "p",
          "text": "Every vendor deck shows you where AI wins. Almost nobody publishes where it loses, which is why teams walk into the same five walls. Each one is a class of work rather than a single task. Anything that falls inside one of them, leave alone."
        },
        {
          "type": "h3",
          "text": "1. Judgment you have to sign"
        },
        {
          "type": "p",
          "text": "The renewal forecast. The expansion commit. The number you put in the room and own."
        },
        {
          "type": "p",
          "text": "A model can assemble every signal behind that number faster than you can. It cannot carry the number, and that's the whole job. When a forecast is wrong, someone absorbs it. If the answer to \"where did this come from\" is \"the model,\" you've spent credibility you needed for something else."
        },
        {
          "type": "p",
          "text": "**What to do instead:** use it for the inputs, never the output. Get the evidence pack in four minutes, then set the number yourself in ten."
        },
        {
          "type": "h3",
          "text": "2. The trust moments"
        },
        {
          "type": "p",
          "text": "The save call with a champion who's gone quiet. The apology to an executive sponsor. The conversation where a customer decides whether you're worth another year."
        },
        {
          "type": "p",
          "text": "Trust is not built at scale. It is built one conversation at a time. Drafting these is where the temptation sits, and the draft is usually fine, which is the problem. Fine is not what that moment needs."
        },
        {
          "type": "p",
          "text": "**What to do instead:** prep with it, speak yourself. Ask for the three questions you haven't thought to ask. Then close the laptop."
        },
        {
          "type": "h3",
          "text": "3. Live incidents"
        },
        {
          "type": "p",
          "text": "Anything customer-facing while an outage, a breach, or a serious escalation is still open."
        },
        {
          "type": "p",
          "text": "Three things are true at once here: speed matters, accuracy matters more, and the words carry legal weight. A model that's confidently slightly wrong about the state of an incident does damage you spend a quarter repairing."
        },
        {
          "type": "p",
          "text": "**What to do instead:** pre-approved templates written when nothing's on fire, held by a named owner. AI helps you write those templates in advance. It does not write the live one."
        },
        {
          "type": "h3",
          "text": "4. Work built on data nobody maintains"
        },
        {
          "type": "p",
          "text": "Health scores from fields your CSMs fill in inconsistently. Outcome reporting when no outcome was ever recorded. Segmentation on a field that's been optional for two years."
        },
        {
          "type": "p",
          "text": "This is the one that catches good teams. The process is genuinely automatable and the inputs are fiction, so you get a beautifully formatted, confidently wrong artifact, at volume, faster than you can catch it. An agent with no context is a very confident stranger. An agent with bad context is worse, because it looks like it knows."
        },
        {
          "type": "p",
          "text": "**What to do instead:** fix the input first. If a field is empty on 40% of accounts, no prompt fixes that, and the cleanup is a two-week project you can actually fund."
        },
        {
          "type": "h3",
          "text": "5. The genuine one-off"
        },
        {
          "type": "p",
          "text": "The board request that will never come again. The one-time migration analysis. The thing you'll do once, this quarter, and never repeat."
        },
        {
          "type": "p",
          "text": "Setup cost is real: writing the prompt, assembling the inputs, checking the first three outputs. On something that repeats weekly, that cost amortizes by week three. On a one-off it never does, and you've spent your team's limited patience for new tools on something that produced one artifact."
        },
        {
          "type": "p",
          "text": "**What to do instead:** just do it. Use the chat window like a smart colleague, take the answer, move on. Don't build anything."
        },
        {
          "type": "h3",
          "text": "Worksheet 2: The refusal test"
        },
        {
          "type": "p",
          "text": "Run your chosen candidate through this before you spend a week on it. Any yes means stop and pick something else."
        },
        {
          "type": "table",
          "head": [
            "Question",
            "Yes / No"
          ],
          "rows": [
            [
              "Does someone have to sign the output as a personal commitment?",
              ""
            ],
            [
              "Is this a moment where a customer decides whether they trust us?",
              ""
            ],
            [
              "Does this run while something is actively on fire?",
              ""
            ],
            [
              "Is a load-bearing input field empty on more than a quarter of accounts?",
              ""
            ],
            [
              "Will this run fewer than six times in the next six months?",
              ""
            ]
          ]
        },
        {
          "type": "p",
          "text": "If every answer is no, keep going. If any answer is yes, write one line on which class it fell into. That line is what you say to your team when they ask why you didn't automate the obvious thing."
        }
      ]
    },
    {
      "id": "the-scoring-worksheet",
      "nav": "3. The scoring worksheet",
      "eyebrow": "Section 3",
      "heading": "The process ==scoring worksheet==",
      "blocks": [
        {
          "type": "p",
          "text": "By the end of this section you'll have one named candidate and a defensible reason it beat the others."
        },
        {
          "type": "p",
          "text": "The scoring is deliberately blunt. Six criteria, one to five, thirty points available. Precision here is fake precision, and the point is to break a tie between four things that all seem reasonable."
        },
        {
          "type": "h3",
          "text": "The six criteria"
        },
        {
          "type": "p",
          "text": "**Frequency.** How often does this repeat? 1 is quarterly or less, 5 is daily. Repetition is what pays back setup cost."
        },
        {
          "type": "p",
          "text": "**Input volume.** How much reading or stitching does it replace? 1 is a single short document, 5 is a synthesis across four or more sources. Volume is where the machine actually beats you."
        },
        {
          "type": "p",
          "text": "**Definition clarity.** Can you write down what a good output looks like, right now, in under ten lines? 1 is \"I'd know it when I saw it,\" 5 is \"there's a template and everyone follows it.\" Teams skip this one and then wonder why the output comes back vague."
        },
        {
          "type": "p",
          "text": "**Data availability.** Can you attach the inputs today, as files or exports? 1 is \"it lives in six people's heads,\" 5 is \"one export, ready now.\""
        },
        {
          "type": "p",
          "text": "**Review cost.** How long does checking the output take, relative to doing the work yourself? 5 is a fast scan, 1 is a full line-by-line audit against source data. Note the scale runs backwards from what you'd expect, on purpose."
        },
        {
          "type": "p",
          "text": "**Blast radius.** What happens if a wrong output ships? 5 is an internal doc someone corrects in a meeting, 1 is a customer sees it. Low stakes score high, because your first pilot should be somewhere you can be wrong safely."
        },
        {
          "type": "h3",
          "text": "The bands"
        },
        {
          "type": "table",
          "head": [
            "Total",
            "What it means"
          ],
          "rows": [
            [
              "24 to 30",
              "Start this week"
            ],
            [
              "18 to 23",
              "Candidate, once you fix the lowest-scoring criterion"
            ],
            [
              "Under 18",
              "Not this one, and not yet"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Most teams score their most painful process and get a 16, because pain and suitability aren't the same thing. That's a useful result. It tells you the problem is upstream."
        },
        {
          "type": "h3",
          "text": "Worksheet 3: Score five candidates"
        },
        {
          "type": "table",
          "head": [
            "Process",
            "Freq",
            "Volume",
            "Clarity",
            "Data",
            "Review",
            "Radius",
            "Total"
          ],
          "rows": [
            [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              ""
            ],
            [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              ""
            ],
            [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              ""
            ],
            [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              ""
            ],
            [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              ""
            ]
          ]
        },
        {
          "type": "p",
          "text": "Then the tie-breaker, which matters more than the totals: **of the processes scoring 24 or above, which one would you be willing to show a CFO in thirty days?**"
        },
        {
          "type": "p",
          "text": "Pick that one. Write its name here, and the date you'll start: `______________________`"
        },
        {
          "type": "p",
          "text": "Run one. A team running three pilots finishes none of them."
        },
        {
          "type": "callout",
          "tone": "accent",
          "emoji": "🧭",
          "title": "Now do the same thing one level up.",
          "body": [
            "The CLG Diagnostic scores all seven CLG pillars in about five minutes and hands back a prioritized action list. Free, no login. [Run the CLG Diagnostic →](https://clg.thecustomercontinuum.com)"
          ]
        }
      ]
    },
    {
      "id": "14-prompts",
      "nav": "4. The 14 prompts",
      "eyebrow": "Section 4",
      "heading": "14 prompts for ==post-sale leadership==",
      "blocks": [
        {
          "type": "p",
          "text": "By the end of this section you'll have a working set for the decisions on your desk, not the copy on someone else's."
        },
        {
          "type": "p",
          "text": "Most published prompt packs are written for marketers making assets. These are written for the person who owns the number: deciding what to build, running the book, seeing the base, and reporting it."
        },
        {
          "type": "p",
          "text": "All of them assume a context file. Before anything below runs, write one document the whole team points at: your segments, your ARR tiers, your renewal calendar, your definition of at-risk, your escalation levels, and your tone. Every prompt here says to read it first."
        },
        {
          "type": "h3",
          "text": "A. Deciding and defending"
        },
        {
          "type": "code",
          "label": "1. Score my candidate list",
          "text": "You are helping a CS leader triage processes for an AI pilot.\n\nRead context/clg-context.md first.\n\nI will paste a list of candidate processes.\n\nScore each one from 1 to 5 on: frequency, input volume, definition\nclarity, data availability, review cost (5 = fast to check), and blast\nradius (5 = low stakes if wrong).\n\nRules:\n- Ask me for any information you need to score a criterion. Do not guess.\n- Show the score for every criterion, not just the total.\n- Rank the list by total.\n- For each process scoring under 18, name the single criterion holding\n  it back and the smallest change that would raise it.\n\nEnd with one sentence naming your top pick and why it beat the second."
        },
        {
          "type": "code",
          "label": "2. Argue against my pilot",
          "text": "I have chosen [PROCESS] as our first AI pilot in post-sale.\n\nYour job is to talk me out of it. Do not be balanced.\n\nTest it against five disqualifiers:\n1. Does the output require a personal commitment from a named human.\n2. Is it a trust moment with a customer.\n3. Does it run during live incidents.\n4. Does it depend on a data field that is inconsistently maintained.\n5. Will it run fewer than six times in six months.\n\nFor each, state your finding and the evidence you would need to confirm it.\n\nThen give me the strongest single reason not to proceed, and the\ncheapest test that would settle the question this week."
        },
        {
          "type": "code",
          "label": "3. The CFO objection rehearsal",
          "text": "Read context/clg-context.md.\n\nI am proposing [PROCESS] as an AI pilot. Here is my case: [PASTE].\n\nAct as our CFO. You are not hostile. You are busy and you have seen\nthree tools bought and abandoned in two years.\n\nAsk me the eight hardest questions you would ask in that meeting, one\nat a time. Wait for my answer before asking the next.\n\nAfter the eighth, tell me which of my answers was weakest and exactly\nwhat evidence would fix it."
        },
        {
          "type": "code",
          "label": "4. The one-page case",
          "text": "Turn the following into a one-page internal case for [PROCESS]:\n[PASTE NOTES]\n\nStructure, in this order:\n1. The business problem, in one sentence, in the language of retention.\n2. What we will run, and on what cadence.\n3. Who is affected and how: CS, Support, Product, Sales.\n4. Hours returned per month, using only the numbers I have given you.\n5. What we are asking for: budget, access, or a decision.\n6. How we will know in 60 days, with the exact measure.\n7. What we will stop doing if it fails.\n\nRules:\n- Use no number I have not supplied. Where a number is missing, write\n  \"to be measured in the pilot\" instead of estimating.\n- One page. Three sections visible without scrolling."
        },
        {
          "type": "h3",
          "text": "B. Running the book"
        },
        {
          "type": "code",
          "label": "5. Renewal risk brief, decision-shaped",
          "text": "Read context/clg-context.md.\n\nBuild a renewal risk brief for [ACCOUNT], for a leader who has ten\nminutes before a forecast call.\n\nInputs: CRM record, last two QBRs, support tickets from the last 90\ndays, usage for the last two quarters, contract and renewal date.\n\nOutput, in this order and nothing else:\n1. The call. High, medium, or low likelihood, and the one thing that\n   would move it.\n2. Three facts behind that call, each with its source and date.\n3. What changed since the last review.\n4. The single question I should ask the account team today.\n5. What we do not know, and who would know it.\n\nMaximum 250 words. Cite the source for every claim. Where evidence is\nmissing, write \"no evidence in the inputs\"."
        },
        {
          "type": "code",
          "label": "6. The stand-up digest",
          "text": "Read context/clg-context.md.\n\nTurn the attached week of notes, tickets, and call summaries into a\ndigest for a Monday CS leadership stand-up.\n\nOutput:\n- Five lines maximum at the top: what a leader must know before the\n  meeting starts.\n- Then three lists: accounts that got worse, accounts that got better,\n  and accounts where nothing has happened in 30 days.\n- Then one line naming the decision this group needs to make today.\n\nRules:\n- Sort every list by ARR descending.\n- Do not include an account without evidence from the inputs.\n- No recommendations in the top five lines. Facts only."
        },
        {
          "type": "code",
          "label": "7. The escalation post-mortem",
          "text": "Read context/clg-context.md.\n\nWrite the post-mortem for the escalation on [ACCOUNT].\n\nInputs: full ticket thread, internal messages, timeline of commitments,\nand any customer communications.\n\nProduce:\n1. Timeline. Every material event with a timestamp and who acted.\n2. First failure. The earliest point where a different action would\n   have changed the outcome.\n3. Detection delay. How long between the first signal and the first\n   internal acknowledgement.\n4. Commitments made to the customer, with dates, and their current status.\n5. Three changes, each with an owner role and a named trigger.\n\nRules:\n- No blame language and no individual names. Roles only.\n- Separate what we know from what we inferred, under two headings."
        },
        {
          "type": "code",
          "label": "8. QBR narrative that leads with their business",
          "text": "Read context/clg-context.md.\n\nDraft the QBR narrative for [ACCOUNT].\n\nInputs: usage data, support history, the original business case, the\nlast QBR, and any public news about the customer.\n\nStructure:\n1. Their business situation this quarter, in their language, from the\n   inputs. Not ours.\n2. The outcome they bought, quoted from the original business case. If\n   the business case is not in the inputs, say so plainly. That absence\n   is the finding.\n3. Where they are against that outcome, with numbers.\n4. What we are asking them to do next, and what we will do.\n5. Three questions for them, which we do not already know the answer to.\n\nRules:\n- Do not open with our product. Open with their situation.\n- No feature list. Every mention of a feature attaches to an outcome."
        },
        {
          "type": "code",
          "label": "9. The executive brief",
          "text": "Read context/clg-context.md.\n\nI meet [NAME], [TITLE] at [ACCOUNT], in 48 hours.\n\nProduce a one-page brief:\n1. Their business priorities this year, from public sources and the inputs.\n2. Their history with us: value delivered, and every commitment we have\n   made, with status.\n3. Anything unresolved they are likely to raise.\n4. The three questions I should ask.\n5. The one sentence I should be able to say about the outcome they bought.\n\nRules:\n- No program updates unless they answer a question this person has asked.\n- One page. No appendix.\n- Mark anything sourced from public news with the date."
        },
        {
          "type": "h3",
          "text": "C. Seeing the base"
        },
        {
          "type": "code",
          "label": "10. Voice of customer roll-up with revenue attached",
          "text": "Read context/clg-context.md.\n\nCluster the attached support tickets, survey verbatims, and community\nthreads into themes for the last [PERIOD].\n\nFor every theme:\n- Volume, and share of total.\n- Split by segment and by tenure band.\n- Combined ARR of the accounts raising it.\n- Three verbatim quotes.\n- Whether it is rising or falling versus the prior period.\n\nRank by ARR exposure, not by volume.\n\nRules:\n- Quotes are verbatim. Never compose, clean up, or shorten a quote.\n- Any theme under 10 mentions is labeled directional in the same line.\n- Do not merge two themes that have different root causes."
        },
        {
          "type": "code",
          "label": "11. The unmanaged middle",
          "text": "Read context/clg-context.md.\n\nFind every account with no meaningful touch from any post-sale program\nin the last 90 days.\n\nMeaningful touch means: a QBR, an executive meeting, a community\ncontribution, a program enrollment, an education completion, or an\nadvocacy ask. Support tickets do not count as a touch.\n\nOutput:\n1. The list, sorted by ARR, with days since last touch and renewal date.\n2. Combined ARR of the list, and that as a share of total book.\n3. Of that list, which accounts renew in the next two quarters.\n4. Ten accounts I could contact this month, chosen for renewal\n   proximity and ARR.\n\nState the exact date range and every source you used."
        },
        {
          "type": "code",
          "label": "12. Onboarding cohort comparison",
          "text": "Read context/clg-context.md.\n\nCompare accounts that completed onboarding against those that did not,\nfor cohorts starting in [PERIOD].\n\nReport, for each group:\n- Sample size. Always state this first.\n- Time to first value, median.\n- Feature depth at 90 and 180 days.\n- Support tickets in the first 90 days.\n- Retention rate at first renewal.\n\nRules:\n- Correlation is not attribution. Never write that onboarding drove\n  retention. Report both rates with sample sizes beside them.\n- If either group is under 30 accounts, label the comparison directional\n  in the same sentence.\n- End with the one difference large enough to be worth investigating,\n  and what you would need to confirm it."
        },
        {
          "type": "h3",
          "text": "D. Reporting and pressure-testing"
        },
        {
          "type": "code",
          "label": "13. The board slide",
          "text": "Read context/clg-context.md.\n\nBuild a single board slide on our post-sale AI pilot.\n\nInputs: my weekly log of minutes saved and review minutes, the process\ndescription, the coverage numbers, and the retention figures for the\nperiod.\n\nThe slide contains, and nothing more:\n- One line naming what changed.\n- Four numbers: hours returned per month, share of outputs needing\n  material edits, coverage change, and the retention figure for the\n  book this process touches.\n- One decision being requested, with the amount or access needed.\n\nRules:\n- Use only numbers I have supplied. Do not estimate or extrapolate.\n- Never state or imply that the pilot caused a retention change. Present\n  retention as context and label it as such.\n- No adjectives. If a line still works without its adjective, remove it.\n- Then list separately every question a board member is likely to ask."
        },
        {
          "type": "code",
          "label": "14. The pressure test",
          "text": "You are reviewing a recommendation before it leaves my desk. Find what\nis wrong with it. Do not improve the writing.\n\nHere is the recommendation: [PASTE]\n\nCheck in order:\n1. The claim. What exactly is being asserted, in one sentence.\n2. The evidence. Is each supporting number sourced and dated.\n3. Causal language. Find every instance of drove, caused, because of,\n   resulted in, led to. State whether the evidence supports cause or\n   only correlation.\n4. The denominator. Every percentage: percentage of what.\n5. The counter-case. The strongest argument against this recommendation,\n   stated as its best version.\n6. The unasked question. What would a skeptical executive ask that this\n   does not answer.\n\nOutput a numbered list of problems, most severe first, quoting the exact\nline. For each, state what would make it defensible. If a claim cannot\nbe made defensible with what is here, say to cut it."
        },
        {
          "type": "h3",
          "text": "Worksheet 4: The prompt log"
        },
        {
          "type": "p",
          "text": "Run a prompt three times before you decide anything about it."
        },
        {
          "type": "table",
          "head": [
            "Prompt",
            "Run date",
            "Minutes it took me before",
            "Minutes to review",
            "Net saved",
            "Keep / fix / kill"
          ],
          "rows": [
            [
              "",
              "",
              "",
              "",
              "",
              ""
            ],
            [
              "",
              "",
              "",
              "",
              "",
              ""
            ],
            [
              "",
              "",
              "",
              "",
              "",
              ""
            ]
          ]
        },
        {
          "type": "p",
          "text": "Three runs, then a decision. Anything still on fix after the third run gets killed, because attention is the scarce thing here, not ideas."
        },
        {
          "type": "callout",
          "tone": "accent",
          "emoji": "📬",
          "title": "The prompts are the easy half.",
          "body": [
            "I write about the harder one, taking this from a thing you run to a system your team runs, every Thursday in The Customer Continuum. [Subscribe free →](https://kevinkennethlau.substack.com)"
          ]
        }
      ]
    },
    {
      "id": "the-data-boundary",
      "nav": "5. The data boundary",
      "eyebrow": "Section 5",
      "heading": "The data ==boundary worksheet==",
      "blocks": [
        {
          "type": "p",
          "text": "By the end of this section you'll have a one-page agreement with your security lead, signed before anything runs, instead of a conversation you have after something goes wrong."
        },
        {
          "type": "p",
          "text": "Have this conversation before the pilot, not during it. A boundary agreed in advance is a two-day exercise. The same boundary agreed after an incident is a policy that shuts you down for a quarter."
        },
        {
          "type": "h3",
          "text": "Three tiers, drawn once"
        },
        {
          "type": "p",
          "text": "**Never goes in the window.** Customer personal data beyond a business email and title. Contract terms and pricing under NDA. Security questionnaire responses and penetration test results. Anything covered by a customer contract that restricts which subprocessors can touch their data. Employee performance, compensation, or medical information. End-user financial or health records. Credentials, keys, and tokens, including the ones sitting in a pasted log file."
        },
        {
          "type": "p",
          "text": "**Only in approved tooling, only under the agreement your legal team has read.** Usage exports with account names intact. Ticket text. CRM exports. Survey verbatims. Call transcripts. All of this is workable, and all of it depends on which plan you're on and what your agreement actually says about retention and training. Get that in writing before you assume it."
        },
        {
          "type": "p",
          "text": "**Fine, and stop asking.** Your own frameworks. Public case studies and marketing materials. Anonymized aggregates. Your own notes and drafts. Industry research. This tier is larger than most nervous teams believe, and quite a lot of useful work lives here."
        },
        {
          "type": "p",
          "text": "The line moves by company. The point is that somebody draws it, in writing, with a name against it."
        },
        {
          "type": "h3",
          "text": "The four questions your security lead will ask"
        },
        {
          "type": "p",
          "text": "Walk in with these answered and the meeting takes twenty minutes."
        },
        {
          "type": "list",
          "items": [
            "**Which product and which plan, and what does our agreement say about data retention and model training?** Not what the marketing page says. What our signed agreement says. If nobody can answer, that is the first task, not the pilot.",
            "**What data classes are entering it?** Answer with the tier table above, filled in, not with \"customer data.\"",
            "**Where does the output live, and for how long?** Outputs are copies. A brief containing account data sitting in a personal folder is the same exposure as the input.",
            "**Who has access, and how does that access end when somebody leaves?** Named list, and a named owner of that list."
          ],
          "ordered": true
        },
        {
          "type": "p",
          "text": "A fifth question belongs on that list. **What do we tell a customer who asks whether we put their data into an AI tool?** Write that sentence now, while it's hypothetical. It will get asked in a security review inside twelve months."
        },
        {
          "type": "h3",
          "text": "Worksheet 5: The boundary agreement"
        },
        {
          "type": "p",
          "text": "Fill this in with your security or IT lead in the room. One page. Signed."
        },
        {
          "type": "table",
          "head": [
            "Data class",
            "Tier: never / approved only / fine",
            "Where it lives",
            "Approved by"
          ],
          "rows": [
            [
              "Product usage export",
              "",
              "",
              ""
            ],
            [
              "Support ticket text",
              "",
              "",
              ""
            ],
            [
              "CRM account and contact export",
              "",
              "",
              ""
            ],
            [
              "Survey verbatims",
              "",
              "",
              ""
            ],
            [
              "Call transcripts",
              "",
              "",
              ""
            ],
            [
              "Contract and pricing terms",
              "",
              "",
              ""
            ],
            [
              "Named customer contacts",
              "",
              "",
              ""
            ],
            [
              "[Your own rows]",
              "",
              "",
              ""
            ]
          ]
        },
        {
          "type": "p",
          "text": "Then, underneath:"
        },
        {
          "type": "list",
          "items": [
            "Product and plan in use: `______________________`",
            "Our agreement says about retention and training: `______________________`",
            "Output storage location: `______________________`",
            "Access list owner: `______________________`",
            "The sentence we say to a customer who asks: `______________________`",
            "Agreed by, and date: `______________________`"
          ]
        },
        {
          "type": "p",
          "text": "Take a photo of it when it's signed. The value is partly the boundary and partly being able to produce the page when someone senior asks who approved this."
        }
      ]
    },
    {
      "id": "the-40-minute-cadence",
      "nav": "6. The 40-minute cadence",
      "eyebrow": "Section 6",
      "heading": "The 40-minute ==weekly cadence==",
      "blocks": [
        {
          "type": "p",
          "text": "By the end of this section you'll have a weekly rhythm that survives past week three, which is where most of these die."
        },
        {
          "type": "p",
          "text": "Tools get abandoned because nobody wrote down what they saved, so when the quarter gets busy there's no evidence to defend the twenty minutes. The cadence is the evidence trail."
        },
        {
          "type": "p",
          "text": "Forty minutes a week, split across three days. One prompt in flight at a time."
        },
        {
          "type": "h3",
          "text": "Monday, 10 minutes"
        },
        {
          "type": "p",
          "text": "Read the digest. Pick the three accounts that need a human this week. Write the three names somewhere your team can see them."
        },
        {
          "type": "p",
          "text": "Monday is nothing more than that. The machine's output is a shorter list, and the value only exists if a human acts on it. Agents do speed. Humans do taste."
        },
        {
          "type": "h3",
          "text": "Wednesday, 20 minutes"
        },
        {
          "type": "p",
          "text": "Run the prompt on real work. Not a test case, not last quarter's data. The actual deliverable that's due."
        },
        {
          "type": "p",
          "text": "Then log two numbers before you close the file: how long this took you before, and how long the review took. Two numbers, ten seconds. This is the single step people skip and it's the one that makes Section 7 possible."
        },
        {
          "type": "h3",
          "text": "Friday, 10 minutes"
        },
        {
          "type": "p",
          "text": "Keep, fix, or kill. One decision on the one prompt in flight."
        },
        {
          "type": "p",
          "text": "If it's a fix, make the change to the prompt this minute, not next week. Most fixes are one added constraint, and the fix that waits a week never happens."
        },
        {
          "type": "p",
          "text": "Then, five of those ten minutes: update the context file with anything you had to explain twice. The context file is the compounding asset here. The prompts are replaceable, the file isn't."
        },
        {
          "type": "h3",
          "text": "Where this breaks"
        },
        {
          "type": "p",
          "text": "**Three pilots at once.** Everyone does this. Three half-run experiments produce no evidence and one exhausted team. One at a time, three runs, then decide."
        },
        {
          "type": "p",
          "text": "**No log.** Without those two Wednesday numbers you have adjectives, and you will lose the budget conversation to someone with a spreadsheet."
        },
        {
          "type": "p",
          "text": "**The leader who delegates the cadence immediately.** Run it yourself for the first month. Not because your team can't, but because the definitions that matter get written when the person who owns the number hits the friction personally. I delayed building with AI for months because I was afraid of being a beginner again after years of being the person with answers. That fear is expensive and it passes in about two weeks."
        },
        {
          "type": "h3",
          "text": "Worksheet 6: The weekly log"
        },
        {
          "type": "table",
          "head": [
            "Week",
            "Prompt in flight",
            "Ran it on",
            "Minutes before",
            "Review minutes",
            "Net",
            "Keep / fix / kill"
          ],
          "rows": [
            [
              "1",
              "",
              "",
              "",
              "",
              "",
              ""
            ],
            [
              "2",
              "",
              "",
              "",
              "",
              "",
              ""
            ],
            [
              "3",
              "",
              "",
              "",
              "",
              "",
              ""
            ],
            [
              "4",
              "",
              "",
              "",
              "",
              "",
              ""
            ]
          ]
        },
        {
          "type": "p",
          "text": "Four weeks of this is the entire input to the board slide. Forty minutes a week buys you a quarterly review with numbers in it."
        }
      ]
    },
    {
      "id": "the-board-slide",
      "nav": "7. The board slide",
      "eyebrow": "Section 7",
      "heading": "The ==board slide==",
      "blocks": [
        {
          "type": "p",
          "text": "By the end of this section you'll have a slide that reports AI progress the way the rest of the business reports everything else."
        },
        {
          "type": "p",
          "text": "Most AI updates to a board are adjectives. Promising. Encouraging. Significant efficiency gains. Every experienced director hears those words as \"no numbers yet,\" and they're right."
        },
        {
          "type": "p",
          "text": "Four numbers and one decision fix that."
        },
        {
          "type": "h3",
          "text": "The four numbers"
        },
        {
          "type": "p",
          "text": "**Hours returned per month.** From your weekly log, not from an estimate. Minutes before, minus review minutes, times frequency. Show the arithmetic on the slide. A shown calculation is trusted twice as fast as a stated total."
        },
        {
          "type": "p",
          "text": "**Review rate.** The share of outputs that needed material edits. This number going down over four weeks is the strongest evidence you have, and most people never track it because it looks like an admission, when it's actually a learning curve, and a board recognizes one of those."
        },
        {
          "type": "p",
          "text": "**Coverage.** How many accounts the process now touches that it didn't before. It usually lands hardest, because it's a reach number rather than an efficiency one. \"Ninety accounts got a quarterly review last quarter, three hundred got one this quarter\" is a different kind of statement than an hours figure."
        },
        {
          "type": "p",
          "text": "**The retention figure for the book this touches.** Context, and only context. Never claim the pilot moved it."
        },
        {
          "type": "p",
          "text": "That last rule is the one that decides whether you get asked back. Correlation is not attribution. The moment you claim four weeks of prompting moved NRR, one person in that room stops believing the other three numbers too. Present retention as the backdrop and let the hours and coverage carry the argument. You'll be more persuasive, not less."
        },
        {
          "type": "h3",
          "text": "The one decision"
        },
        {
          "type": "p",
          "text": "Every board slide ends in a decision, not a status. Status updates get thanked and forgotten. Decisions get minuted."
        },
        {
          "type": "p",
          "text": "Three shapes that work:"
        },
        {
          "type": "list",
          "items": [
            "Extend to a second process, named, with the same measures.",
            "Fund the input cleanup that Section 2 identified, with a scope and a duration.",
            "Stop this and say so, which buys more credibility than it costs."
          ],
          "arrow": true
        },
        {
          "type": "h3",
          "text": "The slide skeleton"
        },
        {
          "type": "p",
          "text": "Copy this and fill the blanks. One slide, no appendix."
        },
        {
          "type": "code",
          "label": "The slide skeleton",
          "text": "HEADLINE (one line, no adjectives):\nWe moved ____________________ from ____ hours a month to ____ hours.\n\nTHE NUMBERS\nHours returned per month:  ____ before  -  ____ review  x ____ runs  =  ____\nOutputs needing material edits:  ____% in week 1  →  ____% in week 4\nCoverage:  ____ accounts before  →  ____ accounts now\nRetention, book touched by this process:  ____%  (context, not attribution)\n\nWHAT WE LEARNED (one line each, maximum three)\n1. ______________________\n2. ______________________\n3. ______________________\n\nTHE ASK\nWe are requesting ______________________ to ______________________.\nWe will report ______________________ by ______________________.",
          "pre": true
        },
        {
          "type": "h3",
          "text": "The three sentences to say out loud"
        },
        {
          "type": "p",
          "text": "The slide is the artifact. These are what people remember."
        },
        {
          "type": "list",
          "items": [
            "\"We tested one process for four weeks and logged every run.\"",
            "\"It returned [X] hours a month and extended the review to [Y] more accounts.\"",
            "\"We're asking for [the decision], and here's what we'll report back by [date].\""
          ],
          "ordered": true
        },
        {
          "type": "p",
          "text": "Under thirty seconds. Then stop talking and let them ask."
        },
        {
          "type": "h3",
          "text": "Worksheet 7: Your slide"
        },
        {
          "type": "p",
          "text": "Fill the skeleton above with real numbers from Worksheet 6. Then answer these three before the meeting:"
        },
        {
          "type": "list",
          "items": [
            "Which of the four numbers is weakest, and what will you say when someone points at it?",
            "What's the strongest argument against continuing? Say it yourself, first, before anyone else does.",
            "If you get a yes, what's the second process, and does it already have a score from Worksheet 3?"
          ],
          "ordered": true
        },
        {
          "type": "p",
          "text": "That last one is why you built the scored list in Section 3. The worst moment in a good board meeting is being asked \"great, what's next?\" and having to think about it."
        }
      ]
    },
    {
      "id": "whats-next",
      "nav": "What's next",
      "eyebrow": "What's next",
      "heading": "Two ==ways forward==",
      "blocks": [
        {
          "type": "p",
          "text": "You've got the workbook. Two ways forward."
        },
        {
          "type": "p",
          "text": "**Run it yourself.** Seven worksheets, forty minutes a week. If you fill in Worksheet 3 this week and start the cadence on Monday, you have a board slide with real numbers in five weeks."
        },
        {
          "type": "p",
          "text": "**Come see the rest of the architecture.** The CLG Flywheel app is public and free. Score your seven pillars with the CLG Diagnostic, run the Revenue Impact Model before your next budget conversation, and open the Agents tab for all 135 agents across the seven pillars. No login."
        },
        {
          "type": "cta",
          "href": "https://clg.thecustomercontinuum.com",
          "label": "Open the CLG Flywheel",
          "detail": "clg.thecustomercontinuum.com"
        },
        {
          "type": "p",
          "text": "I publish the thinking behind all of this every Thursday in The Customer Continuum, including the Build With Me series where I build the next round of this in the open."
        },
        {
          "type": "p",
          "text": "**Subscribe free →** [kevinkennethlau.substack.com](https://kevinkennethlau.substack.com)"
        },
        {
          "type": "p",
          "text": "P.S. If this was useful, forward it to one CS leader heading into a budget conversation with adjectives instead of numbers."
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
          "text": "Most teams I talk to are stuck in the same place. Everyone is running their own prompts in their own tab, nothing compounds, and the customer base that should be the cheapest growth in the business is running on autopilot."
        },
        {
          "type": "p",
          "text": "The work starts with a scored read on where your post-sale engine actually stands across all seven pillars, and what you're ready to build next. It's delivered as an executive readout, presented live. You keep the findings either way."
        },
        {
          "type": "p",
          "text": "It tends to fit when:"
        },
        {
          "type": "list",
          "items": [
            "You're a CCO, CMO, or senior revenue leader with budget and decision authority",
            "Retention and expansion carry real revenue weight in your business",
            "Your team is ready to build compounding systems, not chase one-off tactics"
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
          "text": "Or get the next build free in The Customer Continuum → [kevinkennethlau.substack.com](https://kevinkennethlau.substack.com/)"
        }
      ]
    }
  ]
};

export default report;
