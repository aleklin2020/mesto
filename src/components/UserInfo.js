
export default class UserInfo {
	constructor(name, info) {
		this._userName = name;
		this._usetInfo = info;
	}
	getUserInfo () {
         return {
            name: this._userName.textContent,
            info: this._usetInfo.textContent
        }   
    }
	setUserInfo ({name, sfera}) {
		this._userName.textContent = name;
    this._usetInfo.textContent = sfera;
	}

}