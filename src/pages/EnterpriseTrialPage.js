import BasePage from './BasePage.js';

class EnterpriseTrialPage extends BasePage {
  get getStartedHeader() {
    return $('h2.Primer_Brand__Heading-module__Heading--5___HgypG');
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
