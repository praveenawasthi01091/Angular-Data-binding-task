import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component53',
  templateUrl: './component53.component.html',
  styleUrls: ['./component53.component.less']
})
export class Component53Component implements OnInit {
  public manager="";


  @Output() public childEvent= new EventEmitter();
  
  public fireEvent(){
    console.log("grandChild"+this.manager);
    this.childEvent.emit(this.manager);
  }
  constructor() { }

  ngOnInit() {
  }

}
