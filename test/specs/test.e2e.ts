import { expect, browser, $ } from '@wdio/globals'

describe('Wallet Login application', () => {

    it('should fail to login with invalid credentials', async () => {
        await browser.url('http://localhost:3000')

        // pause 
        await $('input[name="username"]').setValue('invalidUser')
        await $('input[name="password"]').setValue('invalidPassword')
        await $('button[type="submit"]').click()

        // wait until the error message is displayed
        await $('body').waitUntil(async () => {
          return (await $('body').getText()).match(/Login failed/);
        }, {
          timeout: 5000,
          timeoutMsg: 'Expected error message to be displayed after 5s'
        });
    })
})

