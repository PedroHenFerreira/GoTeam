import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  apiUrl:string = 'http://localhost:8000/api/';

  httpHeaders: any = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  constructor(public http: HttpClient) { }

  listUsers():Observable <any> {
    return this.http.get(this.apiUrl + 'listUsers' + this.httpHeaders);
  }

  getUserData():Observable <any> {
    return this.http.get(this.apiUrl + 'getUserData' + this.httpHeaders);
  }

  getOtherUserData():Observable <any> {
    return this.http.get(this.apiUrl + 'getOtherUserData' + this.httpHeaders);
  }

  listFollowingUsers():Observable <any> {
    return this.http.get(this.apiUrl + 'listFollowingUsers' + this.httpHeaders);
  }
}
