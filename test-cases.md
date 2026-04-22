# GitHub Automation Test Cases

This document contains 5 test cases for automating GitHub website functionality using WebDriverIO and JavaScript with Page Object Model (POM) pattern.

---

## Test Case 1: GitHub Sign-up Process Initiation

**Description:** Verify that a user can initiate the sign-up process and that the "Create account" button becomes visible and clickable after filling in the required fields.

**Steps:**

1. Navigate to GitHub home page (github.com)
2. Click the "Sign up" button in the top right corner
3. Verify the greeting text "Sign up for GitHub" appears
4. Enter a valid email address
5. Enter a valid password (minimum 15 characters OR at least 8 characters with a number and lowercase letter)
6. Enter a unique username
7. Verify that the "Create account" button is visible
8. Verify that the "Create account" button is clickable

**Expected Result:**

- The "Create account" button should be displayed and enabled after all fields are filled

**Test Data:**

- Email: Generated using Faker (e.g., `john.doe@example.com`)
- Password: `TestPassword123!`
- Username: Generated using Faker (e.g., `johndoe123`)

---

## Test Case 2: Navigating to Enterprise Section

**Description:** Verify that a user can navigate to the Enterprise section through the footer link and access the trial page.

**Steps:**

1. Navigate to GitHub home page
2. Scroll to the page footer
3. Click the "Enterprise" link in the footer
4. Verify the main header contains "The AI-powered developer platform for the agent-ready enterprise"
5. Click the "Start a 30-day free trial" button
6. Verify the header contains "Get started with GitHub Enterprise"

**Expected Result:**

- User successfully navigates to Enterprise page
- Correct headers are displayed on both pages
- CTA button is clickable and leads to trial page

---

## Test Case 3: Subscribing to GitHub Newsletter

**Description:** Verify that a user can subscribe to the GitHub developer newsletter through the footer link.

**Steps:**

1. Navigate to GitHub home page
2. Scroll to the page footer
3. Locate the "Subscribe" button in the footer
4. Verify the button is visible and clickable
5. Click the "Subscribe" button
6. Verify navigation to `https://github.com/newsletter`
7. Verify the header contains "Get our developer newsletter"
8. Fill in the email field (using Faker generated email)
9. Select "Ukraine" from the country dropdown
10. Check the marketing consent checkbox
11. Click the "Subscribe" submit button
12. Verify the success message "Thanks for subscribing" appears

**Expected Result:**

- User successfully subscribes to the newsletter
- Confirmation message is displayed

**Test Data:**

- Email: Faker generated (e.g., `user123@example.com`)
- Country: Ukraine
- Marketing consent: Checked

---

## Test Case 4: Repository Search Functionality

**Description:** Verify that the search functionality works correctly and returns relevant results.

**Steps:**

1. Navigate to GitHub home page
2. Click the search button with text "Search or jump to..."
3. Enter a search term (e.g., "act") into the search input field
4. Press the Enter key
5. Verify navigation to search results page with URL pattern `https://github.com/search?q={term}&type=repositories`
6. Verify the first search result title contains the search term

**Expected Result:**

- Search results page loads correctly
- First result contains the searched term in its title

**Test Data:**

- Search Term: "act" (configurable)
- Result Type: Repositories

---

## Test Case 5: Pricing and Feature Comparison

**Description:** Verify that users can access the pricing page and compare features.

**Steps:**

1. Navigate to GitHub home page
2. Click the "Pricing" link in the navigation menu
3. Verify navigation to `https://github.com/pricing`
4. Verify the main header contains "Try the Copilot-powered platform"
5. Scroll down to the "Compare all features" link
6. Click the "Compare all features" link
7. Verify the page scrolls to the comparison section
8. Verify the header contains "Compare features"

**Expected Result:**

- User successfully navigates to pricing page
- Feature comparison section is accessible
- Correct headers are displayed throughout

---

## Test Environment

**Technologies:**

- WebDriverIO v9.20.0
- JavaScript (ES6+)
- Mocha testing framework
- Page Object Model (POM) pattern
- Faker.js for test data generation
- Allure Reporter for test reports

**Browsers:**

- Chrome (latest version)
