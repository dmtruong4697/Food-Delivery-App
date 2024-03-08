import React from 'react';
import { observable, action, makeObservable, makeAutoObservable } from 'mobx';

class store {
    searchText = ""
    constructor() {
        makeAutoObservable(this);
    }

    setSearchText(text: string) {
        this.searchText = text;
    }
}

const SearchStore = new store;

export { SearchStore }