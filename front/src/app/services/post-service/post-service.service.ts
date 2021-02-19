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

  createPost(form):Observable <any> {
    this.httpHeaders.headers['Authorization'] = 'Bearer ' + localStorage.getItem('userToken');
    return this.http.post(this.apiUrl + 'createPost', form, this.httpHeaders);
  }

  listPosts():Observable <any> {
    return this.http.get(this.apiUrl + 'post', this.httpHeaders);
  }

  listFollowingPosts():Observable <any> {
    return this.http.get(this.apiUrl + 'listFollowingPosts', this.httpHeaders);
  }

  showThisPost():Observable <any> {
    return this.http.get(this.apiUrl + 'showThisPost', this.httpHeaders);
  }

  editPost(id, form):Observable <any> {
    this.httpHeaders.headers['Authorization'] = 'Bearer ' + localStorage.getItem('userToken');
    return this.http.put(this.apiUrl + 'post/' + id, form, this.httpHeaders);
  }

  deletePost(id):Observable <any> {
    this.httpHeaders.headers['Authorization'] = 'Bearer ' + localStorage.getItem('userToken');
    return this.http.delete(this.apiUrl + 'deletePost/' + id, this.httpHeaders);
  }
  
}

