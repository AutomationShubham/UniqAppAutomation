const LoginScreen = require("../AutomationDataFile/logindata");
const data = require("../AutomationDataFile/testdata.json");
const SalaryData = require("../AutomationDataFile/salarydata");
describe('My Login application', () => {
   it('User will able to Put Org ID', async () => {
        await browser.pause(5000);
        await LoginScreen.org_code.setValue(data.orgCode);
        await browser.pause(5000);
        await LoginScreen.org_login_icon.click();
    })

    it('User prompt while wrong user ID', async () => {
       
        await browser.pause(5000);
        await LoginScreen.enter_id.setValue(data.wrongid);
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

    it('User will able to edit ID and Password And Login', async () => {
       
        await LoginScreen.enter_id.setValue(data.id);
        await browser.pause(2000);
        await LoginScreen.enter_button.click();
        await browser.pause(10000);
        await browser.pause(2000);
        await LoginScreen.login_option_select.click();
        await browser.pause(10000);
        await LoginScreen.location_select.click();
        await browser.pause(2000);
        await browser.pause(10000);
    })

    it('Salary Page Verification', async () => {
        await browser.pause(5000);
        await SalaryData.navigation_drawer_select.click();
        await browser.pause(5000);
        await SalaryData.salary_page_select.click();
        await browser.pause(5000);
        const year = SalaryData.current_year_select
        expect(year).toBePresent()
        await browser.pause(5000);
        await SalaryData.backward_select.click();
        await browser.pause(3000);
        const preyear = SalaryData.previous_year_select
        expect(preyear).toBePresent()
        await SalaryData.forward_select.click();
        const currentyear = SalaryData.current_year_select
        expect(currentyear).toBePresent()
        await browser.pause(5000);
        await SalaryData.navigation_drawer_select.click();
        await browser.pause(2000);
        await SalaryData.home_page_select.click();
        await browser.pause(3000);
    })

})