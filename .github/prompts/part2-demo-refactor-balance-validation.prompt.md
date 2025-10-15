---
mode: 'agent'
description: 'Refactor balance validation code to improve quality, add validation, and enhance error handling while keeping tests green'
---

# TDD Refactor: Balance Validation

Here's my working code with passing tests:

```javascript
// src/utils/accountBalance.js
export function calculateTotalBalance(funds) {
  return funds.reduce((sum, fund) => sum + fund.balance, 0);
}

// src/utils/__tests__/accountBalance.test.js
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

Refactor to improve:
- Input validation
- Error handling
- Documentation
- Edge case handling

Keep tests green!
