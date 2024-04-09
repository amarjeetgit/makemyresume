import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetailsForResumeComponent } from './add-details-for-resume.component';

describe('AddDetailsForResumeComponent', () => {
  let component: AddDetailsForResumeComponent;
  let fixture: ComponentFixture<AddDetailsForResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDetailsForResumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDetailsForResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
