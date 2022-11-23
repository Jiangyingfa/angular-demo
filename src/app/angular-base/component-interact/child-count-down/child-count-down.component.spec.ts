import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCountDownComponent } from './child-count-down.component';

describe('ChildCountDownComponent', () => {
  let component: ChildCountDownComponent;
  let fixture: ComponentFixture<ChildCountDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildCountDownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildCountDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
