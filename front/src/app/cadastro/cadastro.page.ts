import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  cadastro: Cadastro[];

  labels: Labels[];

  buttonLabel: string;

  buttonUrl: string;

  registerForm: FormGroup;

  constructor(public formbuilder: FormBuilder) { 
    this.registerForm = this.formbuilder.group({
      userName: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
      userNameRiot: [null, [Validators.required]],
      emailRiot: [null, [Validators.email, Validators.required]],
      userNameDiscord: [null, [Validators.required]]
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
        formControlName: 'userName'
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
      },
      {
        label: 'Confirmar senha',
        type: 'password',
        formControlName: 'confirmPassword'
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
          formControlName: 'userNameRiot'
        },
        {
          label: 'E-mail da conta-Riot',
          type: 'text',
          formControlName: 'emailRiot'
        },
        {
          label: 'Discord',
          type: 'text',
          formControlName: 'userNameDiscord'
        }
      ];
      this.buttonLabel = 'Finalizar';
      this.buttonUrl = '/home';
    }
  }

  submitForm(form){
    console.log(form);
    console.log(form.value);
  }

}
