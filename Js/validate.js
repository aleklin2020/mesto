export class Validate {
	constructor(enableValidation, formList) {
    this._formSelector =  enableValidation.formSelector
    this._inputSelector =  enableValidation.inputSelector
    this._submitButtonSelector = enableValidation.submitButtonSelector
    this._inactiveButtonClass = enableValidation.inactiveButtonClass
    this._inputErrorClass = enableValidation.inputErrorClass
    this._errorClass = enableValidation.errorClass
    this._formList = formList
    this._inputs = Array.from(this._formList.querySelectorAll(this._inputSelector));
    this._errors = Array.from(this._formList.querySelectorAll(`#${this._inputErrorClass.id}-error`));
  } 
  //Блокировка кнопки отправки
  disabledSubmit () {
    this._buttonElement.classList.add(this._inactiveButtonClass)
    this._buttonElement.setAttribute('disabled', true);
  }
// блокировка/разблокировка отправки формы
_toggleButtonState () {
  if (this._hasInvalidInput()) {
    this.disabledSubmit()
  }else {
    this._buttonElement.classList.remove(this._inactiveButtonClass)
    this._buttonElement.removeAttribute('disabled');
  }
}
// проверка на валидность инпутов
_hasInvalidInput () {
  return this._inputs.some((inputElement) => {
    return !inputElement.validity.valid
  })
}
    // проверяем форму на валидность
    _formValidation (inputElement) {
      this._inputElement = inputElement
      this._errorElement = this._formList.querySelector(`.${this._inputElement.id}-error`);
      if (!this._inputElement.validity.valid) {
        this._showInputError()
      }else {
        this._hideInputError()
      }
    }
// Добавление ошибки к невалидному полю
_showInputError () {
 this._inputElement.classList.add(this._inputErrorClass);
 this._errorElement.classList.add(this._errorClass);
 this._errorElement.textContent = this._inputElement.validationMessage;
}
// снятие ошибки с валидного поля
_hideInputError () {
 this._inputElement.classList.remove(this._inputErrorClass);
 this._errorElement.classList.remove(this._errorClass);
 this._errorElement.textContent = "";
}
_setEventListeners () {
  this._buttonElement = this._formList.querySelector(this._submitButtonSelector)
  this._toggleButtonState()
  this._inputs.forEach((inputElement) => {
    inputElement.addEventListener("input",() => {
      this._formValidation (inputElement)
      this._toggleButtonState()
    })
  })
}
// Валидация формы
checkInputValidity () {
  this._setEventListeners()
  this._formList.addEventListener("submit", (evt) => {
    evt.preventDefault()
    this._toggleButtonState()
  })
}
}
