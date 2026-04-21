import HomePage from '../pages/HomePage.js';
import SearchResultsPage from '../pages/SearchResultsPage.js';
import { expect } from '@wdio/globals';

describe('Test Case 4: Repository Search Functionality', () => {
  const searchTerm = 'act';

  beforeEach(async () => {
    await HomePage.openHomePage();
  });

  it('should search for repositories successfully', async () => {
    await HomePage.performSearch(searchTerm);
    console.log(`Searched for: "${searchTerm}"`);

    await SearchResultsPage.waitForSearchResults();

    const currentUrl = await SearchResultsPage.getCurrentSearchUrl();
    expect(currentUrl).toContain(`/search?q=${searchTerm}`);
    expect(currentUrl).toContain('type=repositories');
    console.log(`Correct URL: ${currentUrl}`);

    const firstResultText = await SearchResultsPage.getFirstResultText();
    console.log(`First result title: "${firstResultText}"`);

    const isTermFound = await SearchResultsPage.isSearchTermInFirstResult(searchTerm);
    expect(isTermFound).toBe(true);
    console.log(`Search term "${searchTerm}" found in first result`);

    console.log('Search test completed successfully');
  });
});
