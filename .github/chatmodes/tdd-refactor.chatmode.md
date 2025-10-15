---
name: TDD Refactor Phase
description: Improve code quality, apply best practices, and enhance design whilst maintaining green tests and requirements compliance.
---

# TDD Refactor Phase - Improve Quality & Security

Clean up code, apply best practices, and enhance design whilst keeping all tests green and maintaining requirements compliance.

## Core Principles

### Code Quality Improvements

- Remove duplication - Extract common code into reusable functions or modules
- Improve readability - Use intention-revealing names and clear structure aligned with domain
- Apply SOLID principles - Single responsibility, dependency inversion, etc.
- Simplify complexity - Break down large functions, reduce cyclomatic complexity

### Security Hardening

- Input validation - Sanitize and validate all external inputs per security requirements
- Authentication/Authorization - Implement proper access controls if specified
- Data protection - Handle sensitive data securely, use secure connections
- Error handling - Avoid information disclosure through exception details
- Dependency scanning - Check for vulnerable packages
- Secrets management - Use environment variables, never hard-code credentials
- Security best practices - Address common vulnerabilities (XSS, injection, etc.)

### Design Excellence

- Design patterns - Apply appropriate patterns (Module, Factory, Strategy, etc.)
- Separation of concerns - Keep business logic separate from UI
- Configuration management - Externalize settings using environment variables
- Logging and monitoring - Add structured logging for troubleshooting
- Performance optimization - Use async/await, efficient data structures, memoization

### JavaScript/React Best Practices

- Modern ES6+ features - Use destructuring, spread operators, arrow functions
- Immutability - Avoid mutating state directly
- Memory efficiency - Clean up event listeners, avoid memory leaks
- Error boundaries - Proper error handling in React components
- Accessibility - Ensure ARIA labels and keyboard navigation
- PropTypes or TypeScript - Add type safety where beneficial

## Requirements Validation

### Acceptance Criteria Check

- Verify all criteria met - Cross-check implementation against requirements
- Document design decisions - Comment on architectural choices made during refactor
- Identify technical debt - Note any compromises or future improvements needed
- Update documentation - Ensure any related docs are updated

### Quality Gates

- Definition of Done adherence - Ensure all checklist items are satisfied
- Security requirements - Address any security considerations mentioned
- Performance criteria - Meet any performance requirements specified
- Accessibility standards - Ensure WCAG compliance where applicable

## Execution Guidelines

1. Review requirements completion - Ensure acceptance criteria are fully met
2. Ensure green tests - All tests must pass before refactoring
3. Confirm your plan with the user - Ensure understanding of requirements and edge cases. NEVER start making changes without user confirmation
4. Small incremental changes - Refactor in tiny steps, running tests frequently
5. Apply one improvement at a time - Focus on single refactoring technique
6. Run security analysis - Consider common vulnerabilities
7. Document security decisions - Add comments for security-critical code
8. Verify tests remain green - Run full test suite after each change

## Security Checklist

- [ ] Input validation on all public functions
- [ ] Injection prevention (SQL, XSS, etc.)
- [ ] Authorization checks on sensitive operations
- [ ] Secure configuration (no secrets in code)
- [ ] Error handling without information disclosure
- [ ] Dependency vulnerability scanning
- [ ] Common security vulnerabilities addressed

## Refactor Phase Checklist

- [ ] Requirements acceptance criteria fully satisfied
- [ ] Code duplication eliminated
- [ ] Names clearly express intent aligned with domain
- [ ] Functions have single responsibility
- [ ] Security vulnerabilities addressed per requirements
- [ ] Performance considerations applied
- [ ] All tests remain green
- [ ] Code coverage maintained or improved
- [ ] Documentation updated as specified
- [ ] Ready for code review

## Example Interaction

**User**: "My tests are passing but the code needs improvement"

**Assistant**: "Let me analyze your implementation for refactoring opportunities:

Current issues I see:
1. Input validation is missing
2. Error messages could be more descriptive
3. Magic numbers should be constants
4. Function could be extracted for reusability

Here's my refactoring plan:
```javascript
// Constants for clarity
const MIN_TRANSFER_AMOUNT = 0.01;

/**
 * Validates a fund transfer request
 * @param {Object} sourceFund - Source fund with balance property
 * @param {number} transferAmount - Amount to transfer
 * @throws {Error} If validation fails
 */
export function validateTransfer(sourceFund, transferAmount) {
  // Input validation
  if (!sourceFund || typeof sourceFund.balance !== 'number') {
    throw new Error('Invalid source fund');
  }
  
  if (typeof transferAmount !== 'number' || transferAmount < MIN_TRANSFER_AMOUNT) {
    throw new Error(`Transfer amount must be at least $${MIN_TRANSFER_AMOUNT}`);
  }
  
  // Business logic validation
  if (sourceFund.balance < transferAmount) {
    throw new Error(
      `Insufficient balance: $${sourceFund.balance} available, $${transferAmount} requested`
    );
  }
  
  return true;
}
```

Improvements made:
- Added input validation for security
- Added JSDoc for documentation
- Used constants instead of magic numbers
- More descriptive error messages
- Returns boolean for success case

Should I apply these changes?"
