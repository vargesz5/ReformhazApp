/* Handle SignUp And Login */
document.addEventListener("DOMContentLoaded", function () {
    let loginTab = document.getElementById("loginTab");
    let signupTab = document.getElementById("signupTab");

    loginTab.checked = true;
    signupTab.checked = false;

    document.querySelector("label[for='loginTab']").addEventListener("click", function () {
        if (!loginTab.checked) {
            loginTab.checked = true;
            signupTab.checked = false;

            clearSignupFields()
        }
    });

    document.querySelector("label[for='signupTab']").addEventListener("click", function () {
        if (!signupTab.checked) {
            signupTab.checked = true;
            loginTab.checked = false;

            clearLoginFields()
        }
    });
});
document.addEventListener("click", function(e) {
    const signupTab = document.getElementById('signupTab');
    const signupDiv = document.querySelector('.signup');

    if (!signupDiv.contains(e.target) && !signupTab.checked) {
        signupDiv.style.transition = 'none'; // Ha kívül kattintasz, nincs animáció
    } else {
        signupDiv.style.transition = 'transform 0.5s ease'; // Ha a form-ban belül vagy, legyen animáció
    }
});
/* Keyboard comeUp => all inputfields be visible */
let isKeyboardVisible = false;

window.addEventListener("resize", function() {
    if (window.innerHeight < 600 && !isKeyboardVisible) {  
        document.querySelector(".main").style.transform = "translateY(-100px)";
        isKeyboardVisible = true;
    } else if (window.innerHeight >= 600 && isKeyboardVisible) {
        document.querySelector(".main").style.transform = "translateY(0)"; 
        isKeyboardVisible = false;
    }
});
/*-------*/

/* Clear Input Fields */
function clearSignupFields() {
    document.getElementById('SuName').value = "";
    document.getElementById('SuEmail').value = "";
    document.getElementById('SuPassword').value = "";
    document.getElementById("SuCompanyName").value = "";
    document.getElementById("SuTaxNumber").value = "";
    document.getElementById('AdatKezelesCheck').checked = false;
    let eyeIcon = document.getElementById("signup_eyeIcon")
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
}
function clearLoginFields() {
    document.getElementById('LiEmail').value = "";
    document.getElementById('LiPassword').value = "";
    let eyeIcon = document.getElementById("login_eyeIcon")
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
}
/*----*/

/* Password EyeIcon */
document.getElementById("login_eyeIcon").addEventListener("click", function () {
    togglePasswordVisibility("LiPassword", "login_eyeIcon");
});
document.getElementById("signup_eyeIcon").addEventListener("click", function () {
    togglePasswordVisibility("SuPassword", "signup_eyeIcon");
});

function togglePasswordVisibility(inputId, eyeId) {
    var passwordField = document.getElementById(inputId);
    var eyeIcon = document.getElementById(eyeId);

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    } else {
        passwordField.type = "password";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    }
}
/*----*/

/*Sign Up Start */
document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.querySelector(".signup form");

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        /*Open PopUp*/
        let popup = document.getElementById("popup");
        popup.style.display = "flex";
        popup.style.transform = "translateY(-100%)";
        setTimeout(() => {
            popup.style.transition = "transform 0.5s ease-out";
            popup.style.transform = "translateY(0)";
        }, 10);
        /*----*/

        SignUpSaveData();
    });
});

/* Email/Password/TaxNumber Validity */
document.getElementById("SuEmail").addEventListener("input", function () {
    let emailValue = this.value;
    if (emailValue === "" || !emailValue.includes("@") || !emailValue.includes(".")) {
        this.setCustomValidity("Az Emailnek tartalmaznia kell '@' és '.'!");
    } else {
        this.setCustomValidity("");
    }
});
document.getElementById("SuPassword").addEventListener("input", function () {
    let password = this.value;

    if (password.length < 6) {
        this.setCustomValidity("A jelszónak legalább 6 karakterből kell állni");
    }
    else {
        this.setCustomValidity("");
    }
})
document.getElementById("LiEmail").addEventListener("input", function () {
    let emailValue = this.value;
    if (emailValue === "" || !emailValue.includes("@") || !emailValue.includes(".")) {
        this.setCustomValidity("Az Emailnek tartalmaznia kell '@' és '.'!");
    } else {
        this.setCustomValidity("");
    }
});
document.getElementById("LiPassword").addEventListener("input", function () {
    let password = this.value;

    if (password.length < 6) {
        this.setCustomValidity("A jelszónak legalább 6 karakterből kell állni");
    }
    else {
        this.setCustomValidity("");
    }
});
document.getElementById("SuTaxNumber").addEventListener("input", function () {
const vatInput = document.getElementById("SuTaxNumber");
const vatRegex = /^[A-Z]{2}\d{8,12}$/;

if (vatRegex.test(vatInput.value)) {
    this.setCustomValidity("");
} else {
    this.setCustomValidity("Hibás formátum! Az adószámnak két betűs országkóddal kell kezdődnie, utána 8-12 számjegy következik.");
}
})
/*----*/

/*Close PopUp*/
document.querySelector(".close-btn").addEventListener("click", function () {
    let popup = document.getElementById("popup");
    popup.style.transition = "transform 0.5s ease-in";
    popup.style.transform = "translateY(-100%)";
    setTimeout(() => { popup.style.display = "none"; }, 500);
    document.getElementById("loginTab").checked = true;
    document.getElementById("signupTab").checked = false;
});
/*----*/

function SignUpSaveData() {
    let SignupName = document.getElementById('SuName').value;
    let SignupEmail = document.getElementById('SuEmail').value;
    let SignupPassword = document.getElementById('SuPassword').value;
    let SignUpCompanyName =  document.getElementById("SuCompanyName").value;
    let SignUpTaxNumber = document.getElementById("SuTaxNumber").value;
    let DataIsSaved = false;

    DataIsSaved=true;
    if(DataIsSaved==true)
    {
        clearSignupFields() 
    }
}
/*Sign Up End*/

/*Login Start*/
document.getElementById("LiButton").addEventListener("click", LoginToApp)
function LoginToApp() {

}
