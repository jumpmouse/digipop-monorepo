import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { Predmet, Oblast, ContentMetaData, Skripta } from '@app/models/skripta.model';
import { ActivatedRoute } from '@angular/router';
import { Project } from '@app/models/project.model';
import { ProjectsService } from '@app/shared/services/projects.service';
import { ScriptContentService } from '@app/shared/services/script-content.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-course',
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
    combineLatest([this.route.params, this.scriptContentService.scriptContent]).subscribe(([param, script]) => {
      const courseMetaData = param.courseName.split('_');
      this.courseLink = param.courseName;
      this.courseId = courseMetaData[0];
      this.courseName = courseMetaData[1];
      this.sections = this.prepareProjects(this.courseId, script);
    });
  }

  prepareProjects(courseId: string, script: Skripta): Project[] {
    this.course = this.prepareCourse(script.predmeti[courseId]);
    const oblasti: Project[] = Object.entries(script.predmeti[courseId].oblasti).map(([id, oblast]: [string, Oblast]) =>
      this.projectsService.prepareProjectFromOblast(oblast, this.courseLink)
    );
    return oblasti;
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
