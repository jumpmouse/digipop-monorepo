import { Component, OnInit, Input } from '@angular/core';
import { ProgramskaCelinaSadrzaj } from '@digipop/models';

@Component({
  selector: 'digipop-section-content',
  templateUrl: './section-content.component.html',
  styleUrls: ['./section-content.component.scss']
})
export class SectionContentComponent implements OnInit {
  @Input() subsectionContent: ProgramskaCelinaSadrzaj;

  constructor() {}

  ngOnInit() {}
}
