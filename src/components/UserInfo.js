export class UserInfo {
    constructor(userName, userProfession, userAvatar) {
      this._userName = userName;
      this._userProfession = userProfession;
      this._userAvatar = userAvatar;
    }

    //публичный метод - возвращает объект с данными пользователя
    getUserInfo() {
      const userName = this._userName.textContent;
      const userProfession = this._userProfession.textContent;
      return {userName, userProfession};
    }

    //публичный метод - принимает новые данные пользователя и добавляет их на страницу
    setUserInfo(userName, userProfession) {
      if(userName) { this._userName.textContent = userName; }
      if(userProfession) { this._userProfession.textContent = userProfession; }
    }

    //публичный метод - принимает новый аватар пользователя и добавляет их на страницу
    setAvatar(userAvatar) {
      if(userAvatar) {this._userAvatar.src = userAvatar;}
      if(userAvatar) {this._userAvatar.alt = userAvatar;}
  }
  }