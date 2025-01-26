import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouthseminarComponent } from './youthseminar.component';

describe('YouthseminarComponent', () => {
  let component: YouthseminarComponent;
  let fixture: ComponentFixture<YouthseminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YouthseminarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YouthseminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
