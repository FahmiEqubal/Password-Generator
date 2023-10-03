const generateBtn = document.getElementById("btn");
const passwordLengthInput = document.getElementById("passwordLength");
const upperCaseCheckbox = document.getElementById("upperCase");
const lowerCaseCheckbox = document.getElementById("lowerCase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const generatedPasswordInput = document.getElementById("generatedPassword");

const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+-=?/>.,<':;\\|][{}";

generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
    let password = "";

    if (upperCaseCheckbox.checked) {
        password += getRandomData(upperSet);
    }
    if (lowerCaseCheckbox.checked) {
        password += getRandomData(lowerSet);
    }
    if (numbersCheckbox.checked) {
        password += getRandomData(numberSet);
    }
    if (symbolsCheckbox.checked) {
        password += getRandomData(symbolSet);
    }

    const passwordLength = parseInt(passwordLengthInput.value);
    while (password.length < passwordLength) {
        password += getRandomData(upperSet + lowerSet + numberSet + symbolSet);
    }

    generatedPasswordInput.value = truncateString(password, passwordLength);
}

function getRandomData(dataSet) {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
}

function truncateString(str, num) {
    if (str.length > num) {
        return str.substring(0, num);
    } else {
        return str;
    }
}
