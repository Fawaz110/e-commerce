import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/Core/Services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  constructor(public _AuthService: AuthService, private _FormBuilder: FormBuilder, private _Router: Router) { }


  forgotPasswordForm!: FormGroup
  errorMsg: string = ''
  notYourEmail: boolean = false

  creatFrom() {
    this.forgotPasswordForm = this._FormBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  sendEmail() {
      this._AuthService.forgotPassword(this.forgotPasswordForm.value).subscribe({
        next: (response) => {
          if (response.statusMsg == 'success') {
            this._Router.navigate(['/setting/varify-code'])
          }
        },
        error: (error) => {
          if (error.error.statusMsg == 'fail') {
            this.errorMsg = error.error.message
            console.log(this.errorMsg);
          }
        }
      })
  }


  ngOnInit(): void {
    this.creatFrom()
  }
}
