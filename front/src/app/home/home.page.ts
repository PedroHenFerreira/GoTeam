import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../services/authetication-service/authentication-service.service';
import { UsuarioServiceService } from  '../services/usuario-service/usuario-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  user=[];

  logout: [];

  constructor(public autheticationService: AuthenticationServiceService,
  public usuarioService: UsuarioServiceService) {}

  ngOnInit() {
    this.getDetails();
  }

  getDetails(){
    this.usuarioService.getDetails().subscribe((res) => {
      this.user = res.user;
      console.log(this.user);
    })
  }

  logoutUser(){
    this.autheticationService.userLogout().subscribe((res) => {
      this.logout = res;
      console.log(this.logout);
    });
  }

}
