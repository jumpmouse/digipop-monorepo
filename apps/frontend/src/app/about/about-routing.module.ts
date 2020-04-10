import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract, ResolverGuard } from '@digipop/core';
import { Shell } from '@app/shell/shell.service';
import { AboutComponent } from './about.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'o-skripti',
      component: AboutComponent,
      data: { title: extract('o-skripti') },
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
export class AboutRoutingModule {}
