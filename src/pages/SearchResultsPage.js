import BasePage from './BasePage.js';

class SearchResultsPage extends BasePage {
  get firstResultTitle() {
    return $('[data-testid="results-list"] h3');
  }

  async waitForSearchResults() {
    await browser.waitUntil(
      async () => {
        const url = await browser.getUrl();
        return url.includes('/search?q=');
      },
      {
        timeout: 10000,
        timeoutMsg: 'Search results page did not load',
      }
    );
  }

  async getCurrentSearchUrl() {
    return await browser.getUrl();
  }

  async getFirstResultText() {
    await this.firstResultTitle.waitForDisplayed();
    return await this.firstResultTitle.getText();
  }

  async isSearchTermInFirstResult(searchTerm) {
    const firstResultText = await this.getFirstResultText();
    return firstResultText.toLowerCase().includes(searchTerm.toLowerCase());
  }
}

export default new SearchResultsPage();
