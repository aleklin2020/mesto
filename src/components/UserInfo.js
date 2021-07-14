export class UserInfo {
    constructor(userName, userProfession, userAvatar) {
      this._userName = userName;
      this._userProfession = userProfession;
      this._userAvatar = userAvatar;
    }

    
    getUserInfo() {
      const userName = this._userName.textContent;
      const userProfession = this._userProfession.textContent;
      return {userName, userProfession};
    }

    
    setUserInfo(userName, userProfession) {
      if(userName) { this._userName.textContent = userName; }
      if(userProfession) { this._userProfession.textContent = userProfession; }
    }

    
    setAvatar(userAvatar) {
      if(userAvatar) {this._userAvatar.src = userAvatar;}
      if(userAvatar) {this._userAvatar.alt = userAvatar;}
  }
  }