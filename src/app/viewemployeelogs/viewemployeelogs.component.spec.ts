import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewemployeelogsComponent } from './viewemployeelogs.component';

describe('ViewemployeelogsComponent', () => {
  let component: ViewemployeelogsComponent;
  let fixture: ComponentFixture<ViewemployeelogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewemployeelogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewemployeelogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
