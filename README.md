# 401k Portal

A React application for viewing and managing 401(k) investments. This portal provides a user-friendly interface for account holders to monitor and adjust their retirement investments.

## 🚀 GitHub Copilot Workshop Materials

This repository includes a **complete, production-ready 2-hour workshop** for learning advanced GitHub Copilot techniques, focusing on Test-Driven Development (TDD), architectural planning, and Agent Mode.

### 🎯 Workshop Quick Links

| I am a... | Start here |
|-----------|------------|
| **Workshop Participant** | [SETUP.md](SETUP.md) - Complete this before workshop |
| **Workshop Facilitator** | [FACILITATOR-GUIDE.md](FACILITATOR-GUIDE.md) - Detailed script |
| **Workshop Organizer** | [WORKSHOP-SUMMARY.md](WORKSHOP-SUMMARY.md) - Overview |
| **Self-Learner** | [WORKSHOP-2HR.md](WORKSHOP-2HR.md) - Main guide |

### 📚 All Workshop Resources

- **[WORKSHOP-2HR.md](WORKSHOP-2HR.md)** ⭐ Main 2-hour workshop guide
- **[SETUP.md](SETUP.md)** ⚙️ Pre-workshop preparation
- **[QUICK-REFERENCE.md](QUICK-REFERENCE.md)** 📋 One-page cheat sheet
- **[FACILITATOR-GUIDE.md](FACILITATOR-GUIDE.md)** 🎤 Speaker notes
- **[WORKSHOP.md](WORKSHOP.md)** 📚 Extended 4-6 hour version
- **[INDEX.md](INDEX.md)** 🗺️ Complete file navigation
- **[VISUAL-OVERVIEW.md](VISUAL-OVERVIEW.md)** 🎨 Visual diagrams
- **[EMAIL-TEMPLATES.md](EMAIL-TEMPLATES.md)** 📧 Communication templates
- **[Custom Chat Modes](.github/copilot/)** 🤖 TDD Red-Green-Refactor modes

### ⚡ Quick Start for Workshop

```bash
# 1. Clone and install
git clone https://github.com/ahromis/401k-portal.git
cd 401k-portal
npm install

# 2. Install testing dependencies
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom happy-dom @vitest/ui

# 3. Run tests
npm run test

# 4. Start dev server
npm run dev
```

📖 **Full setup guide:** [SETUP.md](SETUP.md)

### 🎓 What You'll Learn

- ✅ Write tests first with **@tdd-red** chat mode
- ✅ Implement minimally with **@tdd-green** chat mode  
- ✅ Refactor to production quality with **@tdd-refactor** chat mode
- ✅ Plan architecture with Copilot conversations
- ✅ Use Agent Mode for automated refactoring

### ⏱️ Workshop Agenda (2 Hours)

| Time | Activity |
|------|----------|
| 0:00-0:10 | Setup & Introduction |
| 0:10-0:30 | TDD Demo (RED-GREEN-REFACTOR) |
| 0:30-1:10 | Hands-On Practice (Pairs) |
| 1:10-1:20 | Break |
| 1:20-1:40 | Architecture & Agent Mode Demo |
| 1:40-1:55 | Build a Feature (Groups) |
| 1:55-2:00 | Wrap-Up & Next Steps |

## Features

- View current investment allocations and balances
- Transfer funds between investment options
- Reallocate investment percentages across funds
- Transaction history and reporting
- Secure authentication and authorization

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/ahromis/401k-portal.git
cd 401k-portal
npm install
```

## Usage

### Development

Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Production Build

Create a production build:

```bash
npm run build
```

## Business Rules

### Fund Transfer Rules
- Users can only transfer funds between eligible investment options
- Transfers must maintain a positive balance in source funds
- Transfer amounts must be greater than $0
- Users cannot transfer more than their available balance
- Fund transfers maintain investment type buckets (e.g., traditional 401k funds transfer to traditional 401k funds)

### Fund Reallocation Rules
- Total allocation across all funds must equal 100%
- Allocation percentages must be between 0% and 100%

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](https://choosealicense.com/licenses/mit/) file for details.

## Security

This application is designed for demonstration purposes. In a production environment, ensure proper security measures are implemented to protect sensitive financial information.
