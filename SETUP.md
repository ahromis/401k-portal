# Workshop Participant Setup Guide

## Pre-Workshop Setup (Do This Before the Workshop!)

### 1. Verify GitHub Copilot Access

1. Open VS Code
2. Check bottom-right status bar for Copilot icon
3. Click the icon to verify it's active
4. If not active, sign in with your GitHub account

### 2. Install Required Extensions

Open VS Code and install:

- **GitHub Copilot** - AI pair programmer
- **GitHub Copilot Chat** - Conversational AI assistant
- **Vitest** (optional but recommended) - Test runner UI

Quick install via command palette (`Cmd+Shift+P` / `Ctrl+Shift+P`):
```
ext install GitHub.copilot
ext install GitHub.copilot-chat
ext install vitest.explorer
```

### 3. Clone and Setup Repository

```bash
# Clone the repository
git clone https://github.com/ahromis/401k-portal.git
cd 401k-portal

# Install dependencies
npm install

# Install testing dependencies
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom happy-dom @vitest/ui

# Verify setup works
npm run dev
# Open http://localhost:5173 in your browser
```

### 4. Verify Testing Setup

```bash
# Run tests (there may not be any yet - that's OK!)
npm run test

# You should see Vitest start without errors
```

### 5. Load Custom Chat Modes

The repository includes three custom TDD chat modes:

1. Close VS Code completely
2. Reopen the `401k-portal` folder
3. Restart VS Code if the custom modes don't appear

To verify they loaded:
1. Open Copilot Chat (`Cmd+I` or `Ctrl+I`)
2. Type `@` and you should see:
   - `@tdd-red`
   - `@tdd-green`
   - `@tdd-refactor`

### 6. Optional: Install Recommended Extensions

For the best experience, also install:

- **Error Lens** - Inline error highlighting
- **GitLens** - Enhanced Git integration
- **Better Comments** - Highlight TODO, FIXME, etc.

---

## Quick Reference: Custom Chat Modes

### @tdd-red - Write Failing Tests First
Use when: Starting a new feature or requirement

Example:
```
@tdd-red

I need to validate fund transfer amounts.
Requirement: Transfer amount must be positive.

Help me write ONE failing test.
```

### @tdd-green - Minimal Implementation
Use when: You have a failing test

Example:
```
@tdd-green

Here's my failing test:
[paste test]

Write minimal code to make it pass.
```

### @tdd-refactor - Improve Quality
Use when: Tests are passing, ready to improve

Example:
```
@tdd-refactor

Improve this code:
[paste code]

Focus on: validation, error handling, documentation
```

---

## Keyboard Shortcuts to Know

| Action | Mac | Windows/Linux |
|--------|-----|---------------|
| Open Copilot Chat | `Cmd+I` | `Ctrl+I` |
| Inline Suggestions | `Tab` | `Tab` |
| Next Suggestion | `Option+]` | `Alt+]` |
| Previous Suggestion | `Option+[` | `Alt+[` |
| Accept Suggestion | `Tab` | `Tab` |
| Reject Suggestion | `Esc` | `Esc` |

---

## Troubleshooting

### Copilot Not Responding

1. Check status bar - is Copilot active?
2. Sign out and sign in again
3. Restart VS Code
4. Check GitHub Copilot subscription status

### Tests Won't Run

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run test
```

### Chat Modes Not Loading

1. Verify files exist in `.github/copilot/`
2. Restart VS Code completely
3. Check file names end with `.chatmode.md`
4. Try closing and reopening the workspace

### Port Already in Use (when running dev server)

```bash
# Kill process on port 5173
npx kill-port 5173

# Or use a different port
npm run dev -- --port 3000
```

---

## Workshop Day Checklist

Before the workshop starts:

- [ ] Laptop fully charged (or bring charger)
- [ ] VS Code open with 401k-portal workspace
- [ ] GitHub Copilot active and working
- [ ] Terminal open and ready
- [ ] Comfortable keyboard and mouse
- [ ] Water/coffee nearby
- [ ] Notification silenced
- [ ] Positive attitude! 🚀

---

## Resources

### During Workshop
- **Workshop Guide**: `WORKSHOP-2HR.md` (this is your main reference)
- **Detailed Version**: `WORKSHOP.md` (for deeper learning after)
- **Chat Modes**: `.github/copilot/*.chatmode.md`

### After Workshop
- [GitHub Copilot Docs](https://docs.github.com/copilot)
- [Vitest Documentation](https://vitest.dev)
- [React Testing Library](https://testing-library.com/react)
- [Awesome Copilot](https://github.com/github/awesome-copilot)

---

## Questions?

If you have setup issues before the workshop:
1. Try the troubleshooting steps above
2. Check with a colleague who got it working
3. Come 10 minutes early to the workshop for help

See you at the workshop! 🎉
