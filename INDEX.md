# 📚 Workshop Materials - Complete Index

## Overview

This repository contains a complete, production-ready 2-hour workshop for teaching advanced GitHub Copilot techniques focused on Test-Driven Development (TDD), architectural planning, and Agent Mode.

---

## 🎯 Quick Start

**For Participants:**
1. Read [SETUP.md](SETUP.md) - Complete setup before workshop
2. Print [QUICK-REFERENCE.md](QUICK-REFERENCE.md) - Have during workshop
3. Follow [WORKSHOP-2HR.md](WORKSHOP-2HR.md) - Main workshop guide

**For Facilitators:**
1. Read [FACILITATOR-GUIDE.md](FACILITATOR-GUIDE.md) - Detailed script
2. Review [WORKSHOP-2HR.md](WORKSHOP-2HR.md) - Know the flow
3. Test all exercises - Verify everything works
4. Use [EMAIL-TEMPLATES.md](EMAIL-TEMPLATES.md) - Communicate with team

---

## 📁 All Files

### Essential Workshop Files

| File | Purpose | Audience | When to Use |
|------|---------|----------|-------------|
| **[WORKSHOP-2HR.md](WORKSHOP-2HR.md)** | Main 2-hour workshop guide | Participants & Facilitators | During workshop |
| **[SETUP.md](SETUP.md)** | Pre-workshop preparation | Participants | 1 week before |
| **[QUICK-REFERENCE.md](QUICK-REFERENCE.md)** | One-page cheat sheet | Participants | During & after |
| **[FACILITATOR-GUIDE.md](FACILITATOR-GUIDE.md)** | Detailed speaker notes | Facilitators | Leading workshop |

### Extended Materials

| File | Purpose | Audience | When to Use |
|------|---------|----------|-------------|
| **[WORKSHOP.md](WORKSHOP.md)** | 4-6 hour detailed version | Self-learners | After workshop |
| **[WORKSHOP-SUMMARY.md](WORKSHOP-SUMMARY.md)** | Overview of all materials | Organizers | Planning phase |
| **[EMAIL-TEMPLATES.md](EMAIL-TEMPLATES.md)** | Communication templates | Organizers | Before/after workshop |
| **[INDEX.md](INDEX.md)** | This file - navigation guide | Everyone | Finding resources |

### Custom Chat Modes

| File | Purpose | Usage |
|------|---------|-------|
| **[.github/copilot/tdd-red.chatmode.md](.github/copilot/tdd-red.chatmode.md)** | Write failing tests first | `@tdd-red` in Copilot Chat |
| **[.github/copilot/tdd-green.chatmode.md](.github/copilot/tdd-green.chatmode.md)** | Minimal implementation | `@tdd-green` in Copilot Chat |
| **[.github/copilot/tdd-refactor.chatmode.md](.github/copilot/tdd-refactor.chatmode.md)** | Quality improvements | `@tdd-refactor` in Copilot Chat |

### Configuration Files

| File | Purpose |
|------|---------|
| **[vitest.config.js](vitest.config.js)** | Test runner configuration |
| **[src/test/setup.js](src/test/setup.js)** | Test environment setup |
| **[package.json](package.json)** | Dependencies and scripts |

---

## 🎓 Workshop Structure

### Part 1: Foundation (30 min)
- **Introduction** - Overview and objectives
- **TDD Demo** - Full RED-GREEN-REFACTOR cycle
- **Location:** WORKSHOP-2HR.md, Part 2

### Part 2: Practice (40 min)
- **Hands-On Exercise** - Pair programming with TDD
- **User Story:** Fund Transfer Validation
- **Location:** WORKSHOP-2HR.md, Part 3

### Part 3: Break (10 min)
- Stretch, refresh, questions

### Part 4: Advanced (20 min)
- **Architecture Discussion** - Design with Copilot
- **Agent Mode Demo** - Autonomous refactoring
- **Location:** WORKSHOP-2HR.md, Part 4

### Part 5: Build (15 min)
- **Group Exercise** - Build a real feature
- **Sprint-Style** - Architecture → Implementation → Demo
- **Location:** WORKSHOP-2HR.md, Part 5

### Part 6: Wrap-Up (5 min)
- Key takeaways and next steps
- **Location:** WORKSHOP-2HR.md, Part 6

---

## 🛠️ Technology Stack

### Required Software
- **VS Code** - Latest version
- **Node.js** - v18+ 
- **GitHub Copilot** - Active subscription
- **GitHub Copilot Chat** - Extension installed

### Testing Stack
- **Vitest** - Fast test runner
- **React Testing Library** - Component testing
- **jsdom** - DOM environment
- **@testing-library/jest-dom** - Matchers

### Project Stack
- **React** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **JavaScript/JSX** - Language

---

## 📖 How to Use This Repository

### For Workshop Participants

**Before Workshop (1 week ahead):**
1. ✅ Read [SETUP.md](SETUP.md)
2. ✅ Install all prerequisites
3. ✅ Clone repository
4. ✅ Run `npm install` and install test dependencies
5. ✅ Verify `npm run test` works
6. ✅ Print [QUICK-REFERENCE.md](QUICK-REFERENCE.md) (optional)

**During Workshop:**
1. 📖 Follow [WORKSHOP-2HR.md](WORKSHOP-2HR.md)
2. 📋 Reference [QUICK-REFERENCE.md](QUICK-REFERENCE.md) for commands
3. 💬 Use `@tdd-red`, `@tdd-green`, `@tdd-refactor` chat modes
4. 👥 Work in pairs/groups as directed

**After Workshop:**
1. 📚 Review [WORKSHOP.md](WORKSHOP.md) for deeper learning
2. 🎯 Try TDD on next user story
3. 💡 Share success stories with team
4. ❓ Ask questions in team channel

### For Workshop Facilitators

**Preparation (1 week ahead):**
1. 📖 Read [FACILITATOR-GUIDE.md](FACILITATOR-GUIDE.md) thoroughly
2. 🧪 Test all exercises end-to-end
3. 💻 Verify your setup works perfectly
4. 📧 Use [EMAIL-TEMPLATES.md](EMAIL-TEMPLATES.md) to communicate
5. 🎥 Test screen sharing and breakout rooms

**Day Before:**
1. ✅ Confirm participant attendance
2. ✅ Send final reminder email
3. ✅ Test all technology again
4. ✅ Prepare backup plans

**Day Of:**
1. 📖 Have [FACILITATOR-GUIDE.md](FACILITATOR-GUIDE.md) open
2. 💻 Have VS Code with repo ready
3. ⏱️ Use timing guidelines in guide
4. 🎤 Follow the facilitation script
5. 💬 Engage with energy and enthusiasm

**After Workshop:**
1. 📧 Send thank you email with resources
2. 📊 Collect feedback
3. 🎉 Share success stories
4. 📅 Schedule follow-up office hours

### For Team Organizers

**Planning Phase:**
1. 📖 Review [WORKSHOP-SUMMARY.md](WORKSHOP-SUMMARY.md)
2. 📅 Schedule workshop date/time
3. 👥 Confirm facilitator
4. 🎯 Set success metrics

**Communication:**
1. 📧 Use templates from [EMAIL-TEMPLATES.md](EMAIL-TEMPLATES.md)
2. 📅 Send 1 week, 3 days, 1 day before reminders
3. 💬 Create team support channel

**Follow-Up:**
1. 📊 Measure adoption (Week 1, Month 1)
2. 🎉 Celebrate wins
3. 🔄 Plan advanced workshops
4. 📈 Report impact to leadership

---

## 🎯 Learning Objectives

By completing this workshop, participants will:

### TDD Skills
- ✅ Write failing tests first using @tdd-red
- ✅ Implement minimal code using @tdd-green
- ✅ Refactor to production quality using @tdd-refactor
- ✅ Complete full RED-GREEN-REFACTOR cycles
- ✅ Understand when and why to use TDD

### Architecture Skills
- ✅ Have design discussions with Copilot Chat
- ✅ Generate architecture diagrams (Mermaid)
- ✅ Evaluate multiple implementation approaches
- ✅ Create implementation skeletons
- ✅ Document architectural decisions

### Agent Mode Skills
- ✅ Use autonomous multi-step execution
- ✅ Debug across multiple files
- ✅ Refactor complex code systematically
- ✅ Generate comprehensive documentation
- ✅ Maintain control while automating work

### Workflow Integration
- ✅ Embed Copilot into daily development
- ✅ Pair program with AI assistance
- ✅ Use custom chat modes effectively
- ✅ Know when to use each technique
- ✅ Build team best practices

---

## 📊 Sample User Stories

The workshop includes exercises based on real features:

### Easy (30 min)
- **Fund Transfer Validation** - Prevent invalid transfers
- **Account Balance Calculation** - Sum fund balances
- **Contribution Limit Tracking** - Monitor IRS limits

### Medium (45 min)
- **Fund Rebalancing** - Rebalance to target percentages
- **Performance Dashboard** - Track investment returns
- **Transaction History** - Display historical activity

### Advanced (60 min)
- **Contribution Calculator** - Project future balances
- **Historical Performance** - Analyze trends over time
- **Multi-Fund Optimization** - Suggest optimal allocations

All stories are documented in the workshop files with:
- Clear requirements
- Acceptance criteria
- Expected implementation time
- Difficulty level

---

## 🔧 Commands Reference

### Development
```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Testing
```bash
npm run test         # Run tests in watch mode
npm run test:ui      # Open Vitest UI
npm run test:coverage # Generate coverage report
```

### Setup
```bash
npm install          # Install dependencies
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom happy-dom @vitest/ui
```

---

## 💡 Key Concepts

### The TDD Cycle

```
🔴 RED Phase
- Write ONE failing test
- Describes desired behavior
- Must fail for right reason

↓

🟢 GREEN Phase  
- Write MINIMAL code
- Make test pass
- No extra features yet

↓

🔵 REFACTOR Phase
- Improve code quality
- Add validation/docs
- Keep tests green

↓

✅ COMMIT & REPEAT
```

### Custom Chat Modes

**@tdd-red** - Keeps focus on writing clear, failing tests
- One test at a time
- Descriptive test names
- AAA pattern (Arrange-Act-Assert)
- Edge cases consideration

**@tdd-green** - Guides minimal implementation
- Just enough code
- Speed over perfection
- Fake it till you make it
- Obvious implementation

**@tdd-refactor** - Systematic quality improvements
- Remove duplication
- Improve readability
- Add validation
- Security hardening
- Keep tests green

### Agent Mode

**When to use:**
- Multi-file refactoring
- Complex but well-defined tasks
- Documentation generation
- Systematic improvements

**How it works:**
- Analyzes code and requirements
- Creates step-by-step plan
- Executes autonomously
- Shows each change for approval
- You maintain control

---

## 🎨 Workshop Philosophy

### Core Principles

1. **Hands-On First** - 70% practice, 30% lecture
2. **Real Code** - Use actual project codebase
3. **Safe Environment** - Can't break production
4. **Progressive Complexity** - Simple → Advanced
5. **Immediate Applicability** - Use tomorrow

### Why This Works

**Traditional Training:**
- Watch slides about concepts
- Toy examples
- Hard to apply to real work
- Forget in a week

**This Workshop:**
- Do it yourself immediately
- Real features from your code
- Pair programming built-in
- Take away configured environment

### Success Factors

✅ **Pre-configured environment** - No setup time wasted
✅ **Custom chat modes** - Stay focused on each phase
✅ **Real user stories** - Immediately applicable
✅ **Pair programming** - Learn from each other
✅ **Comprehensive materials** - Reference after workshop

---

## 📈 Measuring Success

### Immediate (End of Workshop)
- 90%+ complete one TDD cycle
- 80%+ comfortable with chat modes
- 70%+ understand Agent Mode
- 100% have working environment

### Week 1
- 50%+ use TDD on one story
- 3+ success stories shared
- No major adoption blockers

### Month 1
- 70%+ regularly use TDD workflow
- 10%+ increase in test coverage
- Faster code review cycles
- Improved developer satisfaction

### Long Term
- TDD becomes team standard
- Higher code quality
- Fewer production bugs
- Faster feature delivery

---

## 🆘 Getting Help

### During Setup
- Check [SETUP.md](SETUP.md) troubleshooting section
- Ask in team channel
- Arrive 10 min early to workshop

### During Workshop
- Ask facilitator
- Pair with experienced teammate
- Reference [QUICK-REFERENCE.md](QUICK-REFERENCE.md)

### After Workshop
- Review workshop materials
- Post in #copilot-tips channel
- Attend office hours
- Share your experience

---

## 🚀 Next Steps

### After Completing Workshop

**This Week:**
- Try TDD on one user story
- Share experience in team channel
- Identify one place Agent Mode could help

**This Month:**
- Make TDD your default workflow
- Build personal prompt library
- Help onboard teammates
- Share success stories

**Long Term:**
- Mentor others on TDD
- Contribute team best practices
- Propose advanced workshops
- Measure and share impact

---

## 🎉 What Makes This Special

### Unique Features

✅ **Complete Package** - Everything needed in one repo
✅ **Production-Ready** - Tested and ready to deliver
✅ **Customized** - Built for your actual codebase
✅ **Comprehensive** - Materials for all audiences
✅ **Proven** - Based on successful workshop patterns
✅ **Scalable** - Works for teams of any size
✅ **Flexible** - Easily customized for your needs

### Included Extras

- 📧 Email templates for communication
- 📋 Quick reference cheat sheet (printable)
- 🎤 Word-for-word facilitation script
- 📊 Success metrics and tracking
- 🔧 Pre-configured testing environment
- 💬 Custom chat modes ready to use
- 📚 Extended materials for self-paced learning

---

## 📞 Support & Feedback

### Improving Materials

Found an issue? Have a suggestion?
- Open an issue in the repository
- Submit a pull request
- Share feedback with organizer

### Sharing Success

Using these materials?
- Share your success stories
- Contribute improvements
- Help others in your organization

---

## 📜 License & Attribution

These materials are created for the 401k-portal project and can be adapted for your team's needs.

### Acknowledgments

- GitHub Copilot team for the tool
- [Awesome Copilot](https://github.com/github/awesome-copilot) for chat mode inspiration
- Your team for being early adopters!

---

## 🏁 Ready to Start?

1. **Participants:** Start with [SETUP.md](SETUP.md)
2. **Facilitators:** Begin with [FACILITATOR-GUIDE.md](FACILITATOR-GUIDE.md)
3. **Organizers:** Review [WORKSHOP-SUMMARY.md](WORKSHOP-SUMMARY.md)

**Let's transform how your team develops software! 🚀**

---

*Last updated: October 14, 2025*
*Version: 1.0*
