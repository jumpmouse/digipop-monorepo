import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '@app/shell/shell.service';
import { CourseComponent } from './course.component';

const routes: Routes = [
  Shell.childRoutes([{ path: ':courseName', component: CourseComponent, children: [], pathMatch: 'full' }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CourseRoutingModule {}
