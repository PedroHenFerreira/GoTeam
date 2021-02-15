import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarEventoPageRoutingModule } from './criar-evento-routing.module';

import { CriarEventoPage } from './criar-evento.page';

import { HeaderComponent } from '../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CriarEventoPageRoutingModule
  ],
  declarations: [CriarEventoPage, HeaderComponent]
})
export class CriarEventoPageModule {}
