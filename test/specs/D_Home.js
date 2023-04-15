const HomePage = require("../AutomationDataFile/homepage");
describe('Home Page', () => {


    it('Home Page title Verification', async () => {
        const homepagetitle = HomePage.home_page_title
        expect(homepagetitle).toBePresent();

    })

    it('Pay check widget text', async () => {
        const paychecktext = HomePage.paycheck_widget
        expect(paychecktext).toBePresent();

    })

    it('Current year', async () => {
        const currentYear = HomePage.current_year
        expect(currentYear).toBePresent();

    })

    it('Month - Feb verification', async () => {
        const febMonth = HomePage.Feb_Month
        expect(febMonth).toBePresent();

    })

    it('Month - Jan verification', async () => {
        const janMonth = HomePage.Jan_Month
        expect(janMonth).toBePresent();

    })

    it('Salary Widget', async () => {
        const salaryWidget = HomePage.Salary_Widget
        expect(salaryWidget).toBePresent();

    })

    it('BankTitle', async () => {
        const moneyinbanktitle = HomePage.Money_net_in_bank_title
        expect(moneyinbanktitle).toBePresent();

    })

    it('Total Amount', async () => {
        const amounttobepaid = HomePage.amount
        expect(amounttobepaid).toBePresent();

    })


})
