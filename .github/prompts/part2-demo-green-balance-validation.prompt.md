---
mode: 'tdd-green'
description: 'Write minimal implementation to pass the failing balance validation test following TDD green phase'
---

# TDD Green: Balance Validation

I have a failing test in src/utils/__tests__/accountBalance.test.js
for the calculateTotalBalance function.

Here's the failing test:

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

Help me write the minimal code to make it pass.
Create the implementation at: src/utils/accountBalance.js
