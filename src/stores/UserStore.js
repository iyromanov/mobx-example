import { observable, action, computed, runInAction } from 'mobx';
import * as Api from '../api/User';

class UserStore {
    @observable isBusy;
    @observable user;

    @action
    async fetchUser() {
        this.isBusy = true;
        const user = await Api.fetchUser();
        runInAction('save user', () => {
            this.user = user;
            this.isBusy = false;
        });
    }

    @computed
    get name() {
        if (this.user) {
            const { firstName, lastName } = this.user;
            return `${firstName} ${lastName}`;
        }
        return null;
    }
}

const store = new UserStore();
export default store;