import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component62',
  templateUrl: './component62.component.html',
  styleUrls: ['./component62.component.less']
})
export class Component62Component implements OnInit {
  public manager="";


  @Output() public childEvent= new EventEmitter();
  public fireEvent(){
    console.log(this.manager);
    this.childEvent.emit(this.manager);
  }
  constructor() { }

  ngOnInit() {
  }

}
