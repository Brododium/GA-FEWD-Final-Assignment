// codes the dark mode button to set the background grey and text white, and sets the light button to make the background white and text black. Also alternates the GH logo image and indicates which mode is currently on by changing the opacity of the svg images (darker icon is mode selected)

const darkButton = document.querySelector('#dark-button');
const lightButton = document.querySelector("#light-button");
const regLink = document.querySelector('#register-link')
const logo = document.querySelector('.gh-logo');

function selectDark() {
  document.body.style.backgroundColor = 'gray';
  document.body.style.color = 'white';
  lightButton.style.opacity = '50%';
  lightButton.style.backgroundColor = 'gray';
  darkButton.style.opacity = '100%';
  darkButton.style.backgroundColor = 'gray';
  logo.src = 'images/ghicon-dark.png';
  logo.style.backgroundColor = 'gray';
  regLink.style.color = 'white';
  acknowledgePage.style.color = 'white';

}

function selectLight() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
  lightButton.style.opacity = '100%';
  lightButton.style.backgroundColor = 'white';
  darkButton.style.opacity = '30%';
  darkButton.style.backgroundColor = 'white';
  logo.src = 'images/ghicon.png';
  logo.style.backgroundColor = 'white';
  regLink.style.color = 'black';
}

darkButton.addEventListener("click", selectDark);
lightButton.addEventListener("click", selectLight);



//checks that the passwords entered into both fields in the form match, otherwise it disables the submit button

const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const form = document.getElementById('create-profile');
const submitButton = document.getElementById('submit-button');


confirmPasswordInput.addEventListener('input', () => {
  if (passwordInput.value === confirmPasswordInput.value) {
    submitButton.disabled = false;
    confirmPasswordInput.setCustomValidity('');
  } else {
    submitButton.disabled = true;
    confirmPasswordInput.setCustomValidity('Passwords do not match.');
  }
});



  const register = document.querySelector('#register')
  const registerCloseBtn = document.querySelector('#register-close-btn')
  const registerTrigger = document.querySelector('#register-link')
  const initialDisplay = "flex"

  function hideRegister () {
    register.style.display = 'none'
    document.body.classList.remove('register-open')
  }

  function showRegister() {
    register.style.display = initialDisplay
    document.body.classList.add('register-open')
  }

  hideRegister()
  registerTrigger.addEventListener('click', showRegister)
  registerCloseBtn.addEventListener('click',hideRegister)

