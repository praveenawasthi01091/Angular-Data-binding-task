import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentComponent } from './component/component.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ComponentComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ComponentComponent
  ]
})
export class Scenario1Module { }
