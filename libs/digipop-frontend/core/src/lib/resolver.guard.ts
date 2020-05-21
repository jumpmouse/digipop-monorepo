import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Skripta } from '@digipop/models';
import { ScriptContentService, ProjectsService } from '@digipop/shared';
import { Observable } from 'rxjs';
import { QueryService } from './query.service';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ResolverGuard implements Resolve<Skripta | boolean> {
  constructor(
    private scriptContentService: ScriptContentService,
    private queryService: QueryService,
    private projectsService: ProjectsService
  ) {}

  resolve(): Observable<Skripta> | boolean {
    if (this.scriptContentService.scriptLoaded) {
      return true;
    }
    return this.queryService.getScriptContent().pipe(
      map((script: Skripta) => {
        const skripta = JSON.parse(JSON.stringify(script));
        this.scriptContentService.setScriptContent(skripta);
        this.projectsService.prepareProjectsFromPredmeti(skripta.predmeti);
        return skripta;
      })
    );
  }
}
