const { test,expect } = require('@playwright/test');

let page;

test.beforeALL(async ({ broswer }) => {
    page = await broswer.newPage();
    await page.goto('/');
});

test.aferALL(async () => {
await page.close();
});

test.describe('Quote Component Testing', () => {
    test('The styles of the quote element must match the task', async () => {
    const Body = page.locator('.quote');

    await expect(body).toHaveCSS('font-weight', '700');
    await expect(body).toHaveCSS('font-size', '20px');
    await expect(body).toHaveCSS('color', 'rgb(64, 64, 64)');
    await expect(body).toHaveCSS('text-align', 'center');
  });

  test('The styles of the quote-author element must match the task', async () => {
    const body = page.locator('.quote-author');

    await expect(body).toHaveCSS('font-weight', '400');
    await expect(body).toHaveCSS('font-size', '16px');
    await expect(body).toHaveCSS('text-align', 'right');

    });
});