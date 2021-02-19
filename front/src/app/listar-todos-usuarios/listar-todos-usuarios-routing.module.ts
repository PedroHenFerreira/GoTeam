import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarTodosUsuariosPage } from './listar-todos-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: ListarTodosUsuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarTodosUsuariosPageRoutingModule {}
