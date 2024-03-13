import { observable, action, makeAutoObservable } from 'mobx';

type Item = {
    id: string;
    name: string;
    type: string;
    restaurantName: string;
    restaurantId: string;
    imageUri: string;
    price: number;
    quantity: number;
}

type ItemAdd = {
    id: string;
    name: string;
    type: string;
    restaurantName: string;
    restaurantId: string;
    imageUri: string;
    price: number;
}

class Store {

    items: Item[] = [];
    total: number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    addItem(item: ItemAdd, quantity: number) {
        const existingItem = this.items.find((i) => i.id === item.id);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ ...item, quantity });
        }

        this.total += item.price * quantity;
    }

    removeItemById(id: string) {
        const index = this.items.findIndex((item) => item.id === id);

        if (index !== -1) {
            const removedItem = this.items.splice(index, 1)[0];
            this.total -= removedItem.quantity * removedItem.price;
        }
    }

    getItemById(id: string) {
        return this.items.find((item) => item.id === id);
    }

    decreaseQuantity(id: string) {
        const item = this.getItemById(id);

        if (item) {
            item.quantity--;

            this.total = this.total - item.price;

            if (item.quantity === 0) {
                this.removeItemById(id);
            }
        }
    }

    increaseQuantity(id: string) {
        const item = this.getItemById(id);

        if (item) {
            item.quantity++;
            this.total = this.total + Number(item.price);
        }
    }

    getQuantity() {
        return this.items.length;
    }

    resetCart() {
        this.items = [];
        this.total = 0;
    }
}

const CartStore = new Store();

export { CartStore };
