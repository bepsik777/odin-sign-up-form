const pwd = document.querySelector('#pwd');
const pwdConfirm = document.querySelector('#confirm-pwd');
const button = document.querySelector('#button');

const buttons = document.querySelectorAll('[type="password"]')
console.log(buttons)

buttons.forEach((item) => { 
item.addEventListener('keyup', (e) => {
    if(pwdConfirm.value === '') {
        return;
    } else if(pwdConfirm.value !== pwd.value) {
        button.disabled = true;
        pwdConfirm.setAttribute('class', 'pwdConfirmInvalid')
    } else {
        button.disabled = false;
        pwdConfirm.removeAttribute('class', 'pwdConfirmInvalid');
        pwdConfirm.setAttribute('class', 'pwdConfirmValid');
    } 

})
})




