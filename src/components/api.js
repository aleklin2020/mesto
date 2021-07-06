export class Api {
	constructor (option) {
		this._link = option.link;
		this._headers = option.token;

	}
	_getError (res) {
		if (res.ok) {
			return res.json()
		} else {
			return Promise.reject(new Error('Произошла ошибка ${res.status}'))
		}
	}
	// Получение информаций профиля с сервера
	getUserInform () {
		return fetch (`https://mesto.nomoreparties.co/v1/${this._link}/users/me`, {
			headers: this._headers,
		})
		.then(res => {return this._getError(res)})
	}
// обновление информаций на сервере
	setUserInform (name, profession) {
		return fetch (`https://mesto.nomoreparties.co/v1/${this._link}/users/me`, {
			method: 'PATCH',
			headers: this._headers,
			 body: JSON.stringify({
                name: name,
                about: profession,
             
		})
		 })
		.then((res) => {return this._getError(res)}) 
	
	}
// Обновление аватара на сервере
	getAvatarProfile(avatar) {
		return fetch (`https://mesto.nomoreparties.co/v1/${this._link}/users/me/avatar`, {
			method: 'PATCH',
			headers: this._headers,
			 body: JSON.stringify({
                avatar: avatar.linkAvatar            
		})
		 })
		.then((res) => {return this._getError(res)}) 

	}
// Получение обекта карточек с сервера
	getIntialCards () {
		return fetch (`https://mesto.nomoreparties.co/v1/${this._link}/cards`, {
			headers: this._headers,
		})
		.then(res => {return this._getError(res)})
	}
// Добавление карточек на сервер
	photoAddServer (name, linkes) {
		return fetch (`https://mesto.nomoreparties.co/v1/${this._link}/cards`, {
			method: 'POST',
			headers: this._headers,
			 body: JSON.stringify({
                name: name,
                link: linkes
               
		})
		 })
		.then((res) => {return this._getError(res)}) 
	
	}

	// Постановка лайков 
	  addLike(id) {
        return fetch(`https://mesto.nomoreparties.co/v1/${this._link}/cards/likes/${id}`, {
            method: 'PUT',
            headers: this._headers,
        })
        .then(res => {return this._getError(res)})
    }

    // Удаления лайка 
      deleteLike(id)  {
       return fetch(`https://mesto.nomoreparties.co/v1/${this._link}/cards/likes/${id}`, {
            method: 'DELETE',
            headers: this._headers,
        })
        .then(res => {return this._getError(res)})
    }
    // удаление карточек 
    deleteCard(id)  {
       return fetch(`https://mesto.nomoreparties.co/v1/${this._link}/cards/${id}`, {
            method: 'DELETE',
            headers: this._headers,
        })
        .then(res => {return this._getError(res)})
    }

}


