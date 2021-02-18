import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../services/event-service/event-service.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-criar-evento',
  templateUrl: './criar-evento.page.html',
  styleUrls: ['./criar-evento.page.scss'],
})
export class CriarEventoPage implements OnInit {

  createEvent: [];

  constructor(public eventService: EventServiceService, public alertController: AlertController, public router:Router, public toastController: ToastController, ) { }

  async eventoCriadoToast() {
    const toast = await this.toastController.create({
      message: 'Evento criado com sucesso!',
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

  async confirmarCriacaoAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Deseja criar esse evento?',
      buttons: ['Não', {
        text: 'Confirmar',
        handler: () => {
          console.log(this.eventoCriadoToast());
          this.router.navigate(['/eventos']);
        }
      }] 
    });

    await alert.present();
  }

  ngOnInit() {
    this.postEvent();
  }

  postEvent(){
    this.eventService.createEvent().subscribe((res) => {
      this.createEvent = res;
      console.log(this.createEvent);
    });
  }

}
