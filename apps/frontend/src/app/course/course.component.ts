import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { Predmet, Oblast, ContentMetaData, Skripta } from '@digipop/models';
import { ActivatedRoute } from '@angular/router';
import { Project } from '@digipop/models';
import { ProjectsService } from '@digipop/shared';
import { ScriptContentService } from '@digipop/shared';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'digipop-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  version: string | null = environment.version;
  course: ContentMetaData;
  sections: Project[];
  courseLink: string;
  courseId: string;
  courseName: string;

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
      this.courseName = courseMetaData[1];
      this.course = this.prepareCourse(script.predmeti[this.courseId]);
      this.sections = this.prepareProjects(this.courseId);
    });
  }

  prepareProjects(courseId: string): Project[] {
    return this.projectsService.oblasti[courseId];
  }

  prepareCourse(predmet: Predmet): ContentMetaData {
    return {
      title: predmet.naziv,
      subtitle: '',
      shortDescription: '',
      description: predmet.opis
    };
  }
}
