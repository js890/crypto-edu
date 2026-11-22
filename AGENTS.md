<!-- BEGIN:nextjs-agent-rules -->

**## This is NOT the Next.js you know**

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project: Crypto and Technological Friends

## 1. Project Overview

This project is an educational game designed primarily for high school students who want to explore Finance, Technology, and Cryptocurrency beyond what is typically covered in school.

The goal is to make complex concepts understandable, engaging, and rewarding to learn through interactive gameplay.

The application should feel like an educational game rather than a traditional online course, textbook, trading platform, or social network.

### Core concept

Players progress through a series of educational **Levels**.

Each Level introduces one or more concepts related to:

- **Finance:** Markets, supply and demand, investing principles, risk, diversification, monetary systems, and economics.
- **Technology:** Computer science, cryptography, networking, algorithms, cybersecurity, and distributed systems.
- **Cryptocurrency:** Blockchain, Bitcoin, consensus mechanisms, tokens, smart contracts, and the intersection of Finance and Technology.

Levels can focus on one subject or combine multiple subjects.

Players demonstrate their understanding through assessments and interactive activities. Successfully completing Levels unlocks further content and, in some cases, standalone minigames.

The project's primary focus is individual learning and progression. Social features are not currently part of the core vision, but the architecture and future development should not unnecessarily prevent their introduction if they eventually add meaningful value to the educational experience.

## 2. Core Gameplay and Progression

### 2.1 Levels

The main experience is organized around a sequence of educational Levels.

- The final number of Levels has not been decided. The project should be designed to accommodate approximately 20 Levels or more.
- Each Level should have its own topic, learning objectives, educational content, and completion requirements.
- Levels may contain different types of assessments and gameplay.
- Completing a Level should provide a clear sense of progress and achievement.
- Some Levels may require previous Levels to be completed.
- Other Levels may be available independently, allowing players to tackle them in different orders.
- Progression should support branching paths rather than assuming that every Level must follow one strictly linear sequence.

**Important:** Do not hardcode the entire progression system around the current six placeholder Levels. The existing Levels are an initial prototype, not the final structure.

### 2.2 Unlocking System

The application should support configurable unlock requirements.

Examples include:

- A Level unlocks after completing one specific Level.
- A Level unlocks after completing several prerequisite Levels.
- A Level is available from the beginning.
- A Level unlocks after completing a group of Levels, regardless of their order.

Avoid designing progression logic that only supports one fixed sequence.

Where practical, keep Level definitions and unlock requirements separate from the components that display them.

### 2.3 Assessments

Levels can test knowledge in different ways.

Possible assessment formats include:

- Multiple-choice questions (MCQs).
- Knowledge checks and short quizzes.
- Interactive simulations.
- Market simulations.
- Decision-making challenges.
- Other educational minigames.

Not every Level needs to use the same assessment format.

Assessment difficulty and complexity should match the concepts being taught.

The existing Level 01 MCQ system is an initial example, not a requirement that every future Level must follow.

### 2.4 Standalone Minigames

- Certain Levels may introduce or unlock minigames that can later be replayed independently from the Title Screen.
- Once unlocked, a minigame should remain independently accessible without requiring the player to replay or complete its original Level again.
- Minigames may include different difficulty settings, modes, or configurable options where appropriate.
- Minigames should reinforce concepts introduced in the educational Levels while offering a different, more interactive way to practise them.
- Design minigames so they can be expanded, balanced, and maintained independently of the Levels in which they first appear.
- Not every Level needs to unlock a minigame. Their inclusion should serve a clear educational or gameplay purpose.

### 2.5 Completion and Progress Tracking

The application should distinguish between:

- Whether a Level has been started.
- Whether a Level has been completed.
- Whether a minigame has been unlocked.
- Whether a minigame has been played.
- Any additional achievements or best results that may become relevant later.

Do not introduce unnecessary tracking systems before they are needed.

Completion requirements should be clear and consistent. Avoid accidentally marking a Level as completed before its actual requirements have been met.

## 3. Future Accounts and Saved Progress

The project is intended to eventually support user accounts so players can save their progress and continue on another session or device.

However, account functionality does not need to be implemented immediately.

### Intended functionality

A future account system should primarily support:

- Creating an account.
- Signing in and out.
- Saving completed Levels.
- Saving unlocked minigames.
- Saving relevant minigame progress or settings.
- Restoring a player's progress when they return.

The purpose of accounts is persistence, not social interaction.

### Development guidelines

- Keep progression data structured so it can eventually be stored in a database.
- Avoid making localStorage the permanent source of truth for a future multi-device account system.
- Local storage is acceptable for the current prototype and local progress persistence.
- Keep persistence logic separate from the components that display Levels and minigames.
- Do not implement authentication, a database, or a backend prematurely.
- Do not introduce a third-party authentication or database provider without discussing the decision first.
- Never store passwords, authentication secrets, private keys, or sensitive financial information in client-side storage.
- Do not collect unnecessary personal information from students.

When account functionality is introduced, use established authentication and data-security practices rather than implementing password handling from scratch.

## 4. Technology Stack and Framework

The project currently uses:

- Next.js
- React
- TypeScript
- Tailwind CSS and custom CSS
- GitHub for version control
- Vercel for deployment

Follow the conventions of the existing codebase.

### Next.js

- Use the App Router.
- Follow current Next.js conventions for layouts, pages, routing, and components.
- Prefer Server Components when client-side interactivity is unnecessary.
- Use Client Components when React state, event handlers, browser APIs, or other client-side functionality is required.
- Keep components focused and avoid unnecessarily large page files.
- Use Next.js documentation installed in the project when working with framework features.

**Important:** The Next.js-generated instructions at the beginning of this file must be preserved exactly. Consult the relevant documentation under `node_modules/next/dist/docs/` before making changes that depend on Next.js APIs or conventions.

### TypeScript

- Use TypeScript throughout the application.
- Define clear interfaces and types for Levels, unlock requirements, assessments, minigames, and player progress.
- Avoid `any` unless there is a strong technical reason.
- Prefer explicit, reusable types over duplicated or loosely structured data.

### Code organization

- Keep educational content, game logic, progression logic, persistence, and presentation reasonably separate.
- Extract reusable components when they provide genuine value.
- Avoid both excessive abstraction and unnecessarily monolithic components.
- Do not introduce additional libraries or dependencies without a good reason.

## 5. Architecture and Scalability

The application should remain easy to extend as the number of Levels and minigames grows.

The current six Levels are placeholders. Do not assume that the final application will contain exactly six Levels or that they will all be implemented in the same way.

### Recommended architectural direction

As the project grows, consider separating the following responsibilities:

1. **Level definitions:** Titles, descriptions, subjects, learning objectives, and completion requirements.
2. **Progression logic:** Prerequisites, unlock conditions, and branching paths.
3. **Assessment logic:** Questions, answers, scoring, and completion criteria.
4. **Minigame definitions:** Game descriptions, availability, difficulty options, and configuration.
5. **Minigame logic:** The actual interactive gameplay and simulation rules.
6. **Player progress:** Completed Levels, unlocked content, and relevant saved results.
7. **Presentation:** Title Screen, Level selection, lesson pages, assessments, and minigame interfaces.

These are architectural responsibilities, not necessarily seven separate folders or systems that must be created immediately.

Use sensible abstractions when the project becomes large enough to benefit from them.

### Data-driven design

Where practical, represent Level information and unlock requirements as structured data rather than scattering them throughout JSX components.

This should make it easier to:

- Add new Levels.
- Change Level descriptions and subjects.
- Configure prerequisites.
- Introduce optional progression paths.
- Connect Levels to standalone minigames.
- Change completion requirements without rewriting unrelated UI.

Avoid building an overly complicated content-management system for a project that is still evolving.

## 6. Educational Content and Accuracy

Educational quality is one of the project's most important requirements.

The application should teach real concepts, not simply attach educational terminology to arbitrary gameplay.

### Teaching principles

- Explain concepts clearly and progressively.
- Introduce terminology before expecting players to use it.
- Use practical examples and analogies where helpful.
- Explain why a concept matters outside the game.
- Encourage curiosity, critical thinking, and independent reasoning.
- Make challenging topics approachable without making them inaccurate.
- Ensure that gameplay reinforces the educational objectives of the Level.

### Finance

Financial content should be educational and balanced.

- Explain both potential benefits and risks.
- Distinguish between investing, trading, speculation, saving, and other financial activities.
- Teach risk management and diversification where relevant.
- Avoid presenting any asset, strategy, or investment as guaranteed to make money.
- Do not encourage players to make real financial decisions based on game outcomes.

### Technology

Technical explanations should be accurate and understandable.

- Explain how systems work, not just what they are called.
- Distinguish between related but different concepts.
- Use diagrams, examples, and interactive demonstrations where appropriate.
- Avoid unnecessary jargon.
- Do not oversimplify technical concepts to the point of becoming misleading.

### Cryptocurrency

Cryptocurrency should be taught as an intersection of Finance and Technology.

- Explain the underlying technology as well as its economic implications.
- Distinguish between different cryptocurrencies and blockchain designs.
- Do not imply that every blockchain works in the same way.
- Explain relevant limitations, risks, and trade-offs.
- Maintain an educational and neutral approach rather than promoting particular coins, projects, or investment opportunities.

## 7. Game Design and UX

- Maintain a consistent visual identity across the Title Screen, Levels, assessments, minigames, and other game areas.
- Use a clear visual hierarchy so players can easily distinguish headings, explanations, important terminology, questions, answers, and interactive elements.
- Keep the interface engaging and game-like without sacrificing readability or educational clarity.

### Subject-specific colours

Use the following colours consistently to identify the three main subject areas:

- **Technology:** Cyan / Light Blue (`#38bdf8`)
- **Finance:** Green (`#34d399`)
- **Cryptocurrency:** Purple (`#a78bfa`)

Yellow (`#facc15`) is reserved primarily for coins, important highlights, and selected emphasis.

These colours should be used consistently across subject labels, badges, headings, highlighted terminology, and other relevant visual elements.

- Use subject-specific colours to highlight important words and concepts within educational text, not just headings or badges.
- Cryptocurrency-related terminology may use yellow highlighting when it improves readability or draws attention to an important concept.
- Apply highlighting selectively so that important information stands out without making entire paragraphs difficult to read.
- Maintain sufficient contrast between text and its background.
- Keep subject colours consistent across all parts of the game, including Levels, assessments, minigames, and educational explanations.
- Use centralized CSS variables and reusable styling classes rather than scattering hardcoded colour values throughout components.
- Other colours may still be used for general interface elements, feedback, warnings, and decoration, provided they do not create confusion with the subject-identification system.
- Use indigo (`#818cf8`) for general-purpose callouts and decorative accents. Avoid using pink for high-level page labels or introducing a new accent for the same callout type.
- Audience wording should be concise and clearly place the platform for high school students. Avoid exaggerated claims or wording that makes the game feel like a specialist course.

### General UX principles

- Provide clear feedback when players answer questions, complete activities, unlock content, or encounter locked content.
- Make progression and unlock requirements understandable.
- Ensure that interactive elements have clear visual states, including hover, focus, active, disabled, completed, and locked states where relevant.
- Prefer reusable components and consistent interaction patterns over one-off implementations.
- Keep the experience intuitive for high school students who may be unfamiliar with the subject matter.

## 8. Accessibility and Usability

The application should be usable by students with different levels of technical experience and accessibility needs.

- Use semantic HTML.
- Ensure interactive elements are keyboard accessible.
- Provide visible focus indicators.
- Use appropriate labels and accessible names.
- Do not rely on color alone to communicate information.
- Maintain readable text sizes and sufficient contrast.
- Provide clear feedback for selected answers and completed activities.
- Avoid unnecessary animations or motion that could make the application difficult to use.

## 9. Security and Responsible Simulation

This is an educational game, not a real cryptocurrency exchange or financial service.

- Use fictional or virtual assets in simulations.
- Do not connect to real wallets or enable real cryptocurrency transactions without explicit approval.
- Do not ask students to provide private keys, seed phrases, passwords, or financial account details.
- Never expose API keys, secrets, or server credentials in client-side code.
- Validate important data on the server when a backend is introduced.
- Treat client-side progress data as modifiable, not inherently trustworthy.
- Avoid collecting unnecessary personal information.

Simulations should clearly communicate when their prices, assets, or market conditions are fictional.

## 10. Testing and Verification

After making changes:

- Check for TypeScript errors.
- Run the relevant linting and build checks when available.
- Test the affected pages and interactions.
- Verify that Level unlocking works as intended.
- Verify that optional progression paths do not accidentally require unrelated Levels.
- Verify that completing a Level unlocks the correct content.
- Verify that standalone minigames are accessible only when intended.
- Check that saved progress behaves consistently.
- Test relevant layouts on different screen sizes.

When changing progression or persistence logic, consider existing player progress and avoid unintentionally resetting it.

Do not claim that a feature works unless it has been tested or its behavior has otherwise been verified.

## 11. Working with the Project Owner

- Treat the project owner as the decision-maker for the game's direction, features, and priorities.
- When a requirement is unclear, ask for clarification rather than making significant assumptions.
- Explain important technical decisions in accessible language when appropriate.
- Prefer solutions that are understandable and maintainable, especially when introducing new technologies or architectural patterns.
- Before making substantial architectural changes, explain the reasoning and potential consequences.
- When suggesting new features, distinguish between essential improvements and optional ideas.
- Do not implement speculative future features prematurely. Keep the architecture reasonably flexible, but prioritize current requirements.
- Preserve existing functionality unless a change is explicitly requested or clearly necessary.
- When modifying existing code, inspect the relevant files and understand their relationships before making changes.
- After implementing changes, summarize what was changed and mention any relevant testing or verification that was performed.

## 12. Guiding Principle

The ultimate goal is to create an engaging educational game in which students can explore Finance, Technology, and Cryptocurrency at their own pace.

Every Level, assessment, and minigame should contribute to that goal.

**Prioritize educational value, accurate explanations, enjoyable gameplay, and a scalable but understandable codebase.**
