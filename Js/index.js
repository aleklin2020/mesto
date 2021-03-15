import {Validate} from "./validate.js"
import {Card} from "./Card.js"
const profilePopup = document.querySelector('.profile-popup'); // popup редактирование профиля
const nameInput = document.querySelector('.form__input_name'); 
const jobInput = document.querySelector('.form__input_job');
const popUpEditButton = document.querySelector('.profile__bedit-button'); // кнопка редактирования профиля
const profileCloseButton = profilePopup.querySelector('.popup__close-icon'); 
const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__profession'); 
const newCardPopup = document.querySelector('.popup_element'); // popup добавление фото
const imgPopup = document.querySelector('.popup_open-blocks'); // popup открытой карточки
const imgCloseButton = imgPopup.querySelector('.popup__close-icon'); // Клавиша закрытия открытой фотографии
const photoCloseButton = newCardPopup.querySelector('.popup__close-icon'); // кнопка закрытия фото
const popUpAddButton = document.querySelector('.profile-informashion__button'); // кнопка добавления фото
const formElement = profilePopup.querySelector('.form');
const formPhoto = newCardPopup.querySelector('.form'); 
const imgName = newCardPopup.querySelector('.form__input_name');
const imgLink = newCardPopup.querySelector('.form__input_job');
const photoElement = document.querySelector('.elements');
const imgTemplate = document.querySelector('#element');
const popupes = Array.from(document.querySelectorAll('.popup'));
const imageLink = document.querySelector('.popup__image')
const titleLink = document.querySelector('.popup__titles')
const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input_visible'
};
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

// Функция передачи имени в попап редактирования профиля 
function infoPopuppProfile() { 
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}
infoPopuppProfile(profilePopup)
// Функция открытия попап редактирования профиля
popUpEditButton.addEventListener('click', () => {
  openPopup(profilePopup);
  // Валидация popup редактирования формы
  const formProfileValid = new Validate(validationConfig,formElement )
  formProfileValid.checkInputValidity();
})
// Добавление информаций из попап в профиль
function submitProfileForm(evt) {
  evt.preventDefault()
  nameProfile.textContent = (nameInput.value)
  jobProfile.textContent = (jobInput.value)
  closePopup(profilePopup)
} 
// Добавление карточки из popup export card
function newCardsElement (item) {
  const cardes = new Card (item, imgTemplate, openPopupFull);
  const newCard = cardes.generateCards();
  return newCard;
}
function addCard(evt) {
  evt.preventDefault()
  const inputTitle = imgName.value;
  const inputLink = imgLink.value;
  const photoItem = ({name: inputTitle, link: inputLink})
  photoElement.prepend(newCardsElement(photoItem));
  formPhoto.reset()
  closePopup(newCardPopup)
}
// добавление карточек из массива
initialCards.forEach(item => {
  photoElement.prepend(newCardsElement(item));
})
// Открытие картинок
function openPopupFull (link , name) {
 openPopup(imgPopup)
 imageLink.src = link
 imageLink.alt = link
 titleLink.textContent = name
}
// Открытие popup добавление card + валидация формы
popUpAddButton.addEventListener('click', () => {
  openPopup(newCardPopup)
  const formCardValid = new Validate(validationConfig,formPhoto)
  formCardValid.checkInputValidity();
})
// Открытия попапов
const openPopup = (popupElement) => {
  popupElement.classList.add('popup_opened');
  document.addEventListener("keydown" , keyEscape)
} 
// закрытия попап
const closePopup = (popupElement) => {
  popupElement.classList.remove('popup_opened')
  document.removeEventListener('keydown', keyEscape);
} 
profileCloseButton.addEventListener("click", () => closePopup(profilePopup))

photoCloseButton.addEventListener('click', () => closePopup(newCardPopup))

imgCloseButton.addEventListener('click', () => closePopup(imgPopup))
// ___________________ Конец закрытия попапов ___________//
// Отправка форм
formElement.addEventListener('submit', submitProfileForm);
formPhoto.addEventListener('submit', addCard);
// Закрытие popup кликом на esc и mouse 
popupes.forEach(popup => popup.addEventListener('mousedown', event => {
  if (event.target === event.currentTarget) {
    closePopup(popup);
  }
}));
// Закрытия кнопкой esc
function keyEscape (evt) {
 if (evt.key === "Escape") {
  closePopup(document.querySelector(".popup_opened"));
}
}