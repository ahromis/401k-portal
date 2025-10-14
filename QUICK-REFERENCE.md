# GitHub Copilot TDD Quick Reference

## 🎯 The TDD Cycle

```
🔴 RED    → Write ONE failing test
🟢 GREEN  → Minimal code to pass
🔵 REFACTOR → Improve quality
   ↺ REPEAT
```

---

## 💬 Custom Chat Modes

### @tdd-red - Write Failing Tests

**When:** Starting new feature/requirement

**Template:**
```
@tdd-red

Requirement: [describe what needs to work]

Help me write ONE failing test for [specific scenario].
```

**Example:**
```
@tdd-red

Requirement: Fund transfer must validate sufficient balance

Help me write ONE failing test for insufficient balance scenario.
```

---

### @tdd-green - Minimal Implementation

**When:** Have a failing test

**Template:**
```
@tdd-green

Here's my failing test:
[paste test code]

Write minimal code to make it pass.
Create: [file path]
```

**Example:**
```
@tdd-green

Here's my failing test:
[paste test]

Write minimal code to make it pass.
Create: src/utils/transferValidation.js
```

---

### @tdd-refactor - Improve Quality

**When:** Tests are passing

**Template:**
```
@tdd-refactor

Improve this code:
[paste implementation]

Focus on:
- Input validation
- Error handling
- Documentation
- Security

Keep tests green!
```

**Example:**
```
@tdd-refactor

Improve this code:
[paste code]

Focus on: validation, descriptive errors, JSDoc comments
```

---

## ⌨️ Keyboard Shortcuts

| Action | Mac | Windows/Linux |
|--------|-----|---------------|
| Open Copilot Chat | `Cmd+I` | `Ctrl+I` |
| Accept Suggestion | `Tab` | `Tab` |
| Next Suggestion | `Option+]` | `Alt+]` |
| Previous Suggestion | `Option+[` | `Alt+[` |
| Reject Suggestion | `Esc` | `Esc` |
| Trigger Inline Copilot | `Option+\` | `Alt+\` |

---

## 🧪 Testing Commands

```bash
# Run all tests
npm run test

# Run tests in UI mode
npm run test:ui

# Run with coverage
npm run test:coverage

# Run tests in watch mode (auto-rerun)
npm run test -- --watch
```

---

## 📝 Test Structure Template

```javascript
import { describe, it, expect } from 'vitest';
import { functionToTest } from '../myModule';

describe('Feature Name', () => {
  it('should [describe expected behavior]', () => {
    // Arrange - Set up test data
    const input = { /* test data */ };
    
    // Act - Execute the function
    const result = functionToTest(input);
    
    // Assert - Verify the outcome
    expect(result).toBe(expectedValue);
  });
});
```

---

## 🎨 Architecture Discussion Template

```
I need to design [feature name].

Requirements:
- [requirement 1]
- [requirement 2]
- [requirement 3]

Let's discuss architecture:
1. What components should I create?
2. How should data flow?
3. Where should [specific logic] live?
4. What validation is needed?

Don't write code yet - help me think through the design.
```

---

## 🤖 Agent Mode

**Enable:** Click Agent toggle in Copilot Chat

**Good for:**
- Multi-file refactoring
- Comprehensive documentation
- Systematic code improvements
- Debugging across files

**Template:**
```
@agent

[Describe multi-step task]

1. [Step 1]
2. [Step 2]
3. [Step 3]

Proceed systematically and verify each step.
```

**Example:**
```
@agent

Refactor the LoginPage component:
1. Extract form validation to separate utility
2. Add error handling
3. Add accessibility attributes
4. Update related tests

Proceed step by step.
```

---

## ✅ TDD Checklist

### RED Phase
- [ ] Understand the requirement
- [ ] Write ONE test that describes desired behavior
- [ ] Run test - verify it FAILS for right reason
- [ ] Don't write implementation yet

### GREEN Phase
- [ ] Write MINIMAL code to pass test
- [ ] Run test - verify it PASSES
- [ ] Don't add extra features
- [ ] Don't refactor yet

### REFACTOR Phase
- [ ] Improve code quality
- [ ] Add validation/error handling
- [ ] Add documentation
- [ ] Run tests - keep them GREEN
- [ ] Commit when done

---

## 🚫 Common Mistakes

### ❌ Writing multiple tests at once
**✅ Instead:** Write one test, make it pass, then write next test

### ❌ Implementing features without tests
**✅ Instead:** Always write test first (RED phase)

### ❌ Over-engineering in GREEN phase
**✅ Instead:** Minimal code to pass, refactor later

### ❌ Accepting all Copilot suggestions blindly
**✅ Instead:** Review, understand, then accept

### ❌ Refactoring when tests are red
**✅ Instead:** Get to green first, then refactor

---

## 💡 Pro Tips

### Get Better Suggestions
- Be specific in your prompts
- Include context (requirements, constraints)
- Ask for one thing at a time
- Use custom chat modes to stay focused

### Improve Test Quality
- Use descriptive test names: `should_[behavior]_when_[condition]`
- One assertion per test
- Test behavior, not implementation
- Include edge cases

### Work Faster
- Use keyboard shortcuts
- Run tests in watch mode
- Commit after each green cycle
- Keep commits small and focused

### Collaborate with Copilot
- Have conversations, don't just give orders
- Ask "why" to understand suggestions
- Request alternatives: "What's another approach?"
- Use it to learn: "Explain this code"

---

## 🆘 Troubleshooting

### Copilot Not Responding
1. Check status bar icon
2. Sign out and back in
3. Restart VS Code
4. Verify subscription active

### Tests Not Running
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Chat Modes Not Available
1. Verify files in `.github/copilot/`
2. Restart VS Code
3. Check workspace is open (not just files)

### Can't See Inline Suggestions
1. Check Copilot is enabled (status bar)
2. Wait 1-2 seconds for suggestions
3. Try `Option+\` / `Alt+\` to trigger

---

## 📚 Quick Links

- [Workshop Guide](WORKSHOP-2HR.md)
- [Setup Instructions](SETUP.md)
- [Vitest Docs](https://vitest.dev)
- [Testing Library](https://testing-library.com/react)
- [GitHub Copilot Docs](https://docs.github.com/copilot)

---

## 🎯 Daily Workflow

**Morning:**
```
1. Pick a user story
2. Break down into testable behaviors
3. Start with @tdd-red for first test
```

**Development:**
```
🔴 @tdd-red    → Write test
🟢 @tdd-green  → Implement
🔵 @tdd-refactor → Improve
✅ Commit
↺ Repeat
```

**Code Review:**
```
- Use Copilot to explain unfamiliar code
- Ask for alternative approaches
- Generate documentation
```

---

**Remember:** Copilot is your pair programmer. Communicate clearly, review carefully, and trust the process!

---

*Print this for quick reference during the workshop*
