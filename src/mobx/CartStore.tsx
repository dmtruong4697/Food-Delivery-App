import React from 'react';
import { observable, action, makeObservable, makeAutoObservable } from 'mobx';
import { ImageSourcePropType } from 'react-native';

type Item = {
    id: string;
    name: string;
    restaurantName: string;
    imageUri: ImageSourcePropType;
    price: number;
    quantity: number;
}

type ItemAdd = {
    id: string;
    name: string;
    restaurantName: string;
    imageUri: ImageSourcePropType;
    price: number;
}

class store {
    items: Item[] = [];
    total: number = 0;
    constructor() {
        makeAutoObservable(this);
    }

    addItem(item: ItemAdd, quantity: number) {
        for(let i = 0; i < this.items.length; i++) 
            if(item.id == this.items[i].id) 
            {
                this.items[i].quantity += quantity;
                this.total += item.price*quantity;
                return;
            }
        this.items.push({...item, quantity: quantity,});
        this.total += item.price * quantity;
    }

    removeItemById(id: string) {
        for(let i = 0; i < this.items.length; i++)
            if(id == this.items[i].id)  
                {
                    this.total = this.total - this.items[i].quantity * this.items[i].price;
                    this.items.splice(i, 1);
                    return;
                }
    }

    getItemById(id: string) {
        for(let i = 0; i < this.items.length; i++)
        if(id == this.items[i].id)  
            {
                return this.items[i];
            }
    }

    decreaseQuantity(id: string) {
        for(let i = 0; i < this.items.length; i++)
        if(id == this.items[i].id)  
            {
                this.items[i].quantity --;
                this.total -= this.items[i].price;
                if(this.items[i].quantity == 0) this.removeItemById(id);
                return;
            }
    }

    increaseQuantity(id: string) {
        for(let i = 0; i < this.items.length; i++)
        if(id == this.items[i].id)  
            {
                this.items[i].quantity ++;
                this.total += this.items[i].price;
                return;
            }
    }
    
    // getTotal() {
    //     let total = 0;
    //     for(let i = 0; i < this.items.length; i++) total += this.items[i].price;
    //     return total;
    // }

    getQuantity() {
        return this.items.length;
    }
}

const CartStore = new store;

export { CartStore }