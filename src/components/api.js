export class Api {
	constructor (option) {
		this._baseUrl = option.link;
		this._headers = option.token;

	}
	_checkResponse (res) {
		if (res.ok) {
			return res.json()
		} else {
			return Promise.reject(new Error('Произошла ошибка ${res.status}'))
		}
	}
	// Получение информаций профиля с сервера
	getUserInform () {
		return fetch (`${this._baseUrl}/users/me`, {
			headers: this._headers,
		})
		.then(res => {return this._checkResponse(res)})
	}
// обновление информаций на сервере
	setUserInform (name, profession) {
		return fetch (`${this._baseUrl}/users/me`, {
			method: 'PATCH',
			headers: this._headers,
			 body: JSON.stringify({
                name: name,
                about: profession
		})
		 })
		.then((res) => {return this._checkResponse(res)}) 
	
	}
// Обновление аватара на сервере
	getAvatarProfile(avatar) {
		return fetch (`${this._baseUrl}/users/me/avatar`, {
			method: 'PATCH',
			headers: this._headers,
			 body: JSON.stringify({
                avatar: avatar.linkAvatar            
		})
		 })
		.then((res) => {return this._checkResponse(res)}) 

	}
// Получение обекта карточек с сервера
	getIntialCards () {
		return fetch (`${this._baseUrl}/cards`, {
			headers: this._headers,
		})
		.then(res => {return this._checkResponse(res)})
	}
// Добавление карточек на сервер
	photoAddServer (name, linkes) {
		return fetch (`${this._baseUrl}/cards`, {
			method: 'POST',
			headers: this._headers,
			 body: JSON.stringify({
                name: name,
                link: linkes
               
		})
		 })
		.then((res) => {return this._checkResponse(res)}) 
	
	}

	// Постановка лайков 
	  addLike(id) {
        return fetch(`${this._baseUrl}/cards/likes/${id}`, {
            method: 'PUT',
            headers: this._headers,
        })
        .then(res => {return this._checkResponse(res)})
    }

    // Удаления лайка 
      deleteLike(id)  {
       return fetch(`${this._baseUrl}/cards/likes/${id}`, {
            method: 'DELETE',
            headers: this._headers,
        })
        .then(res => {return this._checkResponse(res)})
    }
    // удаление карточек 
    deleteCard(id)  {
       return fetch(`${this._baseUrl}/cards/${id}`, {
            method: 'DELETE',
            headers: this._headers,
        })
        .then(res => {return this._checkResponse(res)})
    }

}


