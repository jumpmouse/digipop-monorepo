import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Skripta, OblastSadrzaj, ProgramskaCelinaSadrzaj } from '@digipop/models';
import { ScriptContentService, ProjectsService } from '@digipop/shared';
import { Observable, combineLatest } from 'rxjs';
import { QueryService } from './query.service';
import { map, flatMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SectionGuard implements Resolve<OblastSadrzaj> {
  constructor(
    private scriptContentService: ScriptContentService,
    private queryService: QueryService,
    private projectsService: ProjectsService,
    // private route: ActivatedRoute
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<OblastSadrzaj> {
    const courseMetaData = route.params.courseName.split('_');
    const sectionMetaData = route.params.sectionName.split('_');
    const courseId = courseMetaData[0];
    const sectionId = sectionMetaData[0];

    const sectionContentObs: Observable<OblastSadrzaj> = this.queryService
      .getSectionContent(route.params.sectionName)
      .pipe(
        map((programskaCelina: { data: OblastSadrzaj }) => {
          const sadrzaj = programskaCelina.data;
          console.log(sadrzaj);
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
      map((script: { data: Skripta }) => {
        const skripta = script.data;
        this.scriptContentService.setScriptContent(skripta);
        this.projectsService.prepareProjectsFromPredmeti(skripta.predmeti);
        return script.data;
      })
    );
    const observables: [
      Observable<Skripta>,
      Observable<OblastSadrzaj>
    ] = [scriptObs, sectionContentObs];

    return combineLatest(observables).pipe(
      map(data => {
        return data[1];
      })
    );
  }
}
