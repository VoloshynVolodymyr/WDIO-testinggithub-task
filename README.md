# TestSquad-HomeTask

Automated GitHub testing using WebDriverIO + JavaScript and Page Object Model (POM) pattern.

## Project Description

The project contains 5 automated test cases to verify core GitHub functionality:

| #   | Test Case  | Description                                         |
| --- | ---------- | --------------------------------------------------- |
| 1   | signup     | Sign-up form verification and Create account button |
| 2   | enterprise | Navigation to Enterprise section via footer         |
| 3   | subscribe  | Subscription to GitHub newsletter                   |
| 4   | search     | Repository search functionality                     |
| 5   | pricing    | Pricing page and feature comparison                 |

## Technologies

| Technology  | Version | Purpose              |
| ----------- | ------- | -------------------- |
| WebDriverIO | 9.20.0  | Automation framework |
| JavaScript  | ES6+    | Programming language |
| Mocha       | 9.20.0  | Test framework       |
| Faker.js    | latest  | Test data generation |
| Allure      | 2.34.1  | Report generation    |
| ESLint      | 9.39.1  | Code linting         |
| Prettier    | 3.6.2   | Code formatting      |

## Installation

```bash
# Clone repository
git clone https://github.com/VoloshynVolodymyr/WDIO-testinggithub-task.git
cd TestSquad-HomeTask

# Install dependencies
npm install

# Test 1: signup
npx wdio run src/config/wdio.conf.js --spec src/tests/signup.spec.js

# Test 2: enterprise
npx wdio run src/config/wdio.conf.js --spec src/tests/enterprise.spec.js

# Test 3: subscribe
npx wdio run src/config/wdio.conf.js --spec src/tests/subscribe.spec.js

# Test 4: search
npx wdio run src/config/wdio.conf.js --spec src/tests/search.spec.js

# Test 5: pricing
npx wdio run src/config/wdio.conf.js --spec src/tests/pricing.spec.js

# Run all tests
npm run wdio

# Run with Allure report
npm run wdio-allure

# Code quality

# ESLint check
npm run lint

# Auto-fix ESLint errors
npm run lint:fix

# Prettier check
npm run prettier

# Auto-format with Prettier
npm run prettier:fix

# Full formatting and linting
npm run format

```

```

```
