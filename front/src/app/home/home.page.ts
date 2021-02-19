import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../services/authetication-service/authentication-service.service';
import { UsuarioServiceService } from  '../services/usuario-service/usuario-service.service';
import { PostServiceService } from '../services/post-service/post-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  user=[];
  isLoggedIn: boolean;
  logout: [];

  constructor(public autheticationService: AuthenticationServiceService,
  public usuarioService: UsuarioServiceService, public postService: PostServiceService) {}

  ngOnInit() {
    this.getDetails();
    this.isLoggedIn= this.usuarioService.isLogged();
  }

  getDetails(){
    this.usuarioService.getDetails().subscribe((res) => {
      this.user = res.user;
      console.log(this.user);
    })
  }

  postEdit(id, form){
    let regForm = form.value;
    this.postService.editPost(id, regForm).subscribe((res) => {
      console.log(res);
    })
  }

  deletePost(id){
    this.postService.deletePost(id).subscribe((res) => {
      console.log(res)
    })
  }

  // logoutUser(){
  //   this.autheticationService.userLogout().subscribe((res) => {
  //     this.logout = res;
  //     console.log(this.logout);
  //   });
  // }

}
