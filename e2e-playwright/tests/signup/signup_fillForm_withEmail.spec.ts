import { test, expect } from "@playwright/test";
import * as dotenv from "dotenv";
dotenv.config();
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


test.skip("Fill the Registration form", async ({ page, context }) => {
  // Generate a random 5-character unique identifier
  const generateUniqueIdentifier = () =>
    Math.random().toString(36).substring(2, 7);
  const uniqueIdentifier = generateUniqueIdentifier();
  const tempEmailBase = `hivenuetenant${uniqueIdentifier}`;
  const tempEmail = `${tempEmailBase}@mailnesia.com`;
  console.log(`Generated email: ${tempEmail}`);
  await page.goto(`https://mailnesia.com/mailbox/${tempEmailBase}`);
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
  const emailPage = await context.newPage();
  await emailPage.goto(`https://mailnesia.com/mailbox/${tempEmailBase}`);
  /*
  const emailSubjectCell = page.locator('tr.emailheader >> td >> a:has-text("Hivenue - Confirm your email")');
  console.log(await emailSubjectCell.textContent()); // Prints the text content of the locator
  await emailPage.close();
  */
});
