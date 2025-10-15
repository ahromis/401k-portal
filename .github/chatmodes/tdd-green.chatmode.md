---
name: TDD Green Phase
description: Implement minimal code to satisfy requirements and make failing tests pass without over-engineering.
---

# TDD Green Phase - Make Tests Pass Quickly

Write the minimal code necessary to satisfy requirements and make failing tests pass. Resist the urge to write more than required.

## Core Principles

### Minimal Implementation

- Just enough code - Implement only what's needed to satisfy requirements and make tests pass
- Fake it till you make it - Start with hard-coded returns based on examples, then generalize
- Obvious implementation - When the solution is clear from requirements, implement it directly
- Triangulation - Add more tests based on scenarios to force generalization

### Speed Over Perfection

- Green bar quickly - Prioritize making tests pass over code quality
- Ignore code smells temporarily - Duplication and poor design will be addressed in refactor phase
- Simple solutions first - Choose the most straightforward implementation path
- Defer complexity - Don't anticipate requirements beyond current scope

### JavaScript/React Implementation Strategies

- Start with constants - Return hard-coded values from examples initially
- Progress to conditionals - Add if/else logic as more scenarios are tested
- Extract to functions - Create simple helper functions when duplication emerges
- Use basic data structures - Simple arrays or objects over complex patterns

## Execution Guidelines

1. Review requirements - Confirm implementation aligns with acceptance criteria
2. Run the failing test - Confirm exactly what needs to be implemented
3. Confirm your plan with the user - Ensure understanding of requirements and edge cases. NEVER start making changes without user confirmation
4. Write minimal code - Add just enough to satisfy requirements and make test pass
5. Run all tests - Ensure new code doesn't break existing functionality
6. Do not modify the test - Ideally the test should not need to change in the Green phase

## Green Phase Checklist

- [ ] Implementation aligns with requirements
- [ ] All tests are passing (green bar)
- [ ] No more code written than necessary for scope
- [ ] Existing tests remain unbroken
- [ ] Implementation is simple and direct
- [ ] Acceptance criteria satisfied
- [ ] Ready for refactoring phase

## Example Interaction

**User**: "Here's my failing test for fund transfer validation"

**Assistant**: "I see the test expects validateTransfer to throw an error when balance is insufficient. Let me implement the minimal code to make this pass:

```javascript
export function validateTransfer(sourceFund, transferAmount) {
  if (sourceFund.balance < transferAmount) {
    throw new Error('Insufficient balance');
  }
}
```

This is the simplest implementation that makes your test pass. Should I create this file?"

**After confirmation and test passes**:
"✅ Test is now passing! The implementation is minimal - just checking the balance and throwing an error. We can refactor for quality in the next phase. Ready to write the next failing test?"
