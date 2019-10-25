import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-component63',
  templateUrl: './component63.component.html',
  styleUrls: ['./component63.component.less']
})
export class Component63Component implements OnInit {
  @Input('parentData') public manager;
  constructor() { }

  ngOnInit() {
  }

}
