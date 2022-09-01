const CampaignPage = require("../pageobjects/campaign.page");

describe("Campaign Page Footer Verification", () => {
  beforeEach(async () => {
    await CampaignPage.open();
    if (
      (await CampaignPage.acceptBtn) &&
      (await CampaignPage.acceptBtn.isClickable())
    ) {
      await CampaignPage.acceptBtn.click();
    }
  });

  it("the user should be redirected to Cookies page by clicking the Cookies link", async () => {
    await CampaignPage.cookiesLink.waitForClickable();
    await CampaignPage.cookiesLink.click();
    await expect(await browser).toHaveTitle(
      "Cookies | Volvo Cars - International"
    );
  });
  it("the user should be redirect to Legal page by clicking the Legal link", async () => {
    await CampaignPage.legalLink.waitForClickable();
    await CampaignPage.legalLink.click();
    await expect(await browser).toHaveTitle(
      "Legal | Volvo Cars - International"
    );
  });
  it("the user should be redirected to Privacy page by clicking the Privacy link", async () => {
    await CampaignPage.privacyLink.waitForClickable();
    await CampaignPage.privacyLink.click();
    await expect(await browser).toHaveTitle(
      "Legal Documents | Volvo Cars | Volvo Cars"
    );
  });
  it("the user should be redirected to Social Media page by clicking the Social Media link", async () => {
    await CampaignPage.socialMediaLink.waitForClickable();
    await CampaignPage.socialMediaLink.click();
    await expect(await browser).toHaveTitle(
      "Social Media | Volvo Cars - International"
    );
  });
  it("the user should be redirected to Tell Us page by clicking the Tell Us link", async () => {
    await CampaignPage.tellUsLink.waitForClickable();
    await CampaignPage.tellUsLink.click();
    await expect(await browser).toHaveTitle(
      "Tell Us - Reporting Line | Volvo Cars"
    );
  });
});
