import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmyleavesComponent } from './viewmyleaves.component';

describe('ViewmyleavesComponent', () => {
  let component: ViewmyleavesComponent;
  let fixture: ComponentFixture<ViewmyleavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmyleavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewmyleavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
