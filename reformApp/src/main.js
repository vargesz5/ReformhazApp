document.getElementById('chk').addEventListener('change', function() {
    let isChecked = this.checked;
    let LoginEmail = document.getElementById('LiEmail');
    let LoginPassword = document.getElementById('LiPassword');
    let LoginButton =  document.getElementById('LiButton');
    LoginEmail.disabled = isChecked;
    LoginPassword.disabled = isChecked;
    LoginButton.disabled = isChecked;
    LoginEmail.value="";
    LoginPassword.value="";

    let SignupName = document.getElementById('SuName');
    let SignupEmail = document.getElementById('SuEmail');
    let SignupPassword = document.getElementById('SuPassword');
    let SignupButton = document.getElementById('SuButton');
    SignupName.disabled = !isChecked;
    SignupEmail.disabled = !isChecked;
    SignupPassword.disabled = !isChecked;
    SignupButton.disabled = !isChecked;
    SignupName.value="";
    SignupEmail.value="";
    SignupPassword.value="";
});