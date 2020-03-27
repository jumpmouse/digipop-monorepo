import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@digipop/core';
import { SharedModule } from '@app/shared';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ContentManagementComponent } from './content-management.component';
import { ContentManagementRoutingModule } from './content-management-routing.module';
import { FormsModule } from '@angular/forms';
import { CourseManagementComponent } from './components/course-management/course-management.component';
import { ContentEditingComponent } from './components/content-editing/content-editing.component';
import { SectionManagementComponent } from './components/section-management/section-management.component';
import { AddEditCourseComponent } from './components/add-edit-course/add-edit-course.component';
import { AddEditSectionComponent } from './components/add-edit-section/add-edit-section.component';
import { EditScriptComponent } from './components/edit-script/edit-script.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    FormsModule,
    ContentManagementRoutingModule,
    CKEditorModule
  ],
  declarations: [
    ContentManagementComponent,
    CourseManagementComponent,
    ContentEditingComponent,
    SectionManagementComponent,
    AddEditCourseComponent,
    AddEditSectionComponent,
    EditScriptComponent
  ]
})
export class ContentManagementModule {}
