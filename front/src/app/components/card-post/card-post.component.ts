import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostServiceService } from '../../services/post-service/post-service.service';
import { UsuarioServiceService } from '../../services/usuario-service/usuario-service.service';
import { Router } from '@angular/router';

class Post {
  id: number;
  user: string;
  profileImg: string;
  postTime: string;
  text: string;
  isLike: boolean;
}

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss'],
})
export class CardPostComponent implements OnInit {

  @Input() post;
  @Input() user;
  @Output() deleted = new EventEmitter<string>();
  @Output() postId = new EventEmitter<number>();
  @Output() likeBool = new EventEmitter<number>();

  users = [];

  id = localStorage.getItem('user_id');
  
  post_id: number;
  
  posts: Post[];

  estaLogado: boolean;

  likeButton: string;

  isFav: boolean;

  constructor(public postService: PostServiceService, public usuarioService: UsuarioServiceService, public router: Router) {}

  ngOnInit() {
    this.estaLogado = this.usuarioService.isLogged();
  }

  deletePost(id){
    this.postService.deletePost(id).subscribe((res) => {
      console.log(res);
      this.deleted.emit("Post deletado");
    })
  }

  // toPostEdit(id){
  //   localStorage.setItem['post_id'];
  //   this.router.navigate(['/editar-perfil']);
  // }
  
  getPostId(id){
    this.postId.emit(id);
  }

  getLikeBool(){
    if(this.likeButton === 'heart'){
      this.likeButton = 'heart-outline';
    } else if (this.likeButton = 'heart-outline'){
      this.likeButton = 'heart';
    }
  }

  likePost(id){
    this.usuarioService.likePost(id).subscribe((res) => {
      console.log(res);
    });
  }

}