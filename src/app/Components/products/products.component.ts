import { Component } from '@angular/core';
import { ProductsService } from 'src/app/Core/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor(private _ProductsService: ProductsService) {
    _ProductsService.getAllProducts().subscribe({
      next: (response) => {
        // console.log();
        this.products = response.data
      }
    })
  }

  products!: any[]

}
