# Workshop Visual Overview

## 🎯 Workshop at a Glance

```
┌─────────────────────────────────────────────────────────────┐
│     2-Hour GitHub Copilot Workshop: TDD & Agent Mode       │
│                                                             │
│  Transform Copilot from autocomplete to dev partner        │
└─────────────────────────────────────────────────────────────┘

┌──────────────┬──────────────────────────────────────────────┐
│   Timeline   │              Activity                        │
├──────────────┼──────────────────────────────────────────────┤
│   0:00-0:10  │  📚 Setup & Introduction                     │
│   (10 min)   │  • Welcome & objectives                      │
│              │  • TDD philosophy overview                   │
├──────────────┼──────────────────────────────────────────────┤
│   0:10-0:30  │  🎬 TDD Demo (Facilitator)                   │
│   (20 min)   │  • 🔴 RED: Write failing test                │
│              │  • 🟢 GREEN: Minimal implementation           │
│              │  • 🔵 REFACTOR: Improve quality              │
├──────────────┼──────────────────────────────────────────────┤
│   0:30-1:10  │  💻 Hands-On: TDD Practice (Pairs)           │
│   (40 min)   │  • Round 1: Balance validation               │
│              │  • Round 2: Amount validation                │
│              │  • Round 3: Same fund check                  │
│              │  • Share experiences                         │
├──────────────┼──────────────────────────────────────────────┤
│   1:10-1:20  │  ☕ Break                                     │
│   (10 min)   │  • Stretch, refresh, casual chat             │
├──────────────┼──────────────────────────────────────────────┤
│   1:20-1:40  │  🎬 Architecture & Agent Mode Demo           │
│   (20 min)   │  • Design discussion with Copilot            │
│              │  • Generate Mermaid diagram                  │
│              │  • Agent Mode refactoring demo               │
├──────────────┼──────────────────────────────────────────────┤
│   1:40-1:55  │  🚀 Build a Feature (Small Groups)           │
│   (15 min)   │  • Choose user story                         │
│              │  • Architecture → TDD → Demo                 │
├──────────────┼──────────────────────────────────────────────┤
│   1:55-2:00  │  🎉 Wrap-Up & Next Steps                     │
│   (5 min)    │  • Key takeaways                             │
│              │  • Q&A                                       │
└──────────────┴──────────────────────────────────────────────┘
```

## 🔄 The TDD Workflow

```
        ┌─────────────────────────────────────────┐
        │                                         │
        │         Write Requirements              │
        │                                         │
        └──────────────────┬──────────────────────┘
                           │
                           ▼
        ┌─────────────────────────────────────────┐
        │  🔴 RED PHASE                           │
        │                                         │
        │  @tdd-red                               │
        │  • Write ONE failing test               │
        │  • Describes desired behavior           │
        │  • Verify it fails correctly            │
        │                                         │
        └──────────────────┬──────────────────────┘
                           │
                           ▼
        ┌─────────────────────────────────────────┐
        │  🟢 GREEN PHASE                         │
        │                                         │
        │  @tdd-green                             │
        │  • Write MINIMAL code                   │
        │  • Make test pass                       │
        │  • No extra features                    │
        │                                         │
        └──────────────────┬──────────────────────┘
                           │
                           ▼
        ┌─────────────────────────────────────────┐
        │  🔵 REFACTOR PHASE                      │
        │                                         │
        │  @tdd-refactor                          │
        │  • Improve code quality                 │
        │  • Add validation/docs                  │
        │  • Keep tests green                     │
        │                                         │
        └──────────────────┬──────────────────────┘
                           │
                           ▼
        ┌─────────────────────────────────────────┐
        │                                         │
        │         ✅ Commit                        │
        │                                         │
        └──────────────────┬──────────────────────┘
                           │
                           │  More features?
                           │  
                           └─────────► YES: Back to RED Phase
                                      NO:  Done!
```

## 📚 Material Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    Before Workshop                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Organizer Sends:     SETUP.md                             │
│  Participant Reads:   SETUP.md                             │
│  Participant Does:    Install & Configure                  │
│  Facilitator Reviews: FACILITATOR-GUIDE.md                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    During Workshop                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Facilitator Uses:  FACILITATOR-GUIDE.md (detailed script) │
│  Participant Uses:  WORKSHOP-2HR.md (main guide)           │
│  Everyone Has:      QUICK-REFERENCE.md (cheat sheet)       │
│  VS Code Loads:     .github/copilot/*.chatmode.md         │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    After Workshop                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Organizer Sends:   EMAIL-TEMPLATES.md (thank you + res)  │
│  Self-Learners:     WORKSHOP.md (extended deep-dive)       │
│  Quick Help:        QUICK-REFERENCE.md (daily use)         │
│  Team Channel:      Share successes & questions            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## 🎭 Participant Journey

```
Week -1         Day -1          Workshop Day      Week +1         Month +1
   │               │                  │               │               │
   ▼               ▼                  ▼               ▼               ▼
┌──────┐      ┌──────┐          ┌────────┐      ┌──────┐       ┌──────┐
│Setup │      │Ready │          │ Learn  │      │ Try  │       │Master│
│      │─────▶│Check │─────────▶│  TDD   │─────▶│  it  │──────▶│  it  │
└──────┘      └──────┘          └────────┘      └──────┘       └──────┘
   │               │                  │               │               │
   │ Install       │ Verify           │ Practice      │ Apply to      │ Regular
   │ Copilot       │ Setup            │ in Pairs      │ Real Story    │ Workflow
   │ Clone Repo    │ Test             │ Use Chat      │ Share Win     │ Team
   │ Dependencies  │ Chat Modes       │ Modes         │ Get Help      │ Standard
```

## 🗂️ File Organization

```
401k-portal/
│
├── 📘 Workshop Documentation
│   ├── WORKSHOP-2HR.md          ⭐ Main 2-hour workshop guide
│   ├── WORKSHOP.md              📚 Extended detailed version
│   ├── SETUP.md                 ⚙️  Pre-workshop preparation
│   ├── FACILITATOR-GUIDE.md     🎤 Speaker notes & script
│   ├── QUICK-REFERENCE.md       📋 One-page cheat sheet
│   ├── WORKSHOP-SUMMARY.md      📊 Overview for organizers
│   ├── EMAIL-TEMPLATES.md       📧 Communication templates
│   ├── INDEX.md                 🗺️  Navigation guide
│   └── VISUAL-OVERVIEW.md       🎨 This file
│
├── 🤖 Custom Chat Modes
│   └── .github/copilot/
│       ├── tdd-red.chatmode.md      🔴 Write failing tests
│       ├── tdd-green.chatmode.md    🟢 Minimal implementation
│       └── tdd-refactor.chatmode.md 🔵 Quality improvements
│
├── 🧪 Testing Setup
│   ├── vitest.config.js         ⚙️  Test configuration
│   ├── src/test/setup.js        🔧 Test environment
│   └── package.json             📦 Dependencies & scripts
│
├── 💻 Application Code
│   ├── src/                     📁 Source code
│   │   ├── components/          🧩 React components
│   │   ├── utils/               🔧 Utility functions
│   │   └── data/                📊 Data files
│   └── index.html               🌐 Entry point
│
└── 📄 Configuration
    ├── vite.config.js           ⚡ Vite build config
    ├── tailwind.config.js       🎨 Tailwind CSS
    └── README.md                📖 Project overview
```

## 👥 Roles & Responsibilities

```
┌─────────────────────────────────────────────────────────────┐
│                         ORGANIZER                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Before:  • Schedule workshop                               │
│           • Send EMAIL-TEMPLATES.md messages                │
│           • Coordinate facilitator & participants           │
│                                                             │
│  During:  • Handle logistics                                │
│           • Support facilitator                             │
│           • Troubleshoot tech issues                        │
│                                                             │
│  After:   • Collect feedback                                │
│           • Measure adoption                                │
│           • Plan follow-ups                                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                       FACILITATOR                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Before:  • Study FACILITATOR-GUIDE.md                      │
│           • Test all exercises                              │
│           • Prepare environment                             │
│                                                             │
│  During:  • Follow facilitation script                      │
│           • Demonstrate TDD workflow                        │
│           • Guide hands-on exercises                        │
│           • Answer questions                                │
│                                                             │
│  After:   • Host office hours                               │
│           • Answer follow-up questions                      │
│           • Share additional tips                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      PARTICIPANT                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Before:  • Complete SETUP.md checklist                     │
│           • Verify environment works                        │
│           • Print QUICK-REFERENCE.md (optional)             │
│                                                             │
│  During:  • Follow WORKSHOP-2HR.md                          │
│           • Practice in pairs/groups                        │
│           • Ask questions                                   │
│           • Have fun learning!                              │
│                                                             │
│  After:   • Try TDD on real story                           │
│           • Review WORKSHOP.md for more depth               │
│           • Share success stories                           │
│           • Help teammates                                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## 🎯 Learning Progression

```
                    Beginner                                    Expert
                       │                                          │
                       ▼                                          ▼
    ┌──────────┬──────────┬──────────┬──────────┬──────────┬──────────┐
    │          │          │          │          │          │          │
    │  Setup   │   Demo   │ Practice │  Break   │ Advanced │  Build   │
    │   +      │    TDD   │   TDD    │          │  Topics  │ Feature  │
    │  Intro   │  Cycle   │  (Pairs) │          │  +Agent  │ (Groups) │
    │          │          │          │          │   Mode   │          │
    └────┬─────┴────┬─────┴────┬─────┴────┬─────┴────┬─────┴────┬─────┘
         │          │          │          │          │          │
         │ Know     │ See      │ Do       │ Reflect  │ Expand   │ Apply
         │ What     │ How      │ It       │          │ Skills   │ Fully
         │          │          │          │          │          │
         └──────────┴──────────┴──────────┴──────────┴──────────┘

    Skills Gained:
    • Understand TDD concept
    • See full RED-GREEN-REFACTOR cycle
    • Complete 3 cycles independently
    • Internalize the rhythm
    • Use advanced features
    • Build complete feature with TDD
```

## 🔄 Feedback Loop

```
         ┌─────────────────────────────────────┐
         │                                     │
         │        CONDUCT WORKSHOP             │
         │                                     │
         └────────────┬────────────────────────┘
                      │
                      ▼
         ┌─────────────────────────────────────┐
         │                                     │
         │      COLLECT FEEDBACK               │
         │      • Survey                       │
         │      • Observations                 │
         │      • Questions asked              │
         │                                     │
         └────────────┬────────────────────────┘
                      │
                      ▼
         ┌─────────────────────────────────────┐
         │                                     │
         │      MEASURE ADOPTION               │
         │      • Stories using TDD            │
         │      • Test coverage                │
         │      • Developer satisfaction       │
         │                                     │
         └────────────┬────────────────────────┘
                      │
                      ▼
         ┌─────────────────────────────────────┐
         │                                     │
         │      ANALYZE & IMPROVE              │
         │      • What worked well?            │
         │      • What needs adjustment?       │
         │      • What's missing?              │
         │                                     │
         └────────────┬────────────────────────┘
                      │
                      ▼
         ┌─────────────────────────────────────┐
         │                                     │
         │      UPDATE MATERIALS               │
         │      • Fix issues                   │
         │      • Add examples                 │
         │      • Improve clarity              │
         │                                     │
         └────────────┬────────────────────────┘
                      │
                      └──────► Next Workshop (Improved)
```

## 📊 Success Visualization

```
Test Coverage Over Time
100% │                                        ┌────
     │                                   ┌────┘
 80% │                            ┌──────┘
     │                      ┌─────┘
 60% │                 ┌────┘
     │           ┌─────┘
 40% │      ┌────┘
     │  ┌───┘
 20% │──┘      ↑
     │         Workshop
  0% └────────────────────────────────────────────►
     Week: -1  0   1   2   3   4   5   6   7   8

Developer Confidence
High │                                    ████████
     │                           █████████████████
     │                   ████████████████████████
Med  │           ████████████████████████████████
     │   ████████████████████████████████████████
Low  │───┘
     │   ↑
     │   Workshop
     └────────────────────────────────────────────►
     Week: -1  0   1   2   3   4   5   6   7   8
```

## 🎨 Visual Metaphor: Building Quality Software

```
    Without TDD              With TDD              With TDD + Copilot
                                                          
    🏗️ Build                🧪 Test First          💬 Discuss Design
         ↓                        ↓                      ↓
    🐛 Find Bugs             🏗️ Build               🧪 @tdd-red (Test)
         ↓                        ↓                      ↓
    🔧 Fix Bugs              ✅ Verify               🏗️ @tdd-green (Build)
         ↓                        ↓                      ↓
    😰 Hope It Works         🔄 Refactor             🔵 @tdd-refactor (Improve)
         ↓                        ↓                      ↓
    📦 Ship                  📦 Ship                 🤖 Agent (Automate)
         ↓                        ↓                      ↓
    🔥 Production Issues     ✨ Confidence           ✨ Excellence
```

## 🚀 Adoption Journey

```
Month 1                Month 2                Month 3
   │                      │                      │
   ▼                      ▼                      ▼
┌────────────┐      ┌────────────┐       ┌────────────┐
│ Individual │      │    Team    │       │  Standard  │
│  Adoption  │──────▶│  Adoption  │───────▶│  Practice  │
└────────────┘      └────────────┘       └────────────┘
     │                   │                      │
     │ • Workshop        │ • Half team using    │ • Default workflow
     │ • Try 1 story     │ • Pair programming   │ • Onboarding standard
     │ • Share wins      │ • Team prompts       │ • Mentoring others
     │                   │ • Code reviews       │ • Continuous improvement
```

## 🎯 End State Vision

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│               🎯 IDEAL DEVELOPMENT WORKFLOW                 │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. Pick story from backlog                                │
│  2. Discuss architecture with @copilot                      │
│  3. Write failing test with @tdd-red                        │
│  4. Implement with @tdd-green                               │
│  5. Refactor with @tdd-refactor                             │
│  6. Repeat steps 3-5 until done                            │
│  7. Use @agent for final polish                            │
│  8. Submit PR with tests and docs                          │
│  9. Celebrate! 🎉                                           │
│                                                             │
│  Result:                                                    │
│  ✅ Well-tested code                                        │
│  ✅ Clean design                                            │
│  ✅ Comprehensive docs                                      │
│  ✅ Confident deployment                                    │
│  ✅ Happy developers                                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

*This visual overview complements the detailed workshop materials.*  
*Refer to INDEX.md for complete file navigation.*
