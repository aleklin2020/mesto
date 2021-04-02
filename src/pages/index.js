
import {FormValidator} from "../components/FormValidator.js"
import {Card} from "../components/Card.js"
import UserInfo from "../components/UserInfo.js"
import Popup from "../components/Popup.js"
import {PopupWithForm} from "../components/PopupWithForm.js"
import PopupWithImage from "../components/PopupWithImage.js"
import Section from "../components/section.js"
import {
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
  initialCards
} from "../utils/variables.js"
import "./index.css"


// Экземпляры валидаций форм
const formProfileValid = new FormValidator(validationConfig,formElement )
const formCardValid = new FormValidator(validationConfig,formPhoto)
const popupWithImage = new PopupWithImage(imgPopup)
popupWithImage.setEventListeners()

// Новый код редактирования профиля
// Функция передачи имени в попап редактирования профиля 
const popup = new Popup(profilePopup)
popup.setEventListeners()

  popUpEditButton.addEventListener("click", () => {
    formProfileValid.checkInputValidity()
      const userinfo = new UserInfo (nameProfile, jobProfile)
      const author = userinfo.getUserInfo()
      // Вставка значений в попап
     nameInput.value = author.name;
      jobInput.value = author.info;
      
      popup.open()
    })
//Функция обновление данных попап редактирования профиля 
formElement.addEventListener("submit" , (evt) => {
  const userinfo = new UserInfo (nameProfile, jobProfile)
  evt.preventDefault()
  userinfo.setUserInfo(nameInput, jobInput)
  popup.close();
})
// добавление карточек из попап 
// отрисовка карточек пр загрузки из массива 
const photoPopupAdd = new PopupWithForm(newCardPopup, submitPhotoAdd);
photoPopupAdd.setEventListeners()
popUpAddButton.addEventListener('click', () => {
  photoPopupAdd.open()
  // Валдиация popup card
  formCardValid.checkInputValidity();
})


const cardList = new Section({
  items: initialCards,
  renderer: (cardItem) => {
    const newCard = new Card(cardItem, imgTemplate, {
      openPopupFull: (name, link) => {
        popupWithImage.open(name, link)
      }
    });
    const cardElement = newCard.generateCards();
    cardList.addItem(cardElement);
  }
}, photoElSelector); // Отрисовка карточек при загрузке страницы
cardList.render();




// добавление фото
function submitPhotoAdd() {

  const inputTitle = imgName.value;
  const inputLink = imgLink.value;

  const photoItem = ({name: inputTitle, link: inputLink})
  photoElement.prepend(createCard(photoItem));

  formPhoto.reset()
  photoPopupAdd.close()
}







function createCard(item) {
  const newCard = new Card(item, imgTemplate, {
    openPopupFull: (name, link) => {
      popupWithImage.open(name, link)
    }
  })
  const newUserCard = newCard.generateCards();
  return newUserCard;
}









/*
старый код

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

*/
/*
// Открытие картинок
function openPopupFull (link , name) {
 openPopup(imgPopup)
 imageLink.src = link
 imageLink.alt = link
 titleLink.textContent = name
}


// открытие карточек новый код 
const imagePopup = new PopupWithImage(imgPopup);
const handleCardClick = (link, name) => {
  imagePopup.open(link, name);
};

// Открытие popup добавление card
popUpAddButton.addEventListener('click', () => {
  openPopup(newCardPopup)
  // Валдиация popup card
  formCardValid.checkInputValidity();
})
*/

/*
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
//Закрытие popup ALL
popupes.forEach((popup) => {
          popup.addEventListener('click', (event) => {
              if (event.target.classList.contains('popup_opened')) {
                  closePopup(popup)
              }
              if (event.target.classList.contains('popup__close-icon')) {
                closePopup(popup)
              }
              // Закрытие кликом вне popup
               if (event.target === event.currentTarget) {
               closePopup(popup);
               }
          })
      })
 
*/

// ___________________ Конец закрытия попапов ___________//
// Отправка форм
/*
formElement.addEventListener('submit', submitProfileForm);
formPhoto.addEventListener('submit', addCard);
*/
// Закрытия кнопкой esc
/*
function keyEscape (evt) {
 if (evt.key === "Escape") {
  closePopup(document.querySelector(".popup_opened"));
}*/
