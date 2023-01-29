import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Description3Component } from './description3.component';

describe('Description3Component', () => {
  let component: Description3Component;
  let fixture: ComponentFixture<Description3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Description3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Description3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
