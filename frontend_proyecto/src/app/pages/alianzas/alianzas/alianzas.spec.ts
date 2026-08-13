import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlianzasComponent } from './alianzas';

describe('Alianzas', () => {
  let component: AlianzasComponent;
  let fixture: ComponentFixture<AlianzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlianzasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlianzasComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
