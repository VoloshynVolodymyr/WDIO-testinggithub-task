import BasePage from './BasePage.js';

class EnterprisePage extends BasePage {
  get mainHeader() {
    return $('h1.Primer_Brand__Heading-module__Heading___IVpmp');
  }

  get StartForTrialButton() {
    return $('section > a[href*="get_started?with=enterprise"]');
  }

  async getMainHeaderText() {
    await this.waitForElement(this.mainHeader);
    return await this.getText(this.mainHeader);
  }

  async clickStartForTrialButton() {
    await this.waitForElementAndClick(this.StartForTrialButton);
  }

  async waitForEnterprisePage() {
    await this.waitForElement(this.mainHeader);
  }
}

export default new EnterprisePage();
