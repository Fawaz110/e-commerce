import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Core/Services/auth.service';

@Component({
  selector: 'app-varify-reset-code',
  templateUrl: './varify-reset-code.component.html',
  styleUrls: ['./varify-reset-code.component.scss']
})
export class VarifyResetCodeComponent implements OnInit {
  constructor(private _FormBuilder: FormBuilder, private _AuthService: AuthService, private _Router: Router) { }

  varifyForm!: FormGroup
  errorMsg!: string

  createFrom() {
    this.varifyForm = this._FormBuilder.group({
      resetCode: ['', [Validators.required]]
    })
  }

  varifyCode() {
    if (this.varifyForm.status == 'VALID') {
      console.log(this.varifyForm.value);
      this._AuthService.varifyResetCode(this.varifyForm.value).subscribe({
        next: (response) => {
          console.log('response', response);
          if (response.status == 'Success')
            this._Router.navigate(['/setting/reset-password'])
        },
        error: (error) => {
          console.log('error', error);
          this.errorMsg = error.error.message
        }
      })
    }
  }



  ngOnInit(): void {
    this.createFrom()
  }
}
