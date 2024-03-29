import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Core/Services/products.service';
import { WishListService } from 'src/app/Core/Services/wish-list.service';
import { CartService } from 'src/app/Core/Services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  constructor(private _ActivatedRoute: ActivatedRoute, private _ProductsService: ProductsService, private _WishListService: WishListService, private _CartService: CartService) {
    _ActivatedRoute.params.subscribe({
      next: (params) => {
        _ProductsService.getSpecificProduct(params['id']).subscribe({
          next: (response) => {
            this.productDetails = response.data

            _WishListService.getWishList().subscribe({
              next: (res) => {
                console.log(res);
                for (const obj of res.data) {
                  if (params['id'] == obj.id) {
                    this.addedToWishlist = true
                    break;
                  }
                }
              }
            })
          }
        })
      }
    })


  }



  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false
  }

  arr!: any[]
  productDetails!: any
  addedToWishlist: boolean = false
  wishSetTimeOut!: any

  toggleFromWishList(productId: string) {
    clearTimeout(this.wishSetTimeOut)
    this.wishSetTimeOut = setTimeout(() => {
      if (this.addedToWishlist) {
        this.addedToWishlist = false
        this._WishListService.count.next(this._WishListService.count.value - 1)
        this._WishListService.removeFromWishList(productId).subscribe({
          next: (response) => {
            console.log(response);
          }
        })
      }
      else {
        this.addedToWishlist = true
        this._WishListService.count.next(this._WishListService.count.value + 1)
        this._WishListService.addToWIshList(productId).subscribe({
          next: (response) => {
            console.log(response);
          }
        })
      }
    }, 2000)
  }

}
