let formElement = document.querySelector(".popup")// popup редактирование профиля
let nameInput = document.querySelector(".form__input_name")
let jobInput = document.querySelector(".form__input_job")
let formOpen = document.querySelector(".profile__bedit-button")
let formClose = formElement.querySelector(".popup__close-icon")//Кнопка закрытия редактирования профиля
let nameProfile = document.querySelector(".profile__name")
let jobProfile = document.querySelector(".profile__profession")
const popupElement = document.querySelector(".popup_element"); // popup добавление карточек
const blockMini = document.querySelector(".popup_open-blocks"); // popup открытия карточек
const elementClose = popupElement.querySelector(".popup__close-icon");// кнопка закрытия добавления карточек
const blocksClose = blockMini.querySelector(".popup__close-icon"); // Кнопка закрытия блока карточки

// Открытие добавление карточек
function open () { 
	formElement.classList.add("popup_opened")
	nameInput.value = (nameProfile.textContent)
	jobInput.value = (jobProfile.textContent)
}
// ___________________________

// Редактирование профиля
function formSubmitHandler (evt) {
	evt.preventDefault(); 
	nameProfile.textContent = (nameInput.value)
	jobProfile.textContent = (jobInput.value)
	formElement.classList.remove("popup_opened") 
}

formOpen.addEventListener('click', open);
formElement.addEventListener('submit', formSubmitHandler); 
// 5 работа
const elementOpen = document.querySelector(".profile-informashion__button")// Кнопка открытие добавление карточек
const blockElements = document.querySelector(".elements");
const popupBlockTitle = popupElement.querySelector(".form__input_name");
const popupBlockImage = popupElement.querySelector(".form__input_job");
//Открытие попап
elementOpen.addEventListener("click", () => popupElement.classList.add("popup_opened"));

function addElemt (evt) {
	evt.preventDefault(); 
const elementTemplate = document.querySelector("#element").content;
const elementBlock = elementTemplate.querySelector(".element").cloneNode(true);
//Добавление карточки
const elementImage = elementBlock.querySelector(".element__image");
const elementTitle = elementBlock.querySelector(".element__title");
elementImage.src = popupBlockImage.value;
elementTitle.textContent = popupBlockTitle.value;
blockElements.prepend(elementBlock);
popupElement.classList.remove("popup_opened")
//Обнуление
popupBlockImage.value = " ";
popupBlockTitle.value = " ";
// Проставление Like
const likeButton = elementBlock.querySelector(".element__vector-like");
likeButton.addEventListener("click", evt => evt.target.classList.toggle('element__vector-active'))
//Удаление block
const removBlock = elementBlock.querySelector(".elemenet__icon-delete")
removBlock.addEventListener("click", () => {
	const dellete = removBlock.closest(".element");
	dellete.remove();
})
//Открытие блока

elementImage.addEventListener("click", (evt) => {

	blockMini.classList.add("popup_opened");
	const blockImg = blockMini.querySelector(".popup__image");
const blockTitle = blockMini.querySelector(".popup__titles");
	blockImg.src = (elementImage.src);
	blockTitle.textContent = (elementTitle.textContent);

});
}
popupElement.addEventListener("submit", addElemt)
// Массив карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

initialCards.map((element) =>{
const elementTemplate = document.querySelector("#element").content;
const elementBlock = elementTemplate.querySelector(".element").cloneNode(true);
const elementImage = elementBlock.querySelector(".element__image");
const elementTitle = elementBlock.querySelector(".element__title");
elementImage.src = element.link;
elementTitle.textContent = element.name;

 blockElements.prepend(elementBlock);

// Проставление Like
const likeButton = elementBlock.querySelector(".element__vector-like");
likeButton.addEventListener("click", (evt) => evt.target.classList.toggle('element__vector-active'))

//Удаление block
const removBlock = elementBlock.querySelector(".elemenet__icon-delete")
removBlock.addEventListener("click", () => {
	const dellete = removBlock.closest(".element");
	dellete.remove();
})
//Открытие блока
const blockMini = document.querySelector(".popup_open-blocks")
elementImage.addEventListener("click", (evt) => {

	blockMini.classList.add("popup_opened");
	const blockImg = blockMini.querySelector(".popup__image");
const blockTitle = blockMini.querySelector(".popup__titles");
	blockImg.src = (elementImage.src);
	blockTitle.textContent = (elementTitle.textContent);

});

});
formClose.addEventListener("click" , close);
//закрытие popUpp ALL
const popupClose = (popupClos) => {popupClos.classList.remove("popup_opened")}
formClose.addEventListener("click", () => popupClose(formElement) ) //Закрытие редактирование блока
elementClose.addEventListener("click", () => popupClose(popupElement) ) // закрытие добавление карточек
blocksClose.addEventListener("click", () => popupClose(blockMini) ) //Закрытие блока 




