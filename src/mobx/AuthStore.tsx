import React from 'react';
import { observable, action, makeObservable, makeAutoObservable } from 'mobx';

class store {
    isLoading = false
    errorMessage = ""
    constructor() {
        makeAutoObservable(this);
    }

    setIsLoading(bool: boolean) {
        this.isLoading = bool;
    }

    setErrorMessage(message: string) {
        this.errorMessage = message;
    }
}

const AuthStore = new store;

export { AuthStore }