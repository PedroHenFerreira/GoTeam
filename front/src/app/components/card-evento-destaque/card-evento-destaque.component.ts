import { Component, OnInit } from '@angular/core';

class HighEvent {
  name: string;
  owner: string;
  category: string;
  img: string;
}

@Component({
  selector: 'app-card-evento-destaque',
  templateUrl: './card-evento-destaque.component.html',
  styleUrls: ['./card-evento-destaque.component.scss'],
})
export class CardEventoDestaqueComponent implements OnInit {

  highEvent: HighEvent[];

  constructor() { }

  ngOnInit() {
    this.highEvent = [
      {
        name: 'CBLOL - 2021',
        owner: '@RiotGames',
        category: 'Profissional',
        img: '../../assets/GoTeam Imagens/cblol-2021.jfif'
      },
      {
        name: 'CEBOLÃO',
        owner: '@Baiano',
        category: 'Amador',
        img: '../../assets/GoTeam Imagens/baiano-anuncia-as-8-equipes-que-participarao-do-cbolao-confira-a-lista-5fc98520301c8.jpg'
      },
      {
        name: 'Campeonato - Fev/21',
        owner: '@GoTeam',
        category: 'Oficial',
        img: '../../assets/GoTeam Imagens/senna-true-damage.png'
      }
    ]
  }

}
