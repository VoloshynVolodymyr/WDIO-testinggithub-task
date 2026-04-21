import HomePage from '../pages/HomePage.js';
import SignUpPage from '../pages/SignUpPage.js';
import { expect } from '@wdio/globals';
import { faker } from '@faker-js/faker';

describe('Test Case 1: GitHub Sign-up Process Initiation', () => {
  beforeEach(async () => {
    await HomePage.openHomePage();
  });

  it('should initiate signup process successfully', async () => {
    await HomePage.clickSignUp();

    const greetingText = await SignUpPage.waitForGreetingText();
    expect(greetingText).toContain('Sign up for GitHub');
    console.log('✓ Greeting text verified');

    // Генерація реалістичних даних
    const testEmail = faker.internet.email();
    const testPassword = faker.internet.password({ length: 15, memorable: false });
    const testUsername = faker.internet
      .username()
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '');

    console.log(`Generated data - Email: ${testEmail}, Username: ${testUsername}`);

    await SignUpPage.enterEmail(testEmail);
    console.log('Email entered');

    await SignUpPage.enterPassword(testPassword);
    console.log('Password entered');

    await SignUpPage.enterUsername(testUsername);
    console.log('Username entered');

    const isVisible = await SignUpPage.isCreateAccountButtonVisible();
    expect(isVisible).toBe(true);
    console.log('Create account button is visible');

    const isClickable = await SignUpPage.isCreateAccountButtonClickable();
    expect(isClickable).toBe(true);
    console.log('Create account button is clickable');

    const buttonText = await SignUpPage.getCreateAccountButtonText();
    expect(buttonText).toContain('Create account');
    console.log(`Button text: "${buttonText}"`);

    console.log('Sign-up process initiated successfully');
  });
});
