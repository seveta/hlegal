// Получаем элемент input и элемент для вывода сообщения об ошибке
let emailInput = document.getElementById('emailInput');
let phoneInput = document.getElementById('phoneInput');
let nameInput = document.getElementById('nameInput');

emailInput.addEventListener('input', function () {
    if (!isValidEmail(emailInput.value)) {
        emailInput.classList.add('invalid');
    } else {
        emailInput.classList.remove('invalid'); 
    }
});
emailInput.addEventListener('blur', function () {
    emailInput.classList.remove('invalid');
});

function isValidEmail(email) {
    return email.includes('@');
}

phoneInput.addEventListener('input', function () {
    if (!isValidPhoneNumber(phoneInput.value)) {
        phoneInput.classList.add('invalid');
    } else {
        phoneInput.classList.remove('invalid');
    }
});

phoneInput.addEventListener('blur', function () {
    phoneInput.classList.remove('invalid');
});

function isValidPhoneNumber(phoneNumber) {
    return /\d{10}$/.test(phoneNumber);
}

nameInput.addEventListener('input', function () {
    if (!isValidName(nameInput.value)) {
        nameInput.classList.add('invalid');
    } else {
        nameInput.classList.remove('invalid');
    }
});

nameInput.addEventListener('blur', function () {
    nameInput.classList.remove('invalid');
});

function isValidName(name) {
    return /^[^\d]*$/.test(name);
}