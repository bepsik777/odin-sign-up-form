const pwd = document.querySelector('#pwd');
const pwdConfirm = document.querySelector('#confirm-pwd');
const button = document.querySelector('#button');

pwdConfirm.addEventListener('keyup', (e) => {
    if(pwdConfirm.value !== pwd.value) {
        button.disabled = true;
        pwdConfirm.setAttribute('class', 'pwdConfirmInvalid')
    } else {
        button.disabled = false;
        pwdConfirm.removeAttribute('class', 'pwdConfirmInvalid')
    } 

})

console.log(pwd)
console.log(pwdConfirm)

