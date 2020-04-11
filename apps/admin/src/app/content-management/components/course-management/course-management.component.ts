import { Component, OnInit } from '@angular/core';
import { Project } from '@digipop/models';
import { Predmet, ContentMetaData, Skripta } from '@digipop/models';
import { ProjectsService } from '@digipop/shared';
import { ScriptContentService } from '@digipop/shared';

@Component({
  selector: 'digipop-admin-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.scss']
})
export class CourseManagementComponent implements OnInit {
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
    this.scriptContentService.scriptContent.subscribe(script => {
      this.predmeti = this.prepareProjects();
      this.isLoading = false;
      this.script = {
        title: script.naslov,
        subtitle: script.podnaslov,
        shortDescription: script.opis_ukratko,
        description: script.opis
      };
    });
  }

  prepareProjects(): Project[] {
    return this.projectsService.predmeti;
  }
}
