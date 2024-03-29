import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/Core/Services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  constructor(private _FormBuilder: FormBuilder, private _AuthService: AuthService, private _Router:Router) { }
  hide: boolean = false;
  matching!: boolean

  resetPasswordForm!: FormGroup

  passwordMatch() {
    if (this.resetPasswordForm.value.newPassword == this.resetPasswordForm.value.rePassword) {
      this.matching = true
    } else {
      this.matching = false
    }
  }

  resetPassword() {
    this._AuthService.resetPassword({ email: this.resetPasswordForm.value.email, newPassword: this.resetPasswordForm.value.newPassword }).subscribe({
      next:(response)=>{
        localStorage.setItem('ecommerce-token',response.token);
        this._Router.navigate(['/home'])
      }
    })
  }
  ngOnInit(): void {
    this.resetPasswordForm = this._FormBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      newPassword: ['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]],
      rePassword: ['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]]
    })
  }


}
