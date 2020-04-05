import { Injectable } from '@angular/core';
import { Skripta, Predmet, Oblast } from '@digipop/models';
import { Observable, BehaviorSubject } from 'rxjs';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class ScriptContentService {
  public scriptLoaded = false;
  private currentScriptContent: Skripta;
  private currentScriptContent$: BehaviorSubject<Skripta> = new BehaviorSubject(null);

  constructor(private utilsService: UtilsService) {}

  get scriptContent(): Observable<Skripta> {
    return this.currentScriptContent$.asObservable();
  }

  public addUpdateCourse(course: Predmet) {
    // TODO add or update course
    this.utilsService.downloadDocument(
      course.link + '.txt',
      JSON.stringify(course)
    );
  }

  public addUpdateSection(section: Oblast) {
    this.utilsService.downloadDocument(
      section.link + '.txt',
      JSON.stringify(section)
    );
  }

  public setScriptContent(scriptObject: Skripta) {
    if (this.scriptLoaded) {
      this.currentScriptContent = Object.assign(this.currentScriptContent, scriptObject);
      this.updateScriptFile();
      this.currentScriptContent$.next(this.currentScriptContent);
      return;
    }
    this.currentScriptContent = scriptObject;
    this.currentScriptContent$.next(this.currentScriptContent);
    this.scriptLoaded = true;
  }

  private updateScriptFile(): void {
    // TODO: update json file on the server
    this.utilsService.downloadDocument(
      'script-content.const.txt',
      JSON.stringify(this.currentScriptContent)
    );
  }
}
