import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import {
  ContentMetaData,
  Oblast,
  SimpleLinkObject,
  ProgramskaCelinaSadrzaj
} from '@digipop/models';
import { ActivatedRoute, Router } from '@angular/router';
import { ScriptContentService, ProjectsService } from '@digipop/shared';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'digipop-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  version: string | null = environment.version;
  course: ContentMetaData;
  content: string;
  section: Oblast;
  subsectionContent: ProgramskaCelinaSadrzaj = {
    id: '',
    naziv: '',
    tekst: ''
  };
  subsections: SimpleLinkObject[];
  fragment: string;
  courseName: string;
  private courseLink: string;
  private courseId: string;
  private sectionLink: string;
  private sectionId: string;
  private sectionName: string;
  private fragmentId: string;
  private fragmentName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private scriptContentService: ScriptContentService,
    private projectsService: ProjectsService
  ) {}

  ngOnInit() {
    combineLatest([
      this.route.params,
      this.route.fragment,
      this.scriptContentService.scriptContent
    ]).subscribe(([param, fragment, script]) => {
      const courseMetaData = param.courseName.split('_');
      const sectionMetaData = param.sectionName.split('_');
      // route changed
      if (this.sectionId !== sectionMetaData[0]) {
        this.courseLink = param.courseName;
        this.courseId = courseMetaData[0];
        this.courseName = script.predmeti[this.courseId].naziv;
        this.sectionLink = param.sectionName;
        this.sectionId = sectionMetaData[0];
        this.sectionName = sectionMetaData[1];
        this.section = script.predmeti[this.courseId].oblasti[this.sectionId];
        this.subsections = this.prepareSubsections(
          this.courseId,
          this.sectionId
        );
      }

      if (!fragment) {
        this.router.navigate([], { fragment: this.subsections[0].fragment });
        return;
      }

      const fragmentMetaData = fragment.split('_');
      this.fragment = fragment;
      this.fragmentId = fragmentMetaData[0];
      this.fragmentName = fragmentMetaData[1];
      this.subsectionContent = this.scriptContentService.scriptData[
        this.courseId
      ][this.sectionId][this.fragment];
    });
  }

  private prepareSubsections(courseId: string, sectionId: string) {
    let sections;
    for (const oblast of this.projectsService.oblasti[courseId]) {
      if (oblast.id === sectionId) {
        sections = oblast.sections;
      }
      break;
    }
    return sections;
  }
}
