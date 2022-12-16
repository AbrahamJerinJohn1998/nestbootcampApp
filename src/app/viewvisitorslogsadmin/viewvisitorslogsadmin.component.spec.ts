import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewvisitorslogsadminComponent } from './viewvisitorslogsadmin.component';

describe('ViewvisitorslogsadminComponent', () => {
  let component: ViewvisitorslogsadminComponent;
  let fixture: ComponentFixture<ViewvisitorslogsadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewvisitorslogsadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewvisitorslogsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
