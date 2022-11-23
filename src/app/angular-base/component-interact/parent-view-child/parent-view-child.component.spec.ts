import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentViewChildComponent } from './parent-view-child.component';

describe('ParentViewChildComponent', () => {
  let component: ParentViewChildComponent;
  let fixture: ComponentFixture<ParentViewChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentViewChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
