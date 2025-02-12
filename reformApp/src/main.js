function HandleInputFields() {
    let LoginEmail = document.getElementById('LiEmail');
    let LoginPassword = document.getElementById('LiPassword');
    let LoginButton = document.getElementById('LiButton');
    let SignupName = document.getElementById('SuName');
    let SignupEmail = document.getElementById('SuEmail');
    let SignupPassword = document.getElementById('SuPassword');
    let SignupCheck = document.getElementById("AdatKezelesCheck");
    let SignupButton = document.getElementById('SuButton');
    document.getElementById('loginTab').addEventListener('click', function () {
        let shortPassword = document.getElementById("shortPassword");
        shortPassword.innerHTML="";
        document.getElementById('signupTab').checked = false;
        SignupName.disabled = true;
        SignupEmail.disabled = true;
        SignupPassword.disabled = true;
        SignupButton.disabled = true;
        SignupCheck.disabled = true;
        SignupName.value = "";
        SignupEmail.value = "";
        SignupPassword.value = "";
        SignupCheck.checked=false;

        LoginEmail.disabled = false;
        LoginPassword.disabled = false;
        LoginButton.disabled = false;
    })
    document.getElementById('signupTab').addEventListener('click', function () {
        document.getElementById('loginTab').checked = false;
        LoginEmail.disabled = true;
        LoginPassword.disabled = true;
        LoginButton.disabled = true;
        LoginEmail.value = "";
        LoginPassword.value = "";

        SignupName.disabled = false;
        SignupEmail.disabled = false;
        SignupPassword.disabled = false;
        SignupButton.disabled = false;
        SignupCheck.disabled = false;

    });
}
HandleInputFields()

/*Sign Up Kezelése */
document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.querySelector(".signup form");
    const passwordInput = document.getElementById("SuPassword");
    const wrongPassword = document.getElementById("shortPassword");
    signupForm.addEventListener("submit", function (event) {
        const getP = document.getElementById("getP");
        if (passwordInput.value.length < 6) {
            event.preventDefault();
            if(getP==undefined)
            {
                let p = document.createElement("p");
            p.setAttribute("id", "getP");
            p.innerHTML= "A jelszónak legalább 6 karakter hosszúnak kell lennie!";
            wrongPassword.appendChild(p)
            }
            else
            {
                return 0;
            }
        }
        else
        {
            SignUpSaveData;
        }
    });
});

function SignUpSaveData() {
    let SignupName = document.getElementById('SuName').value;
    let SignupEmail = document.getElementById('SuEmail').value;
    let SignupPassword = document.getElementById('SuPassword').value;

    
    
}

/*Login Kezelése*/
document.getElementById("LiButton").addEventListener("click", LoginToApp)
function LoginToApp() {

}
