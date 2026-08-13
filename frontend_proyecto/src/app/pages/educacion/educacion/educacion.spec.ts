import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionComponent } from './educacion';

describe('Educacion', () => {
  let component: EducacionComponent;
  let fixture: ComponentFixture<EducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducacionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EducacionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
