import { Injectable } from '@angular/core';
import  { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {

  apiUrl: string = 'http://localhost:8000/api/';

  constructor(public http: HttpClient) { }

  httpHeaders: any = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  createComment():Observable <any> {
    return this.http.get(this.apiUrl + 'createComment' + this.httpHeaders);
  }

  editComment():Observable <any> {
    return this.http.get(this.apiUrl + 'editComent' + this.httpHeaders);
  }

  listComments():Observable <any> {
    return this.http.get(this.apiUrl + 'listComments' + this.httpHeaders);
  }

  deleteComment():Observable <any> {
    return this.http.get(this.apiUrl + 'deleteComment' + this.httpHeaders);
  }
}
