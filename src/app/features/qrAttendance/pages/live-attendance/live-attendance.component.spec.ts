import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveAttendanceComponent } from './live-attendance.component';

describe('LiveAttendanceComponent', () => {
  let component: LiveAttendanceComponent;
  let fixture: ComponentFixture<LiveAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveAttendanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
