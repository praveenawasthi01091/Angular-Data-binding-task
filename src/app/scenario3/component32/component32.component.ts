import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component32',
  templateUrl: './component32.component.html',
  styleUrls: ['./component32.component.less']
})
export class Component32Component implements OnInit {
  @Input('parentData') public myCompany;

  constructor() { }

  ngOnInit() {
  }

}
