class HomeScreen {

    get home_page_title() {
        return $("//android.widget.TextView[@text='תלושי השכר שלי']");
    }

    get paycheck_widget() {
        return $("//android.widget.TextView[@text='תלוש שכר']");
    }

    get current_year() {
        return $("//android.widget.TextView[@text='2023']");
    }

    get Feb_Month() {
        return $("//android.widget.TextView[@text='פברואר']");
    }


    get Jan_Month() {
        return $("//android.widget.TextView[@text='ינואר']");
    }

    get Salary_Widget() {
        return $("/hierarchy/android.widget.FrameLayout / android.widget.LinearLayout / android.widget.FrameLayout / android.widget.LinearLayout / android.widget.FrameLayout / android.widget.FrameLayout / android.view.ViewGroup / android.view.ViewGroup / android.view.ViewGroup / android.widget.FrameLayout / android.view.ViewGroup / android.view.ViewGroup / android.view.ViewGroup / android.view.ViewGroup / android.view.ViewGroup / android.view.ViewGroup / android.view.ViewGroup / android.view.ViewGroup / android.view.ViewGroup / android.view.ViewGroup / android.widget.FrameLayout / android.view.ViewGroup / android.view.ViewGroup / android.widget.ScrollView / android.view.ViewGroup / android.widget.ScrollView / android.view.ViewGroup / android.view.ViewGroup[1] / android.view.ViewGroup / android.view.ViewGroup");
    }

    get Money_net_in_bank_title() {
        return $("//android.widget.TextView[@text='נטו בבנק']");
    }

    get amount() {
        return $("//android.widget.TextView[@text='₪ 4,154.5']");
    }

  

}
module.exports = new HomeScreen();
