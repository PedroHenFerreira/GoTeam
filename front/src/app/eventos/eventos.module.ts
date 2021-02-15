import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventosPageRoutingModule } from './eventos-routing.module';

import { EventosPage } from './eventos.page';

import { HeaderComponent } from '../components/header/header.component';
import { TabMenuComponent } from '../components/tab-menu/tab-menu.component';
import { CardEventoDestaqueComponent } from '../components/card-evento-destaque/card-evento-destaque.component';
import { CardEventoOficialComponent } from '../components/card-evento-oficial/card-evento-oficial.component';
import { CardEventosComponent } from '../components/card-eventos/card-eventos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventosPageRoutingModule
  ],
  declarations: [EventosPage,
    HeaderComponent,
    TabMenuComponent,
    CardEventoDestaqueComponent,
    CardEventoOficialComponent,
    CardEventosComponent
  ]
})
export class EventosPageModule {}
