import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

import { HeaderComponent } from '../components/header/header.component';
import { CardEventoDestaqueComponent } from '../components/card-evento-destaque/card-evento-destaque.component'
import { CardPostComponent } from '../components/card-post/card-post.component';
import { TabMenuComponent } from '../components/tab-menu/tab-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, HeaderComponent, CardEventoDestaqueComponent, CardPostComponent, TabMenuComponent]
})
export class HomePageModule {}
