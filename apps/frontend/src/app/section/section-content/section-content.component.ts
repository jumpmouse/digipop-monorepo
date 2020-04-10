import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'digipop-section-content',
  templateUrl: './section-content.component.html',
  styleUrls: ['./section-content.component.scss']
})
export class SectionContentComponent implements OnInit {
  @Input() subsectionContent: object;

  constructor() {}

  ngOnInit() {}
}
