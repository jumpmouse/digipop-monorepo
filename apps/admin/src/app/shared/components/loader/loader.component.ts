import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'digipop-admin-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @Input() isLoading = false;
  @Input() message: string | undefined;

  constructor() {}

  ngOnInit() {}
}
