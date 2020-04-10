import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';

import { environment } from '@env/environment';
import { CoreModule } from '@digipop/core';
import { SharedModule } from '@digipop/shared';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { CourseModule } from './course/course.module';
import { AboutModule } from './about/about.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SectionModule } from './section/section.module';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', {
      enabled: environment.production
    }),
    TranslateModule.forRoot(),
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    AboutModule,
    CourseModule,
    SectionModule,
    AppRoutingModule // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
