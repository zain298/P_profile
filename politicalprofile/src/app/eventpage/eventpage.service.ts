import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventpageService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get('https://testing-spring-app.herokuapp.com/event/all');
  }
}
