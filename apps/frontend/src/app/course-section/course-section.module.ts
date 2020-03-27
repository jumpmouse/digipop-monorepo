import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CourseSectionRoutingModule } from './course-section-routing.module';
import { CourseSectionComponent } from './course-section.component';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [CommonModule, SharedModule, TranslateModule, CourseSectionRoutingModule],
  declarations: [CourseSectionComponent]
})
export class CourseSectionModule {}
