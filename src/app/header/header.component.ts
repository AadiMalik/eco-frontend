import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  userType: string = 'UnAuth';
  constructor(private route: Router) {}

  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        var role = localStorage.getItem('auth-role');
        if (role == '1') {
          this.userType = 'Admin';
        } else if (role == '2') {
          this.userType = 'User';
        }else{
          this.userType = 'UnAuth';
        }
      }
    });
  }
}
