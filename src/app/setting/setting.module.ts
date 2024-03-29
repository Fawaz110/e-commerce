import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting/setting.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { UpdateUserDataComponent } from './Components/update-user-data/update-user-data.component';
import { VarifyResetCodeComponent } from './Components/varify-reset-code/varify-reset-code.component';
import { MatError } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    SettingComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    UpdateUserDataComponent,
    VarifyResetCodeComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class SettingModule { }
