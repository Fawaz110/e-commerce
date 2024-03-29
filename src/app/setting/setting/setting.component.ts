import { Component } from '@angular/core';
import { AuthService } from 'src/app/Core/Services/auth.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent {

  constructor(public _AuthService:AuthService){
  }

  
}
