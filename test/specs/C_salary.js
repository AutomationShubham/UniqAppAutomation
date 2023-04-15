const SalaryData = require("../AutomationDataFile/salarydata");
describe('Salary page', () => {

    it('Salary Page Verification', async () => {
        await browser.pause(5000);
        await SalaryData.navigation_drawer_select.click();
        await browser.pause(5000);
        await SalaryData.salary_page_select.click();
        await browser.pause(5000);
    })

    it('Verify Current Year Salary Page', async () => {
        const year = SalaryData.current_year_select
        expect(year).toBePresent()
        await browser.pause(5000);
    })
    it('Verify Backword btn', async () => {
        await SalaryData.backward_select.click();
        await browser.pause(3000);
    })
    it('Verify Previous Year Salary Page', async () => {
        const preyear = SalaryData.previous_year_select
        expect(preyear).toBePresent()
        await browser.pause(3000);
    })
    it('Verify Forward btn', async () => {
        await SalaryData.forward_select.click();
        await browser.pause(3000);
    })
    it('Verify Current Year Salary Page After Click on forward', async () => {
        const year = SalaryData.current_year_select
        expect(year).toBePresent()
        await browser.pause(5000);
    })

    it('Salary Page title Verification', async () => {
        const salaryPageTitle = SalaryData.salary_page_title_select
        expect(salaryPageTitle).toBePresent();
        await browser.pause(2000);
    })


    it('Salary chart bar Verification', async () => {
        const salaryChart = SalaryData.chart_bar_display
        expect(salaryChart).toBePresent();
        await browser.pause(2000);

    })

})

describe('Salaray Page PDF Verification', () => {
   it('Salary Month widget Verification - Jan', async () => {
        const janSalaryPageWidget = SalaryData.jan_salary_page_details
        expect(janSalaryPageWidget).toBePresent();
        await SalaryData.jan_salary_page_details.click();
        await browser.pause(3000);
    })

    it('Amount Deposit Title Verification', async () => {
        await browser.pause(3000);
        const amountDepositTitle = SalaryData.amount_deposit_title
        expect(amountDepositTitle).toBePresent();


    })

    it('Widget Month Title Verification -Jan', async () => {
        await browser.pause(3000);
        const janMonthTitle = SalaryData.jan_month_title
        expect(janMonthTitle).toBePresent();


    })

    it('Paycheck Title Verification', async () => {
        await browser.pause(3000);
        const paycheckTitle = SalaryData.paycheck_title
        expect(paycheckTitle).toBePresent();


    })

    it('Pdf Verification', async () => {
        await browser.pause(3000);
        const pdf = SalaryData.Pdf
        expect(pdf).toBePresent();
        await SalaryData.Pdf.click();
        await browser.pause(5000);

    })

    it('Backto salary page verification', async () => {
        await browser.pause(5000);
        await SalaryData.back_to_salary_month_page.click();
        await browser.pause(5000);
        await SalaryData.navigation_drawer_select.click();
        await browser.pause(5000);
        await SalaryData.salary_page_select.click();
        await browser.pause(5000);
        const salaryPageTitle = SalaryData.salary_page_title_select
        expect(salaryPageTitle).toBePresent();
        await browser.pause(2000);
    })

    it('Salary Month widget Verification - Feb', async () => {
        const febSalaryPageWidget = SalaryData.feb_salary_page_details
        expect(febSalaryPageWidget).toBePresent();
        await SalaryData.feb_salary_page_details.click();
        await browser.pause(3000);
    })

    it('Amount Deposit Title Verification', async () => {
        await browser.pause(3000);
        const amountDepositTitle = SalaryData.amount_deposit_title
        expect(amountDepositTitle).toBePresent();

    })

    it('Widget Month Title Verification - Feb', async () => {
        await browser.pause(3000);
        const febMonthTitle = SalaryData.feb_month_title
        expect(febMonthTitle).toBePresent();


    })
    it('Paycheck Title Verification', async () => {
        await browser.pause(3000);
        const paycheckTitle = SalaryData.paycheck_title
        expect(paycheckTitle).toBePresent();


    })

    it('Pdf Verification', async () => {
        await browser.pause(3000);
        const pdf = SalaryData.Pdf
        expect(pdf).toBePresent();
        await SalaryData.Pdf.click();
        await browser.pause(5000);

    })

    it('Backto salary page verification', async () => {
        await browser.pause(5000);
        await SalaryData.back_to_salary_month_page.click();
        await browser.pause(5000);
        await SalaryData.navigation_drawer_select.click();
        await browser.pause(5000);
        await SalaryData.salary_page_select.click();
        await browser.pause(5000);
        const salaryPageTitle = SalaryData.salary_page_title_select
        expect(salaryPageTitle).toBePresent();
        await browser.pause(2000);
    })

    it('Home Page Verification', async () => {
        await browser.pause(2000);
        await SalaryData.navigation_drawer_select.click();
        await browser.pause(2000);
        await SalaryData.home_page_select.click();
        await browser.pause(3000);

    })

})