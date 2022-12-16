import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddemployeelogsComponent } from './addemployeelogs.component';

describe('AddemployeelogsComponent', () => {
  let component: AddemployeelogsComponent;
  let fixture: ComponentFixture<AddemployeelogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddemployeelogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddemployeelogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
