import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.less']
})
export class ComponentComponent implements OnInit {
  public show(value){
    console.log(value.value)
  }

  constructor() { }

  ngOnInit() {
  }

}
