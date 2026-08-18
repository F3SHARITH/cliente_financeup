import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:frontend_proyecto/src/app/pages/finanzas/metas/metas.spec.ts
import { MetasComponent } from './metas';

describe('Metas', () => {
  let component: MetasComponent;
  let fixture: ComponentFixture<MetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MetasComponent);
=======
import { MenuComponent } from './menu';

describe('Sidebar', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
>>>>>>> develop:frontend_proyecto/src/app/pages/finanzas/menu/menu.spec.ts
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
