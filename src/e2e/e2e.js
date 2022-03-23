import pupppeter from "puppeteer";

describe("App.js", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it("conatins the welcome text", async () => {
    await page.goto("http://localhost:3000");
  });
});
