import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  constructor(private http: HttpClient) {}
  getJSONData(
    resource: 'script' | 'content' = 'script',
    parameters?: object
  ): Observable<object> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.http.request('get', `/${resource}`, { headers });
  }
}
