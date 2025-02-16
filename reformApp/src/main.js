/*InputFields Clear/Disable*/
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
        shortPassword.innerHTML = "";
        document.getElementById('signupTab').checked = false;
        SignupName.disabled = true;
        SignupEmail.disabled = true;
        SignupPassword.disabled = true;
        SignupButton.disabled = true;
        SignupCheck.disabled = true;
        SignupName.value = "";
        SignupEmail.value = "";
        SignupPassword.value = "";
        SignupCheck.checked = false;

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
/*----*/

/*Sign Up Start */
document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.querySelector(".signup form");
    const wrongInputs = document.getElementById("wrongInputs");

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const passwordInput = document.getElementById("SuPassword").value;
        const SignupEmail = document.getElementById("SuEmail").value;
        let getP = document.getElementById("getP");

        if (getP) {
            getP.remove();
        }

        let p = document.createElement("p");
        p.setAttribute("id", "getP");
        let errorMessage = "";

        if (!SignupEmail.includes("@") || !SignupEmail.includes(".com")) {
            errorMessage = "Hibás az Email bevitel! ";
        }

        if (passwordInput.length < 6) {
            errorMessage = "Túl rövid a jelszó!";
        }

        if(!SignupEmail.includes("@") || !SignupEmail.includes(".com") && passwordInput.length < 6)
            errorMessage = "Túl rövid a jelszó és hibás az Email bevitel!"

        if (errorMessage !== "") {
            p.innerHTML = errorMessage;
            wrongInputs.appendChild(p);
        }

        else {
            wrongInputs.innerHTML = "";
            /*Open PopUp*/
            let popup = document.getElementById("popup");
            popup.style.display = "flex";
            popup.style.transform = "translateY(-100%)";
            setTimeout(() => {
                popup.style.transition = "transform 0.5s ease-out";
                popup.style.transform = "translateY(0)";
            }, 10);
            /*----*/
            let SignupName = document.getElementById('SuName');
            let SignupEmail = document.getElementById('SuEmail');
            let SignupPassword = document.getElementById('SuPassword');
            let SignupCheck = document.getElementById("AdatKezelesCheck");
            SignupName.value = "";
            SignupEmail.value = "";
            SignupPassword.value = "";
            SignupCheck.checked = false;
            SignUpSaveData;
        }
    });
});
/*Close PopUp*/
document.querySelector(".close-btn").addEventListener("click", function () {
    let popup = document.getElementById("popup");
    popup.style.transition = "transform 0.5s ease-in";
    popup.style.transform = "translateY(-100%)";
    setTimeout(() => { popup.style.display = "none"; }, 500);
});
/*----*/

function SignUpSaveData() {
    let SignupName = document.getElementById('SuName').value;
    let SignupEmail = document.getElementById('SuEmail').value;
    let SignupPassword = document.getElementById('SuPassword').value;



}
/*Sign Up End*/

/*Login Start*/
document.getElementById("LiButton").addEventListener("click", LoginToApp)
function LoginToApp() {

}
