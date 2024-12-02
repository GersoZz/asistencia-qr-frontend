import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsClassroomComponent } from './sessions-classroom.component';

describe('SessionsClassroomComponent', () => {
  let component: SessionsClassroomComponent;
  let fixture: ComponentFixture<SessionsClassroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionsClassroomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionsClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
