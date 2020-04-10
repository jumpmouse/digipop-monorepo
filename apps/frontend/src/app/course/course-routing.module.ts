import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '@app/shell/shell.service';
import { CourseComponent } from './course.component';
import { ResolverGuard } from '../../../../../libs/digipop-frontend/core/src/lib/resolver.guard';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: ':courseName',
      component: CourseComponent,
      children: [],
      pathMatch: 'full',
      resolve: {
        script: ResolverGuard
      }
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CourseRoutingModule {}
