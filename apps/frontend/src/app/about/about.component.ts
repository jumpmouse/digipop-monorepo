import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { ScriptContentService } from '@digipop/shared';

@Component({
  selector: 'digipop-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public version: string | null = environment.version;
  public content: string;

  constructor(private scriptContentService: ScriptContentService) {}

  ngOnInit() {
    this.scriptContentService.scriptContent.subscribe(script => {
      this.content = script.opis;
    });
  }
}
