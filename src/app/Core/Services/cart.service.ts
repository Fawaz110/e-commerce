import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient: HttpClient) { }

  numOfCartItems = new BehaviorSubject(0)
  getCartData(): Observable<any> {
    return this._HttpClient.get(environment.baseUrl + 'cart', {
      headers: {
        token: localStorage.getItem('ecommerce-token') || ''
      }
    })
  }

  addToCart(prodId: string): Observable<any> {
    return this._HttpClient.post(environment.baseUrl + 'cart', { productId: prodId }, {
      headers: {
        token: localStorage.getItem('ecommerce-token') || ''
      }
    })
  }

  clearCart(): Observable<any> {
    return this._HttpClient.delete(environment.baseUrl + 'cart', {
      headers: {
        token: localStorage.getItem('ecommerce-token') || ''
      }
    })
  }

  updateProductQuantity(productId: string, newQuantity: number): Observable<any> {
    return this._HttpClient.put(environment.baseUrl + `cart/${productId}`, { count: newQuantity }, {
      headers: {
        token: localStorage.getItem('ecommerce-token') || ''
      }
    })
  }
}
