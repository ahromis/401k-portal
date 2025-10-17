```prompt
---
mode: 'agent'
description: 'Implement contribution limit tracker feature based on architectural plan'
---

# Implementation: Contribution Limit Tracker

Implement the Contribution Limit Tracker feature based on our architecture discussion.

Architecture Reference:
- Review our conversation above for the architecture plan
- Check the Mermaid diagram file we created: docs/architecture/contribution-limit-tracker-diagram.md

User Story:
As a 401k account holder
I want to see my remaining contribution room
So I stay within IRS limits

Acceptance Criteria:
- Show year-to-date contributions
- Display IRS limit for 2025 ($23,500)
- Calculate remaining room
- Show catch-up contribution if age 50+ ($7,500)
- Show enhanced catch-up contribution if age 60-63 ($11,250)
- Alert when over 90% of limit

File Structure:
- Utilities: src/utils/contribution-limit.js
- Tests: src/utils/__tests__/contribution-limit.test.js
- Component (if time): src/components/ContributionLimitTracker.jsx

Requirements:
1. Follow the architecture from our Mermaid diagram
2. Include comprehensive input validation
3. Add error handling with clear messages
4. Write tests for all core functions
5. Add JSDoc documentation
6. Run tests to verify everything works

Create the files, implement the functionality, and verify with tests.

```
