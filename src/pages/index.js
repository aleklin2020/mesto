
import {FormValidator} from "../components/FormValidator.js"
import {Card} from "../components/Card.js"
import Popup from "../components/Popup.js"
import {PopupWithForm} from "../components/PopupWithForm.js"
import PopupWithImage from "../components/PopupWithImage.js"
import Section from "../components/Section.js"
import {PopupDelete} from "../components/PopupDelete.js"
import {Api} from "../components/Api.js"
import {UserInfo} from "../components/UserInfo.js"
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
  initialCards,
  options,
  profileAvatar,
  avatarPopup,
  formAvatar,
  profileAvatarButton,
  likeText,
  popupDelete
} from "../utils/Variables.js"
import "./index.css"

// const Id = "9c0dbb72d80d42e884c384e73fd8a43f";
// Экземпляры валидаций форм
const formAvatarValid = new FormValidator(validationConfig,avatarPopup )
formAvatarValid.enabelValidation(); 
const formProfileValid = new FormValidator(validationConfig,formElement)
formProfileValid.enabelValidation()
const formCardValid = new FormValidator(validationConfig,formPhoto)
 formCardValid.enabelValidation();
// изменения кнопки сохранить 
function renderLoading(isLoading) {
    const newButtonName = document.querySelector('.popup_opened .form-save');
    const staticContent = newButtonName.querySelector('.form__submit_loaded');
    const processContent = newButtonName.querySelector('.form__submit_loading');
    if(isLoading) {
        staticContent.classList.add('popup__submit-hidden');
        processContent.classList.add('popup__submit-active');
    } else {
        staticContent.classList.remove('popup__submit-hidden');
        processContent.classList.remove('popup__submit-active');
    }
}
const userData =  new UserInfo (
  nameProfile,
  jobProfile,
  profileAvatar
);
// получаем данные профиля с сервера
const api = new Api(options)
let Id;
// обновление данных профиля с сервера
Promise.all([api.getUserInform(), api.getIntialCards()])
  .then(([profile, initialCards]) => {
        Id = profile._id;
        userData.setUserInfo(profile.name, profile.about);
        userData.setAvatar(profile.avatar);
        cardList.render(initialCards)        
  })
  .catch((err) => {
        console.log(err);
    });
  const cardList = new Section({
  renderer: (cardItem) => {
    const newCard = createCard(cardItem)
    cardList.prependItem(newCard);
  }
}, photoElSelector); 
// обновление фотографий пользователя
profileAvatarButton.addEventListener("click", () =>  {
  newAvatar.open() 
  formAvatarValid.clearValid()
})
// Функция передачи имени в попап редактирования профиля 
const profilePopupEdit = new PopupWithForm(profilePopup, (info) => {
  renderLoading(true);
  api.setUserInform(info.name, info.profession)
  .then(data => {
    userData.setUserInfo(data.name, data.about)
    renderLoading(false);
    profilePopupEdit.close();
    
  })
    .catch((err) => {
    console.log(err);
  })
});
profilePopupEdit.setEventListeners()
// обновление аватара на сервере
const newAvatar = new PopupWithForm( avatarPopup, (info) => {
  renderLoading(true);
  api.getAvatarProfile(info)
  .then(data => {
    
   userData.setAvatar(data.avatar)
   renderLoading(false);
   newAvatar.close();
  })
  .catch((err) => {
    console.log(err);
  })
})
newAvatar.setEventListeners()
// обновление текста в input редактирования профиля
  function openPopupText() {
const givePopupProfile = userData.getUserInfo();
      nameInput.value = givePopupProfile.userName;
      jobInput.value = givePopupProfile.userProfession;
      profilePopupEdit.open()
      formProfileValid.clearValid()
   }     
popUpEditButton.addEventListener("click", () => openPopupText()) // доработать
// создаем попап открытой карточки full
const popupWithImage = new PopupWithImage(imgPopup)
popupWithImage.setEventListeners(); 
// создание новых карточек
function createCard(item) {
  const newCard = new Card(item, imgTemplate, {
    openPopupFull: (name, link) => {
      popupWithImage.open(item.name, item.link)
    }

  } , Id, {
         addLike: (Id, likeText, like) => {
            api.addLike(Id)
            .then(data => {
                likeText.textContent = data.likes.length; 
                like.classList.toggle("element__vector-active");
            })
            .catch((err) => {
    console.log(err);
  })
        }
    }, {
        deleteLike: (Id, likeText, like) => {
            api.deleteLike(Id)
            .then(data => {
                likeText.textContent = data.likes.length; 
                like.classList.toggle('element__vector-active');
            })
            .catch((err) => {
    console.log(err);
  })
           
        }
    }, {
        deleteCardClick: (cardId, element) => {
            popupDeleteOpen.open(cardId, element);
        }
    });
  const newUserCard = newCard.generateCards();
  return newUserCard;
}
//создание экземпляра popup с функционалом popupDelete
const popupDeleteOpen = new PopupDelete(popupDelete, {
    deleteCardClick: (cardId, delElement) => {
        api.deleteCard(cardId)
        .then(data => {
            delElement.remove();
            popupDeleteOpen.close();        
        })
        .catch((err) => {
    console.log(err);
  })
    }
});
popupDeleteOpen.setEventListeners();
// добавление карточек из попап 
const photoPopupAdd = new PopupWithForm(newCardPopup, (info) => {
  renderLoading(true);
  api.photoAddServer(info.name, info.link)
  .then(data => {
  cardList.prependItem(createCard(data));
  renderLoading(false);
  photoPopupAdd.close()
  })
  .catch((err) => {
    console.log(err);
  })
});
photoPopupAdd.setEventListeners()
popUpAddButton.addEventListener('click', () => {
  photoPopupAdd.open()
  // Валдиация popup card
formCardValid.clearValid()
})

