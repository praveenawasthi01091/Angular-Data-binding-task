import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component32Component } from './component32.component';

describe('Component32Component', () => {
  let component: Component32Component;
  let fixture: ComponentFixture<Component32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component32Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
