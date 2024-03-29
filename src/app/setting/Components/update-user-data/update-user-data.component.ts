import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Core/Services/auth.service';

@Component({
  selector: 'app-update-user-data',
  templateUrl: './update-user-data.component.html',
  styleUrls: ['./update-user-data.component.scss']
})
export class UpdateUserDataComponent implements OnInit {

  constructor(private _FormBuilder: FormBuilder, private _AuthService: AuthService) { }
  
  hide: boolean = true
  userDataForm!: FormGroup
  
  createForm() {
    this.userDataForm = this._FormBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[A-Z][a-zA-Z]{0,}$/)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]],
    })
  }


  ngOnInit(): void {
    this.createForm()
  }
}
