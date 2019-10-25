import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component52',
  templateUrl: './component52.component.html',
  styleUrls: ['./component52.component.less']
})
export class Component52Component implements OnInit {
   public manager="";
   public got_value=true;



  @Output() public childEvent1= new EventEmitter();
  public fireEvent(){
    console.log("parent "+ this.manager);
    this.childEvent1.emit(this.manager);
  }
  constructor() { }

  ngOnInit() {
  }

}
