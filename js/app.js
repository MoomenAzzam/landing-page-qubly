// toggle about menu in nav
const svg = document.querySelector(
    "nav  div.right-itme  .links   li  span  svg"
);
const about = document.querySelector(
    "body > div:nth-child(1) > nav > div > div.right-itme > ul > li > a"
);
const menu = document.querySelector("nav .container .links li span .menu");
about.addEventListener("click", () => {
    svg.classList.toggle("active");
    if (svg.classList.contains("active")) {
        menu.style.opacity = 1;
        menu.style.display = "block";
    } else {
        menu.style.opacity = 0;
        menu.style.display = "none";
    }
});

const menuIcone = document.querySelector(
    " nav > div > div.right-itme > div.menu-toggle"
);
menuIcone.addEventListener("click", () => {
    menuIcone.classList.toggle("active");
    if (menuIcone.classList.contains("active")) {
        document.querySelector("nav .right-itme .links").style.display =
            "block";
    } else {
        document.querySelector("nav .right-itme .links").style.display = "none";
    }
});

// inputs validation in signup section
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const inputReTypePassword = document.getElementById("re-type-password");
const submitBtn = document.getElementById("submit-signup-form");

// Regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (!emailRegex.test(inputEmail.value)) {
        inputEmail.classList.add("is-invalid");
    } else {
        inputEmail.classList.remove("is-invalid");
    }
    if (!passwordRegex.test(inputPassword.value)) {
        inputPassword.classList.add("is-invalid");
    } else {
        inputPassword.classList.remove("is-invalid");
    }
    if (
        inputReTypePassword.value === "" ||
        inputReTypePassword.value == inputPassword.value
    ) {
        inputReTypePassword.classList.toggle("is-invalid");
    }
});

// fixed nav when scroll

const nav = document.getElementById("nav");

addEventListener("scroll", () => {
    if (parseInt(window.pageYOffset) > 200) {
        nav.classList.add("fixed-nav");
    } else {
        nav.classList.remove("fixed-nav");
    }
});

// AOS Animate
AOS.init({
    duration: 300,
    offset: 100,
});
