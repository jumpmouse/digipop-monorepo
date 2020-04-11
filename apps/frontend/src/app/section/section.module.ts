import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SectionRoutingModule } from './section-routing.module';
import { SectionComponent } from './section.component';
import { SharedModule } from '@digipop/shared';
import { SectionContentComponent } from './section-content/section-content.component';

@NgModule({
  imports: [CommonModule, SharedModule, TranslateModule, SectionRoutingModule],
  declarations: [SectionComponent, SectionContentComponent]
})
export class SectionModule {}
