import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Register } from '../signup/data-type';
import { Login } from '../login/data-type';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogin = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);
  
  constructor(private http:HttpClient, private router:Router) { }
  userRegister(data:Register){
    this.http.post('http://localhost/EcoApi/api/register',data,{observe:'response'}).subscribe((result)=>{
      this.isLogin.next(true);
      localStorage.setItem('auth-user',JSON.stringify(result.body))
      this.router.navigate(['admin/profile']);
    return result;
    });
  }
  userLogin(data:Login){
    this.http.post('http://localhost/EcoApi/api/login',data,{observe:'response'}).subscribe((result)=>{
      if(result)
      this.isLogin.next(true);
      localStorage.setItem('auth-user',JSON.stringify(result.body))
      this.router.navigate(['admin/profile']);
    return result;
    });
  }
  userLogout(){
      localStorage.removeItem('auth-user');
      this.router.navigate(['login']);
  }
  reloadAuth(){
    if(localStorage.getItem('auth-user')){
      this.isLogin.next(true);
      this.router.navigate(['admin/profile']);
    }
  }
}
