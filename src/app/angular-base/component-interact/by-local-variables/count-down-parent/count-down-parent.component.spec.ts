import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownParentComponent } from './count-down-parent.component';

describe('CountDownParentComponent', () => {
  let component: CountDownParentComponent;
  let fixture: ComponentFixture<CountDownParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountDownParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountDownParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
