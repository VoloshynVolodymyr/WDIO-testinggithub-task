import BasePage from './BasePage.js';

class HomePage extends BasePage {
  get signUpButton() {
    return $('.HeaderMenu-link--sign-up');
  }
  get signInButton() {
    return $('.HeaderMenu-link--sign-in');
  }
  // get pricingLink() {
  //   return $('a[href="/pricing"]');
  // }
  // get searchInput() {
  //   return $('[data-test-selector="nav-search-input"]');
  // }
  get jumpToButton() {
    return $('button[data-target="qbsearch-input.inputButton"]');
  }

  get startFreeLink() {
    return $('a[href="/enterprise/trial"]');
  }
  get resourcesButton() {
    return $('//a[contains(text(),"Resources")]');
  }
  get newsletterSignupButton() {
    return $('//button[contains(text(),"Subscribe")]');
  }

  get enterpriseFooterLink() {
    return $('a[href="/enterprise"]');
  }

  get subscribeButton() {
    return $('a.btn-mktg[href="https://github.com/newsletter"]');
  }

  get searchButton() {
    return $('span[data-target="qbsearch-input.inputButtonText"]');
  }

  get searchInput() {
    return $('input[name="query-builder-test"]');
  }

  get pricingLink() {
    return $('//span[contains(text(),"Pricing")]');
  }

  async openHomePage() {
    await this.open('/');
  }

  async clickSignUp() {
    await this.waitForElementAndClick(this.signUpButton);
  }

  async clickPricing() {
    await this.waitForElementAndClick(this.pricingLink);
  }

  async clickJumpToSearch() {
    await this.waitForElementAndClick(this.jumpToButton);
  }

  async searchForTerm(searchTerm) {
    await this.clickJumpToSearch();
    await this.searchInput.setValue(searchTerm);
    await browser.keys('Enter');
  }

  async clickStartFree() {
    await this.waitForElementAndClick(this.startFreeLink);
  }

  async scrollToResourcesButtonAndClick() {
    await this.scrollToElement(this.resourcesButton);
    await this.waitForElementAndClick(this.resourcesButton);
  }

  async clickEnterpriseFooterLink() {
    await this.scrollToElement(this.enterpriseFooterLink);
    await this.waitForElementAndClick(this.enterpriseFooterLink);
  }

  async scrollToFooter() {
    await browser.execute(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });

    await browser.waitUntil(
      async () => {
        const footer = await $('footer');
        return await footer.isDisplayed();
      },
      {
        timeout: 5000,
        timeoutMsg: 'Footer not visible after scrolling',
      }
    );
  }

  async scrollToSubscribeButton() {
    await this.scrollToElement(this.subscribeButton);
  }

  async isSubscribeButtonVisible() {
    return await this.isElementDisplayed(this.subscribeButton);
  }

  async isSubscribeButtonClickable() {
    try {
      await this.subscribeButton.waitForClickable({ timeout: 5000 });
      return true;
    } catch {
      return false;
    }
  }

  async clickSubscribeButton() {
    await this.waitForElementAndClick(this.subscribeButton);
  }

  async clickSearchButton() {
    await this.waitForElementAndClick(this.searchButton);
  }

  async performSearch(searchTerm) {
    await this.clickSearchButton();
    await this.searchInput.waitForDisplayed({ timeout: 10000 });
    await this.searchInput.clearValue();
    await this.searchInput.setValue(searchTerm);
    await browser.keys('Enter');
  }

  async isSearchButtonVisible() {
    return await this.isElementDisplayed(this.searchButton);
  }

  // async clickPricing() {
  //   await this.waitForElementAndClick(this.pricingLink);
  // }
}

export default new HomePage();
