import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth';

interface MenuItem {
  icono: string;
  nombre: string;
  ruta: string;
}

@Component({
  selector: 'app-Menu',
  imports: [RouterModule],
  templateUrl: './menu.html',
  styleUrls: ['./menu.css'],
})
export class MenuComponent implements OnInit {
  constructor(private authService: AuthService) {}

  nombreSistema: string = 'FINANCE UP';
  usuario: string = '';

  /** Menú principal. Ajusta 'nombre' y 'ruta' según las secciones reales de tu proyecto. */
  menu: MenuItem[] = [
    { icono: '▦', nombre: 'Resumen', ruta: '/dashboard' },
    { icono: '📈', nombre: 'Inversiones', ruta: '/inversiones' },
    { icono: '🚩', nombre: 'Metas', ruta: '/metas' },
  ];

  ngOnInit(): void {
    this.usuario = this.authService.obtenerNombre();
  }

  nuevoMovimiento(): void {
    // Punto de extensión: abrir el formulario/modal de nuevo movimiento
  }

  get inicialUsuario(): string {
    return this.usuario ? this.usuario.charAt(0).toUpperCase() : '';
  }
}