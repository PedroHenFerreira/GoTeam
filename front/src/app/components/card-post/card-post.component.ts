import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../../services/post-service/post-service.service';

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

  newPost = [];

  posts: Post[];

  constructor(public postService: PostServiceService) {}

  ngOnInit() {
    this.posts = [
      {
        id: 0,
        user: 'Lukaldin10efaixa',
        profileImg: "../../assets/GoTeam Imagens/rammus.jpg",
        postTime: '23',
        text: 'PENTALKILL DE RAMMUS HOJE! #Rolando&Matando',
        isLike: false
      },
      {
        id: 1,
        user: 'LeagueOfDraven',
        profileImg: "../../assets/GoTeam Imagens/draven.png",
        postTime: '50',
        text: 'Mais umma vitória, mais um time carregado por mim...',
        isLike: false
      },
      {
        id: 2,
        user: 'L ainda vive',
        profileImg: "../../assets/GoTeam Imagens/Lawliet.jpg",
        postTime: '53',
        text: 'Light, pode me dar sua opinião? Por que meu time sempre perde?',
        isLike: false
      },
      {
        id: 3,
        user: 'GladiadorNoxiano',
        profileImg: "../../assets/GoTeam Imagens/darius.jpg",
        postTime: '59',
        text: 'Caí pra Bronze 3 :(',
        isLike: false
      }
    ]
  }

  likeDislike(id: number){
    if(this.posts[id].isLike){
      this.posts[id].isLike = false;
    } else if(!this.posts[id].isLike){
      this.posts[id].isLike = true;
    }
  }

}
