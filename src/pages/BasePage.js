export default class BasePage {
  async open(path = '/') {
    return browser.url(path);
  }

  async waitForElement(element, timeout = 10000) {
    if (!element) {
      throw new Error('Cannot wait for element: element is undefined');
    }
    await element.waitForDisplayed({ timeout });
  }

  async waitForElementAndClick(element, timeout = 10000) {
    if (!element) {
      throw new Error('Cannot click element: element is undefined');
    }
    await element.waitForDisplayed({ timeout });
    await element.waitForClickable({ timeout });
    await element.click();
  }

  async waitForElementAndSetValue(element, value, timeout = 10000) {
    if (!element) {
      throw new Error('Cannot set value: element is undefined');
    }
    await element.waitForDisplayed({ timeout });
    await element.setValue(value);
  }

  async getText(element) {
    if (!element) {
      throw new Error('Cannot get text: element is undefined');
    }
    await element.waitForDisplayed();
    return await element.getText();
  }

  async isElementDisplayed(element, timeout = 5000) {
    if (!element) {
      return false;
    }
    try {
      await element.waitForDisplayed({ timeout });
      return true;
    } catch {
      return false;
    }
  }

  async scrollToElement(element) {
    if (!element) {
      throw new Error('Cannot scroll: element is undefined');
    }
    await element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
