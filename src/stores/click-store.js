import { observable, action } from 'mobx';

class ClickStore {
    @observable value = 0;

    @action
    increment() {
        this.value++;
    }

}

export default new ClickStore();