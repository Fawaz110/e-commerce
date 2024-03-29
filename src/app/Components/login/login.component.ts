import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Core/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _FormBuilder: FormBuilder, public _AuthService: AuthService, private _Router: Router) {

  }


  hide = true;
  passwordHide: boolean = true;
  loginForm!: FormGroup;
  matching: boolean = true;
  errorMsg!: string


  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.loginForm = this._FormBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]],
    })
  }
  login() {
    if (this.loginForm.status == 'VALID') {
      this._AuthService.login(this.loginForm.value).subscribe({
        next: (response) => {
          localStorage.setItem('ecommerce-token', response.token);
          this._AuthService.loggedIn.next(true)
          this._AuthService.loggedUser = this.loginForm.value
          this._Router.navigate(['/home'])
        },
        error: (error) => {
          this.errorMsg = error.error.message
          console.log(this.errorMsg);
        }
      })
    } else {
      this.errorMsg = 'Incorrect Email or password'
    }
  }
}
