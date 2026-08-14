import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HablaConNosotros } from './habla-con-nosotros';

describe('HablaConNosotros', () => {
  let component: HablaConNosotros;
  let fixture: ComponentFixture<HablaConNosotros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HablaConNosotros],
    }).compileComponents();

    fixture = TestBed.createComponent(HablaConNosotros);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
