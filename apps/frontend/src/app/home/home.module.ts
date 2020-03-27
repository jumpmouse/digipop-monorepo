import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { ContentManagementComponent } from './home.component';
import { QuoteService } from './quote.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [ContentManagementComponent]
})
export class HomeModule {}
