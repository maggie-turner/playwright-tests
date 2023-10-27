// @ts-check
const { test, expect } = require('@playwright/test');

test('first test', async ({page}) => {
    await page.goto('https://www.acres.com/');

    // Click on "Log In" expect log in modal to open
    const logIn = page.getByRole('button', { name: 'Log In'});
    await logIn.click();
    await page.waitForURL('**/login?from=%2F');

    // Text input for username
    await page.getByRole('textbox', {name: 'email'}).fill('maggie.turner+test@att.net');
    // Text input for password
    await page.getByRole('textbox', {name: 'password'}).fill('123password!@');  

    // Expect Log In button to no longer be visible if user is logged in
    await page.getByRole('button', { name: 'Log In'}).click();
    await expect(logIn).toBeHidden()

});