import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = []

  addToCart(product) {
    this.items.push(product)
    console.log('product:' + product.name + ' added. cart items:' + this.items.length)
  }

  getItems() {
    return this.items
  }

  clearCart() {
    this.items = []
    return this.items
  }
  constructor() { }
}
