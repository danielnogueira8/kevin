/**
 * Claude for B2B Marketing Leaders: The Workbook. Same copy as the Notion resource
 * nested under the 29 Oct lead magnet card; headings and the closing section are page furniture.
 */
const report = {
  "slug": "claude-b2b-marketing-workbook",
  "landingSlug": "claude-b2b-marketing-workbook",
  "notionUrl": "",
  "kind": "Free workbook",
  "title": "Claude for B2B Marketing Leaders: The Workbook",
  "cardDescription": "Seven worksheets for deciding which marketing work should touch AI, the prompts to run on the winner, and the board slide that reports it in numbers.",
  "headline": [
    "Seven worksheets,",
    "==one board slide=="
  ],
  "description": "A complete workbook on Claude for B2B marketing leaders. The 12 deliverables Claude handles well, the 5 to refuse, a process scoring worksheet, 14 prompts for marketing leadership, the data boundary agreement, a 40-minute weekly cadence and the board slide.",
  "lead": "Most AI training for marketers teaches you to write faster, and writing was never the hard part. The hard part is deciding which of the thirty things on your plate should touch AI at all, then defending that call to a CFO who wants to know what the license did for pipeline. So the workbook is built around the decisions.",
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
      "detail": "Written for the person who owns pipeline"
    },
    {
      "label": "Cadence",
      "value": "40 min",
      "detail": "A week, one prompt in flight"
    }
  ],
  "cover": {
    "src": "/assets/claude_b2b_marketing_workbook.png",
    "alt": "The Claude workbook for B2B marketing leaders",
    "width": 2160,
    "height": 2700
  },
  "updated": "2026-10-29",
  "sections": [
    {
      "id": "read-this-first",
      "nav": "Read this first",
      "eyebrow": "Read this first",
      "heading": "Built around ==the decisions==",
      "blocks": [
        {
          "type": "p",
          "text": "Hey, I'm Kevin Lau. I've spent 15+ years building B2B revenue engines at Marketo, Adobe, F5, and Freshworks, where I ran customer marketing as VP. Along the way: $50M+ in pipeline through customer advocacy, a 40% lift in win rates, and post-sale turned into a $100M+ ARR expansion engine."
        },
        {
          "type": "p",
          "text": "I built this workbook because most AI training for marketers teaches you to write faster, and writing was never the hard part. The hard part is deciding which of the thirty things on your plate should touch AI at all, then defending that call to a CFO who wants to know what the license did for pipeline."
        },
        {
          "type": "p",
          "text": "What you'll get out of it: a scored shortlist of your own marketing processes, the five you should refuse, the prompts to run on the winner, and the slide that reports it in numbers."
        },
        {
          "type": "callout",
          "tone": "accent",
          "emoji": "📬",
          "title": "Want the thinking behind this, every Thursday?",
          "body": [
            "The Customer Continuum is where I publish the frameworks behind these worksheets: pipeline, retention, expansion, and advocacy. [Subscribe free →](https://kevinkennethlau.substack.com)"
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
            "**The 5 where it costs you more than it returns**: five classes of marketing work to refuse, and what to do instead.",
            "**The process scoring worksheet**: six criteria, one page, one candidate picked by Friday.",
            "**14 prompts for marketing leadership**: deciding, running the engine, reading the market, reporting.",
            "**The data boundary worksheet**: what never goes in the window, and the four questions your security and legal leads will ask.",
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
          "text": "By the end of this section you'll have your own twelve, scored, instead of a vague sense that AI should be writing more of your content."
        },
        {
          "type": "p",
          "text": "Most lists like this rank marketing work by how much faster AI makes it. Speed is the easy number. The one that decides whether your team still uses it next quarter is review burden: how long it takes someone senior to check the output before it goes anywhere."
        },
        {
          "type": "p",
          "text": "Here's the arithmetic. A campaign brief that takes you two hours, drafted by Claude in five minutes, still costs you an hour if it needs a line-by-line check against your positioning and your numbers. You saved an hour, not two. Run that math on the wrong process and you've built something your team quietly works around."
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
          "text": "These are the recurring deliverables I'd put on the list for a B2B marketing leader. Review burden is my judgment, not a benchmark. The hours column is blank on purpose, because I'm not going to hand you an hours-saved figure for your team. Anyone who does is guessing."
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
              "Campaign brief, first draft",
              "Per campaign",
              "Medium",
              "The structure is stable, the inputs are your ICP, offer and past results"
            ],
            [
              "2",
              "Weekly pipeline digest for the marketing stand-up",
              "Weekly",
              "Low",
              "Same shape every week, pulled from one export"
            ],
            [
              "3",
              "Content repurposing: one webinar into a month of assets",
              "Per source asset",
              "Medium",
              "Volume is the point, and the source already carries the substance"
            ],
            [
              "4",
              "Competitive brief before a launch or a deal review",
              "Per launch or on request",
              "Medium",
              "Synthesis across pages, reviews and call notes you'd otherwise read for a day"
            ],
            [
              "5",
              "Win/loss theme roll-up",
              "Monthly",
              "Low",
              "Clustering notes at scale is where people are slow and inconsistent"
            ],
            [
              "6",
              "Event and webinar follow-up sequences",
              "Per event",
              "Medium",
              "Known pattern, clear inputs: attendee list, session content, offer"
            ],
            [
              "7",
              "Sales enablement: battlecards, talk tracks, objection handling",
              "Monthly",
              "Medium",
              "Internal audience, fast feedback from reps"
            ],
            [
              "8",
              "ABM account briefs for target accounts",
              "Per account, quarterly",
              "Medium",
              "Public information plus your CRM history, in one tight format"
            ],
            [
              "9",
              "Customer story first draft from a call transcript",
              "Per story",
              "High",
              "Customer words and numbers, so every line needs approval"
            ],
            [
              "10",
              "Campaign performance recap for leadership",
              "Per campaign",
              "Low",
              "The numbers exist already; the work is writing them up"
            ],
            [
              "11",
              "Lifecycle and nurture email sequences",
              "Per program",
              "High",
              "Customer-facing copy in your brand voice, read twice by someone senior"
            ],
            [
              "12",
              "Lead and account list cleanup before a campaign",
              "Per campaign",
              "Low",
              "The most boring item here and often the biggest single saving"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Two observations before you fill in your own."
        },
        {
          "type": "p",
          "text": "Item 12 looks trivial and usually isn't. Deduplicating, standardizing titles and segmenting a list before a send is hours of low-review-burden work that nobody wants, and bad lists quietly wreck good campaigns. Start where the arithmetic is, not where the prestige is."
        },
        {
          "type": "p",
          "text": "Item 11 is the one marketing teams start with, because email copy feels like the obvious AI job. It sits near the top for review burden. Customer-facing copy carries your brand and your legal exposure, so every line gets read by someone senior. The hours don't come back the way you expect."
        },
        {
          "type": "h3",
          "text": "Worksheet 1: Your twelve"
        },
        {
          "type": "p",
          "text": "Fill this in for your own team. Use your real cadence, not the one in my table."
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
          "text": "By the end of this section you'll have a refusal list, which is more useful in a leadership conversation than another list of use cases."
        },
        {
          "type": "p",
          "text": "Every vendor demo shows you where AI wins in marketing. Almost nobody publishes where it loses, which is why teams walk into the same five walls. Each one is a class of work rather than a single task. Anything that falls inside one of them, leave alone."
        },
        {
          "type": "h3",
          "text": "1. The number you commit to"
        },
        {
          "type": "p",
          "text": "The pipeline target. The sourced-pipeline forecast. The number you put in front of the CRO and own for the quarter."
        },
        {
          "type": "p",
          "text": "A model can pull every input behind that number faster than you can. It cannot carry the number, and carrying it is your job. When the forecast misses, someone answers for it. If the answer to \"where did this come from\" is \"the model,\" you've spent credibility you needed for the next budget round."
        },
        {
          "type": "p",
          "text": "**What to do instead:** use it for the inputs, never the output. Get the evidence pack in minutes, then set the number yourself."
        },
        {
          "type": "h3",
          "text": "2. Claims that need approval"
        },
        {
          "type": "p",
          "text": "Customer quotes. Customer logos and results. Competitive comparisons. Anything a lawyer, a customer or a partner has to sign off before it goes public."
        },
        {
          "type": "p",
          "text": "A draft that invents a customer number, softens a quote or overstates a comparison doesn't save time. It creates a correction, an apology, and sometimes a call from legal. The model doesn't know which customer said what, only what sounds plausible."
        },
        {
          "type": "p",
          "text": "**What to do instead:** draft only from approved source material, word for word, and route every claim through the same approval you'd use for a human draft."
        },
        {
          "type": "h3",
          "text": "3. The brand-defining calls"
        },
        {
          "type": "p",
          "text": "The positioning statement. The campaign concept for the year. The name of the thing you're launching."
        },
        {
          "type": "p",
          "text": "These are the decisions that make you sound like you and nobody else. A model trained on everyone produces the average of everyone, which is the opposite of what a positioning call is for. It's useful in the room and dangerous as the author."
        },
        {
          "type": "p",
          "text": "**What to do instead:** use it to generate options and argue against your favorite. Make the call yourself, with your team."
        },
        {
          "type": "h3",
          "text": "4. Live crisis communication"
        },
        {
          "type": "p",
          "text": "Anything public while an outage, a breach, a bad review going viral or a public dispute is still open."
        },
        {
          "type": "p",
          "text": "Speed matters, accuracy matters more, and the words carry legal weight. A confidently wrong sentence posted during a crisis becomes the story."
        },
        {
          "type": "p",
          "text": "**What to do instead:** pre-approved holding statements written when nothing's on fire, owned by a named person. AI can help write those in advance. It does not write the live one."
        },
        {
          "type": "h3",
          "text": "5. Work built on data nobody maintains, and true one-offs"
        },
        {
          "type": "p",
          "text": "Attribution reports on a lead source field that's half empty. Segments built on a job-title field nobody standardized. And the board request that will never come again."
        },
        {
          "type": "p",
          "text": "The first gives you a beautifully formatted, confidently wrong report at volume. The second never pays back the setup cost: writing the prompt, gathering the inputs, checking the first runs. An agent with no context is a very confident stranger. An agent with bad context is worse, because it looks like it knows."
        },
        {
          "type": "p",
          "text": "**What to do instead:** fix the field first, as a project you can fund. And for a genuine one-off, use the chat window like a smart colleague, take the answer, and move on. Don't build anything."
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
              "Does someone have to commit to the output as their number?",
              ""
            ],
            [
              "Does it contain a customer claim, quote or comparison that needs approval?",
              ""
            ],
            [
              "Is it a call that defines how the brand sounds or what it stands for?",
              ""
            ],
            [
              "Does it run while something is publicly on fire?",
              ""
            ],
            [
              "Is a load-bearing field empty on more than a quarter of records, or will this run fewer than six times in six months?",
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
          "text": "The scoring is deliberately blunt. Six criteria, one to five, thirty points available. Precision here is fake precision. The point is to break a tie between four things that all seem reasonable."
        },
        {
          "type": "h3",
          "text": "The six criteria"
        },
        {
          "type": "p",
          "text": "**Frequency.** How often does this repeat? 1 is quarterly or less, 5 is weekly or more. Repetition is what pays back setup cost."
        },
        {
          "type": "p",
          "text": "**Input volume.** How much reading or stitching does it replace? 1 is one short document, 5 is a synthesis across four or more sources: CRM, web analytics, call notes, reviews. Volume is where the machine beats you."
        },
        {
          "type": "p",
          "text": "**Definition clarity.** Can you write down what a good output looks like, right now, in under ten lines? 1 is \"I'd know it when I saw it,\" 5 is \"there's a template and the team follows it.\""
        },
        {
          "type": "p",
          "text": "**Data availability.** Can you attach the inputs today, as files or exports? 1 is \"it lives in three people's heads,\" 5 is \"one export, ready now.\""
        },
        {
          "type": "p",
          "text": "**Review cost.** How long does checking the output take, compared with doing the work yourself? 5 is a fast scan, 1 is a full check against source data and brand rules. The scale runs backwards on purpose."
        },
        {
          "type": "p",
          "text": "**Blast radius.** What happens if a wrong output ships? 5 is an internal doc someone corrects in a meeting, 1 is a prospect or customer sees it. Low stakes score high, because your first pilot should be somewhere you can be wrong safely."
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
          "text": "Most marketing leaders score the process they hate most and get a 16, because pain and suitability aren't the same thing. That's a useful result. It tells you the problem is upstream, usually in the data or the definition."
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
          "text": "Then the tie-breaker, which matters more than the totals: **of the processes scoring 24 or above, which one would you be willing to show your CFO in thirty days?**"
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
            "The CLG Diagnostic scores all seven pillars of your customer engine in about five minutes and hands back a prioritized action list. Free, no login. [Run the CLG Diagnostic →](https://clg.thecustomercontinuum.com)"
          ]
        }
      ]
    },
    {
      "id": "14-prompts",
      "nav": "4. The 14 prompts",
      "eyebrow": "Section 4",
      "heading": "14 prompts for ==marketing leadership==",
      "blocks": [
        {
          "type": "p",
          "text": "By the end of this section you'll have a working set for the decisions on your desk, not another pack of copywriting prompts."
        },
        {
          "type": "p",
          "text": "Most prompt packs are written for marketers making assets. These are written for the person who owns the pipeline number: deciding what to build, running the engine, reading the market, and reporting it."
        },
        {
          "type": "p",
          "text": "All of them assume a context file. Before anything below runs, write one document the whole team points at: your ICP, your segments, your offers, your pipeline stages and definitions, your brand voice, and the claims you're approved to make. Every prompt here says to read it first."
        },
        {
          "type": "h3",
          "text": "A. Deciding and defending"
        },
        {
          "type": "code",
          "label": "1. Score my candidate list",
          "text": "You are helping a B2B marketing leader triage processes for an AI pilot.\n\nRead context/marketing-context.md first.\n\nI will paste a list of candidate processes.\n\nScore each one from 1 to 5 on: frequency, input volume, definition\nclarity, data availability, review cost (5 = fast to check), and blast\nradius (5 = low stakes if wrong).\n\nRules:\n- Ask me for any information you need to score a criterion. Do not guess.\n- Show the score for every criterion, not just the total.\n- Rank the list by total.\n- For each process scoring under 18, name the single criterion holding\n  it back and the smallest change that would raise it.\n\nEnd with one sentence naming your top pick and why it beat the second."
        },
        {
          "type": "code",
          "label": "2. Argue against my pilot",
          "text": "I have chosen [PROCESS] as our first AI pilot in marketing.\n\nYour job is to talk me out of it. Do not be balanced.\n\nTest it against five disqualifiers:\n1. Does the output become a number someone commits to.\n2. Does it contain a customer claim, quote, or comparison that needs approval.\n3. Does it define how the brand sounds or what it stands for.\n4. Does it run during a public crisis.\n5. Does it depend on an unmaintained field, or run fewer than six times\n   in six months.\n\nFor each, state your finding and the evidence you would need to confirm it.\n\nThen give me the strongest single reason not to proceed, and the\ncheapest test that would settle the question this week."
        },
        {
          "type": "code",
          "label": "3. The CFO objection rehearsal",
          "text": "Read context/marketing-context.md.\n\nI am proposing [PROCESS] as an AI pilot. Here is my case: [PASTE].\n\nAct as our CFO. You are not hostile. You are busy, and you have seen\nmarketing tools bought and abandoned before.\n\nAsk me the eight hardest questions you would ask in that meeting, one\nat a time. Wait for my answer before asking the next.\n\nAfter the eighth, tell me which of my answers was weakest and exactly\nwhat evidence would fix it."
        },
        {
          "type": "code",
          "label": "4. The one-page case",
          "text": "Turn the following into a one-page internal case for [PROCESS]:\n[PASTE NOTES]\n\nStructure, in this order:\n1. The business problem, in one sentence, in the language of pipeline.\n2. What we will run, and on what cadence.\n3. Who is affected and how: marketing, sales, customer success, product.\n4. Hours returned per month, using only the numbers I have given you.\n5. What we are asking for: budget, access, or a decision.\n6. How we will know in 60 days, with the exact measure.\n7. What we will stop doing if it fails.\n\nRules:\n- Use no number I have not supplied. Where a number is missing, write\n  \"to be measured in the pilot\" instead of estimating.\n- One page."
        },
        {
          "type": "h3",
          "text": "B. Running the engine"
        },
        {
          "type": "code",
          "label": "5. The campaign brief",
          "text": "Read context/marketing-context.md.\n\nDraft a campaign brief for [CAMPAIGN].\n\nInputs: the ICP section of the context file, the offer, the two or\nthree best past campaigns with their results, and the budget.\n\nOutput, in this order and nothing else:\n1. The audience, in one sentence, from the ICP.\n2. The single problem this campaign speaks to, in the buyer's words.\n3. The offer and why it fits that problem.\n4. Channels, with the reason for each.\n5. What success looks like in 30 and 90 days, as numbers.\n6. What we do not know yet, and how we will find out.\n\nRules:\n- Use only results that appear in the inputs.\n- Maximum one page."
        },
        {
          "type": "code",
          "label": "6. The stand-up digest",
          "text": "Read context/marketing-context.md.\n\nTurn the attached weekly export into a digest for the Monday marketing\nstand-up.\n\nOutput:\n- Five lines maximum at the top: what a leader must know before the\n  meeting starts.\n- Then three lists: programs ahead of plan, programs behind plan, and\n  programs with no activity in 14 days.\n- Then one line naming the decision this group needs to make today.\n\nRules:\n- Sort every list by pipeline value, highest first.\n- Do not include a program without evidence from the export.\n- No recommendations in the top five lines. Facts only."
        },
        {
          "type": "code",
          "label": "7. One source, a month of assets",
          "text": "Read context/marketing-context.md, including the voice section.\n\nTurn the attached transcript of [WEBINAR / TALK / PODCAST] into a month\nof assets.\n\nProduce:\n1. Four LinkedIn posts, each built on one idea from the transcript.\n2. One email to the nurture list.\n3. One short blog outline.\n4. Five quotes, word for word, with the timestamp of each.\n\nRules:\n- Every idea must appear in the transcript. Do not add new claims.\n- Quotes are verbatim. Never clean up or shorten a quote.\n- Write in the voice section of the context file.\n- Mark any line that mentions a customer or a number for review."
        },
        {
          "type": "code",
          "label": "8. The ABM account brief",
          "text": "Read context/marketing-context.md.\n\nBuild an account brief for [ACCOUNT] for an ABM program.\n\nInputs: our CRM history with the account, the open opportunity if any,\nand public sources from the last 12 months.\n\nProduce one page:\n1. Their business priorities this year, with the source and date of each.\n2. Our history with them: deals, contacts, last touch.\n3. The buying group we know, and the roles we are missing.\n4. Two angles for outreach, each tied to a stated priority.\n5. What we do not know, and who would know it.\n\nRules:\n- Mark everything from public news with the date.\n- Do not guess names or titles. Write \"unknown\" instead."
        },
        {
          "type": "h3",
          "text": "C. Reading the market"
        },
        {
          "type": "code",
          "label": "9. The competitive brief",
          "text": "Read context/marketing-context.md.\n\nBuild a competitive brief on [COMPETITOR] for [LAUNCH / DEAL REVIEW].\n\nInputs: their current website pages, public reviews, our win/loss notes\nthat mention them, and sales call notes.\n\nProduce:\n1. How they describe themselves, quoted from their own pages.\n2. Where buyers say they win, quoted from reviews and our notes.\n3. Where buyers say they lose, quoted the same way.\n4. Three questions our reps should ask to expose the difference.\n\nRules:\n- Every claim carries its source.\n- No claim about their pricing or roadmap unless a source states it.\n- Nothing in this brief is for external use."
        },
        {
          "type": "code",
          "label": "10. Win/loss themes with deal value attached",
          "text": "Read context/marketing-context.md.\n\nCluster the attached win/loss notes and survey answers for [PERIOD]\ninto themes.\n\nFor every theme:\n- Number of deals, and share of total.\n- Split by segment and by deal size.\n- Combined value of the deals raising it.\n- Three verbatim quotes.\n- Whether it is rising or falling versus the prior period.\n\nRank by deal value, not by count.\n\nRules:\n- Quotes are verbatim. Never compose, clean up, or shorten a quote.\n- Any theme under 10 deals is labeled directional in the same line.\n- Do not merge two themes that have different root causes."
        },
        {
          "type": "code",
          "label": "11. The silent target accounts",
          "text": "Read context/marketing-context.md.\n\nFind every target account with no marketing engagement in the last\n90 days.\n\nEngagement means: an event attended, a content download, a webinar,\na reply to a campaign, or a sales meeting set from marketing.\nWebsite visits alone do not count.\n\nOutput:\n1. The list, sorted by account value, with days since last engagement.\n2. Their combined value, and that as a share of the target list.\n3. Which of them have an open opportunity.\n4. Ten accounts to prioritize this month, with the reason for each.\n\nState the exact date range and every source you used."
        },
        {
          "type": "code",
          "label": "12. Program cohort comparison",
          "text": "Read context/marketing-context.md.\n\nCompare deals that touched [PROGRAM] against deals that did not, for\ndeals created in [PERIOD].\n\nReport, for each group:\n- Sample size. Always state this first.\n- Win rate.\n- Median days to close.\n- Median deal size.\n\nRules:\n- Correlation is not attribution. Never write that the program caused\n  a result. Report both groups with sample sizes beside them.\n- If either group is under 30 deals, label the comparison directional\n  in the same sentence.\n- End with the one difference large enough to be worth investigating,\n  and what you would need to confirm it."
        },
        {
          "type": "h3",
          "text": "D. Reporting and pressure-testing"
        },
        {
          "type": "code",
          "label": "13. The board slide",
          "text": "Read context/marketing-context.md.\n\nBuild a single board slide on our marketing AI pilot.\n\nInputs: my weekly log of minutes before and review minutes, the process\ndescription, the output volume numbers, and the pipeline figures for\nthe period.\n\nThe slide contains, and nothing more:\n- One line naming what changed.\n- Four numbers: hours returned per month, share of outputs needing\n  material edits, output volume change, and the pipeline figure for the\n  programs this process touches.\n- One decision being requested, with the amount or access needed.\n\nRules:\n- Use only numbers I have supplied. Do not estimate or extrapolate.\n- Never state or imply that the pilot caused a pipeline change. Present\n  pipeline as context and label it as such.\n- No adjectives. If a line still works without its adjective, remove it.\n- Then list separately every question a board member is likely to ask."
        },
        {
          "type": "code",
          "label": "14. The pressure test",
          "text": "You are reviewing a recommendation before it leaves my desk. Find what\nis wrong with it. Do not improve the writing.\n\nHere is the recommendation: [PASTE]\n\nCheck in order:\n1. The claim. What exactly is being asserted, in one sentence.\n2. The evidence. Is each supporting number sourced and dated.\n3. Causal language. Find every instance of drove, caused, generated,\n   resulted in, led to. State whether the evidence supports cause or\n   only correlation.\n4. The denominator. Every percentage: percentage of what.\n5. The counter-case. The strongest argument against this recommendation,\n   stated as its best version.\n6. The unasked question. What would a skeptical CFO ask that this\n   does not answer.\n\nOutput a numbered list of problems, most severe first, quoting the exact\nline. For each, state what would make it defensible. If a claim cannot\nbe made defensible with what is here, say to cut it."
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
          "text": "Three runs, then a decision. Anything still on fix after the third run gets killed, because your team's attention is the scarce thing here, not ideas."
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
          "text": "By the end of this section you'll have a one-page agreement with your security and legal leads, signed before anything runs, instead of a conversation you have after something goes wrong."
        },
        {
          "type": "p",
          "text": "Marketing touches more outside data than most teams: lead lists, event registrations, call recordings, customer stories. Have this conversation before the pilot, not during it. A boundary agreed in advance takes a couple of days. The same boundary agreed after an incident becomes a policy that shuts you down for a quarter."
        },
        {
          "type": "h3",
          "text": "Three tiers, drawn once"
        },
        {
          "type": "p",
          "text": "**Never goes in the window.** Personal data on leads and contacts beyond what your agreement allows. Purchased or partner lists whose terms restrict how they're processed. Customer contract terms and pricing under NDA. Unreleased financials and board material. Unannounced product and launch details under embargo. Credentials, keys and tokens, including the ones sitting in a pasted export."
        },
        {
          "type": "p",
          "text": "**Only in approved tooling, only under the agreement your legal team has read.** CRM and marketing automation exports with names intact. Call recordings and transcripts. Event registration lists. Win/loss notes. Survey verbatims. All of this is workable, and all of it depends on which plan you're on and what your agreement says about retention and training. Get that in writing before you assume it."
        },
        {
          "type": "p",
          "text": "**Fine, and stop asking.** Your own published content. Public competitor pages and public reviews. Your positioning docs and brand guidelines. Anonymized aggregates. Your own notes and drafts. This tier is bigger than most nervous teams think, and a lot of useful work lives here."
        },
        {
          "type": "p",
          "text": "The line moves by company. The point is that somebody draws it, in writing, with a name against it."
        },
        {
          "type": "h3",
          "text": "The four questions your security and legal leads will ask"
        },
        {
          "type": "p",
          "text": "Walk in with these answered and the meeting takes twenty minutes."
        },
        {
          "type": "list",
          "items": [
            "**Which product and which plan, and what does our agreement say about data retention and model training?** Not what the marketing page says. What the signed agreement says. If nobody can answer, that's the first task, not the pilot.",
            "**What data classes are entering it?** Answer with the tier list above, filled in, not with \"marketing data.\"",
            "**Where does the output live, and for how long?** Outputs are copies. A list or a brief sitting in a personal folder is the same exposure as the input.",
            "**Who has access, and how does that access end when somebody leaves, including agencies and contractors?** Named list, and a named owner of that list."
          ],
          "ordered": true
        },
        {
          "type": "p",
          "text": "A fifth question belongs on that list. **What do we tell a customer or a prospect who asks whether their data went into an AI tool?** Write that sentence now, while it's hypothetical."
        },
        {
          "type": "h3",
          "text": "Worksheet 5: The boundary agreement"
        },
        {
          "type": "p",
          "text": "Fill this in with your security or IT lead, and legal, in the room. One page. Signed."
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
              "CRM lead and contact export",
              "",
              "",
              ""
            ],
            [
              "Marketing automation activity data",
              "",
              "",
              ""
            ],
            [
              "Event registration lists",
              "",
              "",
              ""
            ],
            [
              "Call recordings and transcripts",
              "",
              "",
              ""
            ],
            [
              "Win/loss notes and survey verbatims",
              "",
              "",
              ""
            ],
            [
              "Purchased or partner lists",
              "",
              "",
              ""
            ],
            [
              "Unreleased launch material",
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
            "Access list owner, including agencies: `______________________`",
            "The sentence we say to a customer or prospect who asks: `______________________`",
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
          "text": "Tools get abandoned because nobody wrote down what they saved. When the quarter gets busy and launch week hits, there's no evidence to defend the time. The cadence is the evidence trail."
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
          "text": "Read the digest. Pick the three programs that need a human decision this week. Write the three names where your team can see them."
        },
        {
          "type": "p",
          "text": "That's all Monday is. The machine's output is a shorter list, and the value only exists if a person acts on it. Agents do speed. Humans do taste."
        },
        {
          "type": "h3",
          "text": "Wednesday, 20 minutes"
        },
        {
          "type": "p",
          "text": "Run the prompt on real work. Not a test, not last quarter's campaign. The actual deliverable that's due."
        },
        {
          "type": "p",
          "text": "Then log two numbers before you close the file: how long this took you before, and how long the review took. Two numbers, ten seconds. It's the step people skip, and it's the one that makes Section 7 possible."
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
          "text": "If it's a fix, change the prompt this minute, not next week. Most fixes are one added rule, and the fix that waits a week never happens."
        },
        {
          "type": "p",
          "text": "Then use five of those ten minutes to update the context file with anything you had to explain twice. The context file is the asset that compounds. The prompts are replaceable, the file isn't."
        },
        {
          "type": "h3",
          "text": "Where this breaks"
        },
        {
          "type": "p",
          "text": "**Three pilots at once.** Everyone does it. Three half-run experiments produce no evidence and one tired team. One at a time, three runs, then decide."
        },
        {
          "type": "p",
          "text": "**No log.** Without those two Wednesday numbers you have adjectives, and you'll lose the budget conversation to someone with a spreadsheet."
        },
        {
          "type": "p",
          "text": "**The leader who hands it off on day one.** Run it yourself for the first month. Not because your team can't, but because the definitions that matter get written when the person who owns the number hits the friction personally."
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
          "text": "By the end of this section you'll have a slide that reports AI progress in marketing the way finance reports everything else."
        },
        {
          "type": "p",
          "text": "Most AI updates from marketing are adjectives. Promising. Exciting. Significant productivity gains. Every experienced director hears those words as \"no numbers yet,\" and they're right."
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
          "text": "**Hours returned per month.** From your weekly log, not from an estimate. Minutes before, minus review minutes, times how often it runs. Show the arithmetic on the slide. A shown calculation gets trusted far faster than a stated total."
        },
        {
          "type": "p",
          "text": "**Edit rate.** The share of outputs that needed material edits. This number falling over four weeks is the strongest evidence you have. Most people never track it because it looks like an admission. It's a learning curve, and a board recognizes one."
        },
        {
          "type": "p",
          "text": "**Output volume.** How much more the team shipped with the same people: briefs, account plans, assets, follow-ups. It's a reach number, not an efficiency one, and it often lands hardest."
        },
        {
          "type": "p",
          "text": "**The pipeline figure for the programs this touches.** Context, and only context. Never claim the pilot moved it."
        },
        {
          "type": "p",
          "text": "That last rule decides whether you get asked back. Correlation is not attribution, and marketing has spent twenty years losing credibility on exactly this point. The moment you claim four weeks of prompting created pipeline, someone in the room stops believing the other three numbers. Present pipeline as the backdrop and let hours, edit rate and volume carry the argument. You'll be more persuasive, not less."
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
            "Fund the data cleanup that Section 2 identified, with a scope and a duration.",
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
          "text": "HEADLINE (one line, no adjectives):\nWe moved ____________________ from ____ hours a month to ____ hours.\n\nTHE NUMBERS\nHours returned per month:  ____ before  -  ____ review  x ____ runs  =  ____\nOutputs needing material edits:  ____% in week 1  →  ____% in week 4\nOutput volume:  ____ per month before  →  ____ per month now\nPipeline, programs touched by this process:  ____  (context, not attribution)\n\nWHAT WE LEARNED (one line each, maximum three)\n1. ______________________\n2. ______________________\n3. ______________________\n\nTHE ASK\nWe are requesting ______________________ to ______________________.\nWe will report ______________________ by ______________________.",
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
            "\"It returned [X] hours a month and let the same team ship [Y] more.\"",
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
          "text": "**Run it yourself.** Seven worksheets, forty minutes a week. Fill in Worksheet 3 this week, start the cadence on Monday, and you'll have a board slide with real numbers in about five weeks."
        },
        {
          "type": "p",
          "text": "**Look at the other half of the funnel.** Most of the pipeline marketing chases is already sitting in the customer base. The CLG Flywheel app is public and free: score your seven pillars with the CLG Diagnostic, run the Revenue Impact Model before your next budget conversation, and open the Agents tab for all 135 agents. No login."
        },
        {
          "type": "cta",
          "href": "https://clg.thecustomercontinuum.com",
          "label": "Open the CLG Flywheel",
          "detail": "clg.thecustomercontinuum.com"
        },
        {
          "type": "p",
          "text": "I publish the thinking behind all of this every Thursday in The Customer Continuum."
        },
        {
          "type": "p",
          "text": "**Subscribe free →** [kevinkennethlau.substack.com](https://kevinkennethlau.substack.com)"
        },
        {
          "type": "p",
          "text": "P.S. If this was useful, forward it to one marketing leader heading into a budget conversation with adjectives instead of numbers."
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
          "text": "Outside of what I publish, I work with a small number of B2B companies on their revenue engine: retention, expansion, advocacy, and the systems that turn an installed base into real revenue."
        },
        {
          "type": "p",
          "text": "Most teams I talk to are stuck in the same place. Everyone is running their own prompts in their own tab, nothing compounds, and the customer base that should be the cheapest growth in the business is running on autopilot."
        },
        {
          "type": "p",
          "text": "The work starts with a scored read on where your engine actually stands across all seven pillars, and what you're ready to build next. It's delivered as an executive readout, presented live. You keep the findings either way."
        },
        {
          "type": "p",
          "text": "It tends to fit when:"
        },
        {
          "type": "list",
          "items": [
            "You're a CMO, CCO, or senior revenue leader with budget and decision authority",
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
