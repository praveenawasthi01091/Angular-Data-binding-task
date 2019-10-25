import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component41Component } from './component41/component41.component';
import { Component42Component } from './component42/component42.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [Component41Component, Component42Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    Component41Component, Component42Component
  ]
})
export class Scenario4Module { }
