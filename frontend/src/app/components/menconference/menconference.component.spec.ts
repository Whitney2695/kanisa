import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenconferenceComponent } from './menconference.component';

describe('MenconferenceComponent', () => {
  let component: MenconferenceComponent;
  let fixture: ComponentFixture<MenconferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenconferenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenconferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
