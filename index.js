let first = document.getElementById('first');
let second = document.getElementById('second');
let thrid = document.getElementById('third');
let container = document.querySelector('.works__content');
const rect = container.getBoundingClientRect();

const animate = (element, position) => {
    element.style.transform = `translateX(${position}px)`;
};

document.addEventListener('scroll', function (e) {
    lastKnownScrollPosition = window.scrollY;

    window.requestAnimationFrame(function () {
        animate(first, lastKnownScrollPosition * 0.2);
        animate(second, lastKnownScrollPosition * -0.2);
        animate(thrid, lastKnownScrollPosition * 0.2);
    });
});

const form = document.getElementById('form');

const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userPhone = document.getElementById('number');
const userCompany = document.getElementById('company');
const userUrl = document.getElementById('url');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    let valueName = userName.value.trim();
    let valueEmail = userEmail.value.trim();
    let valuePhone = userPhone.value.trim();
    let modalClose = document.querySelector('.modal');
    const modalThank = document.querySelector('.modal__thank_you');

    if (valueName === '') {
        setErrorFor(userName, 'This field is required.');
    } else {
        setSuccessFor(userName);
    }

    if (valueEmail === '') {
        setErrorFor(userEmail, 'This field is required.');
    } else if (!isEmail(valueEmail)) {
        setErrorFor(userEmail, 'This Email field is required.');
    } else {
        setSuccessFor(userEmail);
    }

    if (valuePhone === '') {
        setErrorFor(userPhone, 'This field is required.');
    } else if (!isNumber(valuePhone)) {
        setErrorFor(userPhone, 'Invalid phone number.');
    } else {
        setSuccessFor(userPhone);
    }

    if (
        valueName &&
        valueEmail &&
        valuePhone !== '' &&
        isEmail(valueEmail) &&
        isNumber(valuePhone)
    ) {
        userName.value = '';
        userEmail.value = '';
        userPhone.value = '';
        removeStyle(userName);
        removeStyle(userEmail);
        removeStyle(userPhone);
        modalClose.classList.remove('open');
        modalThank.classList.add('open');
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.className = 'form_control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form_control success';
}

function removeStyle(input) {
    const formControl = input.parentElement;
    formControl.className = 'form_control';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email,
    );
}

function isNumber(number) {
    return /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(number);
}

const modal = document.querySelector('.modal');
const close = document.querySelector('.close_modal');
const btns = document.querySelectorAll('.form__button');

btns.forEach((element) => {
    element.addEventListener('click', () => {
        modal.classList.add('open');
        close.addEventListener('click', () => {
            userName.value = '';
            userEmail.value = '';
            userPhone.value = '';
            removeStyle(userName);
            removeStyle(userEmail);
            removeStyle(userPhone);
            modal.classList.remove('open');
        });
    });
});

// закрытия модалки на кнопку ESC

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        userName.value = '';
        userEmail.value = '';
        userPhone.value = '';
        removeStyle(userName);
        removeStyle(userEmail);
        removeStyle(userPhone);
        modal.classList.remove('open');
    }
});

const modalThank = document.querySelector('.modal__thank_you');
const modalThankButton = document
    .querySelector('.modal__thank_button')
    .addEventListener('click', () => {
        modalThank.classList.remove('open');
    });

// burger-menu

let burger = document.querySelector('.burger__bar');
let myNav = document.getElementById('myNav');
let closeBtn = document.querySelector('.overlay__img');

burger.addEventListener('click', () => {
    myNav.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    myNav.classList.remove('open');
});

// Шапка

const header = document.querySelector('.js-header');
const headerH = document.querySelector('.js-header').offsetHeight;

console.log(headerH);

document.onscroll = () => {
    let scroll = window.scrollY;

    if (scroll > headerH) {
        header.classList.add('fixed');
        document.body.marginTop = headerH + 'px';
    } else {
        header.classList.remove('fixed');
        document.body.removeAttribute('style');
    }

    console.log(scroll);
};
