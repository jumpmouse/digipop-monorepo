import { Component, OnInit } from '@angular/core';
import { Project } from '@digipop/models';
import { Predmet, ContentMetaData, Skripta } from '@digipop/models';
import { ProjectsService } from '@digipop/shared';
import { ScriptContentService } from '@digipop/shared';
import { skipWhile } from 'rxjs/operators';

@Component({
  selector: 'digipop-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class ContentManagementComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;
  predmeti: Project[];
  script: ContentMetaData;

  constructor(
    private projectsService: ProjectsService,
    private scriptContentService: ScriptContentService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.scriptContentService.scriptContent
      .pipe(skipWhile(script => !script))
      .subscribe(script => {
        this.predmeti = this.prepareProjects(script);
        this.isLoading = false;
        this.script = {
          title: script.naslov,
          subtitle: script.podnaslov,
          shortDescription: script.opis_ukratko,
          description: script.opis
        };
      });
  }

  prepareProjects(script: Skripta): Project[] {
    return this.projectsService.prepareProjectsFromPredmeti(script.predmeti);
  }
}
