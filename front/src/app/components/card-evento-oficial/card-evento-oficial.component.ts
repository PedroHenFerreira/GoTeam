import { Component, OnInit } from '@angular/core';

class Eventos {
  name: string;
  owner: string;
  img: string;
  category: string;
  isOficial:  boolean;
}

@Component({
  selector: 'app-card-evento-oficial',
  templateUrl: './card-evento-oficial.component.html',
  styleUrls: ['./card-evento-oficial.component.scss'],
})
export class CardEventoOficialComponent implements OnInit {

  eventos: Eventos[];

  eventosOficiais: Eventos[]=[];

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

    this.ehOficial();
  }

  ehOficial() {
    for (let i=0; i<this.eventos.length; i++){
      if(this.eventos[i].isOficial) {
        this.eventosOficiais.push(this.eventos[i]);
      }
    }
  }

}
