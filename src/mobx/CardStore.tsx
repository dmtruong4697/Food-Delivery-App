import React from 'react';
import { observable, action, makeObservable, makeAutoObservable } from 'mobx';
import { ImageSourcePropType } from 'react-native';

type Card = {
    id: string,
    type: string,
    cardHolderName: string;
    cardNumber: string;
    expireDate: Date;
    cvc: string;
}

type Item = {
    id: string,
    type: string,
    list: Card[],
}

class store {
    items: Item[] = [
        {
            id: '1',
            type: 'Visa',
            list: [],
        },
        {
            id: '2',
            type: 'Mastercard',
            list: [],
        },
        {
            id: '3',
            type: 'Paypal',
            list: [],
        }
    ];

    constructor() {
        makeAutoObservable(this);
    }

    addCard(card: Card) {
        for(let i = 0; i < this.items.length; i++)
            if(this.items[i].type == card.type) this.items[i].list.push({...card, id: this.items[i].list.length.toString()});
    }

    removeItemById(id: string) {
        // for(let i = 0; i < this.items.length; i++)
        //     if(id == this.items[i].id)  
        //         {
        //             this.items.splice(i, 1);
        //             return;
        //         }
    }

    getCardListByType(type: string) {
        for(let i = 0; i < this.items.length; i++)
        if(type == this.items[i].type)  
            {
                return this.items[i].list;
            }
    }
}

const CardStore = new store;

export { CardStore }