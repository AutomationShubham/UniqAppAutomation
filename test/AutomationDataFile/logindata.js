
class LoginScreen {
    get org_code() {
        return $("//android.widget.EditText");
    }
    get org_login_icon() {
        return $("//android.widget.TextView[@text='כניסה']");
    }
    
    get enter_id() {
        return $("//android.widget.EditText[@index='0']");
    }
    get enter_password() {
        return $("//android.widget.EditText[@index='1']");
    }
    get enter_button() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup');
    }
    get invalid_credential_error() {
        return $("//android.widget.TextView[@text='שדה תעודת זהות ו/או סיסמה שגויים']");
           
    }
    get verify_button() {
        return $("//android.widget.TextView[@text='חברת הדגמה']");
    }
    get home_button() {
        return $("//android.view.ViewGroup[@index='0']");
    }

    get ok_button() {
        return $("//android.widget.Button");
    }

    get login_option_select() {
        return $("//android.widget.TextView[@text='חברת הדגמה']");
    }

    get location_select() {
        return $("//android.widget.Button[@text='WHILE USING THE APP']");
    }

    get apk_select() {
        return $("//android.widget.TextView[@content-desc='Unique+']");
    }

    get ok_select() {
        return $("//android.widget.Button[@text='OK']");
    }
}
module.exports = new LoginScreen();
