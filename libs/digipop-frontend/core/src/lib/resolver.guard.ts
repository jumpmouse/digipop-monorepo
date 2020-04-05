import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Skripta } from '@digipop/models';
import { ScriptContentService } from '@digipop/shared';
import { Observable } from 'rxjs';
import { QueryService } from './query.service';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ResolverGuard implements Resolve<Skripta | boolean> {
  constructor(
    private scriptContentService: ScriptContentService,
    private queryService: QueryService
  ) {}

  resolve(): Observable<Skripta> | boolean {
    console.log();
    if (this.scriptContentService.scriptLoaded) {
      return true;
    }
    return this.queryService.getScriptContent().pipe(
      map((script: { data: Skripta }) => {
        this.scriptContentService.setScriptContent(script.data);
        console.log(script.data);
        return script.data;
      })
    );
  }
}
