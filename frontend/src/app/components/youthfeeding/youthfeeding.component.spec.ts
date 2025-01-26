import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouthfeedingComponent } from './youthfeeding.component';

describe('YouthfeedingComponent', () => {
  let component: YouthfeedingComponent;
  let fixture: ComponentFixture<YouthfeedingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YouthfeedingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YouthfeedingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
