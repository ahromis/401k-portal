# Workshop Facilitator Guide

## Pre-Workshop Preparation (1 Week Before)

### Week Before

- [ ] **Send Calendar Invite** with Zoom/location details
- [ ] **Email Pre-Work** - Send `SETUP.md` to all participants
- [ ] **Set up Zoom** (if virtual) - Enable breakout rooms, screen sharing
- [ ] **Test Environment** - Clone repo, run through entire workshop yourself
- [ ] **Prepare Backup Plan** - Have offline materials ready

### Day Before

- [ ] **Confirm Attendance** - Send reminder email
- [ ] **Test Tech** - Verify screen sharing, audio, video
- [ ] **Prepare Examples** - Have code snippets ready to paste
- [ ] **Review Timing** - Practice transitions between sections
- [ ] **Print Materials** (optional) - Keyboard shortcuts, agenda

### Morning Of

- [ ] **Arrive Early** - 30 minutes before start
- [ ] **Test Projector/Screen Share** - Make sure everyone can see
- [ ] **Open All Windows** - VS Code with repo, browser, terminal
- [ ] **Verify Copilot Working** - Test all three chat modes
- [ ] **Have Backup** - Secondary laptop/device ready
- [ ] **Water/Coffee** - Take care of yourself too!

---

## Detailed Facilitation Script

### Part 1: Setup & Introduction (10 minutes)

#### Opening (3 minutes)

**Script:**

> "Welcome everyone! I'm excited to show you how to use GitHub Copilot beyond just autocomplete. By the end of today, you'll be writing tests first, having architecture discussions with AI, and using Agent Mode to tackle complex refactoring.
>
> Quick sound check - can everyone hear me? Great. Can everyone see my screen clearly? Perfect.
>
> Let's start with a quick poll: How many of you use Copilot daily? [wait for hands] How many use it mainly for code completion? [wait] How many have used Copilot Chat? [wait] Great, we'll be expanding on that today."

**Check-in Question:**
"Who's had Copilot write code that surprised you - either amazingly good or hilariously wrong? [Take 1-2 quick stories]"

#### Today's Roadmap (2 minutes)

**Show agenda on screen:**

> "Here's our plan for the next 2 hours:
> 1. First 30 minutes: I'll demo the TDD workflow with Copilot
> 2. Next 40 minutes: You'll practice in pairs on real stories
> 3. 10-minute break (we all need it!)
> 4. 20 minutes: Architecture and Agent Mode demos
> 5. Final 15 minutes: You build something real
> 6. 5 minutes: Wrap up and Q&A
>
> The key is hands-on practice. You'll learn by doing, not just watching."

#### TDD Philosophy (5 minutes)

**Open VS Code with clean slate**

> "Let me show you the three-phase cycle that changes everything about how you code."

**Draw on whiteboard/screen:**

```
🔴 RED → Write test that FAILS
   ↓
🟢 GREEN → Make it PASS (minimal code)
   ↓
🔵 REFACTOR → Make it BETTER
   ↓
   REPEAT
```

> "The magic happens because:
> - RED: Tests describe what you want before you code
> - GREEN: You focus on making it work, not making it perfect
> - REFACTOR: You improve with confidence because tests protect you
>
> We have three custom chat modes that keep you in each phase:
> - @tdd-red: Helps write clear, failing tests
> - @tdd-green: Suggests minimal implementations
> - @tdd-refactor: Improves code quality while keeping tests green
>
> Sound good? Let's see it in action."

**Energy Check:** "Everyone with me so far? Any questions before we dive in?"

---

### Part 2: TDD Demo (20 minutes)

#### Set Up (1 minute)

**Show VS Code with repo open**

> "I'm in the 401k-portal repo. Let's say I need to calculate total account balance. Instead of just writing the function, watch what happens when we start with the test."

#### Red Phase Demo (7 minutes)

**Open Copilot Chat (`Cmd+I`)**

> "First, I open Copilot Chat. Notice I'm typing @tdd-red - that activates our custom Red phase mode."

**Type slowly so they can follow:**

```
@tdd-red

I need to calculate the total balance from all funds in an account.

Requirements:
- Array of fund objects, each with a balance property
- Return sum of all balances
- Empty array returns 0

Help me write ONE failing test for the happy path.
```

**Pause before pressing Enter:**

> "See how I'm specific about requirements? I'm also asking for ONE test. That's key - we build up behavior one test at a time."

**Press Enter, wait for response**

**Review Copilot's suggestion out loud:**

> "Look at this - Copilot suggested a test file with a clear structure:
> - describe block groups related tests
> - it statement describes the behavior
> - Arrange-Act-Assert pattern is clear
> 
> This is exactly what we want. The test will fail because calculateTotalBalance doesn't exist yet."

**Create the file: `src/utils/__tests__/accountBalance.test.js`**

**Paste Copilot's test, then run:**

```bash
npm run test
```

**Wait for failure, then highlight the error:**

> "Perfect! It fails with 'Cannot find module' - exactly what we expected. This is a GOOD failure. It tells us what to build next."

**Key Teaching Point:**

> "Why write the test first? Because now we have a clear target. The test describes exactly what success looks like. No guessing, no over-engineering."

#### Green Phase Demo (7 minutes)

**Switch to @tdd-green:**

> "Now we move to Green phase. Watch how the chat mode changes my focus."

**Type:**

```
@tdd-green

Here's my failing test:
[paste the test]

Help me write the MINIMAL code to make it pass.
Create src/utils/accountBalance.js
```

**Review Copilot's response:**

> "Notice what Copilot did - it gave me the simplest possible implementation:
> - One function
> - Uses reduce to sum
> - No extra features
> - No error handling yet
> 
> This might feel wrong to experienced developers. We want to add validation, handle errors, add docs... But GREEN phase is about speed. We prove it works first."

**Create the file and paste the code**

**Run tests:**

```bash
npm run test
```

**Celebrate the green:**

> "✅ GREEN! The test passes. Our code works for this scenario. 
>
> Now here's the discipline: We do NOT add more code. We do NOT 'improve' it yet. We commit to having a working feature, then move to refactor."

#### Refactor Phase Demo (6 minutes)

**Switch to @tdd-refactor:**

> "Now we make it production-ready. This is where we add all the quality."

**Type:**

```
@tdd-refactor

Here's my working code with passing test:
[paste both]

Refactor to improve:
- Input validation
- Error handling  
- JSDoc comments
- Edge cases

Keep tests green!
```

**Review suggestions:**

> "Look at all the improvements Copilot suggests:
> - Type checking for the array
> - Validation for each balance
> - Documentation
> - Better error messages
> 
> This is production-quality code. But notice - we're doing this AFTER we proved it works."

**Apply changes incrementally:**

> "I'm going to apply these one at a time and run tests after each change. Watch."

**Change 1: Add JSDoc - Run tests ✅**

> "Tests still green."

**Change 2: Add array validation - Run tests ✅**

> "Still green."

**Change 3: Add balance validation - Run tests ✅**

> "Perfect! All improvements made, all tests passing."

**Commit:**

```bash
git add .
git commit -m "feat: add account balance calculation"
```

**Key Takeaway:**

> "This is the rhythm: RED → GREEN → REFACTOR → Commit. Each commit is a complete, tested, production-ready feature.
>
> Questions before you try this yourselves?"

---

### Part 3: Hands-On Exercise (40 minutes)

#### Setup (3 minutes)

> "Now it's your turn! You'll work in pairs on fund transfer validation.
>
> Find a partner - try to pair with someone you don't usually code with. Got your pairs? Great!
>
> Here's the user story..."

**Show the story on screen:**

> "Read through the acceptance criteria together. You have 40 minutes to implement as many criteria as you can using the RED-GREEN-REFACTOR cycle.
>
> Switch roles after each test:
> - Round 1: Person A is driver for RED, Person B for GREEN, Person A for REFACTOR
> - Round 2: Switch - Person B starts as driver
>
> Remember: Use the chat modes! @tdd-red, @tdd-green, @tdd-refactor"

**Walk around (if in person) or check breakout rooms (if virtual):**

> "I'll be walking around to answer questions. Don't be afraid to experiment!"

#### Checkpoints

**At 15 minutes:**

> "Quick check - everyone completed at least one RED-GREEN-REFACTOR cycle? [Show of hands] Great! Keep going!"

**At 30 minutes:**

> "10 minutes left! Finish your current test cycle and commit what you have."

#### Debrief (7 minutes)

**Bring everyone back together:**

> "Let's share experiences. I want to hear:
> 1. What surprised you?
> 2. Where did Copilot excel?
> 3. Where did you need to guide it?
>
> Who wants to share first?"

**Take 3-4 stories, then synthesize:**

> "Common themes I'm hearing:
> - Copilot is great at suggesting test structure
> - Sometimes it over-engineers in GREEN phase
> - The chat modes keep you focused on one goal
> - Having tests makes refactoring confident
>
> All of this is normal. You're learning to collaborate with AI."

---

### Break (10 minutes)

> "Let's take a 10-minute break. Stand up, stretch, grab water. When we come back, I'll show you how to use Copilot for architecture and Agent Mode for complex refactoring.
>
> Back at [specific time]."

**During break:**
- Check tech setup
- Prepare architecture demo
- Queue up Agent Mode example
- Answer individual questions

---

### Part 4: Architecture & Agent Mode (20 minutes)

#### Architecture Demo (10 minutes)

**Come back from break:**

> "Welcome back! Now let's talk about using Copilot for design decisions.
>
> Before you write any code, you should think through architecture. Copilot is surprisingly good at this conversation."

**Open clean Copilot Chat:**

> "Watch how I have a design discussion first..."

**Type:**

```
I need to design a contribution calculator for our 401k portal.

Requirements:
- Calculate future balance with compound interest
- Include employer match
- Show year-by-year projection
- Input: current balance, monthly contribution, match %, years

Let's discuss architecture before coding:
1. What components should I create?
2. How should data flow?
3. Where should calculations live?
4. What validation is needed?
```

**Read Copilot's response out loud:**

> "Look at this - Copilot is suggesting:
> - Separate calculation service (good separation of concerns!)
> - Form component for inputs
> - Results display component
> - Validation at the form level
>
> This is architectural thinking. Now I can ask follow-up questions..."

**Ask:**

```
Should calculations be in frontend or backend?
What are pros and cons of each approach?
```

**Review response:**

> "See? It's weighing tradeoffs:
> - Frontend: faster, works offline, but exposed logic
> - Backend: secure, centralized, but needs API call
>
> This is the kind of discussion you'd have with a senior developer. Now let's visualize it."

**Ask for diagram:**

```
Create a Mermaid diagram showing:
- Component structure
- Data flow
- Key functions

Keep it simple.
```

**Show the generated diagram:**

> "Instant architecture diagram! This would take me 20 minutes to draw. Now I can share this with the team, get feedback, iterate on design BEFORE writing code.
>
> This saves massive amounts of time and rework."

#### Agent Mode Demo (10 minutes)

**Switch gears:**

> "Now let me show you Agent Mode. This is where Copilot becomes autonomous - it can navigate files, make multiple edits, run tests, and iterate until successful.
>
> When should you use it?
> - Complex refactoring across many files
> - Debugging unfamiliar code
> - Comprehensive documentation generation
> - Well-defined but tedious tasks
>
> Let me show you..."

**Enable Agent Mode** (click toggle in Copilot Chat):

> "See this toggle? When it's on, Copilot will execute multi-step tasks autonomously. You stay in control - you can approve or reject each step."

**Give Agent a task:**

```
@agent

Refactor the BalanceMatrix component:
1. Extract calculation logic to separate utility
2. Add PropTypes or JSDoc type comments
3. Improve variable names for clarity
4. Add error handling for edge cases
5. Ensure component still renders correctly

Make these improvements systematically.
```

**Watch as Agent works:**

> "Watch what's happening:
> - Agent is analyzing the component
> - Creating a refactoring plan
> - Making changes step by step
> - Showing me each change for approval
>
> I can stop this at any time. I can reject changes. I'm still in control.
>
> This is powerful for those tedious refactorings where you know what needs to happen but don't want to spend an hour doing it manually."

**Review the changes:**

> "Look at what it accomplished:
> - Created new utility file
> - Extracted calculations
> - Added documentation
> - Improved naming
> - All in about 30 seconds
>
> Would this be perfect without review? Probably not. But it's 80% of the work done, and I can review and tweak the last 20%."

**Key Warnings:**

> "Important: Agent Mode is powerful but:
> - ALWAYS review changes before accepting
> - Don't use for security-critical code without careful review
> - Best for well-defined tasks
> - You're responsible for the code, not Copilot
>
> Think of it as a junior developer who works fast but needs oversight."

---

### Part 5: Build a Feature (15 minutes)

#### Setup (2 minutes)

> "For our final exercise, you'll build something real in small groups of 3-4 people.
>
> Form your groups now... [wait] ...great!
>
> Pick one of these three stories - Easy, Medium, or Advanced - based on how confident you're feeling."

**Show the three options:**

> "You have 15 minutes. Here's the process:
> - Minutes 0-3: Architecture discussion with Copilot
> - Minutes 3-12: Implement with TDD
> - Minutes 12-15: Prepare a 1-minute demo
>
> Ready? Go!"

#### Monitor (12 minutes)

**Walk around / Check breakout rooms:**

- Encourage using architecture discussion first
- Remind about TDD cycle
- Help unstick groups
- Note interesting approaches

**At 10 minutes:**

> "5 minutes left! Wrap up your current test and prepare to demo."

#### Quick Demos (3 minutes)

**Bring everyone back:**

> "Let's see what you built! 1 minute per group. Show us:
> - What feature did you build?
> - What's one cool thing Copilot helped with?
>
> Who's going first?"

**After demos:**

> "Amazing work! In 15 minutes you:
> - Designed features
> - Wrote tests
> - Implemented code
> - Some of you deployed!
>
> This is the power of AI-assisted development."

---

### Part 6: Wrap-Up (5 minutes)

#### Key Takeaways (2 minutes)

**Summarize on screen:**

> "Let's lock in what you learned today:
>
> **TDD with Copilot:**
> - Use @tdd-red to write clear, failing tests
> - Use @tdd-green for minimal implementations
> - Use @tdd-refactor to make it production-ready
> - One test at a time, one phase at a time
>
> **Architecture:**
> - Have design conversations before coding
> - Generate diagrams to visualize
> - Evaluate multiple approaches
> - Document decisions
>
> **Agent Mode:**
> - Great for well-defined multi-step tasks
> - You stay in control
> - Review everything
> - Saves time on tedious work
>
> The big idea: Copilot isn't just autocomplete. It's a development partner that can help you design better, test thoroughly, and refactor confidently."

#### Next Steps (2 minutes)

**Show action items:**

> "Here's your challenge for this week:
>
> **Tomorrow:**
> - Pick ONE user story
> - Use the TDD chat modes for that story
> - Share your experience in Slack
>
> **This Week:**
> - Try one architecture discussion with Copilot
> - Use Agent Mode for one refactoring
> - Help a teammate who's stuck
>
> **This Month:**
> - Make TDD your default workflow
> - Build your own prompt library
> - Share tips at standup
>
> Resources are all in the repo:
> - WORKSHOP-2HR.md (what we did today)
> - WORKSHOP.md (detailed guide)
> - Custom chat modes in .github/copilot/
> - Sample stories to practice with"

#### Q&A (1 minute)

> "Questions? Concerns? Confessions of Copilot mishaps?
>
> [Take questions]
>
> Great questions! Remember, the #copilot-tips channel is there for ongoing support.
>
> Thanks for your energy and participation today. Now go forth and write better code with your AI pair programmer! 🚀"

---

## Common Questions & Answers

### "Isn't Copilot just fancy autocomplete?"

**Answer:**

> "That's what most people think! But as you saw today, it can:
> - Have architectural discussions
> - Generate tests from requirements
> - Refactor across multiple files
> - Explain complex code
> - Suggest alternative approaches
>
> Autocomplete is maybe 20% of what it can do."

### "Will Copilot make us lazy developers?"

**Answer:**

> "Great question. Copilot is a tool, like any other. 
> - A calculator didn't make us bad at math - it freed us for complex problem-solving
> - Google didn't make us bad at research - it made research faster
> - Copilot won't make you a lazy developer - it'll free you to focus on design, architecture, and hard problems
>
> You still need to understand the code, review suggestions, and make decisions. Copilot amplifies your skills; it doesn't replace them."

### "What if Copilot suggests insecure code?"

**Answer:**

> "Excellent concern! Always:
> - Review all suggestions before accepting
> - Use the @tdd-refactor mode to specifically ask for security improvements
> - Run security scanning tools
> - Have code reviews
> - Never blindly trust AI for security-critical code
>
> Copilot is a junior developer who codes fast. You're the senior who reviews."

### "How do I know when to use Agent Mode vs regular Chat?"

**Answer:**

> "Use Agent Mode when:
> - Task is well-defined with clear steps
> - Multiple files need changes
> - You want autonomous execution
> - Task is tedious but straightforward
>
> Use regular Chat when:
> - You want to discuss and explore
> - You need explanations
> - Task is ambiguous
> - You want more control over each step"

### "What if my team doesn't adopt this?"

**Answer:**

> "Start small:
> - You use it consistently for a week
> - Share one success story in standup
> - Offer to pair with curious teammates
> - Show, don't tell - let results speak
>
> Once people see you shipping quality code faster, they'll be curious. Lead by example."

---

## Backup Plans

### If Copilot Goes Down

- Have pre-written code examples ready
- Focus on concepts and manual TDD workflow
- Use the time for longer Q&A and discussion
- Send follow-up materials for self-paced learning

### If Running Behind

- Skip Part 5 (group exercise)
- Shorten Part 3 to 30 minutes (2 rounds instead of 3)
- Reduce break to 5 minutes
- Do architecture as quick demo instead of deep dive

### If Running Ahead

- Add advanced Agent Mode examples
- Do live code review of participant code
- Show more architecture patterns
- Demonstrate Copilot with other tools (GitHub Actions, etc.)

### If Tech Fails

- Have backup laptop ready
- Can screen share from participant's machine
- Have slides as backup (create from WORKSHOP-2HR.md)
- Focus on discussion and conceptual learning

---

## Post-Workshop Checklist

### Immediately After

- [ ] Thank participants
- [ ] Share feedback survey
- [ ] Upload recording (if recorded)
- [ ] Share slides/materials
- [ ] Answer remaining questions in Slack

### Same Day

- [ ] Email summary and resources
- [ ] Share success stories
- [ ] Post key learnings
- [ ] Schedule follow-up Q&A

### Week After

- [ ] Host office hours
- [ ] Collect success stories
- [ ] Address common issues
- [ ] Plan advanced session if needed

### Month After

- [ ] Measure adoption
- [ ] Gather metrics (test coverage, velocity, etc.)
- [ ] Iterate on workshop based on feedback
- [ ] Celebrate wins!

---

## Success Metrics

Track these to measure impact:

### Immediate (End of Workshop)
- [ ] 90%+ can complete one RED-GREEN-REFACTOR cycle
- [ ] 80%+ feel confident using custom chat modes
- [ ] 70%+ understand when to use Agent Mode
- [ ] 100% have access to materials and support

### Week 1
- [ ] 50%+ use TDD modes on at least one story
- [ ] 3+ success stories shared in Slack
- [ ] 0 major blockers preventing adoption

### Month 1
- [ ] 70%+ team regularly uses TDD workflow
- [ ] Test coverage increased by 10%+
- [ ] Code review time decreased
- [ ] Developer satisfaction scores improved

---

## Continuous Improvement

### Gather Feedback On

1. **Content**
   - Was the material relevant?
   - Right level of depth?
   - Missing topics?

2. **Pacing**
   - Too fast/slow?
   - Enough hands-on time?
   - Break timing good?

3. **Delivery**
   - Clear explanations?
   - Good examples?
   - Engaging presentation?

4. **Outcomes**
   - Confident to use TDD?
   - Will use in daily work?
   - Would recommend to others?

### Iterate Workshop

- Update examples based on team's actual code
- Add advanced session if interest
- Create role-specific versions (junior, senior, lead)
- Build team's custom chat modes library

---

**Remember:** Your energy sets the tone. Be enthusiastic, patient, and encouraging. Learning new workflows is uncomfortable - make it safe to struggle and experiment!

Good luck! You've got this! 🎉
