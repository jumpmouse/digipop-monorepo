import { Injectable } from '@angular/core';
import {
  Skripta,
  Predmet,
  OblastForEditing,
  Oblast
} from '@app/models/skripta.model';
import { SadrzajSkripte } from '@assets/script-content/script-content.constant';
import { Observable, BehaviorSubject } from 'rxjs';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class ScriptContentService {
  private currentScriptContent: Skripta = JSON.parse(
    JSON.stringify(SadrzajSkripte)
  );
  private currentScriptContent$: BehaviorSubject<Skripta> = new BehaviorSubject(
    this.currentScriptContent
  );

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
    this.currentScriptContent = Object.assign(
      this.currentScriptContent,
      scriptObject
    );
    this.currentScriptContent$.next(this.currentScriptContent);
    this.updateScriptFile();
  }

  private updateScriptFile(): void {
    // TODO: update json file on the server
    this.utilsService.downloadDocument(
      'script-content.const.txt',
      JSON.stringify(this.currentScriptContent)
    );
  }
}
