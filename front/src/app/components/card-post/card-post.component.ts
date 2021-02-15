import { Component, OnInit } from '@angular/core';

class Post {
  user: string;
  profileImg: string;
  postTime: string;
  text: string;
}

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss'],
})
export class CardPostComponent implements OnInit {

  posts: Post[];

  constructor() { }

  ngOnInit() {
    this.posts = [
      {
        user: 'Lukaldin10efaixa',
        profileImg: "../../assets/GoTeam Imagens/rammus.jpg",
        postTime: '23',
        text: 'PENTALKILL DE RAMMUS HOJE! #Rolando&Matando'
      },
      {
        user: 'LeagueOfDraven',
        profileImg: "../../assets/GoTeam Imagens/draven.png",
        postTime: '50',
        text: 'Mais umma vitória, mais um time carregado por mim...'
      },
      {
        user: 'L ainda vive',
        profileImg: "../../assets/GoTeam Imagens/Lawliet.jpg",
        postTime: '53',
        text: 'Light, pode me dar sua opinião? Por que meu time sempre perde?'
      },
      {
        user: 'GladiadorNoxiano',
        profileImg: "../../assets/GoTeam Imagens/darius.jpg",
        postTime: '59',
        text: 'Caí pra Bronze 3 :('
      }
    ]
  }

}
