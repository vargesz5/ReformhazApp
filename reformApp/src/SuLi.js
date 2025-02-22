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
            document.getElementById("privateOrCompany__div").style.display="block";
            document.querySelector(".signup").querySelector("form").style.display="none";
            clearSignupFields()
        }
    });

    document.querySelector("label[for='signupTab']").addEventListener("click", function () {
        if (!signupTab.checked) {
            signupTab.checked = true;
            loginTab.checked = false;
            document.getElementById("privateOrCompany__div").style.display="block";
            document.querySelector(".signup").querySelector("form").style.display="none";
            clearLoginFields()
        }
    });
});
/*-------*/

/* Keyboard comeUp => all inputfields be visible + no transition */
let isKeyboardVisible = false;

window.addEventListener("resize", function() {
    if (window.innerHeight < 600 && !isKeyboardVisible) {  
        document.querySelector(".main").style.transform = "translateY(-100px)";
        document.querySelector(".main").style.transition = "transform 0.5s ease-out";
        isKeyboardVisible = true;
    } else if (window.innerHeight >= 600 && isKeyboardVisible) {
        document.querySelector(".main").style.transform = "translateY(0)"; 
        document.querySelector(".main").style.transition = "transform 0.5s ease-out";
        isKeyboardVisible = false;
    }
});

let inputFields = document.querySelectorAll("input");

inputFields.forEach(input => {
    input.addEventListener("focus", function() {
        document.querySelector(".main").style.transition = "transform 0.5s ease-out";
    });

    input.addEventListener("blur", function() {
        document.querySelector(".main").style.transition = "none";

        if (window.innerHeight >= 600) {
            document.querySelector(".main").style.transform = "translateY(0)"; 
        }
    });
});
/*-------*/

/* Clear Input Fields */
function clearSignupFields() {
    document.getElementById('SuName').value = "";
    document.getElementById('SuEmail').value = "";
    document.getElementById('SuPassword').value = "";
    document.getElementById("SuCompanyName").value = "";
    document.getElementById("SuTaxNumber").value = "";
    document.getElementById("SuPasswordAgain").value = "";
    document.getElementById('AdatKezelesCheck').checked = false;

    let eyeIcon = document.getElementById("signup_eyeIcon")
    let passwordField = document.getElementById("SuPassword");
    passwordField.type = "password";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");

    let eyeIconAgain = document.getElementById("signup_eyeIcon_again");
    let passwordFieldAgain = document.getElementById("SuPasswordAgain");
    passwordFieldAgain.type = "password";
    eyeIconAgain.classList.remove("fa-eye");
    eyeIconAgain.classList.add("fa-eye-slash");
}
function clearLoginFields() {
    document.getElementById('LiEmail').value = "";
    document.getElementById('LiPassword').value = "";
    let eyeIcon = document.getElementById("login_eyeIcon")
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
}
/*-------*/

/* Password EyeIcon */
document.getElementById("login_eyeIcon").addEventListener("click", function () {
    togglePasswordVisibility("LiPassword", "login_eyeIcon");
});
document.getElementById("signup_eyeIcon").addEventListener("click", function () {
    togglePasswordVisibility("SuPassword", "signup_eyeIcon");
});
document.getElementById("signup_eyeIcon_again").addEventListener("click", function () {
    togglePasswordVisibility("SuPasswordAgain", "signup_eyeIcon_again");
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
/*-------*/

 /* Open PopUp + Start SaveData */
document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.querySelector(".signup form");

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

       
        let popup = document.getElementById("popup");
        popup.style.display = "flex";
        popup.style.transform = "translateY(-100%)";
        setTimeout(() => {
            popup.style.transition = "transform 0.5s ease-out";
            popup.style.transform = "translateY(0)";
        }, 10);

        SignUpSaveData();
    });
});
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
/*-------*/

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

    let vatInput = this.value.replace(/\D/g, "");
    
    if (vatInput.length > 8) {
        vatInput = vatInput.substring(0, 8) + "-" + vatInput.substring(8);
    }
    if (vatInput.length > 10) {
        vatInput = vatInput.substring(0, 10) + "-" + vatInput.substring(10);
    }
    
    this.value = vatInput;
    
    const vatRegex = /^\d{8}-\d-\d{2}$/;
    if (vatRegex.test(vatInput)) {
        this.setCustomValidity("");
    } else {
        this.setCustomValidity("Hibás formátum! Az adószámnak az alábbi formátumban kell lennie: 12345678-9-10");
    }
});
document.getElementById("SuPasswordAgain").addEventListener("input", function () {
    let password = document.getElementById("SuPassword").value;
    let passwordAgain = document.getElementById("SuPasswordAgain").value
    if(password!=passwordAgain)
    {
        this.setCustomValidity("A két jelszó nem egyezik meg!");
    }
    else
    {
        this.setCustomValidity("");
    }
})
/*-------*/

/* Company or private */
document.getElementById("privatePerson").addEventListener("click", function(){
    this.classList.add("active");
    document.getElementById("company").classList.remove("active"); 

    document.getElementById("privateOrCompany__div").style.display="none";
    document.querySelector(".signup").querySelector("form").style.display="block";

    let TaxNumber = document.querySelector(".signup #SuTaxNumber");
    TaxNumber.style.display="none";
    TaxNumber.removeAttribute("required");

    let CompanyName =  document.querySelector(".signup #SuCompanyName");
    CompanyName.style.display="none";
    CompanyName.removeAttribute("required");
})

document.getElementById("company").addEventListener("click", function(){
    this.classList.add("active");
    document.getElementById("privatePerson").classList.remove("active");

    document.getElementById("privateOrCompany__div").style.display="none";
    document.querySelector(".signup").querySelector("form").style.display="block";

    let TaxNumber = document.querySelector(".signup #SuTaxNumber");
    TaxNumber.style.display="block";
    TaxNumber.setAttribute("required", "true");

    let CompanyName =  document.querySelector(".signup #SuCompanyName");
    CompanyName.style.display="block";
    CompanyName.setAttribute("required", "true"); 
})
/*------------*/

/*  SignUp Save */
function SignUpSaveData() {
    let currentRegist = document.getElementById("privateOrCompany__div").querySelector(".active");
    if(currentRegist.innerHTML == "Vállakozóként")
    {
        let SignupName = document.getElementById('SuName').value;
        let SignupEmail = document.getElementById('SuEmail').value;
        let SignupPassword = document.getElementById('SuPassword').value;
        let SignUpCompanyName =  document.getElementById("SuCompanyName").value;
        let SignUpTaxNumber = document.getElementById("SuTaxNumber").value;
    }
    else
    {
        let SignupName = document.getElementById('SuName').value;
        let SignupEmail = document.getElementById('SuEmail').value;
        let SignupPassword = document.getElementById('SuPassword').value;
    }
    
    let DataIsSaved = false;

    DataIsSaved=true;
    if(DataIsSaved==true)
    {
        clearSignupFields() 
    }
}
/*------------*/

/*Login Start*/
document.getElementById("LiButton").addEventListener("click", LoginToApp)
function LoginToApp() {

}
/*-----------*/