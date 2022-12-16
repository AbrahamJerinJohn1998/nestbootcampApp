import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewvisitorslogsComponent } from './viewvisitorslogs.component';

describe('ViewvisitorslogsComponent', () => {
  let component: ViewvisitorslogsComponent;
  let fixture: ComponentFixture<ViewvisitorslogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewvisitorslogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewvisitorslogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
