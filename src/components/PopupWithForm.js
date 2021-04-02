import Popup from "./Popup.js";
export class PopupWithForm extends Popup {
	constructor (popup, submit) {
		super(popup) 
		this._form = popup.querySelector(".form");
		this._submit = submit;
		this._closeIcon = popup.querySelector("popup__close-icon");


	}
	_getInputValues () {
		 console.log(this._form);
       return;

	}
	setEventListeners () {
		 this._form.addEventListener("submit", (evt) => { 
		 	evt.preventDefault()
		 	this._submit()
		 	 });
		// this._closeIcon.addEventListener("click", this.close);
		 super.setEventListeners();
		 
	}
	close () {
		this._form.reset();
		super.close();
	}
}