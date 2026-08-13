import { ComponentFixture, TestBed } from '@angular/core/testing';

import { menuComponent } from './menu';

describe('Menu', () => {
  let component: menuComponent;
  let fixture: ComponentFixture<menuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [menuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(menuComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
