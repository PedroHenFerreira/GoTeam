import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form} from '@angular/forms';
import { PostServiceService } from '../services/post-service/post-service.service';
import { UsuarioServiceService } from '../services/usuario-service/usuario-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  newPost = [];

  userDetails=[];

  commentForm: FormGroup;
  user: string = "user";
  player: string = "player";
  status: string = "user";
  id: boolean = true;

  // userStatus():boolean {
  //   if (this.status === this.user){
  //     return this.id;
  //   }
  //   else if(this.status === this.player){
  //     this.id = false;
  //     return this.id;
  //   }
  // }

  submitForm(form){
    console.log(form);
    console.log(form.value);
  }

  post: [];
  postList: [];
  followingPosts: [];
  thisPost: [];
  postEdit: [];
  postDelete: [];

  constructor(public formbuilder: FormBuilder, public postService: PostServiceService,
    public usuarioService: UsuarioServiceService, public router: Router) {
    this.commentForm = this.formbuilder.group({
      comment:[null, [Validators.required, Validators.maxLength(300)]],
    })
  }

  ngOnInit() {
    this.listFollowingPosts();
    this.getDetails();
  }


  createPost(form){
    let regFomr = form.value;
    this.postService.createPost(regFomr).subscribe((res) => {
      this.newPost = res;
      console.log(this.newPost);
      this.router.navigate(['/home']);
    });
  }

  listPosts() {
    this.postService.listPosts().subscribe((res) => {
      this.postList = res;
      console.log(this.postList);
    }) 
  }

  listFollowingPosts() {
    this.postService.listFollowingPosts().subscribe((res) => {
      this.followingPosts = res;
      console.log(this.followingPosts);
    }) 
  }

  showThisPost() {
    this.postService.showThisPost().subscribe((res) => {
      this.thisPost = res;
      console.log(this.thisPost);
    }) 
  }

  editPost() {
    this.postService.editPost().subscribe((res) => {
      this.postEdit = res;
      console.log(this.postEdit);
    }) 
  }

  deletePost() {
    this.postService.deletePost().subscribe((res) => {
      this.postDelete = res;
      console.log(this.postDelete);
    }) 
  }

  getDetails(){
    this.usuarioService.getDetails().subscribe((res) => {
      this.userDetails = res.user;
      console.log(this.userDetails);
    })
  }

}
