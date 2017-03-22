import { observable, action } from 'mobx';

class ClickStore {
    @observable counter = 0;

    @action
    add() {
        this.counter++;
    }

}

const store = new ClickStore();
export default store;