const btn = document.querySelector('.info__newsletter-submit');
const failIcon = document.querySelector('.error');
const returnText = document.querySelector('.return-text');
const input = document.querySelector('.info__newsletter-input');
const handleError = () =>
{
 const mailPattern = /[@]/;
 if(input.value.match(mailPattern) && input.value != "")
 {
    returnText.textContent = "Thanks for register!";
 }
 else
 {
    returnText.classList.add('error');
    input.style.borderColor = 'red';
    returnText.textContent = "Please provide a valid email";
 }
}
btn.addEventListener('click', handleError);