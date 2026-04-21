import BasePage from './BasePage.js';

class SubscribePage extends BasePage {
  get header() {
    return $('h1');
  }
  get emailInput() {
    return $('input[type="email"]');
  }
  get countryDropdown() {
    return $('select[name="country"]');
  }
  get subscribeCheckbox() {
    return $('input[type="checkbox"]');
  }
  get subscribeButton() {
    return $('button[type="submit"]');
  }
  get confirmationText() {
    return $('//*[contains(text(),"Thanks for subscribing")]');
  }

  async waitForPageLoad() {
    await this.waitForElement(this.header);
  }

  async getHeaderText() {
    return await this.getText(this.header);
  }

  async fillSubscriptionForm(email, country) {
    await this.waitForElementAndSetValue(this.emailInput, email);
    await this.pause(500);

    await this.waitForElementAndClick(this.countryDropdown);
    await this.pause(500);

    const countryOption = $(`option[value="${country}"]`);
    await this.waitForElementAndClick(countryOption);
    await this.pause(500);

    await this.scrollToElement(this.subscribeCheckbox);
    await this.pause(500);

    await this.waitForElementAndClick(this.subscribeCheckbox);
    await this.pause(500);
  }

  async clickSubscribe() {
    await this.scrollToElement(this.subscribeButton);
    await this.pause(500);
    await this.waitForElementAndClick(this.subscribeButton);
    await this.pause(2000);
  }

  async isConfirmationTextVisible() {
    return await this.isElementDisplayed(this.confirmationText, 10000);
  }
}

export default new SubscribePage();
