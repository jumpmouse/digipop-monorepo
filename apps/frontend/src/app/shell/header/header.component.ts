import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  AuthenticationService,
  CredentialsService,
  I18nService
} from '@digipop/core';
import { ScriptContentService } from '@digipop/shared';
import { skipWhile } from 'rxjs/operators';
import { Skripta, ScriptMenuItem } from '@digipop/models';

@Component({
  selector: 'digipop-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuHidden = true;
  scriptMenu: ScriptMenuItem[] = [];
  collapsed = true;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService,
    private i18nService: I18nService,
    private scriptContentService: ScriptContentService
  ) {}

  ngOnInit() {
    this.scriptContentService.scriptContent
      .pipe(skipWhile(script => !script))
      .subscribe(script => {
        this.createMenu(script['predmeti']);
      });
  }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  logout() {
    this.authenticationService
      .logout()
      .subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  get username(): string | null {
    const credentials = this.credentialsService.credentials;
    return credentials ? credentials.username : null;
  }

  private createMenu(items: any, parentMenuItem?: any, parentMenuItemLink?: string): void {
    for (const item of Object.values(items)) {
      const link = parentMenuItemLink ? `/${parentMenuItemLink}/${item['link']}` : `/${item['link']}`;
      let menuItem: ScriptMenuItem = {
        key: item['id'],
        title: item['naziv'],
        link
      }
      if (item['oblasti']) {
        menuItem.subItems = [];
        this.createMenu(item['oblasti'], menuItem.subItems, link);
      }
      if (parentMenuItem) {
        parentMenuItem.push(menuItem);
      } else {
        this.scriptMenu.push(menuItem);
      }
    }
  }
}
