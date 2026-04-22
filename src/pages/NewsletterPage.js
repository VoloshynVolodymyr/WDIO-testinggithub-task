import BasePage from './BasePage.js';

class NewsletterPage extends BasePage {
  get header() {
    return $('div[data-testid="Grid-_R_19b_"] h1');
  }

  get emailInput() {
    return $('#form-field-emailAddress');
  }

  get countrySelect() {
    return $('#form-field-country');
  }

  get subscribeCheckbox() {
    return $('label[data-testid="label"]');
  }

  get submitButton() {
    return $('form button[type="submit"]');
  }

  get successHeader() {
    return $('h1#hero-section-brand-heading');
  }

  async waitForNewsletterPage() {
    await browser.waitUntil(
      async () => {
        const url = await browser.getUrl();
        return url.includes('/newsletter');
      },
      {
        timeout: 10000,
        timeoutMsg: 'Newsletter page did not load',
      }
    );
  }

  async getHeaderText() {
    await this.waitForElement(this.header);
    return await this.getText(this.header);
  }

  async fillEmail(email) {
    await this.waitForElementAndSetValue(this.emailInput, email);
  }

  async selectCountry(countryName) {
    await this.waitForElement(this.countrySelect);
    await this.countrySelect.selectByVisibleText(countryName);
  }

  async checkSubscribeCheckbox() {
    const checkbox = await this.subscribeCheckbox;
    await checkbox.waitForDisplayed();
    if (!(await checkbox.isSelected())) {
      await checkbox.click();
    }
  }

  async clickSubscribe() {
    await this.scrollToElement(this.submitButton);
    await this.waitForElementAndClick(this.submitButton);
  }

  async getSuccessHeaderText() {
    await this.waitForElement(this.successHeader);
    return await this.getText(this.successHeader);
  }

  async waitForSuccessPage() {
    await browser.waitUntil(
      async () => {
        const url = await browser.getUrl();
        return url.includes('/newsletter') && !url.includes('?');
      },
      {
        timeout: 10000,
        timeoutMsg: 'Success page did not load',
      }
    );
  }
}

export default new NewsletterPage();
