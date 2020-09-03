
function submitAction() {
    const form = document.getElementById("formId");
    const signUpButton = document.getElementById("button-sign-up")

    signUpButton.addEventListener('click',function(event){
        form.onsubmit();
    })
}
