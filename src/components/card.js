import Popup from "./Popup.js"
export class Card {
	constructor(item, template, {openPopupFull}, Id, { addLike }, { deleteLike }, { deleteCardClick }) {
		this._name = item.name 
		this._link = item.link 
		 this._likeСounter = item.likes;
		this._cardTemplate = template
		this._handleCardClick = openPopupFull
		 this._userId = Id; 
    this._cardId = item._id;
    this._cardCreatorId = item.owner._id;
    this._addLike = addLike;
    this._deleteLike = deleteLike;
    this._deleteCardClick  = deleteCardClick;
	}
	_getElementTemplate () {
		this._newElement = 
		this._cardTemplate
		.content.querySelector('.element')
		.cloneNode(true)
		return this._newElement;
	}
	generateCards () {
		this._element = this._getElementTemplate()
		this._likeClick = this._element.querySelector(".element__vector-like")
		this._imgElement = this._element.querySelector('.element__image')
		this._titleElement = this._element.querySelector('.element__title')
		this._titleElement.textContent = this._name
		this._imgElement.src = this._link
		this._imgElement.alt = this._link
		// сравниваю ид лакйков 
			this._likeСounter.forEach(item => {
        if (this._userId === item._id) {
        	
          this._elementLike(this._element).classList.add('element__vector-active'); 
        }
     });
     
		this._likeСounterElement(this._element).textContent = this._likeСounter.length;

		this._setEventListeners()
		return this._element;
	}


	// новый код тест 
	  _placeElementPicture(place) {
      return place.querySelector('.element__image');
    }

    _elementLike(place) {
      return place.querySelector('.element__vector-like');
    }

    _likeСounterElement(place) {
      return place.querySelector('.element__like');
    }

    _deleteButton(place) {
      return place.querySelector('.elemenet__icon-delete');
    }

	_setEventListeners () {
	/*	this._element.querySelector(".elemenet__icon-delete").addEventListener("click", () => { this._pushLike(); } )
		//this._element.querySelector(".elemenet__icon-delete").addEventListener("click", this._deleteCard )
		this._imgElement.addEventListener("click", () => this._handleCardClick(this._name, this._link))
		  if (this._userId === this._cardCreatorId) {
        this._deleteButton(this._element).addEventListener('click', () => {
          this._deleteCard(this._cardId, this._element);
        });
    }
    else {this._deleteButton(this._element).remove()} */
    	  this._elementLike(this._element).addEventListener('click', () => { this._pushLike(); }); 
      this._placeElementPicture(this._element).addEventListener('click', () => { this._openPicture();});
      if (this._userId === this._cardCreatorId) {
        this._deleteButton(this._element).addEventListener('click', () => {
          this._deleteCardClick(this._cardId, this._element);
        })
    }
    else {
    	this._deleteButton(this._element).remove()
    }
		
	} 

	/*likeCard() {
		  return this._countLikes.some(like => {
      return like._id === this._userID
    })
	}*/
// обработка лаиков добавление/уберание
 _pushLike() {
      if (this._elementLike(this._element).classList.contains('element__vector-active')) {
        this._deleteLike(this._cardId, this._likeСounterElement(this._element), this._elementLike(this._element))
      }
      else {
        this._addLike(this._cardId, this._likeСounterElement(this._element), this._elementLike(this._element))
      }
    }











    _openPicture() {
      this._handleCardClick();
    }
}

	/*_deleteCard = () => {
		this._element.remove();
	}
	_likeButton = () =>  {
		this._likeСounterElement(this._element).textContent = this._likeСounter.length;
		this._likeContains(this._userId)
		//this._element.querySelector(".element__vector-like").classList.toggle('element__vector-active');
	}

	_likeContains() {
		if()
	}
} */