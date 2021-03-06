import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract, ResolverGuard } from '@digipop/core';
import { ContentManagementComponent } from './home.component';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: '',
      component: ContentManagementComponent,
      data: { title: extract('Home') },
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
export class HomeRoutingModule {}
