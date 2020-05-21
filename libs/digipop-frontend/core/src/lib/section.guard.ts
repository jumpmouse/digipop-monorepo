import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Skripta, OblastSadrzaj } from '@digipop/models';
import { ScriptContentService, ProjectsService } from '@digipop/shared';
import { QueryService } from './query.service';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SectionGuard implements Resolve<OblastSadrzaj> {
  constructor(
    private scriptContentService: ScriptContentService,
    private queryService: QueryService,
    private projectsService: ProjectsService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<OblastSadrzaj> {
    const courseMetaData = route.params.courseName.split('_');
    const sectionMetaData = route.params.sectionName.split('_');
    const courseId = courseMetaData[0];
    const sectionId = sectionMetaData[0];

    const sectionContentObs: Observable<OblastSadrzaj> = this.queryService
      .getSectionContent(route.params.sectionName)
      .pipe(
        map((sectionContent: OblastSadrzaj) => {
          const sadrzaj = sectionContent;
          this.scriptContentService.setSectionContent(
            courseId,
            sectionId,
            sadrzaj
          );
          return sadrzaj;
        })
      );

    if (this.scriptContentService.scriptLoaded) {
      return sectionContentObs;
    }

    const scriptObs = this.queryService.getScriptContent().pipe(
      map((script: Skripta) => {
        const skripta = JSON.parse(JSON.stringify(script));
        this.scriptContentService.setScriptContent(skripta);
        this.projectsService.prepareProjectsFromPredmeti(skripta.predmeti);
        return skripta;
      })
    );

    const observables: [Observable<Skripta>, Observable<OblastSadrzaj>] = [
      scriptObs,
      sectionContentObs
    ];

    return combineLatest(observables).pipe(
      map(data => {
        return data[1];
      })
    );
  }
}
