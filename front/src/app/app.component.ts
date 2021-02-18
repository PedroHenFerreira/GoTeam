import { Component } from '@angular/core';
import { AuthenticationServiceService } from './services/authetication-service/authentication-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  public appPages = [  { title: 'Home', url: '/home', icon: 'game-controller' },
  { title: 'Perfil', url: '/profile', icon: 'person' },
  { title: 'Evento', url: '/eventos', icon: 'calendar-clear' },
  { title: 'Criar um evento', url: '/criar-evento', icon: 'trophy' },
  { title: 'Pesquisar', url: '/pesquisar', icon: 'search' },
  { title: 'Configurações', url: '/configuracoes', icon: 'settings' },
  //{ title: 'Sair', url: '/login', icon: 'log-out' },
];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  
  constructor(public authenticationService: AuthenticationServiceService,public router: Router) {}
  
  logout(){
    this.authenticationService.logout().subscribe((res) => {
      console.log(res);
      localStorage.removeItem('userToken');
      this.router.navigate(['/login']);
    })
  }
}
