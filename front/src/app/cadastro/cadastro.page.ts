import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationServiceService } from '../services/authetication-service/authentication-service.service';
import { Router } from '@angular/router';

class Cadastro {
  id: number;
  bgImg: string;
}

class Labels {
  label: string;
  type: string;
  formControlName: string;
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})

export class CadastroPage implements OnInit {

  register: [];

  cadastro: Cadastro[];

  labels: Labels[];

  buttonLabel: string;

  buttonUrl: string;

  registerForm: FormGroup;

  constructor(public formbuilder: FormBuilder, public authenticationService: AuthenticationServiceService,public router: Router) { 
    this.registerForm = this.formbuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      lolUsername: [null, [Validators.required]],
      lolEmail: [null, [Validators.email, Validators.required]],
      contact: [null, [Validators.required]]
    });
   }

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
        label: 'Nome de usuário',
        type: 'text',
        formControlName: 'name'
      },
      {
        label: 'E-mail',
        type: 'text',
        formControlName: 'email'
      },
      {
        label: 'Senha',
        type: 'password',
        formControlName: 'password'
      }
    ]

    this.buttonLabel = 'Prosseguir';

    this.buttonUrl = '';
  }

  prosseguirCadastro(): void {
    if (this.cadastro[0].bgImg === '../../assets/GoTeam Imagens/Cadastro1-bg.png'){
      this.cadastro[0].bgImg = "../../assets/GoTeam Imagens/Cadastro2-bg.png";
      this.cadastro[0].id = 2;
      this.labels = [
        {
          label: 'Nome da conta-Riot',
          type: 'text',
          formControlName: 'lolUsername'
        },
        {
          label: 'E-mail da conta-Riot',
          type: 'text',
          formControlName: 'lolEmail'
        },
        {
          label: 'Discord',
          type: 'text',
          formControlName: 'contact'
        }
      ];
      this.buttonLabel = 'Finalizar';
      this.buttonUrl = '/home';
    }
  }

  registerUser(form){
    let regForm = form.value;
    this.authenticationService.register(regForm).subscribe((res) => {
      this.register = res;
      console.log(this.register);
    });
  }
}
