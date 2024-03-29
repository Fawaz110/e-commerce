import { Component } from '@angular/core';
import { CartService } from 'src/app/Core/Services/cart.service';
import { ProductsService } from 'src/app/Core/Services/products.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  constructor(private _CartService: CartService, private _ProductsService: ProductsService) {
    _CartService.getCartData().subscribe({
      next: (response) => {
        this.cartItems = response.data.products
        this.newQuantity = [...this.cartItems]
        this.cardId = response.data._id
        this.countTotalPrice()
      }
    })
  }

  cartItems!: any[]
  newQuantity: any[] = []
  totalPrice: number = 0
  cardId!: string

  clearCart() {
    this._CartService.clearCart().subscribe({
      next: (response) => {
        console.log(response);
        if (response.message == 'success')
          this.cartItems = []
        this._CartService.numOfCartItems.next(0)
      }
    })
  }

  deleteSpecificItem(productId: string) {
    console.log(productId);
  }

  updateProductQuantity(productId: string, index: number) {
    this._CartService.updateProductQuantity(productId, this.newQuantity[index].count).subscribe({
      next: (response) => {
        console.log(response);
        this.countTotalPrice()
      }
    })
  }

  countTotalPrice() {
    this.totalPrice = 0
    for (const product of this.newQuantity) {
      this.totalPrice += product.count * product.price
    }
  }
}
