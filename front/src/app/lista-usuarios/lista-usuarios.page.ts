import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.page.html',
  styleUrls: ['./lista-usuarios.page.scss'],
})

export class ListaUsuariosPage implements OnInit {

  type:string;
  constructor() { 
    this.type= 'followers';
  }

  ngOnInit() {
    
  }
  
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}
