const profilePopup = document.querySelector('.profile-popup'); // popup редактирование профиля
const nameInput = profilePopup.querySelector('.form__input_name'); 
const jobInput = profilePopup.querySelector('.form__input_job');
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
const profileAvatar = document.querySelector(".profile__avatar")
const profileAvatarButton = document.querySelector(".profile__avatar-button")
const avatarPopup = document.querySelector(".popup_avatar")
const likeText = document.querySelector(".element__like")
const photoElSelector = '.elements'
const popupDelete = document.querySelector(".popup_delete")
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

const options = {
    link: 'cohort-25',
    token: {
        authorization: 'e46362ce-1599-486f-9051-b9d59ed9a09d',
        'Content-Type': 'application/json',
    },
}

export {
  profilePopup,
  nameInput,
  jobInput,
  popUpEditButton,
  profileCloseButton,
  nameProfile,
  jobProfile,
  newCardPopup,
  imgPopup,
  imgCloseButton,
  photoCloseButton,
  popUpAddButton,
  formElement,
  formPhoto,
  imgName,
  imgLink,
  photoElement,
  imgTemplate,
  popupes,
  imageLink,
  titleLink,
  photoElSelector,
  validationConfig,
  initialCards,
  options,
  profileAvatar,
  profileAvatarButton,
  avatarPopup,
  likeText,
  popupDelete
}

