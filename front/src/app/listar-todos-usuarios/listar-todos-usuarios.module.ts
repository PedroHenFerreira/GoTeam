import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarTodosUsuariosPageRoutingModule } from './listar-todos-usuarios-routing.module';

import { ListarTodosUsuariosPage } from './listar-todos-usuarios.page';

import { HeaderComponent } from '../components/header/header.component';
import { TabMenuComponent } from '../components/tab-menu/tab-menu.component';
import { UsuarioComponent } from '../components/usuario/usuario.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarTodosUsuariosPageRoutingModule
  ],
  declarations: [ListarTodosUsuariosPage, HeaderComponent, TabMenuComponent, UsuarioComponent]
})
export class ListarTodosUsuariosPageModule {}
