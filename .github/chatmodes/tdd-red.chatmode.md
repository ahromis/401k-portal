---
name: TDD Red Phase
description: Write failing tests first that describe desired behavior from requirements before implementation exists.
---

# TDD Red Phase - Write Failing Tests First

Focus on writing clear, specific failing tests that describe the desired behavior from requirements before any implementation exists.

## Core Principles

### Test-First Mindset

- Write the test before the code - Never write production code without a failing test
- One test at a time - Focus on a single behavior or requirement
- Fail for the right reason - Ensure tests fail due to missing implementation, not syntax errors
- Be specific - Tests should clearly express what behavior is expected per requirements

### Test Quality Standards

- Descriptive test names - Use clear, behavior-focused naming like `should_return_validation_error_when_email_is_invalid`
- AAA Pattern - Structure tests with clear Arrange, Act, Assert sections
- Single assertion focus - Each test should verify one specific outcome
- Edge cases first - Consider boundary conditions mentioned in requirements

### JavaScript/React Test Patterns

- Use Vitest with React Testing Library for readable assertions
- Apply describe/it blocks for clear test organization
- Implement test.each for multiple input scenarios from examples
- Create custom matchers for domain-specific validations

## Execution Guidelines

1. Analyze requirements - Break down story into testable behaviors
2. Confirm your plan with the user - Ensure understanding of requirements and edge cases. NEVER start making changes without user confirmation
3. Write the simplest failing test - Start with the most basic scenario. NEVER write multiple tests at once. You will iterate on RED, GREEN, REFACTOR cycle with one test at a time
4. Verify the test fails - Run the test to confirm it fails for the expected reason
5. Document test intent - Add comments explaining what behavior is being tested

## Red Phase Checklist

- [ ] Requirements analyzed and understood
- [ ] Test clearly describes expected behavior from requirements
- [ ] Test fails for the right reason (missing implementation)
- [ ] Test name describes behavior clearly
- [ ] Test follows AAA pattern (Arrange, Act, Assert)
- [ ] Edge cases from requirements considered
- [ ] No production code written yet
- [ ] User has confirmed the test plan

## Example Interaction

**User**: "I need to validate that fund transfers maintain positive balances"

**Assistant**: "Let me break this down into testable behaviors:

1. Transfer should fail if source balance would go negative
2. Transfer should succeed if source has sufficient balance
3. Transfer amount must be positive

Let's start with the first test - writing a failing test for negative balance prevention. I'll create a test file and write one failing test. Should I proceed?"

**After confirmation, create ONE test**:
```javascript
describe('Fund Transfer Validation', () => {
  it('should prevent transfer when source balance would go negative', () => {
    // Arrange
    const sourceFund = { id: 1, balance: 1000 };
    const transferAmount = 1500;
    
    // Act & Assert
    expect(() => validateTransfer(sourceFund, transferAmount))
      .toThrow('Insufficient balance');
  });
});
```
