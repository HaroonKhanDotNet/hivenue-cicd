/* combination of signup_fillForm_withEmail.spec.ts and signup_extract_email.spec.ts */

import { test, expect } from "@playwright/test";
const environment = process.env.ENV || "dev";
let baseUrl: string;

if (process.env.E2E_GITHUB_URL) {
  baseUrl = process.env.E2E_GITHUB_URL;
} else {
  if (environment === "dev") {
    baseUrl = process.env.DEV_URL || "";
  } else if (environment === "prod") {
    baseUrl = process.env.PROD_URL || "";
  } else {
    baseUrl = process.env.DEVOPS_URL || "";
  }
}

test("UAT: Sign Up with Email", async ({ page, context }) => {
  // Generate a random 5-character unique identifier
  const generateUniqueIdentifier = () =>
    Math.random().toString(36).substring(2, 7);
  const uniqueIdentifier = generateUniqueIdentifier();
  const tempEmailBase = `hivenuetenant${uniqueIdentifier}`;
  const tempEmail = `${tempEmailBase}@mailnesia.com`;
  console.log(`Generated email: ${tempEmail}`);

  // Sign-up process
  await page.goto(
    `${baseUrl}/en/login?redirect=%2Fen&redirectParam=%7B%7D&action=signUp`
  );
  await page.locator("#first_name").fill(`hivenue${uniqueIdentifier}`);
  await page.locator("#last_name").fill(`tenant${uniqueIdentifier}`);
  await page.locator("#register_email").fill(tempEmail);
  await page
    .locator("#register_password")
    .fill(`Hivenuetenant${uniqueIdentifier}#!123`);
  await page
    .locator("#register_confirm_password")
    .fill(`Hivenuetenant${uniqueIdentifier}#!123`);
  await page.getByRole("button", { name: "Accept and continue" }).click();
  const confirmationPopup = page.getByRole("heading", { name: "Message" });
  await expect(confirmationPopup).toBeVisible();
  const popupContent = page.getByText(
    "Please check your email to confirm your account."
  );
  await expect(popupContent).toBeVisible();
  await page.getByRole("button", { name: "OK", exact: true }).click();

  // Email confirmation process
  const emailPage = await context.newPage();
  const allowedUrl = `https://mailnesia.com/mailbox/${tempEmailBase}`;

  // Block external URLs except the allowed one
  await context.route("**/*", (route) => {
    const url = route.request().url();
    if (url === allowedUrl || url.startsWith(`${allowedUrl}/`)) {
      route.continue();
    } else {
      console.log(`Blocking URL: ${url}`);
      route.abort();
    }
  });

  // Navigate to the temporary email inbox
  await emailPage.goto(allowedUrl, { waitUntil: "domcontentloaded" });

  // Wait for the email table to load
  await emailPage.waitForSelector("table.email tbody tr.emailheader");

  // Extract email details
  const emails = await emailPage.$$eval(
    "table.email tbody tr.emailheader",
    (rows) =>
      rows.map((row) => {
        const id = row.getAttribute("id") || "";
        const date =
          (row.querySelector("td time") as HTMLElement)?.getAttribute(
            "datetime"
          ) || "";
        const sender =
          (
            row.querySelector("td:nth-child(2) a") as HTMLElement
          )?.textContent?.trim() || "";
        const recipient =
          (
            row.querySelector("td:nth-child(3) a") as HTMLElement
          )?.textContent?.trim() || "";
        const subject =
          (
            row.querySelector("td:nth-child(4) a") as HTMLElement
          )?.textContent?.trim() || "";
        return { id, date, sender, recipient, subject };
      })
  );

  console.log("Emails:", emails);

  // Click on the specific '↗' link in the first email row
  try {
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        console.log(
          `Attempting to click the '↗' link (Attempt ${attempt + 1})...`
        );

        // Use `getByRole` to locate the '↗' link within the first email row
        const firstRowSelector = emailPage
          .locator("table.email tbody tr.emailheader")
          .first();
        const linkLocator = firstRowSelector.getByRole("link", { name: "↗" });

        await linkLocator.click();

        // Wait for the page to load after clicking
        await emailPage.waitForLoadState("domcontentloaded");

        // Option 1: Get the full HTML content using locator('html')
        // const pageContent = await emailPage.locator('html').innerHTML();
        // console.log("Page Content After Clicking the Link:", pageContent);

        // Option 2: Get the full content of the page
        const fullTextContent = await emailPage
          .locator("html")
          .evaluate((node) => node.textContent);
        console.log(fullTextContent);

        break; // Success
      } catch (error) {
        console.warn(`Retry failed on attempt ${attempt + 1}:`, error);
        if (attempt === 2) throw error; // Final attempt
      }
    }
  } catch (error) {
    console.error("Error interacting with email link:", error);
  }

  // Clean up
  await emailPage.close();
});
