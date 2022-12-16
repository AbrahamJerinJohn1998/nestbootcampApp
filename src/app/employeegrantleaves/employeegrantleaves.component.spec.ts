import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeegrantleavesComponent } from './employeegrantleaves.component';

describe('EmployeegrantleavesComponent', () => {
  let component: EmployeegrantleavesComponent;
  let fixture: ComponentFixture<EmployeegrantleavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeegrantleavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeegrantleavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
