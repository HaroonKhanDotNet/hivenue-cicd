import { test, expect } from "@playwright/test";

test.skip("Extract email content", async ({ page, context }) => {
  test.setTimeout(60000); // Extend timeout
  const allowedUrl = "https://mailnesia.com/mailbox/hivenuetenantwn94e";

  // Block all external URLs except the allowed one
  await context.route("**/*", (route) => {
    const url = route.request().url();
    if (url === allowedUrl || url.startsWith(`${allowedUrl}/`)) {
      route.continue();
    } else {
      console.log(`Blocking URL: ${url}`);
      route.abort();
    }
  });

  // Navigate to the allowed URL
  await page.goto(allowedUrl, { waitUntil: "domcontentloaded" });

  // Wait for the email table to load
  await page.waitForSelector("table.email tbody tr.emailheader");

  // Extract email details
  const emails = await page.$$eval("table.email tbody tr.emailheader", (rows) => {
    return rows.map((row) => {
      const id = row.getAttribute("id") || "";
      const date = (row.querySelector("td time") as HTMLElement)?.getAttribute("datetime") || "";
      const sender =
        (row.querySelector("td:nth-child(2) a") as HTMLElement)?.textContent?.trim() || "";
      const recipient =
        (row.querySelector("td:nth-child(3) a") as HTMLElement)?.textContent?.trim() || "";
      const subject =
        (row.querySelector("td:nth-child(4) a") as HTMLElement)?.textContent?.trim() || "";
      return { id, date, sender, recipient, subject };
    });
  });

  console.log("Emails:", emails);

  // Click on the specific '↗' link in the first email row
  try {
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        console.log(`Attempting to click the '↗' link (Attempt ${attempt + 1})...`);

        // Use `getByRole` to locate the '↗' link within the first email row
        const firstRowSelector = page.locator("table.email tbody tr.emailheader").first();
        const linkLocator = firstRowSelector.getByRole("link", { name: "↗" });

        await linkLocator.click();

        // Wait for the page to load after clicking
        await page.waitForLoadState("domcontentloaded");

        // Option 1 : Get the full HTML content using locator('html')
        //const pageContent = await page.locator('html').innerHTML();
        //console.log("Page Content After Clicking the Link:", pageContent);
        
        // Option 2  : or Get the full content of the page
        const fullTextContent = await page.locator('html').evaluate(node => node.textContent);
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
});
