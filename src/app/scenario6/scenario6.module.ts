import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component61Component } from './component61/component61.component';
import { Component62Component } from './component62/component62.component';
import { Component63Component } from './component63/component63.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [Component61Component, Component62Component, Component63Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Component61Component, Component62Component, Component63Component
  ]
})
export class Scenario6Module { }
