import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Project } from '@app/models/project.model';

@Component({
  selector: 'digipop-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsListComponent implements OnInit {
  @Input() editingMode = false;
  @Input() projectType = 'course';
  @Input() projects: Project[];
  @Input() editable = true;
  @Output() projectDeleted = new EventEmitter<Project>();
  @Output() projectEdited = new EventEmitter<Project>();

  constructor() {}

  ngOnInit() {}

  onProjectDelete(project: Project) {
    this.projectDeleted.emit(project);
  }

  onProjectEdit(project: Project) {
    this.projectEdited.emit(project);
  }

  trackByFunction(index: any) {
    return index;
  }
}
