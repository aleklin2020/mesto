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
function submitProfileForm(evt) {
  evt.preventDefault()
  nameProfile.textContent = (nameInput.value)
  jobProfile.textContent = (jobInput.value)
  PopupClose(profilePopup)
} 


// оснавная функция добавление карточек
function getElement(item) {
  const newElement = imgTemplate.content.cloneNode(true)
  const imgElement = newElement.querySelector('.element__image')
  const titleElement = newElement.querySelector('.element__title')

  titleElement.textContent = item.name
  imgElement.src = item.link
  imgElement.alt = item.name

// Лайки ________
  const likeButton = newElement.querySelector('.element__vector-like');
  likeButton.addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__vector-active')
  }) 
// Удаления
  const removeButton = newElement.querySelector('.elemenet__icon-delete');
  removeButton.addEventListener('click', CardDelete); 

  const imageLink = document.querySelector('.popup__image')
  const titleLink = document.querySelector('.popup__titles')

  imgElement.addEventListener('click', () => {
    PopupOpen(imgPopup)
    imageLink.src = imgElement.src
    titleLink.textContent = titleElement.textContent
  })
  return newElement;
}


// Функция добавление карточек из массива
function getiInitialCards() {
  const cardsMas = initialCards
    .map(getElement)
  photoElement.append(...cardsMas)
}
getiInitialCards();


// Функция добавление карточек из попап
function PhotoAdd(evt) {
  evt.preventDefault()

  const inputTitle = imgName.value;
  const inputLink = imgLink.value;

  const photoItem = getElement({name: inputTitle, link: inputLink})
  photoElement.prepend(photoItem);

  formPhoto.reset()


  PopupClose(newCardPopup)

} 


// Функция удаления карточек
function CardDelete(event) {
  const targetElement = event.target;
  const targetItem = targetElement.closest('.element');
  targetItem.remove();
}
// ______________Конец функция __________
// Открытия попапов
const PopupOpen = (popupElement) => {
  popupElement.classList.add('popup_opened');
} 
popUpAddButton.addEventListener('click', () => PopupOpen(newCardPopup))
// Добавление информаций из попап в профиль
popUpEditButton.addEventListener('click', () => {
	PopupOpen(profilePopup);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
})



// функция закрытия попап

const PopupClose = (popupElement) => {
  popupElement.classList.remove('popup_opened')
} 

profileCloseButton.addEventListener("click", () => PopupClose(profilePopup))

photoCloseButton.addEventListener('click', () => PopupClose(newCardPopup))

imgCloseButton.addEventListener('click', () => PopupClose(imgPopup))
// ___________________ Конец закрытия попапов ___________//



// Отправка форм
formElement.addEventListener('submit', submitProfileForm);
formPhoto.addEventListener('submit', PhotoAdd);




