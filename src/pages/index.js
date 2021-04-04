
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
formProfileValid.checkInputValidity()
const formCardValid = new FormValidator(validationConfig,formPhoto)
formCardValid.checkInputValidity();
const popupWithImage = new PopupWithImage(imgPopup)
popupWithImage.setEventListeners()
const userinfo = new UserInfo (nameProfile, jobProfile)
// Новый код редактирования профиля
// Функция передачи имени в попап редактирования профиля 
const profilePopupEdit = new PopupWithForm(profilePopup, popupEdit);
profilePopupEdit.setEventListeners()

function popupEdit(name) {
   const nameProfileInput = name[0];
   const infoProfileInput = name[1];
  userinfo.setUserInfo(nameProfileInput, infoProfileInput)
  profilePopupEdit.close()
} 
  popUpEditButton.addEventListener("click", () => {
      const author = userinfo.getUserInfo()
      // Вставка значений в попап
     nameInput.value = author.name;
      jobInput.value = author.info;    
      profilePopupEdit.open()
      formProfileValid.clearValid()
    }) 
// добавление карточек из попап 
// отрисовка карточек пр загрузки из массива 
const photoPopupAdd = new PopupWithForm(newCardPopup, submitPhotoAdd);
photoPopupAdd.setEventListeners()
popUpAddButton.addEventListener('click', () => {
  photoPopupAdd.open()
  // Валдиация popup card
  formCardValid.clearValid()
})
const cardList = new Section({
  items: initialCards,
  renderer: (cardItem) => {
    const newCard = createCard(cardItem)
    cardList.addItem(newCard);
  }
}, photoElSelector); // Отрисовка карточек при загрузке страницы
cardList.render();

// добавление фото
function submitPhotoAdd() {
  const inputTitle = imgName.value;
  const inputLink = imgLink.value;
  const photoItem = ({name: inputTitle, link: inputLink})
  photoElement.prepend(createCard(photoItem))
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