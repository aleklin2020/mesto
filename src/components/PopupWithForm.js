import Popup from "./Popup.js";
export class PopupWithForm extends Popup {
	constructor (popup, submit) {
		super(popup) 
		this._form = popup.querySelector(".form");
		this._submit = submit;
		this._closeIcon = popup.querySelector("popup__close-icon");
	}
	_getInputValues () {	
			this.name = this._form.querySelector(".form__input_name").value
			this.info = this._form.querySelector(".form__input_job").value	
			return [this.name, this.info]
	}
	setEventListeners () {
		super.setEventListeners()
		 this._form.addEventListener("submit", (evt) => { 
		 	evt.preventDefault()
		 	this._submit(this._getInputValues())
		 	 }) 
	}
	close () {
		this._form.reset();
		super.close();
	}
}