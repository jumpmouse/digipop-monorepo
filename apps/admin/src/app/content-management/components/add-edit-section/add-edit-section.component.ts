import { Component, OnInit } from '@angular/core';
import { EmptySectionForEditing } from '@app/content-management/constants/course-management.const';
import { ActivatedRoute } from '@angular/router';
import { Oblast, Skripta, Predmet } from '@app/models/skripta.model';
import { combineLatest } from 'rxjs';
import { ScriptContentService } from '@app/shared/services/script-content.service';
import { UtilsService } from '@app/shared/services/utils.service';

@Component({
  selector: 'digipop-add-edit-section',
  templateUrl: './add-edit-section.component.html',
  styleUrls: ['./add-edit-section.component.scss']
})
export class AddEditSectionComponent implements OnInit {
  public content = Object.assign({}, EmptySectionForEditing);
  public fields: string[] = [];
  public labels: { required: boolean; name: string }[] = [];
  private script: Skripta;
  private currentCourse: Predmet;
  private courseName: string;
  private courseId: string;
  private courseLink: string;
  private sectionLink: string;
  private sectionId: string;
  private sectionName: string;
  private currentSection: Oblast;

  constructor(
    private route: ActivatedRoute,
    private utils: UtilsService,
    private scriptContentService: ScriptContentService
  ) {}
  ngOnInit(): void {
    combineLatest([this.route.params, this.scriptContentService.scriptContent]).subscribe(([param, script]) => {
      const courseMetaData = param.courseName.split('_');
      this.script = script;
      this.courseLink = param.courseName;
      this.courseId = courseMetaData[0];
      this.courseName = courseMetaData[1];
      this.currentCourse = script.predmeti[this.courseId];
      if (param.sectionName) {
        const sectionMetaData = param.sectionName.split('_');
        this.sectionLink = param.sectionName;
        this.sectionId = sectionMetaData[0];
        this.sectionName = sectionMetaData[1];
        this.currentSection = script.predmeti[this.courseId].oblasti[this.sectionId];
      }
    });

    this.fields = Object.keys(this.content);
    this.labels = this.fields.map(label => {
      const required = !!this.content[label];
      if (this.currentSection) {
        this.content[label] = this.currentSection[label];
      } else {
        this.content[label] = '';
      }
      return {
        required,
        name: label.replace('_', ' ')
      };
    });
  }

  onSubmit(): void {
    const fileName = this.getId() + '_' + this.utils.sanitizeFileName(this.content.naziv);

    const sectionForUpdate: Oblast = Object.assign({}, this.content, {
      link: (this.currentSection && this.currentSection.link) || fileName,
      id: (this.currentSection && this.currentSection.id) || this.getId(),
      programske_celine: (this.currentSection && this.currentSection.programske_celine) || {}
    });

    this.scriptContentService.addUpdateSection(sectionForUpdate);
  }

  private getId(): string {
    const sectionCount = Object.keys(this.currentCourse.oblasti).length + 1;
    return `${this.courseId}-${sectionCount}`;
  }
}
