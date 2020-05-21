import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Skripta, OblastSadrzaj } from '@digipop/models';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });

  constructor(private http: HttpClient) {}

  getJSONData(resource: 'script' | 'content' = 'script'): Observable<object> {
    return this.http.request('get', `/${resource}`, { headers: this.headers });
  }

  getScriptContent(): Observable<Skripta> {
    return this.http.request<Skripta>(
      'get',
      `/assets/script-content/script-content.json`,
      {
        headers: this.headers
      }
    );
  }
  getSectionContent(sectionName: string): Observable<OblastSadrzaj> {
    return this.http.request<OblastSadrzaj>(
      'get',
      `/assets/script-content/${sectionName}.json`,
      {
        headers: this.headers
      }
    );
  }
}
