import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '@app/shell/shell.service';

import { ContentManagementComponent } from './content-management.component';
import { ContentEditingComponent } from './components/content-editing/content-editing.component';
import { CourseManagementComponent } from './components/course-management/course-management.component';
import { SectionManagementComponent } from './components/section-management/section-management.component';
import { AddEditCourseComponent } from './components/add-edit-course/add-edit-course.component';
import { AddEditSectionComponent } from './components/add-edit-section/add-edit-section.component';
import { EditScriptComponent } from './components/edit-script/edit-script.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: '',
      component: ContentManagementComponent,
      children: [
        {
          path: '',
          pathMatch: 'full',
          component: CourseManagementComponent
        },
        {
          path: 'new-course',
          pathMatch: 'full',
          component: AddEditCourseComponent
        },
        {
          path: 'edit-script',
          pathMatch: 'full',
          component: EditScriptComponent
        },
        {
          path: ':courseName',
          children: [
            {
              path: '',
              pathMatch: 'full',
              component: SectionManagementComponent
            },
            {
              path: 'edit',
              pathMatch: 'full',
              component: AddEditCourseComponent
            },
            {
              path: 'new-section',
              pathMatch: 'full',
              component: AddEditSectionComponent
            },
            {
              path: ':sectionName',
              children: [
                {
                  path: 'edit',
                  pathMatch: 'full',
                  component: AddEditSectionComponent
                },
                {
                  path: 'edit-content',
                  pathMatch: 'full',
                  component: ContentEditingComponent
                }
              ]
            }
          ]
        }
      ]
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ContentManagementRoutingModule {}
