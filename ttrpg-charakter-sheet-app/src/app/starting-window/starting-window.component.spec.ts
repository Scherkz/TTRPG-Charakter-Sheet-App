import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartingWindowComponent } from './starting-window.component';

describe('StartingWindowComponent', () => {
  let component: StartingWindowComponent;
  let fixture: ComponentFixture<StartingWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartingWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartingWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
