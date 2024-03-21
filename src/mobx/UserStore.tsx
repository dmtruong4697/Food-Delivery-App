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

    isEditLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setCurrentUser(user: User) {
        this.user = user;
    }

    setCurrentUserName(name: string) {
        this.user.displayName = name;
    }

    setCurrentUserAvatar(photoURL: string) {
        this.user.photoURL = photoURL;
    }

    setIsEditLoading(bool: boolean) {
        this.isEditLoading = bool;
    }

    getCurrentUser() {
        return this.user;
    }

    logoutUser() {
        this.user = {
            uid: "",
            userEmail: "",
            phoneNumber: "",
            photoURL: "",
            displayName: "",
            token: "",
            expirationTime: 0,
            refreshToken: "",
        }
    }
    
}

const UserStore = new store;

export { UserStore }