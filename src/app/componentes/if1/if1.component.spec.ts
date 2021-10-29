import { ComponentFixture, TestBed } from '@angular/core/testing';

import { If1Component } from './if1.component';

describe('If1Component', () => {
  let component: If1Component;
  let fixture: ComponentFixture<If1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ If1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(If1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
