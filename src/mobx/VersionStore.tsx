import React from 'react';
import { observable, action, makeObservable, makeAutoObservable } from 'mobx';

class store {
    currentVersion = '1.0'
    constructor() {
        makeAutoObservable(this);
    }

    setCurrentVersion(text: string) {
        this.currentVersion = text;
    }
}

const VersionStore = new store;

export { VersionStore }