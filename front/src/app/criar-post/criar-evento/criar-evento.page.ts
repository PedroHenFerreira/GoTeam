import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-criar-evento',
  templateUrl: './criar-evento.page.html',
  styleUrls: ['./criar-evento.page.scss'],
})
export class CriarEventoPage implements OnInit {

  registerForm: FormGroup;

  constructor(public alertController: AlertController,
    public toastController: ToastController,
    public formBuilder: FormBuilder) { 
      this.registerForm = this.formBuilder.group({})
     }

  async presentToast() {
    const toast = await this.toastController.create({
      header: 'Evento criado com sucesso!',
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Tem certeza que deseja criar esse evento?',
      buttons: ['Não', 
    {
      text: 'Sim',
      cssClass: 'toast',
      handler: () => {
        this.presentToast();
      }
    }]
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
