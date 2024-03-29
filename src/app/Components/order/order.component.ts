import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/Core/Services/cart.service';
import { OrdersService } from 'src/app/Core/Services/orders.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  constructor(private _FormBuilder: FormBuilder, private _OrdersService: OrdersService, private _ActivatedRoute: ActivatedRoute, private _CartService: CartService, private _Router: Router) {
    _ActivatedRoute.params.subscribe((params) => {
      this.cartId = params['id']
    })
  }

  orderForm!: FormGroup
  cartId!: string
  orderedCash: boolean = false

  createOrderForm() {
    this.orderForm = this._FormBuilder.group({
      details: ['', [Validators.required]],
      city: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]],
    })
  }

  cashOnDelivery() {
    if (this.orderForm.status == 'VALID') {
      this._OrdersService.cashOnDelivery(this.orderForm.value, this.cartId).subscribe({
        next: (response) => {
          this._CartService.numOfCartItems.next(0)
          this.orderedCash = true

        }
      })
    }
  }

  checkout() {
    if (this.orderForm.status == 'VALID') {
      this._OrdersService.checkout(this.orderForm.value, this.cartId).subscribe({
        next: (response) => {
          window.location.href = response.session.url
        }
      })
    }
  }
  ngOnInit(): void {
    this.createOrderForm()
  }
}
