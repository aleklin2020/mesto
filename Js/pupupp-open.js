let formElement = document.querySelector(".popup")
let nameInput = document.querySelector(".form__input_name")
let jobInput = document.querySelector(".form__input_job")
let formOpen = document.querySelector(".profile__bedit-button")
let formClose = document.querySelector(".popup__close-icon")
let nameProfile = document.querySelector(".profile__name")
let jobProfile = document.querySelector(".profile__profession")
function open () { 
	formElement.classList.add("popup_opened")
	nameInput.value = (nameProfile.textContent)
	jobInput.value = (jobProfile.textContent)
}
function close () {
	formElement.classList.remove("popup_opened")
}	

function formSubmitHandler (evt) {
	evt.preventDefault(); 
	nameProfile.textContent = (nameInput.value)
	jobProfile.textContent = (jobInput.value)
	formElement.classList.remove("popup_popup_opened") 
}
formClose.addEventListener("click" , close);
formOpen.addEventListener('click', open);
formElement.addEventListener('submit', formSubmitHandler); 





