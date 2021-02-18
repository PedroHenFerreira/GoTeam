import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UsuarioServiceService } from 'app/services/usuario-service/usuario-service.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate {
  
  constructor(public router: Router, public toastController: ToastController, public usuarioService: UsuarioServiceService){}
  
  async unauthorizedToast() {
    const toast = await this.toastController.create({
      position: 'bottom',
      message: 'Você já está logado!',
      duration: 3000  
    });
    toast.present();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.usuarioService.isLogged()){
      this.unauthorizedToast();
      return this.router.navigate(['/home']);
    }else{
      return true;
    }
  }
  
}
