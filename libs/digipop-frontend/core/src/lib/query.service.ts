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

  getScriptContent(): Observable<{data: Skripta}> {
    return this.http.request<{data: Skripta}>('get', `/script-content`, {
      headers: this.headers
    });
  }
  getSectionContent(sectionName: string): Observable<{data: OblastSadrzaj}> {
    return of<{data: OblastSadrzaj}>({
      data : {
        'pez-I-5_natalitet': {
          id: 'pez-I-5_natalitet',
          naziv: 'Natalitet',
          tekst: 'tekstteste teste st dg rrer tesr asd ',
          zadaci: [{opis: 'ovo je opis', tehnicki_opis: 'ovo je tehnicki opis', zadatak: 'ovo je zadatak'}],
          reference: [{link: 'digipop.bg.ac.rs/referenca', opis: 'ovo je tekst linka/reference' }]    
        }
      }
    });
    // return this.http.request<OblastSadrzaj>('get', `/script-content/${sectionName}`, {
    //   headers: this.headers
    // });
  }
}
