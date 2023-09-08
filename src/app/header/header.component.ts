import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  userType: string = 'UnAuth';
  userName: string = '';
  constructor(private route: Router) {}

  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        var role = localStorage.getItem('auth-role');
        let user = localStorage.getItem('auth-user');
        let userData = user && JSON.parse(user);
        if (role == '1') {
          this.userType = 'Admin';
          this.userName = userData.name;
        } else if (role == '2') {
          this.userType = 'User';
          this.userName = userData.name;
        } else {
          this.userType = 'UnAuth';
        }
      }
    });
  }
}
