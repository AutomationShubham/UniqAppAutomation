const LoginScreen = require("../AutomationDataFile/logindata");
it('Install Apk file on Device', function () {
    browser.installApp('D:\\UniqAppAutomation\\app\\unique-plus.apk');
});

it('Open App', async () => {
   
    await LoginScreen.apk_select.click();
    await browser.pause(5000);
})


