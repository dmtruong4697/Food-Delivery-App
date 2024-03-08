import React from 'react';
import { observable, action, makeObservable, makeAutoObservable } from 'mobx';
import { ImageSourcePropType } from 'react-native';

type Item = {
    id: string;
    name: string;
    restaurantName: string;
    imageUri: ImageSourcePropType;
    price: number;

}

class store {
    items: Item[] = [];
    constructor() {
        makeAutoObservable(this);
    }

    addItem(item: Item) {
        this.items.push(item);
    }

    removeItem(item: Item) {
        const itemIndex = this.items.indexOf(item);
        this.items.splice(itemIndex, 1);
    }
    
    getTotal() {
        let total = 0;
        for(let i = 0; i < this.items.length; i++) total += this.items[i].price;
        return total;
    }

    getQuantity() {
        return this.items.length;
    }
}

const CartStore = new store;

export { CartStore }