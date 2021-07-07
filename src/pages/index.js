
import {FormValidator} from "../components/FormValidator.js"
import {Card} from "../components/Card.js"
import UserInfo from "../components/UserInfo.js"
import Popup from "../components/Popup.js"
import {PopupWithForm} from "../components/PopupWithForm.js"
import PopupWithImage from "../components/PopupWithImage.js"
import Section from "../components/section.js"
import {PopupDelete} from "../components/PopupDelete.js"
import {Api} from "../components/api.js"
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
} from "../utils/variables.js"
import "./index.css"

// const Id = "9c0dbb72d80d42e884c384e73fd8a43f";
// Экземпляры валидаций форм
const formAvatarValid = new FormValidator(validationConfig,avatarPopup )
formAvatarValid.checkInputValidity(); 
const formProfileValid = new FormValidator(validationConfig,formElement)
formProfileValid.checkInputValidity()
const formCardValid = new FormValidator(validationConfig,formPhoto)
 formCardValid.checkInputValidity();








// создаем попап открытой карточки full
const popupWithImage = new PopupWithImage(imgPopup)
popupWithImage.setEventListeners(); 


const userinfo = new UserInfo (nameProfile, jobProfile)



// Новый код редактирования профиля
// обновление фотографий пользователя
const userInfoAvatar = new UserInfo (profileAvatar)
const newAvatar = new PopupWithForm( avatarPopup, (info) => {
  api.getAvatarProfile(info)
  .finally (() => {
    userInfoAvatar.setAvatar(info.linkAvatar)
  })
})
newAvatar.setEventListeners()
profileAvatarButton.addEventListener("click", () =>  {
  newAvatar.open() 
  formAvatarValid.clearValid()
})




// тут был код 1




// Функция передачи имени в попап редактирования профиля 
const profilePopupEdit = new PopupWithForm(profilePopup, (info) => {
  api.setUserInform(info.name, info.sfera)
  .finally(() => {
    userinfo.setUserInfo(info)
  })
});
profilePopupEdit.setEventListeners()

  popUpEditButton.addEventListener("click", () => {
      const author = userinfo.getUserInfo()
      // Вставка значений в попап
     nameInput.value = author.name;
      jobInput.value = author.info;    
      profilePopupEdit.open()
      formProfileValid.clearValid()
    }) 
// добавление карточек из попап 

const photoPopupAdd = new PopupWithForm(newCardPopup, submitPhotoAdd);
photoPopupAdd.setEventListeners()
popUpAddButton.addEventListener('click', () => {

  photoPopupAdd.open()
  // Валдиация popup card
formCardValid.clearValid()
})


// тут второй код 




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
        }
    }, {
        deleteLike: (Id, likeText, like) => {
            api.deleteLike(Id)
            .then(data => {
                likeText.textContent = data.likes.length; 
                like.classList.toggle('element__vector-active');
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


let Id;
// получаем данные профиля с сервера
const api = new Api(options)
api.getUserInform().then((profile => {
  Id = profile._id;
  nameProfile.textContent = profile.name;
  jobProfile.textContent = profile.about;
  profileAvatar.src = profile.avatar; 
  profileAvatar.alt = profile.avatar;
})) 
// Добавление карточек с сервера 

api.getIntialCards().then((item) => {
  cardList.render(item)
})
const cardList = new Section({
  renderer: (cardItem) => {
    const newCard = createCard(cardItem)
    cardList.addItem(newCard);
  }
}, photoElSelector); 
//создание экземпляра popup с функционалом popupDelete
const popupDeleteOpen = new PopupDelete(popupDelete, {
    deleteCardClick: (cardId, delElement) => {
        api.deleteCard(cardId)
        .then(data => {
            delElement.remove();
            popupDeleteOpen.close();        
        })
    }
});
popupDeleteOpen.setEventListeners();
// добавление новой карточки на сервер
function submitPhotoAdd() {

  const inputTitle = imgName.value;
  const inputLink = imgLink.value;
  api.photoAddServer(inputTitle, inputLink)
  .then(data => {
  
  photoElement.prepend(createCard(data))
  })
  
  formPhoto.reset()
  photoPopupAdd.close()
}
/* 
function submitPhotoAdd() {

  const inputTitle = imgName.value;
  const inputLink = imgLink.value;
  api.photoAddServer(inputTitle, inputLink)
  .finally (() => {
    const photoItem = ({name: inputTitle, link: inputLink})
  photoElement.prepend(createCard(photoItem))
  })
  
  formPhoto.reset()
  photoPopupAdd.close()
} */
