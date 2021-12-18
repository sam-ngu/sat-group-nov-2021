// goal: generate a password

let buttonGenerate = document.getElementById("button-generate");
const inputPasswordRange = document.getElementById("input-password-range");
const spanPasswordLength = document.getElementById("span-password-length");
const inputSymbol = document.getElementById("input-symbol");
const inputUppercase = document.getElementById("input-uppercase");
const inputLowercase = document.getElementById("input-lowercase");
const inputNumber = document.getElementById("input-number");
const textareaPassword= document.getElementById('textarea-password');

const numbers = "0123456789";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbol = "!@#$%^&*()*_";


inputPasswordRange.addEventListener("input", function (event) {
    const passwordLength = inputPasswordRange.value;

    // update the span pass length to show current password length
    spanPasswordLength.textContent = passwordLength;
});

// when user click on the button
buttonGenerate.addEventListener("click", function (event) {
    // we will ask the user to enter a password length
    // 8- 128 chars, otherwise we should yell at the user

    // ask to include symbols

    // ask to include uppercase

    // ask to include lowercase

    // ask to include numbers 
    const passwordLength = Number(inputPasswordRange.value);
    const hasNumber = inputNumber.checked;
    const hasSymbol = inputSymbol.checked;
    const hasUppercase = inputUppercase.checked;
    const hasLowercase = inputLowercase.checked;

    // if the user didnt choose any of the options
    const userDidntChooseAnyOption =
        !hasNumber && !hasSymbol && !hasUppercase && !hasLowercase;

    if (userDidntChooseAnyOption) {
        // we will yell at the user
        alert("CHOOSE ONE OPTION!!!");
        return;
    }
    // user has selected at least 1 option

    // once we got all the inputs,
    // we will generate the password
    let characterSet = "";

    if (hasNumber) {
        characterSet = characterSet + numbers;
    }
    if (hasSymbol) {
        characterSet = characterSet + symbol;
    }
    if (hasUppercase) {
        characterSet = characterSet + uppercase;
    }
    if (hasLowercase) {
        characterSet = characterSet + lowercase;
    }
    
    // accumulator
    let password = "";
    for (let index = 0; index < passwordLength; index++) {
      // grab a random char from the bank
      const randomCharacter = characterSet[ Math.floor(Math.random() * characterSet.length) ]

      // add to password
      password = password + randomCharacter;
      
      
    }
    
    // once we got the password
    console.log(password);

    // put the password in the box (DOM)
    textareaPassword.textContent = password;    
});

// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
