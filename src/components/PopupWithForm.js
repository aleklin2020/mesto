import Popup from "./Popup.js";

function renderLoading(isLoading) {
    const newButtonName = document.querySelector('.form__save-avatar');
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

export class PopupWithForm extends Popup {
	constructor (popup, submit) {
		super(popup) 
		this._form = popup.querySelector(".form");
		this._submit = submit;
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
		 	 }) 
	}
	close () {
		this._form.reset();
		super.close();
	}
}