import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { Predmet } from '@digipop/models';
import { ActivatedRoute } from '@angular/router';
import { Project } from '@digipop/models';
import { ProjectsService, ScriptContentService } from '@digipop/shared';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'digipop-admin-section-management',
  templateUrl: './section-management.component.html',
  styleUrls: ['./section-management.component.scss']
})
export class SectionManagementComponent implements OnInit {
  version: string | null = environment.version;
  course: Predmet;
  sections: Project[];
  courseName: string;
  private courseId: string;
  private courseLink: string;

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private scriptContentService: ScriptContentService
  ) {}

  ngOnInit() {
    combineLatest([
      this.route.params,
      this.scriptContentService.scriptContent
    ]).subscribe(([param, script]) => {
      const courseMetaData = param.courseName.split('_');
      this.courseLink = param.courseName;
      this.courseId = courseMetaData[0];
      this.course = script.predmeti[this.courseId];
      this.courseName = this.course.naziv;
      this.sections = this.projectsService.oblasti[this.courseId];
    });
  }
}
