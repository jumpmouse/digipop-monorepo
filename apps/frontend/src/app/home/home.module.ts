import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@digipop/core';
import { SharedModule } from '@digipop/shared';
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
