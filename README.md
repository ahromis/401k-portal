# 401k Portal

A React front-end for viewing 401(k) investments.

## Development
```bash
npm install
npm run dev

Business Rules
Fund Transfer Rules
Users can only transfer funds between eligible investment options
Transfers must maintain a positive balance in source funds
Transfer amounts must be greater than $0
Users cannot transfer more than their available balance
When a transfer is initiated, the funds should go into the same investment type bucket where it came from, for example a transfer out of traditional 401k bucket should go into the 401k bucket of the destination and so on. 

Fund Reallocation Rules
Total allocation across all funds must equal 100%
Allocation percentages must be between 0% and 100%
[Add your specific rules here]