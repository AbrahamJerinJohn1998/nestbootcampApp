import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvisitorslogsComponent } from './addvisitorslogs.component';

describe('AddvisitorslogsComponent', () => {
  let component: AddvisitorslogsComponent;
  let fixture: ComponentFixture<AddvisitorslogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddvisitorslogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddvisitorslogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
