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
test("Login with Facebook should navigate to Facebook login page", async ({
  page,
}) => {
  await page.goto(`${baseUrl}/en/login`);

  const fbLoginButton = page.getByRole("button", {
    name: "Log in with Facebook",
  });
  await expect(fbLoginButton).toBeVisible();
  const [popup] = await Promise.all([
    page.waitForEvent("popup"),
    fbLoginButton.click(),
  ]);
  await popup.waitForURL(/facebook\.com\/login/, { timeout: 60000 });

  // a screenshot for debugging purposes
  // await popup.screenshot({ path: "facebook_login_page.png" });
  const url = popup.url();
  expect(url).toContain("facebook.com/login");
});
