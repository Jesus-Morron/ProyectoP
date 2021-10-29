import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScontComponent } from './scont.component';

describe('ScontComponent', () => {
  let component: ScontComponent;
  let fixture: ComponentFixture<ScontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
