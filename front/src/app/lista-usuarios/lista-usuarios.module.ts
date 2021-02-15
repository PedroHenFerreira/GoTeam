import { FollowersComponent } from '../components/followers/followers.component'
import { FollowingComponent } from '../components/following/following.component'
import { DuoRequestComponent } from '../components/duo-request/duo-request.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaUsuariosPageRoutingModule } from './lista-usuarios-routing.module';

import { ListaUsuariosPage } from './lista-usuarios.page';

import { HeaderComponent } from '../components/header/header.component';
import { TabMenuComponent } from '../components/tab-menu/tab-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaUsuariosPageRoutingModule
  ],
  declarations: [ListaUsuariosPage, FollowersComponent, FollowingComponent, DuoRequestComponent,TabMenuComponent,HeaderComponent]
})
export class ListaUsuariosPageModule {}
