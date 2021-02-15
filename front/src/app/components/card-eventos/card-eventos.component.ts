import { Component, OnInit } from '@angular/core';

class Eventos {
  name: string;
  owner: string;
  img: string;
  category: string;
  isOficial:  boolean;
}

@Component({
  selector: 'app-card-eventos',
  templateUrl: './card-eventos.component.html',
  styleUrls: ['./card-eventos.component.scss'],
})
export class CardEventosComponent implements OnInit {

  eventos: Eventos[];

  constructor() { }

  ngOnInit() {
    this.eventos = [
      {
        name: 'CBLOL - 2021',
        owner: 'RiotGames',
        img: "../../assets/GoTeam Imagens/cblol-2021.jfif",
        category: 'Profissional',
        isOficial: false
      },
      {
        name: 'CEBOLÃO',
        owner: 'Baiano',
        img: "../../assets/GoTeam Imagens/baiano-anuncia-as-8-equipes-que-participarao-do-cbolao-confira-a-lista-5fc98520301c8.jpg",
        category: 'Amador',
        isOficial: false
      },
      {
        name: 'Campeonato mensal - Fev/21',
        owner: 'GoTeam',
        img: '../../assets/GoTeam Imagens/senna-true-damage.png',
        category: 'Oficial',
        isOficial: true
      },
      {
        name: 'Torneio semanal - Fev/21',
        owner: 'GoTeam',
        img: '../../assets/GoTeam Imagens/yasuo.jpg',
        category: 'Oficial',
        isOficial: true
      },
      {
        name: 'Rito Gomes',
        owner: 'YoDa',
        img: '../../assets/GoTeam Imagens/download.jfif',
        category: 'Amador',
        isOficial: false
      }
    ]
  }

}
