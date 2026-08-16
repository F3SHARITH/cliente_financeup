import { Component } from '@angular/core';
import { FinanzasMenuComponent } from '../finanzas-menu/finanzas-menu';

interface Meta {
  id: number;
  nombre: string;
  actual: number;
  objetivo: number;
  cumplida: boolean;
  notaPrincipal: string;
  notaSecundaria: string;
}

@Component({
  selector: 'app-metas',
  imports: [FinanzasMenuComponent],
  templateUrl: './metas.html',
  styleUrl: './metas.css',
})
export class MetasComponent {
  /** Estadística mostrada tal como en la referencia (no se deriva del arreglo) */
  metasAlcanzadas = 3;
  totalMetas = 4;

  metas: Meta[] = [
    {
      id: 1,
      nombre: 'Ahorro Vacaciones',
      actual: 3600000,
      objetivo: 5000000,
      cumplida: false,
      notaPrincipal: 'Meta alcanzada en 4 meses',
      notaSecundaria: '$3.600.000 / mes',
    },
    {
      id: 2,
      nombre: 'Fondo de Emergencia',
      actual: 4700000,
      objetivo: 8000000,
      cumplida: false,
      notaPrincipal: 'Ahorro mensual $3.000.000',
      notaSecundaria: '20 meses restantes',
    },
    {
      id: 3,
      nombre: 'Comprar Nueva Laptop',
      actual: 3000000,
      objetivo: 3000000,
      cumplida: true,
      notaPrincipal: 'Cumplida Febrero 2023',
      notaSecundaria: 'Duración 6 meses',
    },
    {
      id: 4,
      nombre: 'Comprar Un Auto',
      actual: 300000,
      objetivo: 20000000,
      cumplida: false,
      notaPrincipal: '$400.000 / mes',
      notaSecundaria: 'Meta alcanzada en Abr 2028',
    },
  ];

  get totalAhorrado(): number {
    return this.metas.reduce((suma, m) => suma + m.actual, 0);
  }

  get totalObjetivo(): number {
    return this.metas.reduce((suma, m) => suma + m.objetivo, 0);
  }

  get progresoGeneral(): number {
    return Math.round((this.totalAhorrado / this.totalObjetivo) * 100);
  }

  progresoMeta(meta: Meta): number {
    return Math.min(100, Math.round((meta.actual / meta.objetivo) * 100));
  }

  formatearCOP(valor: number): string {
    return `$${valor.toLocaleString('es-CO')}`;
  }

  crearMeta(): void {
    // Punto de extensión: abrir el formulario/modal de nueva meta
  }

  masOpciones(): void {
    // Punto de extensión: menú de opciones (editar, eliminar, ordenar, etc.)
  }
}