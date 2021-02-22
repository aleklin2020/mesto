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
  closePopup(profilePopup)
} 

// Добавление информаций из попап в профиль
popUpEditButton.addEventListener('click', () => {
	openPopup(profilePopup);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
})


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
  removeButton.addEventListener('click', deleteCard); 

  const imageLink = document.querySelector('.popup__image')
  const titleLink = document.querySelector('.popup__titles')

  imgElement.addEventListener('click', () => {
    openPopup(imgPopup)
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
function addCard(evt) {
  evt.preventDefault()

  const inputTitle = imgName.value;
  const inputLink = imgLink.value;

  const photoItem = getElement({name: inputTitle, link: inputLink})
  photoElement.prepend(photoItem);

  formPhoto.reset()


  closePopup(newCardPopup)

} 
popUpAddButton.addEventListener('click', () => openPopup(newCardPopup))

// Функция удаления карточек
function deleteCard(event) {
  const targetElement = event.target;
  const targetItem = targetElement.closest('.element');
  targetItem.remove();
}
// ______________Конец функция __________
// Открытия попапов
const openPopup = (popupElement) => {
  popupElement.classList.add('popup_opened');
  document.addEventListener("keydown" , keyEscape)
} 




// функция закрытия попап

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

function keyEscape (evt) {
	 if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
}




