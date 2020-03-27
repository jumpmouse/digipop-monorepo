import { Component, OnInit } from '@angular/core';
import { Project } from '@app/models/project.model';
import { Predmet, ContentMetaData, Skripta } from '@app/models/skripta.model';
import { ProjectsService } from '@app/shared/services/projects.service';
import { ScriptContentService } from '@app/shared/services/script-content.service';

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
    const predmeti: Project[] = Object.entries(
      script.predmeti
    ).map(([id, predmet]: [string, Predmet], index: number) =>
      this.projectsService.prepareProjectFromPredmet(predmet, index)
    );
    return predmeti;
  }
}
