import { Component, OnInit } from '@angular/core';

class Cadastro {
  id: number;
  bgImg: string;
}

class Labels {
  label: string;
  isPassword: boolean;
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})

export class CadastroPage implements OnInit {

  cadastro: Cadastro[];

  labels: Labels[];

  buttonLabel: string;

  buttonUrl: string;

  constructor() { }

  ngOnInit() {
    this.cadastro = [
      {
        id: 1,
        bgImg: '../../assets/GoTeam Imagens/Cadastro1-bg.png'
      },
      {
        id: 2,
        bgImg: "../../assets/GoTeam Imagens/Cadastro2-bg.png"
      }
    ]

    this.labels = [
      {
        label: 'Nome de usuário:',
        isPassword: false
      },
      {
        label: 'E-mail:',
        isPassword: false
      },
      {
        label: 'Senha:',
        isPassword: true
      },
      {
        label: 'Confirmar senha:',
        isPassword: true
      }
    ]

    this.buttonLabel = 'Prosseguir';

    this.buttonUrl = '';
  }

  prosseguirCadastro(): void {
    if (this.cadastro[0].bgImg === '../../assets/GoTeam Imagens/Cadastro1-bg.png'){
      this.cadastro[0].bgImg = "../../assets/GoTeam Imagens/Cadastro2-bg.png";
      this.labels = [
        {
          label: 'Nome da conta-Riot:',
          isPassword: false
        },
        {
          label: 'E-mail da conta-Riot',
          isPassword: false
        }
      ];
      this.buttonLabel = 'Finalizar';
      this.buttonUrl = '/home';
    }
  }

}
