import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  constructor(private _HttpClient: HttpClient) {

  }

  count = new BehaviorSubject(0)
  wishListitems = new BehaviorSubject<any>([])

  addToWIshList(prodId: string): Observable<any> {
    return this._HttpClient.post(environment.baseUrl + 'wishlist', { productId: prodId }, {
      headers: {
        token: localStorage.getItem('ecommerce-token') || ''
      }
    })
  }
  removeFromWishList(prodId: string): Observable<any> {
    return this._HttpClient.delete(environment.baseUrl + 'wishlist/' + prodId, {
      headers: {
        token: localStorage.getItem('ecommerce-token') || ''
      }
    })
  }

  getWishList(): Observable<any> {
    return this._HttpClient.get(environment.baseUrl + 'wishlist', {
      headers: {
        token: localStorage.getItem('ecommerce-token') || ''
      }
    })
  }
}
