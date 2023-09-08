import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Register } from '../data-type/register-type';
import { Login } from '../data-type/login-type';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogin = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}
  userRegister(data: Register) {
    this.http
      .post('http://localhost/EcoApi/api/register', data, {
        observe: 'response',
      })
      .subscribe((result) => {
        this.isLogin.next(true);
        localStorage.setItem('auth-user', JSON.stringify(result.body));
        this.router.navigate(['profile']);
        return result;
      });
  }
  userLogin(data: Login) {
    this.http
      .post('http://localhost/EcoApi/api/login', data, { observe: 'response' })
      .subscribe((result: any) => {
        if (result.body.success == true) {
          this.isLogin.next(true);
          console.log(this.isLogin);
          localStorage.setItem('auth-user', JSON.stringify(result.body.data));
          localStorage.setItem(
            'auth-role',
            JSON.stringify(result.body.data.role)
          );
          this.router.navigate(['profile']);
        } else {
          this.isLoginError.emit(true);
        }
      });
  }
  userLogout() {
    localStorage.removeItem('auth-user');
    localStorage.removeItem('auth-role');
    this.router.navigate(['login']);
  }
  reloadAuth() {
    if (localStorage.getItem('auth-user')) {
      return true;
    } else {
      return false;
    }
  }
}
