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
  users=[];
  postsList=[];
  followingPosts: any[]=[];

  logout: [];

  constructor(public autheticationService: AuthenticationServiceService,
  public usuarioService: UsuarioServiceService, public postService: PostServiceService) {this.listPosts();}

  ngOnInit() {
    this.getDetails();
    this.isLoggedIn= this.usuarioService.isLogged();
    this.listPosts();
  }

  ionViewWillEnter(){
    this.listPosts();
  }

  getDetails(){
    this.usuarioService.getDetails().subscribe((res) => {
      this.user = res.user;
      console.log(this.user);
    });
  }

  listPosts(){
    this.postService.listPosts().subscribe((res) => {
      this.postsList = res.Sucesso;
      console.log(this.postsList);
    })
  }

  listUsers(){
    this.usuarioService.listUsers().subscribe((res) => {
      this.users = res.Sucesso;
      console.log(this.users);
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

  postDeleted(event){
    this.listPosts();
    console.log(event);
  }

  getFollowingPostsUsers(){
    this.postService.getFollowingPostsUsers().subscribe((res) => {
      this.followingPosts = res[0];
      console.log(res);
    });
  }

  getId(event){
    localStorage.setItem('postId',event);
  }

  likePost(id){
    this.usuarioService.likePost(id).subscribe((res) => {
      console.log(res);
    });
  }

}
