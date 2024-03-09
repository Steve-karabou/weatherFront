import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Next7DaysComponent } from './next7-days.component';

describe('Next7DaysComponent', () => {
  let component: Next7DaysComponent;
  let fixture: ComponentFixture<Next7DaysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Next7DaysComponent]
    });
    fixture = TestBed.createComponent(Next7DaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
