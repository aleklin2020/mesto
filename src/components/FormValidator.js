export class FormValidator {
	constructor(validationConfig, form) {
    this._formSelector =  validationConfig.formSelector
    this._inputSelector =  validationConfig.inputSelector
    this._submitButtonSelector = validationConfig.submitButtonSelector
    this._inactiveButtonClass = validationConfig.inactiveButtonClass
    this._inputErrorClass = validationConfig.inputErrorClass
    this._errorClass = validationConfig.errorClass
    this._form = form
    this._inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._errors = Array.from(this._form.querySelectorAll(`#${this._inputErrorClass.id}-error`));
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
      this._errorElement = this._form.querySelector(`.${this._inputElement.id}-error`);
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
  this._buttonElement = this._form.querySelector(this._submitButtonSelector)
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
  this._form.addEventListener("submit", (evt) => {
    evt.preventDefault()
    this._toggleButtonState()
  })
}
// Валидация попап при открытий 
clearValid () {
     this._inputs.forEach((form) => {
      this._formValidation (form)
    }); 
    this._toggleButtonState()
  }

}
