```prompt
---
mode: 'agent'
description: 'Implement fund rebalancing feature based on architectural plan'
---

# Implementation: Fund Rebalancing

Implement the Fund Rebalancing feature based on our architecture discussion.

Architecture Reference:
- Review our conversation above for the architecture plan
- Check the Mermaid diagram file we created: docs/architecture/fund-rebalancing-diagram.md

User Story:
As a 401k account holder  
I want to rebalance to target percentages
So I maintain my investment strategy

Acceptance Criteria:
- Input target % for each fund
- Validate percentages sum to 100%
- Calculate required transfers
- Show preview of changes
- Minimum transfer is $1

File Structure:
- Utilities: src/utils/fund-rebalancing.js
- Tests: src/utils/__tests__/fund-rebalancing.test.js
- Component (if time): src/components/FundRebalancing.jsx

Requirements:
1. Follow the architecture from our Mermaid diagram
2. Include comprehensive input validation
3. Add error handling with clear messages
4. Write tests for all core functions
5. Add JSDoc documentation
6. Run tests to verify everything works

Create the files, implement the functionality, and verify with tests.

```
