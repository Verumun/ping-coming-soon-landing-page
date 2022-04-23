'use strict'

const form = document.getElementById('form');
const email = document.getElementById('email');


form.addEventListener('submit', function(e){
    e.preventDefault();

    validateInput();
})

const setError = function(element, message){
    const inputControl = element.parentElement;
    const displayError = inputControl.querySelector('.error-text');

    displayError.style.marginBottom = '2rem';
    displayError.style.textAlign = 'center';
    displayError.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = function(element){
    const inputControl = element.parentElement;
    const displayError = inputControl.querySelector('.error-text');

    displayError.style.marginBottom = '0';
    displayError.innerText = '';
    inputControl.classList.remove('error');
    inputControl.classList.add('success');
}

const isEmailValid = function(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());
}


const validateInput = function(){
    const emailValue = email.value.trim();

    if(emailValue === ''){
        setError(email, 'Email cannot be empty');
    }else if(!isEmailValid(emailValue)){
        setError(email, 'Please provide a valid email address')
    }else{
        setSuccess(email)
    }
}