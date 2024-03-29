import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this._HttpClient.get(environment.baseUrl + 'products')
  }
  getSpecificProduct(productId: string): Observable<any> {
    return this._HttpClient.get(environment.baseUrl + `products/${productId}`)
  }
}
