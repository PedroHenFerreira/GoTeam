import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from '../services/usuario-service/usuario-service.service';

@Component({
  selector: 'app-listar-todos-usuarios',
  templateUrl: './listar-todos-usuarios.page.html',
  styleUrls: ['./listar-todos-usuarios.page.scss'],
})
export class ListarTodosUsuariosPage implements OnInit {

  users=[];

  constructor(public usuarioService: UsuarioServiceService) { }

  ngOnInit() {
    this.listUsers();
  }

  listUsers(){
    this.usuarioService.listUsers().subscribe((res) => {
      this.users = res.Sucesso;
      console.log(this.users);
    })
  }

}
