import { Component } from '@angular/core';
import { WishListService } from 'src/app/Core/Services/wish-list.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent {
  constructor(public _WishListService: WishListService) {
    this.getWishList()
  }

  products!: any[]



  getWishList() {
    this._WishListService.getWishList().subscribe({
      next: (response) => {
        this.products = response.data
        this._WishListService.wishListitems.next(response.data)
        console.log(this.products);
      }
    })
  }
}
