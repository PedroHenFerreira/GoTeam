import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { VisitanteGuard } from './guards/visitante/visitante.guard';
import { UsuarioGuard } from './guards/usuario/usuario.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule),
    canActivate: [UsuarioGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [VisitanteGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [UsuarioGuard]
  },
  {
    path: 'editar-perfil',
    loadChildren: () => import('./editar-perfil/editar-perfil.module').then( m => m.EditarPerfilPageModule),
    canActivate: [VisitanteGuard]
  },
  {
    path: 'lista-usuarios',
    loadChildren: () => import('./lista-usuarios/lista-usuarios.module').then( m => m.ListaUsuariosPageModule),
    canActivate: [VisitanteGuard]
  },
  {
    path: 'comentarios',
    loadChildren: () => import('./comentarios/comentarios.module').then( m => m.ComentariosPageModule),
  },
  {
    path: 'criar-evento',
    loadChildren: () => import('./criar-evento/criar-evento.module').then( m => m.CriarEventoPageModule),
    canActivate: [VisitanteGuard]
  },
  {
    path: 'eventos',
    loadChildren: () => import('./eventos/eventos.module').then( m => m.EventosPageModule),
    canActivate: [VisitanteGuard]
  },
  {
    path: 'criar-post',
    loadChildren: () => import('./criar-post/criar-post.module').then( m => m.CriarPostPageModule),
    canActivate: [VisitanteGuard]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
