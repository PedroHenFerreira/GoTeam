import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../services/authetication-service/authentication-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  logout: [];

  constructor(public autheticationService: AuthenticationServiceService) {}

  ngOnInit() {
    this.logoutUser();
  }

  logoutUser(){
    this.autheticationService.userLogout().subscribe((res) => {
      this.logout = res;
      console.log(this.logout);
    });
  }

}
