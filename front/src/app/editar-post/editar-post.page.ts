import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PostServiceService } from '../services/post-service/post-service.service';
import { Router } from '@angular/router';
import { UsuarioServiceService } from  '../services/usuario-service/usuario-service.service';

@Component({
  selector: 'app-editar-post',
  templateUrl: './editar-post.page.html',
  styleUrls: ['./editar-post.page.scss'],
})
export class EditarPostPage implements OnInit {

  @Input() post_id;

  newPost = [];
  userDetails = [];
  postsList = [];

  registerForm: FormGroup;

  constructor(public formbuilder: FormBuilder, public postService: PostServiceService, public router: Router,
    public usuarioService: UsuarioServiceService) { 
    this.registerForm = this.formbuilder.group({
      bodyText: [null, [Validators.required]]
    })
  }

  ngOnInit() {
  }

  listPosts(){
    this.postService.listPosts().subscribe((res) => {
      this.postsList = res.Sucesso;
      console.log(this.postsList);
      console.log(res);
    })
  }

  createPost(form){
    let regFomr = form.value;
    this.postService.createPost(regFomr).subscribe((res) => {
      this.newPost = res;
      console.log(this.newPost);
      this.listPosts();
      this.router.navigate(['/home']);
    });
  }

  postEdit(id, form){
    let regForm = form.value;
    this.postService.editPost(id, regForm).subscribe((res) => {
      console.log(res);
    })
  }
}
