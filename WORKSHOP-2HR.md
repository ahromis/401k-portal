# 2-Hour GitHub Copilot Workshop: TDD, Architecture & Agent Mode

## Quick Reference Guide for 401k Portal

**Duration:** 2 hours  
**Format:** Hands-on, interactive workshop  
**Team Size:** Pairs or small groups (3-4 people)  
**Prerequisites:** VS Code with GitHub Copilot installed

---

## Workshop Agenda (2 Hours)

| Time | Duration | Activity | Format |
|------|----------|----------|--------|
| 0:00 | 10 min | Setup & Introduction | Presentation |
| 0:10 | 20 min | TDD Fundamentals + Demo | Interactive Demo |
| 0:30 | 40 min | Hands-On: TDD Red-Green-Refactor | Pairs Exercise |
| 1:10 | 10 min | Break | - |
| 1:20 | 20 min | Architecture & Agent Mode Demo | Interactive Demo |
| 1:40 | 15 min | Hands-On: Build a Feature | Small Groups |
| 1:55 | 5 min | Wrap-up & Next Steps | Discussion |

---

## Pre-Workshop Setup (Send 1 day before)

### Participant Checklist

- [ ] VS Code installed with latest updates
- [ ] GitHub Copilot extension activated
- [ ] GitHub Copilot Chat extension activated
- [ ] Node.js 18+ installed (`node --version`)
- [ ] Repository cloned locally
- [ ] Dependencies installed (`npm install`)

### Install Testing Framework

Run these commands before the workshop:

```bash
cd 401k-portal
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom happy-dom
```

### Custom Chat Modes

The repository already includes four custom chat modes in `.github/chatmodes/`:
- `plan.chatmode.md` - Strategic planning and architecture
- `tdd-red.chatmode.md` - Write failing tests
- `tdd-green.chatmode.md` - Minimal implementation
- `tdd-refactor.chatmode.md` - Quality improvements

These custom chat modes are based on examples from the [Awesome Copilot repository](https://github.com/github/awesome-copilot), a community-driven collection of Copilot prompts, chat modes, and instructions. Visit this repository to find more examples and contribute your own!

After cloning, restart VS Code to load these modes.

**How to use custom chat modes:**
1. Open Copilot Chat (Cmd+I or Ctrl+I)
2. Click the chat mode dropdown at the top of the Chat view
3. Select the desired mode from the list (e.g., "plan", "tdd-red")
4. The mode will stay active until you switch to a different mode

### Prompt Files

The repository also includes reusable prompt files in `.github/prompts/`:
- Ready-to-use prompts for each workshop section
- Automatically set the appropriate chat mode (ask, agent, etc.)
- Can be referenced instead of copying/pasting prompts

**How to use prompt files:**
1. Open Copilot Chat (Cmd+I or Ctrl+I)
2. Type `/` followed by the prompt file name (e.g., `/part2-demo-red-balance-validation`)
3. The prompt will run with its configured mode automatically

See `.github/prompts/README.md` for a complete list of available prompts.

---

## Part 1: Setup & Introduction (10 minutes)

### Welcome & Objectives (5 min)

**Today's Goal:** Transform Copilot from code completion to development partner

**You'll Learn:**
1. ✅ Write tests first with Copilot's TDD modes
2. ✅ Let Copilot implement minimal code to pass tests
3. ✅ Refactor to production quality
4. ✅ Use Plan mode for strategic architecture planning
5. ✅ Leverage Agent Mode to implement features autonomously

### The TDD Workflow (5 min)

```
🔴 RED Phase (tdd-red mode)
   Write ONE failing test that describes behavior
   ↓
🟢 GREEN Phase (tdd-green mode)  
   Write minimal code to make it pass
   ↓
🔵 REFACTOR Phase (tdd-refactor mode)
   Improve code quality, keep tests green
   ↓
   Repeat for next behavior
```

**Key Rule:** Never skip a phase. Trust the process.

**How to switch modes:** Use the chat mode dropdown at the top of Chat view to select tdd-red, tdd-green, or tdd-refactor.

---

## Part 2: TDD Fundamentals + Demo (20 minutes)

### Live Demo: Balance Validation (20 min)

**Facilitator demonstrates the full cycle:**

#### 🔴 RED: Write Failing Test

1. Open Copilot Chat (Cmd+I or Ctrl+I)
2. Click the chat mode dropdown and select **"tdd-red"**
3. Provide requirements:

```
I need to validate that the total account balance equals the sum of all fund balances.

Requirements:
- Calculate total from array of funds
- Each fund has a balance property
- Return the sum as a number
- Handle empty arrays (return 0)

Help me write ONE failing test for the basic happy path case.
Create the test file at: src/utils/__tests__/accountBalance.test.js
```

4. Review Copilot's suggested test
5. Create file: `src/utils/__tests__/accountBalance.test.js`
6. Run test: It should FAIL ❌

**Expected Test:**
```javascript
import { describe, it, expect } from 'vitest';
import { calculateTotalBalance } from '../accountBalance';

describe('calculateTotalBalance', () => {
  it('should sum all fund balances', () => {
    const funds = [
      { name: 'Fund A', balance: 1000 },
      { name: 'Fund B', balance: 2000 },
      { name: 'Fund C', balance: 3000 }
    ];
    
    expect(calculateTotalBalance(funds)).toBe(6000);
  });
});
```

#### 🟢 GREEN: Minimal Implementation

1. Switch to TDD-Green mode: Click the chat mode dropdown and select **"tdd-green"**
2. Reference the failing test:

```
I have a failing test in src/utils/__tests__/accountBalance.test.js
for the calculateTotalBalance function.

Help me write the minimal code to make it pass. 
Create src/utils/accountBalance.js
```

3. Review implementation
4. Create the file
5. Run test: It should PASS ✅

**Expected Implementation:**
```javascript
export function calculateTotalBalance(funds) {
  return funds.reduce((sum, fund) => sum + fund.balance, 0);
}
```

#### 🔵 REFACTOR: Improve Quality

1. Switch to TDD-Refactor mode: Click the chat mode dropdown and select **"tdd-refactor"**
2. Request improvements:

```
Here's my working code with passing tests in:
- Implementation: src/utils/accountBalance.js
- Tests: src/utils/__tests__/accountBalance.test.js

Refactor to improve:
- Input validation
- Error handling
- Documentation
- Edge case handling

Keep tests green!
```

3. Review suggestions
4. Apply incrementally
5. Run tests after each change: Stay GREEN ✅

**Expected Refactored Code:**
```javascript
/**
 * Calculates the total balance across all funds
 * @param {Array<{balance: number}>} funds - Array of fund objects
 * @returns {number} Total balance
 * @throws {Error} If funds is not an array or contains invalid balances
 */
export function calculateTotalBalance(funds) {
  if (!Array.isArray(funds)) {
    throw new Error('Funds must be an array');
  }
  
  return funds.reduce((sum, fund) => {
    const balance = Number(fund.balance);
    if (isNaN(balance)) {
      throw new Error(`Invalid balance for fund: ${fund.name || 'unknown'}`);
    }
    return sum + balance;
  }, 0);
}
```

**Key Takeaways:**
- Each phase has a specific purpose
- Custom chat modes keep you focused
- Tests drive the design
- Refactor only when tests are green

---

## Part 3: Hands-On TDD Exercise (40 minutes)

### Exercise: Fund Transfer Validation

**Work in Pairs - Switch roles after each test**

**User Story:**
```
As a 401k account holder
I want the system to prevent invalid fund transfers
So that I protect my retirement savings

Acceptance Criteria:
✅ Cannot transfer more than available balance
✅ Cannot transfer negative or zero amounts  
✅ Cannot transfer to/from the same fund
✅ Must validate source and destination funds exist
✅ Transfer amount must be a valid number
```

### Pair Roles

**Driver:** Controls keyboard, uses Copilot
**Navigator:** Reviews suggestions, manages TDD cycle

### Step-by-Step Process (40 min total)

#### Round 1: Balance Validation (12 min)

**Navigator says:** "Let's start with the first criteria - can't transfer more than balance"

**Driver does:**

1. **🔴 RED Phase (4 min)**
   - Switch to **tdd-red** mode using the chat mode dropdown
   - Use this prompt:
   
   ```
   I need to validate fund transfers.
   First requirement: Cannot transfer more than available balance.
   
   Help me write ONE failing test for this scenario.
   File: src/utils/__tests__/transferValidation.test.js
   ```

2. Create test file with Copilot's suggestion
3. Run test - should FAIL ❌
4. **Switch roles**

5. **🟢 GREEN Phase (4 min)**
   - Switch to **tdd-green** mode using the chat mode dropdown
   - Use this prompt:
   
   ```
   I have a failing test in src/utils/__tests__/transferValidation.test.js
   for validating fund transfers.
   
   Create minimal implementation in src/utils/transferValidation.js
   ```

6. Create implementation file
7. Run test - should PASS ✅
8. **Switch roles**

9. **🔵 REFACTOR Phase (4 min)**
   - Switch to **tdd-refactor** mode using the chat mode dropdown
   - Use this prompt:
   
   ```
   I have working code in src/utils/transferValidation.js with passing tests.
   
   Focus on: error messages, input validation
   ```

10. Apply improvements incrementally
11. Run tests - stay GREEN ✅
12. Commit: `git add . && git commit -m "feat: validate transfer balance"`

#### Round 2: Amount Validation (12 min)

**Repeat the same process for:**
- Requirement: Cannot transfer negative or zero amounts
- **🔴 RED:** Write failing test
- **🟢 GREEN:** Minimal implementation
- **🔵 REFACTOR:** Improve quality
- Commit when green

#### Round 3: Same Fund Check (12 min)

**Repeat for:**
- Requirement: Cannot transfer to/from the same fund
- Follow full RED-GREEN-REFACTOR cycle
- Commit when done

#### Group Share-Out (4 min)

Each pair shares:
- What surprised you?
- Where did Copilot excel?
- Where did you need to guide it?

---

## Part 4: Architecture & Agent Mode Demo (20 minutes)

### Architecture Discussion with Copilot (10 min)

**Scenario:** Plan a new "Contribution Calculator" feature

**Facilitator demonstrates:**

1. Start architectural conversation:
```
I need to design a contribution calculator for our 401k portal.

Requirements:
- Calculate future balance based on current balance + monthly contributions
- Include employer match (percentage)
- Show year-by-year projection
- Account for compound interest

Let's discuss the architecture:
1. What components do we need?
2. How should data flow?
3. What calculations are required?
4. What validation is needed?

Don't write code yet - just help me think through the design.
```

2. Have conversation with Copilot
3. Ask follow-up questions
4. Request a Mermaid diagram:

```
Create a Mermaid component diagram showing:
- Component structure
- Data flow
- Key functions

Keep it simple and clear.
```

5. Show the generated diagram
6. Ask for alternative approaches:

```
What are the pros and cons of:
1. Calculating on frontend vs backend
2. Using a financial library vs custom calculations
3. State management approaches
```

### Agent Mode Demo (10 min)

**What is Agent Mode?**
- Copilot executes multi-step tasks autonomously
- Navigates files, runs tests, makes edits
- Iterates until successful

**When to use:**
- Complex refactoring across multiple files
- Debugging unfamiliar code
- Generating comprehensive documentation
- Implementing well-scoped features

**Facilitator demonstrates:**

1. Enable Agent Mode:
   - Click the chat mode dropdown in the Chat view
   - Select **"Agent"** from the list
   
2. Give a complex task:
```
Refactor the BalanceMatrix component:
1. Extract calculation logic into a separate utility
2. Add PropTypes or type comments
3. Improve accessibility (ARIA labels)
4. Add error boundary
5. Ensure existing functionality still works

Make the changes and verify nothing breaks.
```

3. Watch as Agent:
   - Analyzes the component
   - Creates a refactoring plan
   - Makes changes step-by-step
   - Runs any available tests
   - Reports completion

4. Review the changes
5. Show how to approve/reject steps

**Key Points:**
- You stay in control
- Can stop at any time
- Review each change
- Great for tedious but well-defined tasks

---

## Part 5: Hands-On Feature Building (15 minutes)

### Choose Your Own Adventure

**Work in small groups (3-4 people)**

Pick ONE story from the backlog (or use these examples):

#### Option A: Contribution Limit Tracker (Easy)

```
As a 401k account holder
I want to see my remaining contribution room
So I stay within IRS limits

Acceptance Criteria:
- Show year-to-date contributions
- Display IRS limit for 2025 ($23,000)
- Calculate remaining room
- Show catch-up contribution if age 50+ ($7,500)
- Alert when over 90% of limit
```

**Architecture Prompt:**
```
I'm building a Contribution Limit Tracker for a 401k portal.

Requirements:
- Show year-to-date contributions
- Display IRS limit for 2025 ($23,000)
- Calculate remaining room
- Show catch-up contribution if age 50+ ($7,500)
- Alert when over 90% of limit

Let's discuss the architecture:
1. What functions do we need?
2. What calculations are required?
3. What should we test first?
4. How should we structure the data?

Don't write code yet - help me plan the approach.
```

**Diagram Prompt:**
```
Create a Mermaid diagram showing:
- Function structure for contribution limit tracking
- Data flow from inputs to calculations
- Alert logic

Keep it simple and clear.
```

#### Option B: Fund Rebalancing (Medium)

```
As a 401k account holder  
I want to rebalance to target percentages
So I maintain my investment strategy

Acceptance Criteria:
- Input target % for each fund
- Validate percentages sum to 100%
- Calculate required transfers
- Show preview of changes
- Minimum transfer is $1
```

**Architecture Prompt:**
```
I'm building a Fund Rebalancing feature for a 401k portal.

Requirements:
- Input target % for each fund
- Validate percentages sum to 100%
- Calculate required transfers
- Show preview of changes
- Minimum transfer is $1

Let's discuss the architecture:
1. What validation functions do we need?
2. How do we calculate the transfer amounts?
3. What's the order of operations?
4. What edge cases should we handle?

Don't write code yet - help me plan the approach.
```

**Diagram Prompt:**
```
Create a Mermaid flowchart showing:
- Input validation flow
- Rebalancing calculation steps
- Transfer generation logic

Keep it focused on the core algorithm.
```

#### Option C: Performance Dashboard (Advanced)

```
As a 401k account holder
I want to see my investment performance
So I can track my retirement progress

Acceptance Criteria:
- Show 1-year return percentage
- Compare to S&P 500 benchmark
- Display best/worst performing fund
- Show contribution vs growth breakdown
```

**Architecture Prompt:**
```
I'm building a Performance Dashboard for a 401k portal.

Requirements:
- Show 1-year return percentage
- Compare to S&P 500 benchmark
- Display best/worst performing fund
- Show contribution vs growth breakdown

Let's discuss the architecture:
1. What performance calculations do we need?
2. How do we compare to benchmark?
3. What components/functions should we create?
4. What data structure makes sense?

Don't write code yet - help me plan the approach.
```

**Diagram Prompt:**
```
Create a Mermaid diagram showing:
- Performance calculation pipeline
- Component structure
- Data flow from funds to metrics

Keep it clear and organized.
```

### 15-Minute Sprint Process

**Minutes 0-4:** Strategic Planning with Plan Mode

1. **Activate Plan Mode**: 
   - Open Copilot Chat (Cmd+I or Ctrl+I)
   - Click the chat mode dropdown at the top of the Chat view
   - Select **"plan"** from the list of chat modes

2. **Use the Planning Prompt** (provided with your chosen option above):
   ```
   [paste the Architecture Prompt from your chosen option]
   ```

3. **Have the Architecture Discussion**:
   - Let Plan mode analyze the requirements
   - Ask follow-up questions about implementation approach
   - Discuss file structure and organization
   - Review suggested testing strategy

4. **Request the Mermaid Diagram**:
   ```
   [paste the Diagram Prompt from your chosen option]
   ```
   
5. **Get the Implementation Summary**:
   ```
   Based on our discussion and diagram, create a step-by-step implementation plan:
   1. List all files to create with their paths
   2. Order of implementation
   3. Key functions/components needed
   4. Testing approach
   
   Format this as a clear action plan for Agent Mode.
   ```

**Minutes 4-13:** Switch to Agent Mode for Implementation

1. **Switch to Agent Mode**: 
   - Click the chat mode dropdown in the Chat view
   - Select **"Agent"** from the list
   - You'll see the mode switch to Agent at the top of Chat

2. **Provide the Implementation Task** - Reference your plan:

```
Implement the [feature name] feature based on the plan we created.

User Story:
[paste acceptance criteria from your chosen option]

Implementation Plan from Plan mode:
[paste or reference the key points from Plan mode's summary]

File Structure:
- Utilities: src/utils/[feature-name].js
- Tests: src/utils/__tests__/[feature-name].test.js
- Component (if time): src/components/[FeatureName].jsx

Requirements:
1. Follow the architecture from our Mermaid diagram
2. Include comprehensive input validation
3. Add error handling with clear messages
4. Write tests for all core functions
5. Add JSDoc documentation
6. Run tests to verify everything works

Create the files, implement the functionality, and verify with tests.
```

3. **Watch Agent Work**:
   - Agent will create files following your plan
   - Implement functions based on architecture discussion
   - Write and run tests
   - Report progress and results

4. **Guide Agent if Needed**:
   ```
   Make sure the calculations match our architecture diagram
   ```
   
   or
   
   ```
   Add more validation for edge cases we discussed
   ```

**Minutes 13-15:** Demo Prep
- Review the implementation Agent created
- Verify all tests pass
- Compare the code to your architecture diagram
- Note what worked well and what needed guidance
- Prepare to show: Your Plan mode discussion → Diagram → Agent's implementation

### Quick Demos (3 min per group)

Each group shows:
- Your architecture diagram from Plan mode
- What Agent Mode built
- How well it followed your architecture plan
- Any corrections or guidance you gave Agent
- One surprising moment or learning

---

## Part 6: Wrap-up & Next Steps (5 minutes)

### Key Takeaways

**TDD with Copilot:**
- ✅ Use custom chat modes to stay focused
- ✅ One test at a time, one phase at a time
- ✅ Let tests drive design
- ✅ Refactor only when green

**Architecture:**
- ✅ Use Plan mode (custom chat mode) for strategic planning before coding
- ✅ Switch chat modes using the dropdown in Chat view
- ✅ Have design conversations before implementation
- ✅ Use diagrams to visualize structure
- ✅ Evaluate multiple approaches
- ✅ Document decisions

**Agent Mode:**
- ✅ Plan first with Plan mode, then execute with Agent mode
- ✅ Switch modes using the chat mode dropdown
- ✅ Great for well-defined multi-step tasks
- ✅ You maintain control and oversight
- ✅ Review all changes before committing
- ✅ Saves time on complex feature implementation

### Immediate Next Steps (This Week)

1. **Try one TDD cycle** on your next story
2. **Use custom TDD modes** (tdd-red, tdd-green, tdd-refactor) for one feature
3. **Use Plan mode** before starting your next feature
4. **Try Agent mode** for implementing a well-defined task
5. **Share your experience** with the team

### Building the Habit (Next Month)

**Week 1-2:**
- Use TDD chat modes for all new features
- Practice RED-GREEN-REFACTOR discipline
- Start each feature with Plan mode

**Week 3-4:**
- Use Plan + Agent mode workflow for complex features
- Try Agent mode for refactoring
- Build team prompt library

### Resources

**In This Repo:**
- `WORKSHOP-2HR.md` - This workshop guide
- `.github/chatmodes/*.chatmode.md` - Custom chat modes (plan, tdd-red, tdd-green, tdd-refactor)
- `.github/prompts/*.prompt.md` - Reusable prompt files for workshop exercises
- Sample user stories for practice

**Online:**
- [GitHub Copilot Documentation](https://docs.github.com/copilot)
- [Awesome Copilot](https://github.com/github/awesome-copilot) - Community collection of prompts, chat modes, and instructions
- [Testing Library Documentation](https://testing-library.com/react)

### Team Support

**Set up:**
- Weekly "Copilot Tips" sharing in standup
- Team prompt library in your wiki
- Pair programming sessions focused on TDD
- Monthly retrospective on Copilot usage

### Questions?

Open floor for any questions about:
- TDD workflow
- Custom chat modes
- Agent Mode
- Architecture planning
- Integration into your workflow

---

## Facilitator Cheat Sheet

### Time Management

- **Running ahead?** Add more pair exercise time, deeper refactoring
- **Running behind?** Skip round 3 of TDD exercise, shorten demos
- **Emergency:** Focus on RED-GREEN-REFACTOR, skip Agent Mode

### Common Issues

| Problem | Solution |
|---------|----------|
| Copilot not responding | Check status bar, restart VS Code, verify license |
| Tests won't run | Check Vitest config, verify dependencies installed |
| Chat modes not loading | Check file location `.github/copilot/`, restart VS Code |
| Different skill levels | Pair experienced with beginners, have advanced challenges ready |

### Discussion Prompts

**If energy drops:**
- "What's the most surprising suggestion Copilot made?"
- "Where did you have to correct Copilot?"
- "How would you do this without Copilot?"

**If confused:**
- "Let me show you again on my screen"
- "Would someone who got it explain to the group?"
- "Let's do this one together as a group"

### Success Indicators

By end of workshop, participants should:
- [ ] Complete at least one RED-GREEN-REFACTOR cycle
- [ ] Use all three TDD chat modes
- [ ] Have an architecture conversation with Copilot
- [ ] See an Agent Mode demonstration
- [ ] Feel confident to try TDD on next story

---

## Post-Workshop Follow-up

### Send After Workshop (Same Day)

Email participants:
```
Thanks for participating in today's Copilot workshop!

Quick Recap:
🔴 tdd-red mode - Write failing tests first
🟢 tdd-green mode - Minimal implementation  
🔵 tdd-refactor mode - Improve quality
📋 Plan mode - Architecture planning
🤖 Agent mode - Autonomous implementation

Remember: Switch modes using the chat mode dropdown in Chat view!

Your Challenge:
Try TDD on your next user story and share your experience in Slack.

Resources:
- Workshop materials: [repo link]
- Questions? Post in #copilot-tips channel

Keep coding smarter! 🚀
```

### 1-Week Follow-up

Schedule 30-min optional Q&A session:
- Share success stories
- Troubleshoot challenges  
- Demonstrate advanced techniques
- Answer questions

### 1-Month Check-in

Measure adoption:
- How many stories used TDD?
- What's working well?
- What needs improvement?
- Schedule advanced workshop if interest

---

## Customization Guide

### For Different Team Sizes

**Small team (4-8):**
- Everyone stays in one room
- More time for discussion
- Live code review together

**Large team (12-20):**
- Use breakout rooms
- Assign facilitators per group
- Quick rotations for demos

### For Different Skill Levels

**Beginners:**
- More time on fundamentals
- Simpler exercises
- More live demonstrations

**Advanced:**
- Faster pace through basics
- More complex stories
- Focus on Agent Mode and architecture
- Add advanced refactoring patterns

### For Different Time Constraints

**90 minutes:**
- Skip Part 5 (group exercise)
- Shorter TDD exercise (2 rounds)
- Quick architecture overview

**3 hours:**
- Add more user stories
- Deeper refactoring session
- Advanced Agent Mode use cases
- Code review workshop

---

## Success Stories Template

After the workshop, collect and share:

```markdown
## 🎉 Team Success Story

**Developer:** [Name]
**Story:** [Story number/name]
**Technique:** TDD with custom chat modes (tdd-red, tdd-green, tdd-refactor)

**What they built:**
[Brief description]

**Impact:**
- Time saved: [estimate]
- Tests written: [number]
- Code quality: [improvement]

**Quote:**
"[What the developer said about the experience]"

**Lesson learned:**
[Key insight to share with team]
```

Share these in team channels to build momentum!

---

**Remember:** The goal isn't to use Copilot for everything—it's to make Copilot a natural part of your development workflow where it adds the most value.

Happy coding! 🚀
