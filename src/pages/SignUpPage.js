import BasePage from './BasePage.js';

class SignUpPage extends BasePage {
  get greetingText() {
    return $('h2#signup-form-fields');
  }

  get emailInput() {
    return $('#email');
  }

  get passwordInput() {
    return $('#password');
  }

  get usernameInput() {
    return $('#login');
  }

  get createAccountButton() {
    return $('button.js-octocaptcha-load-captcha');
  }

  async waitForGreetingText() {
    await this.waitForElement(this.greetingText);
    return await this.getText(this.greetingText);
  }

  async enterEmail(email) {
    await this.waitForElementAndSetValue(this.emailInput, email);
    // WebDriverIO автоматично чекає, якщо потрібно, після setValue
  }

  async enterPassword(password) {
    await this.waitForElementAndSetValue(this.passwordInput, password);
  }

  async enterUsername(username) {
    await this.waitForElementAndSetValue(this.usernameInput, username);
  }

  async isCreateAccountButtonVisible() {
    return await this.isElementDisplayed(this.createAccountButton);
  }

  async isCreateAccountButtonClickable() {
    try {
      await this.createAccountButton.waitForDisplayed({ timeout: 10000 });
      await this.createAccountButton.waitForClickable({ timeout: 5000 });
      return true;
    } catch (error) {
      console.log('Create account button is not clickable:', error.message);
      return false;
    }
  }

  async getCreateAccountButtonText() {
    await this.waitForElement(this.createAccountButton);
    return await this.getText(this.createAccountButton);
  }
}

export default new SignUpPage();
