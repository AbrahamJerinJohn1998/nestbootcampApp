import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarsecurityComponent } from './navbarsecurity.component';

describe('NavbarsecurityComponent', () => {
  let component: NavbarsecurityComponent;
  let fixture: ComponentFixture<NavbarsecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarsecurityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarsecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
