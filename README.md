# Software QA Portfolio

**Manual Testing | API Testing | JavaScript | Cypress | Agile & Scrum | CI/CD**

## About This Repository

Welcome to my Software Quality Assurance portfolio!

This repository documents my practical learning journey in software testing and quality assurance, from manual testing fundamentals to automated testing using JavaScript and Cypress.

The projects demonstrate my experience designing and executing test cases, documenting defects, validating REST APIs, developing JavaScript testing tools, and implementing automated test execution through GitHub Actions.

Each section includes documentation, test results, and supporting evidence where applicable.

## Tech Stack & Tools

| Category | Tools & Technologies |
|---|---|
| Manual Testing | Test Plans, Test Cases, Bug Reports |
| API Testing | Postman, REST APIs, JSON |
| Automation Testing | Cypress |
| Programming | JavaScript, Node.js |
| Version Control | Git, GitHub |
| Agile Methodologies | Scrum, User Stories, Acceptance Criteria |
| CI/CD | GitHub Actions |

## Projects

### 01 — Manual Testing: SauceDemo

**Application Under Test:** [SauceDemo](https://www.saucedemo.com/)

Manual testing of an e-commerce demo application through structured test planning, test case design, execution, and defect documentation.

**Testing Scope:**
- Login and authentication
- Product inventory and sorting
- Shopping cart management
- Checkout and order confirmation
- Logout

**Testing Approaches:**
- Functional Testing
- Positive and Negative Testing
- Smoke Testing
- Exploratory Testing
- Regression Testing
- End-to-End Testing

**Deliverables:**
- Test Plan
- Test Scenarios and Test Cases
- Bug Reports
- Test Execution Results
- Screenshots and Evidence
- Smoke and Regression Test Suites
- Exploratory Testing Report

### 02 — API Testing with Postman

REST API testing using Postman and the JSONPlaceholder API.

**Testing Coverage:**
- HTTP methods and status codes
- GET, POST, PUT, PATCH, and DELETE requests
- Request and response validation
- Positive and negative API testing
- JSON structure and data type validation
- Automated assertions using JavaScript
- Postman collections

**Key Concepts Practiced:**
- REST API fundamentals
- HTTP status codes
- Response body validation
- Automated test scripts
- API test execution and reporting

### 03 — JavaScript Fundamentals

JavaScript fundamentals applied to software testing and QA automation.

**Topics Covered:**
- Variables and data types
- Operators and conditional statements
- Loops and functions
- Arrays and objects
- Array methods
- Modules and code organization
- CommonJS modules
- Error handling and validation

The objective was to build the programming foundation required for automated testing.

### 04 — QA Test Runner

A JavaScript-based test execution tool developed to practice programming fundamentals and basic QA automation concepts.

**Features:**
- Modular test case management
- Test validation using comparison operators
- Automated PASS / FAIL results
- Invalid test data detection
- Execution summary report
- Success rate calculation

**Technologies:**
- JavaScript
- Node.js
- CommonJS modules

**Execution:**

Run from the repository root:

```bash
node 04-qa-test-runner/test-runner.js
```

### 05 — Cypress Automation

Automated end-to-end testing of the SauceDemo application using Cypress and JavaScript.

**Automated Test Coverage:**

| Test Suite | Test Cases |
|---|---:|
| Login | 7 |
| Inventory | 3 |
| Cart | 3 |
| Checkout | 2 |
| **Total** | **15** |

**Automation Features:**
- Custom Cypress commands for reusable login functionality.
- Test data management using JSON fixtures.
- Data-driven testing for invalid login scenarios.
- Assertions for UI elements, navigation, and application behavior.
- Screenshots on test failures.
- Video recording of test execution.

**Run Tests Locally:**

Navigate to the Cypress project:

```bash
cd 05-cypress-automation
npm install
npx cypress open
```

To execute all tests in the terminal:

```bash
npx cypress run
```

**Continuous Integration:**

GitHub Actions automatically executes the Cypress test suite when code is pushed to the `main` branch or when a pull request targets `main`.

The workflow also uploads Cypress execution evidence as artifacts when available.

## Project Architecture

The repository is organized into independent sections covering the main areas of Software Quality Assurance and Test Automation.

```text
software-qa-portfolio/
│
├── .github/
│   └── workflows/
│       └── cypress.yml
│
├── README.md
├── .gitignore
│
├── 01-manual-testing/
│   └── saucedemo/
│       ├── test-plan.md
│       ├── test-cases/
│       ├── test-suites/
│       ├── bug-reports/
│       ├── exploratory-testing/
│       ├── test-reports/
│       └── evidence/
│
├── 02-api-testing/
│   └── postman/
│
├── 03-javascript-fundamentals/
│
├── 04-qa-test-runner/
│
└── 05-cypress-automation/
    ├── cypress/
    │   ├── e2e/
    │   ├── fixtures/
    │   └── support/
    ├── cypress.config.js
    ├── package.json
    └── package-lock.json
```

## Continuous Integration

The project uses GitHub Actions to automate Cypress test execution.

**Workflow:** `.github/workflows/cypress.yml`

The workflow:
- Runs on pushes to `main`.
- Runs on pull requests targeting `main`.
- Installs dependencies using `npm ci`.
- Executes Cypress tests in headless mode.
- Uploads available screenshots and videos as workflow artifacts.

## Learning Roadmap

- [x] QA fundamentals and software testing concepts
- [x] Manual Test Plan
- [x] Functional testing and test case design
- [x] Positive and negative testing
- [x] Equivalence partitioning and boundary value analysis
- [x] Bug reporting and defect management
- [x] Smoke testing
- [x] Regression testing
- [x] Exploratory testing
- [x] End-to-end testing
- [x] Agile and Scrum fundamentals
- [x] REST API testing with Postman
- [x] JavaScript fundamentals for test automation
- [x] JavaScript QA Test Runner
- [x] Cypress automated testing
- [x] Automated test execution with GitHub Actions

## Project Goals

- Apply software testing concepts to practical scenarios.
- Build reusable and maintainable test documentation.
- Improve defect identification and reporting skills.
- Develop API testing and automated assertion skills.
- Strengthen JavaScript programming skills for QA automation.
- Implement reliable automated web tests using Cypress.
- Practice continuous integration with GitHub Actions.
- Build a portfolio demonstrating practical QA skills.

## Documentation Approach

All testing activities are documented using consistent templates and naming conventions.

Test cases include preconditions, test data, execution steps, expected results, actual results, and execution status.

Defect reports include reproduction steps, severity, priority, expected and actual behavior, and supporting evidence when available.

Only tests that have actually been executed are reported as completed.

## Continuous Improvement

This repository is an evolving learning portfolio. Documentation, testing coverage, automation scripts, and project organization will continue to improve as new skills and testing techniques are developed.

---

**Current Focus:** Portfolio consolidation, test documentation review, and further QA automation practice.
