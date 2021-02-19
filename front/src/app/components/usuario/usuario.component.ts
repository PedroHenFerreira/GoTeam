import { Component, Input, OnInit } from '@angular/core';
import { UsuarioServiceService } from '../../services/usuario-service/usuario-service.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit {

  @Input() user;
  myUser=[];

  constructor(public usuarioService: UsuarioServiceService) { }

  ngOnInit() {
    this.getDetails();
  }

  getDetails(){
    this.usuarioService.getDetails().subscribe((res) => {
      this.myUser = res.user;
      console.log(this.myUser);
    })
  }

  followUser(id){
    console.log(id)
    this.usuarioService.followUser(id).subscribe((res) => {
      console.log(res);
    });
  }

  unfollowUser(id){
    this.usuarioService.unfollowUser(id).subscribe((res) =>{
      console.log(res);
    })
  }

}
