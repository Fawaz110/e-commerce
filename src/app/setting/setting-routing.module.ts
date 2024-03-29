import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { UpdateUserDataComponent } from './Components/update-user-data/update-user-data.component';
import { VarifyResetCodeComponent } from './Components/varify-reset-code/varify-reset-code.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';

const routes: Routes = [
  { path: '', redirectTo: 'forgot-password', pathMatch: 'full' },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'update-data', component: UpdateUserDataComponent },
  { path: 'varify-code', component: VarifyResetCodeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
