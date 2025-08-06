import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

Given(/^I am on the (\w+) page$/, async (page) => {
    await browser.url(`http://localhost:3000`);
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
      // pause 
      await $('input[name="username"]').setValue('invalidUser')
      await $('input[name="password"]').setValue('invalidPassword')
      await $('button[type="submit"]').click()
});

Then(/^I should see text (.*)$/, async (message) => {
    // wait until the error message is displayed
    await $('body').waitUntil(async () => {
      return (await $('body').getText()).match(new RegExp(message, 'i'));
    }, {
      timeout: 5000,
      timeoutMsg: 'Expected error message to be displayed after 5s'
    });
});

