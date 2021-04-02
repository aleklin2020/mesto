

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

	
	setUserInfo (name , info) {
		this._userName.textContent = name.value;
    this._usetInfo.textContent = info.value;
	}

}