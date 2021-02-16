import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  apiUrl:string = 'http://localhost:8000/api/';

  constructor(public http: HttpClient) {}

  httpHeaders: any = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  createPost():Observable <any> {
    return this.http.get(this.apiUrl + 'createPost' + this.httpHeaders);
  }

  listPosts():Observable <any> {
    return this.http.get(this.apiUrl + 'listPosts' + this.httpHeaders);
  }

  listFollowingPosts():Observable <any> {
    return this.http.get(this.apiUrl + 'listFollowingPosts' + this.httpHeaders);
  }

  showThisPost():Observable <any> {
    return this.http.get(this.apiUrl + 'showThisPost' + this.httpHeaders);
  }

  editPost():Observable <any> {
    return this.http.get(this.apiUrl + 'editPost' + this.httpHeaders);
  }

  deletePost():Observable <any> {
    return this.http.get(this.apiUrl + 'deletePost' + this.httpHeaders);
  }
  
}

