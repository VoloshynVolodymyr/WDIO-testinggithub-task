import HomePage from '../pages/HomePage.js';
import EnterprisePage from '../pages/EnterprisePage.js';
import EnterpriseTrialPage from '../pages/EnterpriseTrialPage.js';
import { expect } from '@wdio/globals';

describe('Test Case 2: Navigating to Enterprise', () => {
  beforeEach(async () => {
    await HomePage.openHomePage();
  });

  it('should navigate to Enterprise and verify content', async () => {
    const expectedText = 'Get started with GitHub Enterprise';
    await HomePage.scrollToFooter();
    await HomePage.clickEnterpriseFooterLink();
    console.log('Clicked on Enterprise link in footer');

    const mainHeaderText = await EnterprisePage.getMainHeaderText();
    expect(mainHeaderText).toContain(
      'The AI-powered developer platform for the agent-ready enterprise'
    );
    console.log(`Main header verified: "${mainHeaderText}"`);

    await EnterprisePage.clickStartForTrialButton();
    console.log('Clicked on StartForTrial button');

    const getStartedHeaderText = await EnterpriseTrialPage.getGetStartedHeaderText();
    expect(getStartedHeaderText).toContain(expectedText);
    console.log(`Trial page header verified: "${getStartedHeaderText}"`);

    console.log('Enterprise navigation test completed successfully');
  });
});
