import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenfeedingComponent } from './menfeeding.component';

describe('MenfeedingComponent', () => {
  let component: MenfeedingComponent;
  let fixture: ComponentFixture<MenfeedingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenfeedingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenfeedingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
