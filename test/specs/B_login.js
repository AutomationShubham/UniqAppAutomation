const LoginScreen = require("../AutomationDataFile/logindata");
const data = require("../AutomationDataFile/testdata.json");
describe('My Login application', () => {
    it('User will able to Put Org ID', async () => {
        await browser.pause(5000);
        await LoginScreen.org_code.setValue(data.orgCode);
        await browser.pause(5000);
        await LoginScreen.org_login_icon.click();
    })

    it('User prompt while wrong user ID', async () => {
       
        await browser.pause(5000);
        await LoginScreen.enter_id.setValue(data.wrongId);
        await browser.pause(3000);
        await LoginScreen.enter_password.setValue(data.password);
        await browser.pause(3000);
        await LoginScreen.enter_button.click();
        await browser.pause(10000);
        const e = LoginScreen.invalid_credential_error
        expect(e).toBePresent()
        await browser.pause(2000);
        await LoginScreen.ok_button.click();
        await browser.pause(2000);
        
    })

    it('User prompt while wrong password', async () => {

        await browser.pause(5000);
        await LoginScreen.enter_id.setValue(data.id);
        await browser.pause(3000);
        await LoginScreen.enter_password.setValue(data.wrongPassword);
        await browser.pause(3000);
        await LoginScreen.enter_button.click();
        await browser.pause(10000);
        const e = LoginScreen.invalid_credential_error
        expect(e).toBePresent()
        await browser.pause(2000);
        await LoginScreen.ok_button.click();
        await browser.pause(2000);
    })

    it('User will able to edit ID and Password And Login', async () => {
       
        await LoginScreen.enter_id.setValue(data.id);
        await browser.pause(2000);
        await LoginScreen.enter_password.setValue(data.password);
        await browser.pause(3000);
        await LoginScreen.enter_button.click();
        await browser.pause(2000);
        await LoginScreen.login_option_select.click();
        await browser.pause(5000);
        if (await LoginScreen.ok_select.isDisplayed()) {
            await LoginScreen.ok_select.click();
        }
        else {
            console.log('Forbidden error not appear')
        }
        await browser.pause(3000);
        if (await LoginScreen.location_select.isDisplayed()) {
            await LoginScreen.location_select.click();
        }
        else {
            console.log('Location poup not appear')
        }
        await browser.pause(5000);
        if (await LoginScreen.ok_select.isDisplayed()) {
            await LoginScreen.ok_select.click();
        }
        else {
            console.log('Forbidden error not appear')
        }
        
  
        
    })



})
