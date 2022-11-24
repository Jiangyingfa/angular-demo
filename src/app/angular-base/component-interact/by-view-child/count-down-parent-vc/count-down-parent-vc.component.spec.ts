import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownParentVcComponent } from './count-down-parent-vc.component';

describe('CountDownParentVcComponent', () => {
  let component: CountDownParentVcComponent;
  let fixture: ComponentFixture<CountDownParentVcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountDownParentVcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountDownParentVcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
