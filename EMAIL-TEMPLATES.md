# Workshop Email Templates

## 📧 1 Week Before Workshop

**Subject:** GitHub Copilot Workshop - Setup Required Before [Date]

---

Hi Team,

I'm excited for our GitHub Copilot workshop on **[Date] at [Time]**! We're going to go beyond basic autocomplete and learn to use Copilot for test-driven development, architecture planning, and automated refactoring.

### 🎯 What to Expect

We'll spend 2 hours learning through hands-on exercises:
- Writing tests first with Copilot's TDD modes
- Implementing features using the RED-GREEN-REFACTOR cycle
- Having architecture discussions with AI
- Using Agent Mode for complex refactoring

You'll work in pairs and small groups on real features from our 401k-portal codebase.

### ✅ Required Setup (Please Complete Before the Workshop!)

**This is important** - we'll start coding immediately, so please have everything ready:

1. **Verify GitHub Copilot Access**
   - Open VS Code and check for Copilot icon in status bar
   - If not active, sign in with your GitHub account
   - Contact [IT contact] if you don't have access

2. **Install Required Extensions**
   - GitHub Copilot
   - GitHub Copilot Chat
   - Vitest (recommended)

3. **Clone and Setup Repository**
   ```bash
   git clone https://github.com/ahromis/401k-portal.git
   cd 401k-portal
   npm install
   npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom happy-dom @vitest/ui
   ```

4. **Verify Everything Works**
   ```bash
   npm run dev  # Should open on localhost:5173
   npm run test # Should start Vitest
   ```

### 📚 Setup Guide

Detailed instructions: [Link to SETUP.md in repo]

If you run into issues, check the troubleshooting section or reach out in #[your-team-channel].

### 💻 What to Bring

- Laptop fully charged (or charger)
- Positive attitude and curiosity!
- Questions about Copilot you want answered

### 📍 Workshop Details

**When:** [Day, Date] at [Time]  
**Where:** [Location or Zoom link]  
**Duration:** 2 hours  
**Format:** Hands-on, interactive, pair programming

See you there!

[Your name]

P.S. - If you can't get setup working, arrive 10 minutes early and we'll help troubleshoot.

---

## 📧 3 Days Before Workshop

**Subject:** Reminder: GitHub Copilot Workshop [Date] - Setup Check

---

Hi Team,

Quick reminder about our GitHub Copilot workshop on **[Date] at [Time]**.

### Setup Check

Have you completed the setup from my previous email? If not, please do so before the workshop:

✅ GitHub Copilot installed and active  
✅ Repository cloned  
✅ Dependencies installed  
✅ `npm run test` works  

If you're stuck, reach out in #[channel] or arrive 10 minutes early.

### What You'll Learn

- 🔴 @tdd-red - Write failing tests first
- 🟢 @tdd-green - Minimal implementation  
- 🔵 @tdd-refactor - Refactor to production quality
- 🤖 Agent Mode - Automated multi-step refactoring
- 🎨 Architecture - Design discussions with AI

### Workshop Flow

- 30 min: Demo and fundamentals
- 40 min: You practice TDD in pairs
- 10 min: Break
- 20 min: Architecture and Agent Mode demo
- 15 min: Build a feature in groups
- 5 min: Wrap-up

Looking forward to it!

[Your name]

---

## 📧 Day Before Workshop

**Subject:** Tomorrow: GitHub Copilot Workshop - Final Details

---

Hi Team,

Tomorrow's the day! GitHub Copilot workshop at **[Time]**.

### Final Checklist

- [ ] Laptop charged
- [ ] GitHub Copilot working in VS Code
- [ ] 401k-portal repo cloned and setup
- [ ] Ready to learn something new!

### What to Have Open

When you arrive:
- VS Code with 401k-portal workspace
- Terminal ready
- Copilot Chat working (test with Cmd+I or Ctrl+I)

### Join Info

**[Zoom link or Room location]**

Please join on time - we'll start promptly to maximize our hands-on time.

### Questions?

Reply to this email or ping me in Slack.

See you tomorrow!

[Your name]

---

## 📧 Day Of Workshop (Morning)

**Subject:** Today: GitHub Copilot Workshop at [Time]

---

Good morning!

Excited for our Copilot workshop in a few hours!

**Starting:** [Time]  
**Location:** [Link or room]

**Quick prep:**
- Open VS Code with 401k-portal
- Verify Copilot is working
- Have a beverage ready
- Bring your curiosity!

**Running late?** No problem, but let me know so we can save you a spot.

See you soon!

[Your name]

---

## 📧 Same Day After Workshop

**Subject:** Thank You! + GitHub Copilot Workshop Resources

---

Hi Team,

Thanks for your energy and participation in today's Copilot workshop! It was great seeing you all write tests first, implement features, and use Agent Mode.

### 🎯 What We Learned

Today you practiced:
- ✅ RED-GREEN-REFACTOR cycle with TDD chat modes
- ✅ Writing tests before code
- ✅ Minimal implementations that pass tests
- ✅ Refactoring with confidence
- ✅ Architecture discussions with Copilot
- ✅ Agent Mode for complex tasks

### 📚 Resources

Everything is in the repo:

**Quick Reference:**
- [QUICK-REFERENCE.md](link) - One-page cheat sheet
- [WORKSHOP-2HR.md](link) - Today's workshop guide
- [WORKSHOP.md](link) - Extended deep-dive version

**Custom Chat Modes** (already in your workspace):
- @tdd-red - Write failing tests
- @tdd-green - Minimal implementation
- @tdd-refactor - Improve quality

**Need Help?**
- Post in #copilot-tips channel
- Check SETUP.md troubleshooting section
- Ask in standup

### 🚀 Your Challenge

Try TDD on your **next user story**:

1. Pick a story from the backlog
2. Use @tdd-red to write first failing test
3. Use @tdd-green to make it pass
4. Use @tdd-refactor to improve it
5. Share your experience in #copilot-tips

Even if it feels awkward at first, give it a full story to see the benefits.

### 📊 Quick Survey

Help me improve future workshops: [Survey link]
(2 minutes, anonymous)

### 🎉 Success Stories

Did Copilot help you solve something today? Share in #copilot-tips! I'll be collecting success stories to share with the team.

### Office Hours

I'll host optional Q&A next **[Day] at [Time]** for anyone who wants to dig deeper or troubleshoot issues.

Thanks again, and keep coding smarter with Copilot!

[Your name]

P.S. - The best way to learn is to practice. Try the TDD workflow on at least one story this week!

---

## 📧 1 Week After Workshop

**Subject:** GitHub Copilot - Office Hours + Share Your Wins

---

Hi Team,

It's been a week since our Copilot workshop! How's it going?

### 🎉 Wins So Far

I've heard from [number] of you who tried TDD with Copilot:

[Include 1-2 short success stories if you have them, like:]

> "I used @tdd-red on the validation story and it helped me think through edge cases I would have missed!" - [Name]

### Office Hours Tomorrow

Join me for optional Q&A:

**When:** [Day] at [Time]  
**Where:** [Zoom link]  
**Duration:** 30 minutes

Come with:
- Questions about TDD workflow
- Stories of what worked/didn't work
- Requests for advanced topics
- Or just listen and learn from others

### Quick Poll

Reply with:
- 👍 - I tried TDD with Copilot this week
- 🤔 - I haven't tried it yet but plan to
- ❓ - I have questions/blockers

### Resources Reminder

- [QUICK-REFERENCE.md](link) - Cheat sheet
- [SETUP.md](link) - Troubleshooting
- #copilot-tips - Team support channel

Keep experimenting!

[Your name]

---

## 📧 1 Month After Workshop

**Subject:** GitHub Copilot - One Month Check-in

---

Hi Team,

One month since our Copilot workshop! Time to check in on adoption and learnings.

### 📊 How's It Going?

Quick 2-minute survey: [Link]

This helps me understand:
- What's working well
- Where you're stuck
- What additional support would help
- Interest in advanced topics

### 🏆 Success Stories

We've had some great wins:

[Include actual success stories from the team:]

- [Team member] used Agent Mode to refactor 5 components in 20 minutes
- [Team member] caught 3 edge cases with @tdd-red they would have missed
- [Team member] reduced PR comments by adding better tests upfront
- Test coverage increased from [X]% to [Y]%

Want to share your story? Post in #copilot-tips!

### 🚀 What's Next?

Based on interest, I'm considering:

- **Advanced Workshop** - Complex refactoring patterns, custom chat modes, advanced Agent Mode
- **Lunch & Learn** - 30-min sessions on specific topics
- **Pair Programming Hours** - Practice TDD together
- **Team Prompt Library** - Build shared best practices

Vote in the survey for what interests you!

### 📈 By The Numbers

Since the workshop:
- [X] stories completed with TDD
- [Y]% increase in test coverage
- [Z] developers using Copilot daily
- [N] success stories shared

Let's keep the momentum going!

### Resources

Still available:
- [WORKSHOP-2HR.md](link) - Workshop guide for review
- [QUICK-REFERENCE.md](link) - Quick reference cheat sheet
- Custom chat modes in every workspace
- #copilot-tips for questions

Thanks for embracing this new way of working!

[Your name]

P.S. - If you haven't tried TDD with Copilot yet, this week is a great time to start! Pick one small story and give it a shot.

---

## 📧 Advanced Workshop Invitation

**Subject:** Advanced GitHub Copilot Workshop - [Date]

---

Hi Team,

Based on interest from our survey, I'm hosting an **Advanced GitHub Copilot Workshop**!

### Who Should Attend

This is for team members who:
- Completed the first workshop
- Have used TDD chat modes on at least 2-3 stories
- Want to go deeper on architecture and Agent Mode
- Are comfortable with the RED-GREEN-REFACTOR cycle

### What We'll Cover

**Advanced TDD Patterns:**
- Testing async operations and API calls
- Mocking and test doubles
- Integration test strategies
- Test organization and maintainability

**Advanced Agent Mode:**
- Complex multi-file refactoring
- Creating custom chat modes for your workflow
- Debugging techniques
- Documentation generation at scale

**Architecture Deep-Dive:**
- System design with Copilot
- Evaluating architectural tradeoffs
- Generating ADRs (Architecture Decision Records)
- Diagramming complex systems

### Workshop Details

**When:** [Date] at [Time]  
**Where:** [Location/Zoom]  
**Duration:** 2.5 hours  
**Prerequisites:** Basic TDD workshop completed

**RSVP:** [Link or email reply]  
**Limit:** 15 participants for quality interaction

### Bring Your Code

We'll work on real refactoring challenges from our codebase. If you have a gnarly piece of code that needs love, bring it!

Looking forward to diving deeper with you!

[Your name]

---

## 📧 Thank You to Facilitator (Template for Organizer)

**Subject:** Thank You for Leading the Copilot Workshop!

---

Hi [Facilitator Name],

Thank you for leading an excellent GitHub Copilot workshop for the team!

### Impact

The feedback has been outstanding:
- [X]% rated it "Excellent" or "Very Good"
- [Y]% feel confident using TDD with Copilot
- [Z] team members have already applied it to real stories

**Favorite comments:**
- "[Quote from feedback]"
- "[Another quote]"
- "[Another quote]"

### What's Next

Based on the success:
- We're creating a #copilot-tips channel for ongoing support
- [Number] people requested an advanced workshop
- Team lead is considering making TDD the standard workflow

Your preparation and energy made this workshop a success. The hands-on approach really resonated with the team.

Thanks again!

[Organizer Name]

---

## 📧 Manager Update (For Workshop Organizer)

**Subject:** GitHub Copilot Workshop Results & Next Steps

---

Hi [Manager Name],

Update on the GitHub Copilot workshop held [Date]:

### Attendance & Engagement

- **Participants:** [X] team members
- **Completion Rate:** [Y]% completed all exercises
- **Satisfaction:** [Z]% rated "Excellent" or "Very Good"

### Key Outcomes

**Immediate:**
- All participants can now write tests first with Copilot
- Team has custom TDD chat modes configured
- Testing environment set up for all developers

**Short-term (1 week):**
- [X] developers used TDD on real stories
- [Y] success stories shared
- [Z] increase in test coverage

**Ongoing:**
- Created #copilot-tips support channel
- Scheduled office hours for continued learning
- Building team prompt library

### Business Impact

Expected improvements:
- **Faster Development:** TDD catches bugs earlier
- **Higher Quality:** More tests, better coverage
- **Better Design:** Tests drive cleaner architecture
- **Knowledge Sharing:** Pair programming increased

### Costs

- **Time Investment:** 2 hours per developer
- **Setup:** ~30 min per developer
- **Tools:** GitHub Copilot licenses (already allocated)

**ROI:** If TDD prevents even 1 production bug per month, the workshop has paid for itself.

### Next Steps

1. **Week 1-4:** Monitor adoption, collect success stories
2. **Month 1:** Measure test coverage and velocity changes
3. **Month 2:** Advanced workshop for interested developers
4. **Month 3:** Evaluate making TDD standard practice

### Feedback Highlights

> "[Positive quote from participant]"

> "[Another positive quote]"

> "[Quote about impact on work]"

### Recommendation

Continue support with:
- Weekly office hours (30 min, optional)
- Team prompt library development
- Advanced workshop in [timeframe]
- Share success stories in team meetings

Happy to discuss further!

[Your name]

---

*All email templates can be customized for your team's communication style and tools.*
