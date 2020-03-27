import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';
import { Project } from '@digipop/models';

@Component({
  selector: 'digipop-shared-projects-list',
  templateUrl: './editable-projects-list.component.html',
  styleUrls: ['./editable-projects-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditableProjectsListComponent implements OnInit {
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
