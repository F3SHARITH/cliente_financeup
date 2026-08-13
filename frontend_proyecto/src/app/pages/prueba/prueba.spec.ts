import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:frontend_proyecto/src/app/pages/prueba/prueba.spec.ts
import { Prueba } from './prueba';

describe('Prueba', () => {
  let component: Prueba;
  let fixture: ComponentFixture<Prueba>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prueba],
    }).compileComponents();

    fixture = TestBed.createComponent(Prueba);
========
import { menuComponent } from './menu';

describe('Menu', () => {
  let component: menuComponent;
  let fixture: ComponentFixture<menuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [menuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(menuComponent);
>>>>>>>> F3SHARITH:frontend_proyecto/src/app/pages/finanzas/menu/menu.spec.ts
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
