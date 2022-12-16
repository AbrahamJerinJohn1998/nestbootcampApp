import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeleavehandleComponent } from './employeeleavehandle.component';

describe('EmployeeleavehandleComponent', () => {
  let component: EmployeeleavehandleComponent;
  let fixture: ComponentFixture<EmployeeleavehandleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeleavehandleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeleavehandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
