gsap.defaults({delay: 0, ease: "power1", duration: 0.4});
const tl = gsap.timeline()


const isSellerInput = document.getElementById('isSeller'),
      sellerInfoContainer = document.getElementById('sellerInfoContainer');

isSellerInput.onclick = () => {
  sellerInfoContainer.classList.toggle("sellerInfoContainerUsable");
}
const signUpForm = document.getElementById('signUpForm'),
      signUp     =     document.getElementById('signUp'),
      logInForm  =  document.getElementById('logInForm'),
      logIn      =      document.getElementById('logIn');

let animStarted = false;

const toggleCollapse = (elem1, elem2) => {
  if (animStarted) return;
  console.log(animStarted, 'yes');
  tl.to(elem1, {
    height: 0,
    opacity: 0
  })
  .to(elem2, {
    height: 'auto',
    opacity: 1
  })
  animStarted = true;
}
tl.eventCallback("onComplete", () => {
  animStarted = false
})

logIn.onclick = () => {
  toggleCollapse(signUpForm, logInForm);
}
signUp.onclick = () => {
  toggleCollapse(logInForm, signUpForm);
}