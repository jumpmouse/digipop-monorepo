import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardsModule } from 'angular-bootstrap-md';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import { LoaderComponent } from './components/loader/loader.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { EditableProjectComponent } from './components/editable-project/editable-project.component';
import { EditableProjectsListComponent } from './components/editable-projects-list/editable-projects-list.component';
import { ProjectComponent } from './components/project/project.component';

@NgModule({
  imports: [CommonModule, CardsModule, RouterModule, NgbAccordionModule],
  declarations: [
    LoaderComponent,
    ProjectsListComponent,
    EditableProjectComponent
  ],
  exports: [
    LoaderComponent,
    ProjectsListComponent,
    EditableProjectComponent,
    EditableProjectsListComponent,
    ProjectComponent
  ]
})
export class SharedModule {}
