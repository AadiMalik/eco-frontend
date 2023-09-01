import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Login } from './data-type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private auth:AuthService, private router:Router){

  }
  ngOnInit():void{
    this.auth.reloadAuth();
  }
Login(data:Login):void{
    this.auth.userLogin(data)
  }
}
