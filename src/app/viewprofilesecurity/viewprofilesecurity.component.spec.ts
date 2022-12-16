import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprofilesecurityComponent } from './viewprofilesecurity.component';

describe('ViewprofilesecurityComponent', () => {
  let component: ViewprofilesecurityComponent;
  let fixture: ComponentFixture<ViewprofilesecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewprofilesecurityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewprofilesecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
