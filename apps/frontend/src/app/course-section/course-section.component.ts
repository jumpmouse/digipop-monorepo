import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { ContentMetaData, Skripta, Oblast, ProgramskaCelina } from '@app/models/skripta.model';
import { ActivatedRoute } from '@angular/router';
import { ScriptContentService } from '@app/shared/services/script-content.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-course-section',
  templateUrl: './course-section.component.html',
  styleUrls: ['./course-section.component.scss']
})
export class CourseSectionComponent implements OnInit {
  version: string | null = environment.version;
  course: ContentMetaData;
  content: string;
  section: Oblast;
  private courseLink: string;
  private courseId: string;
  private courseName: string;
  private sectionLink: string;
  private sectionId: string;
  private sectionName: string;

  constructor(private route: ActivatedRoute, private scriptContentService: ScriptContentService) {}

  ngOnInit() {
    combineLatest([this.route.params, this.scriptContentService.scriptContent]).subscribe(([param, script]) => {
      const courseMetaData = param.courseName.split('_');
      const sectionMetaData = param.sectionName.split('_');
      this.courseLink = param.courseName;
      this.courseId = courseMetaData[0];
      this.courseName = courseMetaData[1];
      this.sectionLink = param.sectionName;
      this.sectionId = sectionMetaData[0];
      this.sectionName = sectionMetaData[1];

      this.content = this.prepareContent(script);
    });
  }

  prepareContent(script: Skripta): string {
    let content = '';
    this.section = script.predmeti[this.courseId].oblasti[this.sectionId];
    const programskeCeline = Object.entries(this.section.programske_celine);
    for (let index = 0; index < programskeCeline.length; index++) {
      const programskaCelina = programskeCeline[index][1];
      content += '<h3>' + programskaCelina.naziv + '</h3><p>' + programskaCelina.tekst + '</p>';
      content += `<h5>Zadaci</h5><h5>Diskusija</h5>`;
      if (programskaCelina.podceline) {
        const podceline = Object.values(programskaCelina.podceline);
        content += this.addContentRecursively(podceline);
      }
    }
    return content;
  }

  private addContentRecursively(section: ProgramskaCelina[]): string {
    let subcontent = '';
    const podceline = Object.entries(section);
    for (let index = 0; index < podceline.length; index++) {
      const podcelina = podceline[index][1];
      subcontent += '<h4>' + podcelina.naziv + '</h4><p>' + podcelina.tekst + '</p>';
      subcontent += `<h5>Zadaci</h5><h5>Diskusija</h5>`;
      if (podcelina.podceline) {
        const subPodceline = Object.values(podcelina.podceline);
        subcontent += this.addContentRecursively(subPodceline);
      }
    }
    return subcontent;
  }
}
