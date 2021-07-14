import Popup from "./Popup.js";
export class PopupWithForm extends Popup {
	constructor (popup, submit) {
		super(popup) 
		this._form = popup.querySelector(".form");
		this._submit = submit;
		//this._closeIcon = popup.querySelector("popup__close-icon");
	}
	_getInputValues () {	
			this._inputList = this._form.querySelectorAll('.form__input')
    		this._inputValues = {};
   		 this._inputList.forEach(input => {
      	this._inputValues[input.name] = input.value
   		 })
   		 return this._inputValues;
	}
	setEventListeners () {
		super.setEventListeners()
		 this._form.addEventListener("submit", (evt) => { 
		 	evt.preventDefault()
		 	this._submit(this._getInputValues())
		 	//this.close() дороботать в this
		 	 }) 
	}
	close () {
		this._form.reset();
		super.close();
	}
}