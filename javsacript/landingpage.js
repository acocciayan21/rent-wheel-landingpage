// CLOSING AND OPENING NAVBAR
const openbtn = document.querySelector('.hamburger-menu');
const closebtn = document.querySelector('.close-navbar');
const navbar = document.querySelector('.navbar-menu');

function openNavbar() {
    navbar.classList.add('active'); 
    document.body.style.overflow = 'hidden'
}

function closeNavbar() {
    navbar.classList.remove('active'); 
    document.body.style.overflow = '';
}

openbtn.addEventListener('click', openNavbar);
closebtn.addEventListener('click', closeNavbar);

document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target) && !openbtn.contains(event.target)) {
        closeNavbar();
    }
});


//NAVBAR-MENU GO TO SECTION
function scrollToSection(section) {

    closeNavbar();
    
    const targetSection = document.querySelector(`.${section}`);

    // Scroll to the target section smoothly
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }

}


//SHOW HEADER WHEN SCROLL UP
const header = document.querySelector('header'); 
let lastScrollPosition = 0;

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
        header.style.top = '-100px'; 
    } else {
        header.style.top = '0';
    }

    lastScrollPosition = currentScrollPosition;
});


//SHOW AND CLOSE LOG-IN FORM

const loginForm = document.querySelector('.log-in');
const closeLogInBtn = document.querySelector('close-LogIn');
function showLogIn() {
    loginForm.style.display = 'flex'
     document.body.style.overflow = 'hidden'
     closeSignUp()
}
function closeLogIn() {
     loginForm.style.display = 'none'
     document.body.style.overflow = '';
}

//SHOW AND CLOSE SIGN UP FORM
const signUpForm = document.querySelector('.sign-up');
const closeSignUpBtn = document.querySelector('close-SignUp');
function showSignUp() {
    signUpForm.style.display = 'flex'
    document.body.style.overflow = 'hidden'
    closeLogIn()
}
function closeSignUp() {
     signUpForm.style.display = 'none'
     document.body.style.overflow = '';
}

//SHOW AND CLOSE CODE FORM
const codeForm = document.querySelector('.code-form-container');
const signUpSubmit = document.querySelector('.sign-up-submit');

function showCodeForm() {
    codeForm.style.display = 'flex'
}
function closeCodeForm() {
    codeForm.style.display = 'none'
}

//CODE FORM FUNCTION
const inputs = document.querySelectorAll(".code-form-input-fields input");
const clearButton = document.querySelector(".action-btns .clear");

inputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
    const currentValue = e.target.value;
    if (currentValue && index < inputs.length - 1) {
        inputs[index + 1].focus(); // Move focus to the next input
    } else if (currentValue.length === 0 && index > 0) {
        inputs[index - 1].focus(); // Move focus back to the previous input if cleared
    }
    });

    input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && index > 0 && input.value === "") {
        inputs[index - 1].focus(); // Handle backspace to move to the previous input
    }
    });
});



clearButton.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default link behavior
    inputs.forEach((input) => {
      input.value = ""; // Clear each input
    });
    inputs[0].focus(); // Return focus to the first input
  });

  



