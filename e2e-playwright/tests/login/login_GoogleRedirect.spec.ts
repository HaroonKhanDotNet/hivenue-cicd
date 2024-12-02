import { test, expect, chromium } from "@playwright/test";
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

test("Login with Google should navigate to Google login page", async ({
  page,
}) => {
  // wait for network idle !
  await page.goto(`${baseUrl}/en/login`, {
    waitUntil: "networkidle",
  });

  console.log("Waiting for Google login button...");
  await page.waitForSelector(".g_id_signin", { state: "visible" });
  const googleLoginButton = page.locator(".g_id_signin").first();
  await expect(googleLoginButton).toBeVisible();
  console.log("Google login button is visible.");

  console.log("Clicking Google login button...");
  const [popup] = await Promise.all([
    page.waitForEvent("popup", { timeout: 60000 }),
    googleLoginButton.click({ force: true }),
  ]);

  console.log("Popup detected, verifying URL...");
  await popup.waitForURL(/accounts\.google\.com/, { timeout: 60000 });
  expect(popup.url()).toContain("accounts.google.com");
  console.log("Popup URL is correct:", popup.url());
});