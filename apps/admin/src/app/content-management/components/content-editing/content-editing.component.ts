import { Component, OnInit } from '@angular/core';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-digipop';
import { EditorConfig } from '@app/content-management/constants/editor-config.const';
import { UtilsService } from '@app/shared/services/utils.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'digipop-content-editing',
  templateUrl: './content-editing.component.html',
  styleUrls: ['./content-editing.component.scss']
})
export class ContentEditingComponent implements OnInit {
  public Editor = DecoupledEditor;
  public config = EditorConfig;
  public content = '';
  public title = 'xy-oblast';

  constructor(private utilsService: UtilsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      // this.title = `${param.sectionName}_${param.subsectionName}`;
      this.title = `${param.sectionName}`;
    });
  }

  public onReady(editor: any) {
    editor.ui
      .getEditableElement()
      .parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
  }

  public onSubmit(): void {
    const fileName = this.utilsService.sanitizeFileName(this.title);
    this.utilsService.downloadDocument(fileName + '.txt', this.content);
  }
}
