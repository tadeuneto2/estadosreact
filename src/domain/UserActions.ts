import { UserModel } from "./usecase/useCase";

class UserActions {
    constructor(private _userAction: UserModel) {}
    public getUser() {
        return this._userAction.getUser()
    }
}

export default UserActions