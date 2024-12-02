# Hivenue-Playwright-test

This guide provides instructions to set up and run the Playwright e2e testing for

## Table of Contents

1. [Project Overview](#project-overview)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Configuration](#configuration)
5. [Running the Demo](#running-the-demo)
6. [Test Structure](#test-structure)
7. [Debugging](#debugging)
8. [Customizing Tests](#customizing-tests)
9. [Additional Resources](#additional-resources)

---

## Project Overview

This project includes:

- A sample Playwright setup with example tests.
- Configuration for running tests across multiple browsers (Chromium, Firefox, and WebKit).
- Tools for debugging and customizing tests.
- Integration with the Playwright Test Runner.

## Prerequisites

Before using this project, ensure you have the following:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A code editor (e.g., [VS Code](https://code.visualstudio.com/))

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/***/e2e-playwright.git
   cd e2e-playwright
   ```
2. Install dependencies:

   ```bash
   npm install
   ```

## Configuration

This project uses a combination of Playwright configuration (`playwright.config.ts`) and environment variables (`.env`) to manage testing parameters and environment-specific settings.

### Playwright Configuration

Playwright is configured using `playwright.config.ts`. Below is a sample configuration:

```typescript
import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30000, // Maximum test duration: 30 seconds
  retries: 1, // Retry failed tests once
  use: {
    headless: true, // Run tests in headless mode
    baseURL: "http://localhost:3000", // Base URL for all tests
    viewport: { width: 1280, height: 720 },
    screenshot: "only-on-failure", // Capture screenshots for failed tests
    video: "on-first-retry", // Record video for test retries
  },
  projects: [
    { name: "Chromium", use: { browserName: "chromium" } },
    { name: "Firefox", use: { browserName: "firefox" } },
    { name: "WebKit", use: { browserName: "webkit" } },
  ],
});
```

### .env Configuration

The `.env` file should be located in the root directory of the project.

#### Sample `.env` File

```plaintext
# .env file
ENV=devops
DEV_URL=https://***.hivenue.ca
PROD_URL=https://hivenue.ca
DEVOPS_URL=https://***.hivenue.ca
```

## Running the Demo

Use the Playwright CLI to execute tests:

- **Run All Tests in Development Environment**:

  ```bash
  npm run test:dev
  ```
- **Run All Tests in Production Environment**:

  ```bash
  npm run test:prod
  ```
- **Run All Tests in DevOps Environment**:

  ```bash
  npm run test:devops
  ```
- **Run All Tests in For GitHub Environment (If manually setting in CI/CD)**:

  ```bash
  # Advantage: No need to modify the environment permanently.

  E2E_GITHUB_URL=https://your-e2e-url.com npm run test:github
  ```

  or

  ```bash
  # The export command sets the environment variable for the current shell session (or until you close the terminal or run unset
  export E2E_GITHUB_URL=https://your-e2e-url.com/
  npm run test:github
  ```
- **Run a Specific Test File**:

  ```bash
  npx playwright test tests/example.spec.ts
  ```
- **Run Tests in Headed Mode**:

  ```bash
  npx playwright test --headed
  ```
- **Run Tests in Debug Mode**:

  ```bash
  npx playwright test --debug
  ```

---

## Test Structure

The project uses the following structure:

```
.
├── tests/
│   ├── example.spec.ts      # Example test file
├── playwright.config.ts     # Playwright configuration
├── package.json             # Project dependencies and scripts
├── README.md                # Documentation
```

### Key Files

- **`tests/example.spec.ts`**: Contains example test cases for navigation, assertions, and actions.
- **`playwright.config.ts`**: Defines global test settings like timeouts, retries, and browser configurations.

---

## Debugging

Playwright provides robust debugging options:

1. **Inspector Mode**:
   Run tests with the `--debug` flag:

   ```bash
   npx playwright test --debug
   ```
2. **Pause Execution**:
   Add `await page.pause()` in test files to interact with the browser manually.
3. **Capture Screenshots and Videos**:
   Enable in `playwright.config.ts`:

   ```typescript
   use: {
     screenshot: 'on',  // Capture screenshots for all tests
     video: 'retain-on-failure', // Record videos for failed tests
   }
   ```

---

## Customizing Tests

Modify or create test files in the `tests` directory. Use Playwright's API for browser interactions. Examples:

- **Navigate to a Page**:

  ```typescript
  await page.goto("https://example.com");
  ```
- **Perform Actions**:

  ```typescript
  await page.fill("#username", "testuser");
  await page.click("button#login");
  ```
- **Assertions**:

  ```typescript
  expect(await page.textContent("h1")).toBe("Welcome");
  ```

Refer to the [Playwright API](https://playwright.dev/docs/api/class-page) for more commands.

---

## Additional Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Writing Tests](https://playwright.dev/docs/writing-tests)
- [Debugging with Playwright](https://playwright.dev/docs/debug)
- [GitHub Repository](https://github.com/microsoft/playwright)

---

Enjoy exploring and testing with Playwright! 🎭