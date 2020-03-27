import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '@app/shell/shell.service';
import { CourseSectionComponent } from './course-section.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: ':courseName/:sectionName',
      component: CourseSectionComponent,
      children: [],
      pathMatch: 'full'
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CourseSectionRoutingModule {}
