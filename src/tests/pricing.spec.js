import HomePage from '../pages/HomePage.js';
import PricingPage from '../pages/PricingPage.js';
import { expect } from '@wdio/globals';

describe('Test Case 5: Pricing and Feature Comparison', () => {
  beforeEach(async () => {
    await HomePage.openHomePage();
  });

  it('should verify pricing and feature comparison', async () => {
    await HomePage.clickPricing();
    console.log('Clicked Pricing link');

    await PricingPage.waitForPricingPage();
    expect(await browser.getUrl()).toContain('/pricing');
    console.log('Pricing page loaded');

    const mainHeader = await PricingPage.getMainHeaderText();
    expect(mainHeader).toBe('Try the Copilot-powered platform');
    console.log('Main header verified');

    await PricingPage.scrollToCompareFeaturesLink();
    console.log('Scrolled to compare features link');

    await PricingPage.clickCompareFeaturesLink();
    console.log('Clicked compare features link');

    await browser.waitUntil(
      async () => {
        const isVisible = await PricingPage.isCompareFeaturesHeaderVisible();
        return isVisible;
      },
      {
        timeout: 5000,
        timeoutMsg: 'Compare features header not visible after click',
      }
    );

    const compareHeader = await PricingPage.getCompareFeaturesHeaderText();
    expect(compareHeader).toBe('Compare features');
    console.log('Compare features header verified');

    console.log('Test completed successfully');
  });
});
