import React from 'react';
import { observable, action, makeObservable, makeAutoObservable } from 'mobx';
import { ImageSourcePropType } from 'react-native';

type User = {
    uid: string;
    userEmail: string | null,
    phoneNumber: string | null,
    photoURL: string | null,
    displayName: string | null,
    token: string,
    refreshToken: string,
    expirationTime: number,
}
class store {
    user: User = {
        uid: "",
        userEmail: "",
        phoneNumber: "",
        photoURL: "",
        displayName: "",
        token: "",
        expirationTime: 0,
        refreshToken: "",
    }

    constructor() {
        makeAutoObservable(this);
    }

    setCurrentUser(user: User) {
        this.user = user;
    }

    getCurrentUser() {
        return this.user;
    }

    logoutUser() {

    }
    
}

const UserStore = new store;

export { UserStore }