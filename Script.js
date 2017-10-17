
"use strict";

var arrayErrors =Array[passwordValidation('21343')];//for test
// arrayErrors = [mobileValidation('23423')];//for test

function emailValidation(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email) == false){
        addToArray(false , email);
    }
    else
        return; //return true or false//todo
}

function passwordValidation(passwordText){
    var isValidationTrue = true;
    if (passwordText.length < 6) {
        addToArray(isValidationTrue = false , passwordText);
    }
    else
        return;
}

function confirmPasswordValidation(confirmPasswordText){
    var isValidationTrue = true;
    if (confirmPasswordText.length < 6) {
        addToArray(isValidationTrue = false , confirmPasswordText);
    }
    else
        return;
}

function mobileValidation(mobileNumber) {
    var isValidationTrue = true;
    mobileNumber.length == 11 && mobileNumber.substr(0, 2) == '09' ? isValidationTrue : isValidationTrue = false;
  
    if (isValidationTrue == false)
        addToArray(isValidationTrue, mobileNumber);
    else
        return isValidationTrue;
}

function addToArray(isValidationTrue, input) {
     arrayErrors = [isValidationTrue +','+ input +'\n'];
}