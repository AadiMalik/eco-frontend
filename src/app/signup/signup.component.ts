import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';
import { Register } from './data-type';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private auth:AuthService, private router:Router){

  }
  ngOnInit():void{
    this.auth.reloadAuth();
  }
  Register(data:Register):void{
    this.auth.userRegister(data)
  }
}
