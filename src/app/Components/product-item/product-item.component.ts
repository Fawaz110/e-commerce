import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/Core/Services/cart.service';
import { WishListService } from 'src/app/Core/Services/wish-list.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  constructor(private _CartService: CartService, private _WishListService: WishListService) {
  }
  @Input() product!: any
  @Input() onSale: boolean = false
  @Input() wishList: boolean = false

  cartTimeOut: any
  addToCart(productId: string) {
    // console.log(productId);
    clearTimeout(this.cartTimeOut)
    this.cartTimeOut = setTimeout(() => {
      this._CartService.addToCart(productId).subscribe({
        next: (response) => {
          if (response.status == 'success')
            this._CartService.numOfCartItems.next(this._CartService.numOfCartItems.value + 1)
        }
      })
    }, 2000);
  }
  removeFromWishList(prodId: string) {
    this._WishListService.removeFromWishList(prodId).subscribe({
      next: (response) => {
        if (response.status == 'success') {
          this._WishListService.count.next(response.data.length)
          for (let i = 0; i < this._WishListService.wishListitems.value.length; i++) {
            let found: boolean = false
            for (const id of response.data) {
              if (id == this._WishListService.wishListitems.value[i]._id) {
                found = true
                break;
              }
            }
            if (!found) {
              this._WishListService.wishListitems.value.splice(i, 1)
            }
          }

        }
      }
    })

  }
  addToWIshList(prodId: string) {
    this._WishListService.addToWIshList(prodId).subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }
}
