
class LoginScreen {
    get org_code() {
        return $("//android.widget.EditText");
    }
    get org_login_icon() {
        return $("//android.view.ViewGroup[@index='7']");
    }
    
    get enter_id() {
        return $("//android.widget.EditText[@index='4']");
    }
    get enter_password() {
        return $("//android.widget.EditText[@index='5']");
    }
    get enter_button() {
        return $("//android.view.ViewGroup[@index='6']");
    }
    get invalid_credential_error() {
        return $(
            "//android.widget.TextView[@text='שדה תעודת זהות ו/או סיסמה שגויים']"
        );
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
}
module.exports = new LoginScreen();
