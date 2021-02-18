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

  createComment(form,id):Observable <any> {
    this.httpHeaders.headers['Authorization'] = 'Bearer ' + localStorage.getItem('userToken');
    return this.http.post(this.apiUrl + 'comment/' + id ,form, this.httpHeaders);
  }

  editComment(id,form):Observable <any> {
    this.httpHeaders.headers['Authorization'] = 'Bearer ' + localStorage.getItem('userToken');
    return this.http.put(this.apiUrl + 'comment/'+ id, form, this.httpHeaders);
  }

  listComments():Observable <any> {
    return this.http.get(this.apiUrl + 'listComments' + this.httpHeaders);
  }

  deleteComment(id):Observable <any> {
    this.httpHeaders.headers['Authorization'] = 'Bearer ' + localStorage.getItem('userToken');
    return this.http.delete(this.apiUrl + 'comment/'+ id, this.httpHeaders);
  }
}
