import { Component, OnInit } from '@angular/core';
import { EmptyScriptForEditing } from '@app/content-management/constants/course-management.const';
import { ScriptContentService } from '@app/shared/services/script-content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'digipop-edit-script',
  templateUrl: './edit-script.component.html',
  styleUrls: ['./edit-script.component.scss']
})
export class EditScriptComponent implements OnInit {
  public content = Object.assign({}, EmptyScriptForEditing);
  public fields: string[] = [];
  public labels: { required: boolean; name: string }[] = [];

  constructor(private scriptContentService: ScriptContentService, private router: Router) {}

  ngOnInit(): void {
    this.scriptContentService.scriptContent.subscribe(script => {
      this.fields = Object.keys(this.content);
      this.labels = this.fields.map(label => {
        this.content[label] = script[label];
        const required = !!this.content[label];
        return {
          required,
          name: label.replace('_', ' ')
        };
      });
    });
  }

  onSubmit(): void {
    this.scriptContentService.setScriptContent(this.content);
    this.router.navigate(['/']);
  }
}
