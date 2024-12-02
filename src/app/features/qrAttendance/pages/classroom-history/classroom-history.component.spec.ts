import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomHistoryComponent } from './classroom-history.component';

describe('ClassroomHistoryComponent', () => {
  let component: ClassroomHistoryComponent;
  let fixture: ComponentFixture<ClassroomHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassroomHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassroomHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
