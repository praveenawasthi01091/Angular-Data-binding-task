import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component31Component } from './component31/component31.component';
import { Component32Component } from './component32/component32.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [Component31Component, Component32Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
   Component31Component, Component32Component
  ]
})
export class Scenario3Module { }
