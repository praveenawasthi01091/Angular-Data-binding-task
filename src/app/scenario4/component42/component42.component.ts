import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component42',
  templateUrl: './component42.component.html',
  styleUrls: ['./component42.component.less']
})
export class Component42Component implements OnInit {
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
