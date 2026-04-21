import HomePage from '../pages/HomePage.js';
import NewsletterPage from '../pages/NewsletterPage.js';
import { expect } from '@wdio/globals';
import { faker } from '@faker-js/faker';

describe('Test Case 3: Subscribing to GitHub Resources', () => {
  beforeEach(async () => {
    await HomePage.openHomePage();
  });

  it('should subscribe to GitHub newsletter successfully', async () => {
    await HomePage.scrollToFooter();
    await HomePage.scrollToSubscribeButton();
    console.log('Scrolled to Subscribe button');

    const isVisible = await HomePage.isSubscribeButtonVisible();
    expect(isVisible).toBe(true);
    console.log('Subscribe button is visible');

    const isClickable = await HomePage.isSubscribeButtonClickable();
    expect(isClickable).toBe(true);
    console.log('Subscribe button is clickable');

    await HomePage.clickSubscribeButton();
    console.log('Clicked Subscribe button');

    await NewsletterPage.waitForNewsletterPage();
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toBe('https://github.com/newsletter');
    console.log(`Navigated to: ${currentUrl}`);

    const headerText = await NewsletterPage.getHeaderText();
    expect(headerText).toContain('Get our developer newsletter');
    console.log(`Header verified: "${headerText}"`);

    const testEmail = faker.internet.email();
    await NewsletterPage.fillEmail(testEmail);
    console.log(`Email filled: ${testEmail}`);

    await NewsletterPage.selectCountry('Ukraine');
    console.log('Country selected: Ukraine');

    await NewsletterPage.checkSubscribeCheckbox();
    console.log('Subscribe checkbox checked');

    await NewsletterPage.clickSubscribe();
    console.log('Submitted subscription form');

    await NewsletterPage.waitForSuccessPage();
    const successHeaderText = await NewsletterPage.getSuccessHeaderText();
    expect(successHeaderText).toContain('Thanks for subscribing');
    console.log(`Success message verified: "${successHeaderText}"`);

    console.log('Newsletter subscription test completed successfully');
  });
});
