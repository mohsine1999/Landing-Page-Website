import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Description2Component } from './description2.component';

describe('Description2Component', () => {
  let component: Description2Component;
  let fixture: ComponentFixture<Description2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Description2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Description2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
