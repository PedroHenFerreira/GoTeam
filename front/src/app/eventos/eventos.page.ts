import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../services/event-service/event-service.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  listEvent: [];
  getEvent: [];
  editEvent: [];
  deleteEvent: [];
  likeEvent: [];

  constructor(public eventService: EventServiceService) { }

  ngOnInit() {
    this.getListEvent();
    this.getShowEvent();
    this.putEditEvent();
    this.delEvent();
    this.putLikeEvent();
  }

  getListEvent(){
    this.eventService.listEvent().subscribe((res) => {
      this.listEvent = res;
      console.log(this.listEvent);
    });
  }

  getShowEvent(){
    this.eventService.getEvent().subscribe((res) => {
      this.getEvent = res;
      console.log(this.getEvent);
    });
  }

  putEditEvent(){
    this.eventService.editEvent().subscribe((res) => {
      this.editEvent = res;
      console.log(this.editEvent);
    });
  }

  delEvent(){
    this.eventService.deleteEvent().subscribe((res) => {
      this.deleteEvent = res;
      console.log(this.deleteEvent);
    });
  }

  putLikeEvent(){
    this.eventService.likeEvent().subscribe((res) => {
      this.likeEvent = res;
      console.log(this.likeEvent);
    });
  }
}
