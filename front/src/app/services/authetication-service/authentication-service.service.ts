import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  apiUrl: string = 'http://localhost:8000/api/';

  constructor(public http: HttpClient) { }

  httpHeaders: any = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  userLogin():Observable <any>{
    return this.http.get(this.apiUrl + 'userLogin' + this.httpHeaders);
  }

  userRegister():Observable <any>{
    return this.http.get(this.apiUrl + 'userRegister' + this.httpHeaders);
  }

  userLogout():Observable <any>{
    return this.http.get(this.apiUrl + 'userLogout' + this.httpHeaders);
  }
}
