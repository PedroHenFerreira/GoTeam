import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UsuarioServiceService } from '../../services/usuario-service/usuario-service.service';

@Injectable({
  providedIn: 'root'
})
export class VisitanteGuard implements CanActivate {
  constructor(public router: Router, public usuarioService: UsuarioServiceService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.usuarioService.isLogged()){
        return true;
      } else {
        return this.router.navigate(['/home']);
      }
  }
  
}
