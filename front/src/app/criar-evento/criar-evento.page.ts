import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../services/event-service/event-service.service';

@Component({
  selector: 'app-criar-evento',
  templateUrl: './criar-evento.page.html',
  styleUrls: ['./criar-evento.page.scss'],
})
export class CriarEventoPage implements OnInit {

  createEvent: [];

  constructor(public eventService: EventServiceService) { }

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
