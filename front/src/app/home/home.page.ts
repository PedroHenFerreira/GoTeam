import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../services/authetication-service/authentication-service.service';

class User {
  userName: string;
  user: string;
  isLogged: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  user: User;

  logout: [];

  constructor(public autheticationService: AuthenticationServiceService) {}

  ngOnInit() {
  }

  logoutUser(){
    this.autheticationService.userLogout().subscribe((res) => {
      this.logout = res;
      console.log(this.logout);
    });
  }

}
