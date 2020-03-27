import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  constructor(private http: HttpClient) {}

  postJSONData(
    resource: 'script' | 'content' = 'script',
    requestBody: object,
    parameters?: object
  ): Observable<object> {
    const body = new Blob([JSON.stringify(requestBody)], { type: 'application/json' });
    const headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.http.request('post', `/${resource}`, { body, headers });
  }
}
