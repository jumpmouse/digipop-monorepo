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
    tekst: '',
    zadaci: []
  };
  subsections: SimpleLinkObject[];
  fragment: string;
  courseName: string;
  previousFragment: SimpleLinkObject;
  nextFragment: SimpleLinkObject;
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

      if (!this.subsections) {
        return;
      }

      if (!fragment) {
        this.router.navigate([], { fragment: this.subsections[0].fragment });
        return;
      }

      const subsectionsCount = this.subsections.length;
      const currentFragmentIndex = this.subsections.findIndex(
        subsection => subsection.fragment === fragment
      );
      if (subsectionsCount && currentFragmentIndex !== -1) {
        if (currentFragmentIndex === subsectionsCount - 1) {
          this.nextFragment = undefined;
        } else {
          const nextIndex = currentFragmentIndex + 1;
          this.nextFragment = this.subsections[nextIndex];
        }
        if (currentFragmentIndex === 0) {
          this.previousFragment = undefined;
        } else {
          const previousIndex = currentFragmentIndex - 1;
          this.previousFragment = this.subsections[previousIndex];
        }
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
    console.log(
      this.projectsService.oblasti,
      this.projectsService.oblasti[courseId],
      courseId,
      sectionId
    );
    for (const oblast of this.projectsService.oblasti[courseId]) {
      console.log(oblast, oblast.id, sectionId, oblast.id === sectionId);
      if (oblast.id === sectionId) {
        sections = oblast.sections;
        console.log(sections);
      break;
      }
      console.log(sections);

    }
    console.log(sections);
    return sections;
  }
}
