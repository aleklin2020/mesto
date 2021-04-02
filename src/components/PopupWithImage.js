import Popup from "./Popup.js"
export default class PopupWithImage extends Popup {
	constructor (popup) {
		super(popup)
		this._imgElement = this._popup.querySelector('.popup__image')
		this._titleElement = this._popup.querySelector('.popup__titles')

	}
	open (name , link) {
		this._titleElement.textContent = name
		this._imgElement.src = link
		this._imgElement.alt = link
		super.open();
	}

}