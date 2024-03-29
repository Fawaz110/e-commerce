import { Component } from '@angular/core';
import { CartService } from 'src/app/Core/Services/cart.service';
import { WishListService } from 'src/app/Core/Services/wish-list.service';
import { AuthService } from 'src/app/Core/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public _AuthService: AuthService, public _WishListService: WishListService, public _CartService: CartService) {
    this.getWishList()
    this.getCartData()
  }

  getWishList() {
    this._WishListService.getWishList().subscribe({
      next: (response) => {
        this._WishListService.count.next(response.count)
      }
    })
  }

  getCartData() {
    this._CartService.getCartData().subscribe({
      next: (response) => {
        // console.log(response);
        this._CartService.numOfCartItems.next(response.numOfCartItems)
        // console.log(this._CartService.numOfCartItems.value);
      },
      error: (error: any) => {
        if (error.error.statusMsg == 'fail')
          this._CartService.numOfCartItems.next(0)
      }
    })
  }


}
