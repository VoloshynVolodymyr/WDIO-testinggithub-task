import BasePage from './BasePage.js';

class PricingPage extends BasePage {
  get mainHeader() {
    return $('h1.h2-mktg');
  }

  get compareFeaturesLink() {
    return $('a[href="#compare-features"]');
  }

  get compareFeaturesHeader() {
    return $('h1.h1');
  }

  async waitForPricingPage() {
    await browser.waitUntil(
      async () => {
        const url = await browser.getUrl();
        return url.includes('/pricing');
      },
      {
        timeout: 10000,
        timeoutMsg: 'Pricing page did not load',
      }
    );
  }

  async getMainHeaderText() {
    await this.waitForElement(this.mainHeader);
    return await this.getText(this.mainHeader);
  }

  async scrollToCompareFeaturesLink() {
    await this.scrollToElement(this.compareFeaturesLink);
  }

  async clickCompareFeaturesLink() {
    await this.waitForElementAndClick(this.compareFeaturesLink);
  }

  async getCompareFeaturesHeaderText() {
    await this.waitForElement(this.compareFeaturesHeader);
    return await this.getText(this.compareFeaturesHeader);
  }

  async isCompareFeaturesHeaderVisible() {
    return await this.isElementDisplayed(this.compareFeaturesHeader);
  }
}

export default new PricingPage();
