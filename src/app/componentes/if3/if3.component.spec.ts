import { ComponentFixture, TestBed } from '@angular/core/testing';

import { If3Component } from './if3.component';

describe('If3Component', () => {
  let component: If3Component;
  let fixture: ComponentFixture<If3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ If3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(If3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
