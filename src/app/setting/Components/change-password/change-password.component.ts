import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/Core/Services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private _FormBuilder: FormBuilder, private _Router:Router, private _AuthService: AuthService) { }

  changePasswordForm!: FormGroup
  matching!: boolean
  hide: boolean = true
  incorrectCurrentPassword!: boolean;
  createForm() {
    this.changePasswordForm = this._FormBuilder.group({
      currentPassword: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]],
      rePassword: ['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]]
    });
  }

  passwordMatch() {
    if (this.changePasswordForm.value.password == this.changePasswordForm.value.rePassword) {
      this.matching = true
    } else {
      this.matching = false
    }
  }

  changePassword() {
    this._AuthService.changePassword(this.changePasswordForm.value).subscribe({
      next: (response) => {
        console.log('response', response);
        if(response.message == 'success'){
          localStorage.removeItem('ecommerce-token')
          this._Router.navigate(['/login'])
        }
      },
      error: (error) => {
        this.incorrectCurrentPassword = true
        console.log('error', error);
                
      }
    })
  }

  ngOnInit(): void {
    this.createForm();
  }

}
