import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SNewsService {
  constructor(private http: HttpClient) {}
  getRecent(): Observable<any> {
    return this.http.get(
      'https://testing-spring-app.herokuapp.com/news/recent'
    );
  }
  getSingleNews(id: string): Observable<any> {
    return this.http.get('https://testing-spring-app.herokuapp.com/news/' + id);
  }
}
