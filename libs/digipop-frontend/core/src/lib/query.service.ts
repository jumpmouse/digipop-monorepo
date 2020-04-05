import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  
  private headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });

  constructor(private http: HttpClient) {}

  getJSONData(
    resource: 'script' | 'content' = 'script',
  ): Observable<object> {
    return this.http.request('get', `/${resource}`, { headers: this.headers });
  }

  getScriptContent(): Observable<object> {
    return this.http.request('get', `/script-content`, { headers: this.headers });
  }
}
