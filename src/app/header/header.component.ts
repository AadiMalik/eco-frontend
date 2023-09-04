import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  userType:string ='';
  constructor(private route:Router){

  }

  ngOnInit():void{
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('auth-user')){
          this.userType='User';
        }else{
          this.userType='UnAuth'
        }
      }
    });
  }
}
