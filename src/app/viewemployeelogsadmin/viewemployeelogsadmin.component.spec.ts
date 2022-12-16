import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewemployeelogsadminComponent } from './viewemployeelogsadmin.component';

describe('ViewemployeelogsadminComponent', () => {
  let component: ViewemployeelogsadminComponent;
  let fixture: ComponentFixture<ViewemployeelogsadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewemployeelogsadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewemployeelogsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
