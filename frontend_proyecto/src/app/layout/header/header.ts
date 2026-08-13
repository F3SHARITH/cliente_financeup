import { Component, OnDestroy, OnInit, signal, HostListener, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth';

interface Notificacion {
  id: number;
  mensaje: string;
  fecha: string;
  leida: boolean;
}

interface NavItem {
  nombre: string;
  ruta: string;
  roles: string[];
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  providers: [AuthService],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private authService = inject(AuthService);
  constructor(private router: Router) {}

  nombreSistema: string = 'ADSO';
  usuario: string = '';
  rol: string = '';
  fechaActual = signal('');
  horaActual = signal('');

  /** Estado de los elementos desplegables del header */
  menuUsuarioAbierto = signal(false);
  notificacionesAbiertas = signal(false);
  busquedaAbierta = signal(false);
  terminoBusqueda = signal('');

  /** Navegación principal horizontal, filtrada según el rol activo */
  navItems: NavItem[] = [
    { nombre: 'Inicio', ruta: '/dashboard', roles: ['empresa', 'usuario', 'Administrador', 'instructor', 'Aprendiz'] },
    { nombre: 'Usuarios', ruta: '/users', roles: ['empresa', 'Administrador'] },
    { nombre: 'Contenido', ruta: '/contenido', roles: ['empresa', 'usuario', 'Administrador', 'Instructor', 'Aprendiz'] },
    { nombre: 'Reservas', ruta: '/reservas', roles: ['empresa', 'usuario', 'Administrador', 'Instructor', 'Aprendiz'] },
  ];

  get navVisible(): NavItem[] {
    return this.navItems.filter(item => item.roles.includes(this.rol));
  }

  notificaciones: Notificacion[] = [
    { id: 1, mensaje: 'Se registró un nuevo usuario', fecha: 'Hace 10 min', leida: false },
    { id: 2, mensaje: 'Reporte mensual disponible', fecha: 'Hace 2 horas', leida: false },
    { id: 3, mensaje: 'Actualización del sistema completada', fecha: 'Ayer', leida: true },
  ];

  get notificacionesSinLeer(): number {
    return this.notificaciones.filter(n => !n.leida).length;
  }

  private intervalo: any;

  ngOnInit(): void {
    this.usuario = this.authService.obtenerNombre();
    this.rol = localStorage.getItem('rol') ?? '';
    this.actualizarFechaHora();
    this.intervalo = setInterval(() => {
      this.actualizarFechaHora();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }

  actualizarFechaHora(): void {
    const ahora = new Date();
    this.fechaActual.set(ahora.toLocaleDateString(
      'es-CO',
      { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' }
    ));
    this.horaActual.set(ahora.toLocaleTimeString('es-CO', { hour12: false }));
  }

  alternarBusqueda(): void {
    this.busquedaAbierta.update(v => !v);
    this.menuUsuarioAbierto.set(false);
    this.notificacionesAbiertas.set(false);
  }

  alternarMenuUsuario(): void {
    this.menuUsuarioAbierto.update(v => !v);
    this.notificacionesAbiertas.set(false);
    this.busquedaAbierta.set(false);
  }

  alternarNotificaciones(): void {
    this.notificacionesAbiertas.update(v => !v);
    this.menuUsuarioAbierto.set(false);
    this.busquedaAbierta.set(false);
  }

  marcarComoLeida(notificacion: Notificacion): void {
    notificacion.leida = true;
  }

  marcarTodasComoLeidas(): void {
    this.notificaciones.forEach(n => (n.leida = true));
  }

  buscar(termino: string): void {
    this.terminoBusqueda.set(termino);
  }

  irAPerfil(): void {
    this.menuUsuarioAbierto.set(false);
    this.router.navigate(['/perfil']);
  }

  cerrarSesion(): void {
    this.authService.cerraSesion();
    this.router.navigate(['/login']);
  }

  @HostListener('document:keydown.escape')
  cerrarMenusConEscape(): void {
    this.menuUsuarioAbierto.set(false);
    this.notificacionesAbiertas.set(false);
    this.busquedaAbierta.set(false);
  }

  @HostListener('document:click', ['$event'])
  cerrarMenusFuera(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.user-data') && !target.closest('.notificaciones') && !target.closest('.busqueda')) {
      this.menuUsuarioAbierto.set(false);
      this.notificacionesAbiertas.set(false);
      this.busquedaAbierta.set(false);
    }
  }
}