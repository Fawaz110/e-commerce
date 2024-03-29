import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private _HttpClient: HttpClient) { }

  cashOnDelivery(data: any, cartId: string): Observable<any> {
    return this._HttpClient.post(environment.baseUrl + 'orders/' + cartId, { shippingAddress: data }, {
      headers: {
        token: localStorage.getItem('ecommerce-token') || ''
      }
    })
  }

  checkout(data: object, cartId: string): Observable<any> {
    return this._HttpClient.post(environment.baseUrl + `orders/checkout-session/${cartId}?url=http://localhost:4200`, { shippingAddress: data }, {
      headers: {
        token: localStorage.getItem('ecommerce-token') || ''
      }
    })
  }


}
