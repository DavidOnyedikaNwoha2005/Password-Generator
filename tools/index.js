const passwordBox = document.getElementById('password');

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const symbol = ")!@#|%^&*("
const number = "0123456789"
const start = "$"

const alphaNumSyb = upperCase + lowerCase + symbol + number
const length = 12

const generatePassword = document.getElementById("createPassword")
generatePassword.addEventListener('click', generate = () => {
    let password = ""
    password += start[Math.floor(Math.random() * start.length)]

    while (length > password.length) {
        password += alphaNumSyb[Math.floor(Math.random() * alphaNumSyb.length)]
    }

    passwordBox.value = password
});

const popUp = document.getElementById("popup");
const btn = document.getElementById("btn")

const copyPassword = document.getElementById('copyPassword')
copyPassword.addEventListener('click', copy = () => {
    navigator.clipboard.writeText(passwordBox.value)

    if (passwordBox.value == password) {
        setTimeout(() => {
            popUp.classList.add("open-popup");
        }, 0);

    } else {
        alert("Generate a Password!")
    }
});

btn.addEventListener("click", openPopup = () => {
    popUp.classList.remove("open-popup");
});

const hidePassword = document.getElementById('eyeicon')
hidePassword.addEventListener('click', hide = () => {
    if (passwordBox.type === "password") {
        passwordBox.type = "text"
    } else {
        passwordBox.type = "password"
    }
});
