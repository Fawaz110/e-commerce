import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Core/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private _FormBuilder: FormBuilder, public _AuthService: AuthService, private _Router:Router) { }


  hide = true;
  passwordHide: boolean = true;
  registerForm!: FormGroup;
  matching: boolean = true;
  errorMsg!: string


  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.registerForm = this._FormBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[A-Z][a-zA-Z]{0,}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]],
      rePassword: ['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]],
    })
  }


  passwordMatch() {
    if (this.registerForm.value.password == this.registerForm.value.rePassword) {
      this.matching = true
    } else {
      this.matching = false
    }
  }
  register() {
    if (this.registerForm.status == 'VALID') {
      this._AuthService.register(this.registerForm.value).subscribe({
        next: (response) => {
          localStorage.setItem('ecommerce-token', response.token);
          this._AuthService.loggedIn.next(true)
          this._Router.navigate(['/home'])
        },
        error: (error) => {
          this.errorMsg = error.error.message
        }

      })
    }

  }
}

