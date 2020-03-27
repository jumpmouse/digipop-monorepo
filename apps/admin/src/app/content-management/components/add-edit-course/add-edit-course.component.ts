import { Component, OnInit } from '@angular/core';
import { EmptyCourseForEditing } from '@app/content-management/constants/course-management.const';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { ScriptContentService } from '@app/shared/services/script-content.service';
import { Predmet, Skripta } from '@app/models/skripta.model';
import { UtilsService } from '@app/shared/services/utils.service';

@Component({
  selector: 'digipop-admin-add-edit-course',
  templateUrl: './add-edit-course.component.html',
  styleUrls: ['./add-edit-course.component.scss']
})
export class AddEditCourseComponent implements OnInit {
  public content = Object.assign({}, EmptyCourseForEditing);
  public fields: string[] = [];
  public labels: { required: boolean; name: string }[] = [];
  private currentCourse: Predmet;
  private courseName: string;
  private script: Skripta;
  private courseId: string;
  private courseLink: string;

  constructor(
    private route: ActivatedRoute,
    private scriptContentService: ScriptContentService,
    private utils: UtilsService
  ) {}

  ngOnInit(): void {
    combineLatest([
      this.route.params,
      this.scriptContentService.scriptContent
    ]).subscribe(([param, script]) => {
      this.script = script;
      if (param && param.courseName) {
        const courseMetaData = param.courseName.split('_');
        this.courseLink = param.courseName;
        this.courseId = courseMetaData[0];
        this.courseName = courseMetaData[1];
        this.currentCourse = script.predmeti[this.courseId];
      }

      this.fields = Object.keys(this.content);
      this.labels = this.fields.map(label => {
        const required = !!this.content[label];
        if (this.currentCourse) {
          this.content[label] = this.currentCourse[label];
        } else {
          this.content[label] = '';
        }
        return {
          required,
          name: label.replace('_', ' ')
        };
      });
    });
  }

  onSubmit(): void {
    const fileName =
      this.getId() + '_' + this.utils.sanitizeFileName(this.content.naziv);
    const courseForUpdate: Predmet = Object.assign({}, this.content, {
      link: (this.currentCourse && this.currentCourse.link) || fileName,
      id: (this.currentCourse && this.currentCourse.id) || this.getId(),
      oblasti: (this.currentCourse && this.currentCourse.oblasti) || {}
    });

    this.scriptContentService.addUpdateCourse(courseForUpdate);
  }

  private getId(): string {
    const courseOrderNumber = Object.keys(this.script.predmeti).length + 1;
    return this.utils.romanize(courseOrderNumber);
  }
}
