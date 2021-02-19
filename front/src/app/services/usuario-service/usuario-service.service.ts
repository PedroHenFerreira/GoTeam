import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

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

  constructor(public http: HttpClient, public router: Router) { }

  listUsers():Observable <any> {
    return this.http.get(this.apiUrl + 'users', this.httpHeaders);
  }

  getDetails():Observable <any> {
    this.httpHeaders.headers['Authorization'] = 'Bearer ' + localStorage.getItem('userToken');
    return this.http.get(this.apiUrl + 'getDetails', this.httpHeaders);
  }

  getUserDetails(id):Observable <any> {
    return this.http.get(this.apiUrl + 'users/' + id, this.httpHeaders);
  }

  listFollowingUsers():Observable <any> {
    return this.http.get(this.apiUrl + 'listFollowingUsers' + this.httpHeaders);
  }

  isLogged(){
    return localStorage.getItem('userToken') !== null;
  }

  followUser(id){
    this.httpHeaders.headers['Authorization'] = 'Bearer ' + localStorage.getItem('userToken');
    return this.http.post(this.apiUrl + 'follow/' + id, null, this.httpHeaders);
  }

  unfollowUser(id){
    this.httpHeaders.headers['Authorization'] = 'Bearer ' + localStorage.getItem('userToken');
    return this.http.post(this.apiUrl + 'unfollow/' + id, null, this.httpHeaders);
  }

  likePost(id){
    this.httpHeaders.headers['Authorization'] = 'Bearer ' + localStorage.getItem('userToken');
    return this.http.post(this.apiUrl + 'like/' + id, null, this.httpHeaders);
  }
}
