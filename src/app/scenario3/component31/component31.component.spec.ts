import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component31Component } from './component31.component';

describe('Component31Component', () => {
  let component: Component31Component;
  let fixture: ComponentFixture<Component31Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component31Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
