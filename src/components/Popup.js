export default class Popup {
	constructor (popup) {
		this._popup = popup;
		 this._popupCloseButton = this._popup.querySelector(".popup__close-icon");
		 this._handleEscClose = this._handleEscClose.bind(this)
	}
	close () {
		this._popup.classList.remove("popup_opened")
		document.removeEventListener("keydown", this._handleEscClose)
  
	}
	open () {
    this._popup.classList.add("popup_opened"); 
    document.addEventListener("keydown", this._handleEscClose)
	}
	_handleEscClose (evt) {
		 if (evt.key === "Escape") {
          this.close()
}
	console.log("click")
	}
	setEventListeners (evt) {
	this._popupCloseButton.addEventListener("click", () => this.close())
		 this._popup.addEventListener('mousedown' , (evt) => {
		if (evt.target !== evt.currentTarget) return; {
              this.close()
	}
	})
}
}