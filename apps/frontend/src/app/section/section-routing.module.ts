import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '@app/shell/shell.service';
import { SectionComponent } from './section.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: ':courseName/:sectionName',
      component: SectionComponent,
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
export class SectionRoutingModule {}
