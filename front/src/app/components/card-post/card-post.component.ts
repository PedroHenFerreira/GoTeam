import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostServiceService } from '../../services/post-service/post-service.service';
import { UsuarioServiceService } from '../../services/usuario-service/usuario-service.service';

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
  @Output() deleted = new EventEmitter<string>();

  users = [];

  user = [];
  
  posts: Post[];

  estaLogado: boolean;

  constructor(public postService: PostServiceService, public usuarioService: UsuarioServiceService) {}

  ngOnInit() {
    this.estaLogado = this.usuarioService.isLogged();
  }

  deletePost(id){
    this.postService.deletePost(id).subscribe((res) => {
      console.log(res);
      this.deleted.emit("Post deletado");
    })
  }

}
