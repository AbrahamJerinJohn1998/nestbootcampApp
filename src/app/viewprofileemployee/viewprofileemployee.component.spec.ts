import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprofileemployeeComponent } from './viewprofileemployee.component';

describe('ViewprofileemployeeComponent', () => {
  let component: ViewprofileemployeeComponent;
  let fixture: ComponentFixture<ViewprofileemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewprofileemployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewprofileemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
