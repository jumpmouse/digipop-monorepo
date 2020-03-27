import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, I18nService } from '@digipop/core';

const log = new Logger('App');

@Component({
  selector: 'digipop-admin-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private router: Router, private i18nService: I18nService) {}

  ngOnInit() {
    // Setup logger
    if (environment.production) {
      Logger.enableProductionMode();
    }

    log.debug('init');

    // Setup translations
    this.i18nService.init(
      environment.defaultLanguage,
      environment.supportedLanguages
    );

    const onNavigationEnd = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    );

    onNavigationEnd.subscribe(() => {
      window.scrollTo(0, 0);
    });
  }

  ngOnDestroy() {
    this.i18nService.destroy();
  }
}
