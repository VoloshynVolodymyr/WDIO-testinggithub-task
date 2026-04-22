import BasePage from './BasePage.js';

class EnterpriseTrialPage extends BasePage {
  get getStartedHeader() {
    return $('div[data-target="react-partial.reactRoot"] h2');
  }

  async getGetStartedHeaderText() {
    await this.waitForElement(this.getStartedHeader);
    return await this.getText(this.getStartedHeader);
  }

  async verifyGetStartedHeader(expectedText) {
    const actualText = await this.getGetStartedHeaderText();
    return actualText === expectedText;
  }
}

export default new EnterpriseTrialPage();
