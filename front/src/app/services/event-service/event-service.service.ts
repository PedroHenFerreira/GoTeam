import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  apiUrl: string = 'http://localhost:8000/api/';

  constructor(public http: HttpClient) { }

  httpHeaders: any = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  createEvent():Observable <any> {
    return this.http.get(this.apiUrl + 'createEvent' + this.httpHeaders);
  }

  listEvent():Observable <any> {
    return this.http.get(this.apiUrl + 'listEvent' + this.httpHeaders);
  }

  getEvent():Observable <any> {
    return this.http.get(this.apiUrl + 'getEvent' + this.httpHeaders);
  }

  editEvent():Observable <any> {
    return this.http.get(this.apiUrl + 'editEvent' + this.httpHeaders);
  }

  deleteEvent():Observable <any> {
    return this.http.get(this.apiUrl + 'deleteEvent' + this.httpHeaders);
  }

  likeEvent():Observable <any> {
    return this.http.get(this.apiUrl + 'likeEvent' + this.httpHeaders);
  }
}
