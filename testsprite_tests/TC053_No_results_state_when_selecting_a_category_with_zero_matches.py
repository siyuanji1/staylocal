import asyncio
from playwright import async_api
from playwright.async_api import expect

async def run_test():
    pw = None
    browser = None
    context = None

    try:
        # Start a Playwright session in asynchronous mode
        pw = await async_api.async_playwright().start()

        # Launch a Chromium browser in headless mode with custom arguments
        browser = await pw.chromium.launch(
            headless=True,
            args=[
                "--window-size=1280,720",         # Set the browser window size
                "--disable-dev-shm-usage",        # Avoid using /dev/shm which can cause issues in containers
                "--ipc=host",                     # Use host-level IPC for better stability
                "--single-process"                # Run the browser in a single process mode
            ],
        )

        # Create a new browser context (like an incognito window)
        context = await browser.new_context()
        context.set_default_timeout(5000)

        # Open a new page in the browser context
        page = await context.new_page()

        # Interact with the page elements to simulate user flow
        # -> Navigate to http://localhost:3000
        await page.goto("http://localhost:3000")
        
        # -> Navigate to /experiences.html so the test can click a category chip and verify the empty state.
        await page.goto("http://localhost:3000/experiences.html")
        
        # -> Click the 'Wellness' category chip (index 1349) which is likely to yield no matches, then search the page for the text 'No results' to verify the empty state.
        frame = context.pages[-1]
        # Click element
        elem = frame.locator('xpath=/html/body/section[2]/div/button[9]').nth(0)
        await asyncio.sleep(3); await elem.click()
        
        # -> Click a different category chip that may yield no matches (attempting 'Art & Craft' at index 1346). If that does not produce an empty state, report that no category yields an empty state and finish the task.
        frame = context.pages[-1]
        # Click element
        elem = frame.locator('xpath=/html/body/section[2]/div/button[8]').nth(0)
        await asyncio.sleep(3); await elem.click()
        
        # --> Assertions to verify final state
        frame = context.pages[-1]
        assert await frame.locator("xpath=//*[contains(., 'No results')]").nth(0).is_visible(), "Expected 'No results' to be visible","assert not await frame.locator("xpath=//*[contains(., 'Guide')]").nth(0).is_visible(), "Expected 'Guide' to not be visible"
        await asyncio.sleep(5)

    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()

asyncio.run(run_test())
    