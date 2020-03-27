import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsModule } from 'angular-bootstrap-md';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import { LoaderComponent } from './components/loader/loader.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, CardsModule, RouterModule, NgbAccordionModule],
  declarations: [LoaderComponent, ProjectComponent, ProjectsListComponent],
  exports: [LoaderComponent, ProjectComponent, ProjectsListComponent]
})
export class SharedModule {}
