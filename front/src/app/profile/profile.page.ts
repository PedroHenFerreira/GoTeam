import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form} from '@angular/forms';
import { PostServiceService } from '../services/post-service/post-service.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  commentForm: FormGroup;
  user: string = "user";
  player: string = "player";
  status: string = "user";
  id: boolean = true;

  userStatus():boolean {
    if (this.status === this.user){
      return this.id;
    }
    else if(this.status === this.player){
      this.id = false;
      return this.id;
    }
  }

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

  constructor(public formbuilder: FormBuilder, public postService: PostServiceService) {
    this.commentForm = this.formbuilder.group({
      comment:[null, [Validators.required, Validators.maxLength(300)]],
    })
   }

  ngOnInit() {
    this.createPost();
    this.listPosts();
    this.listFollowingPosts();
    this.showThisPost();
    this.editPost();
    this.deletePost();
  }


  createPost() {
    this.postService.createPost().subscribe((res) => {
      this.post = res;
      console.log(this.post);
    }) 
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

}
