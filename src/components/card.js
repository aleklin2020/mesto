import Popup from "./Popup.js"
export class Card {
	constructor(item, template, {openPopupFull}) {
		this._name = item.name 
		this._link = item.link 
		this._cardTemplate = template
		this._handleCardClick = openPopupFull
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
		this._imgElement = this._element.querySelector('.element__image')
		this._titleElement = this._element.querySelector('.element__title')
		this._titleElement.textContent = this._name
		this._imgElement.src = this._link
		this._imgElement.alt = this._link
		this._element.querySelector(".element__vector-like").addEventListener("click", this._likeButton )
		this._setEventListeners()
		return this._element;
	}
	_setEventListeners () {
		this._element.querySelector(".elemenet__icon-delete").addEventListener("click", this._deleteCard )
		this._imgElement.addEventListener("click", () => this._handleCardClick(this._name, this._link))
		
	} 
	_deleteCard = () => {
		this._element.remove();
	} 
	_likeButton = () =>  {
		this._element.querySelector(".element__vector-like").classList.toggle('element__vector-active');
	}
	
}