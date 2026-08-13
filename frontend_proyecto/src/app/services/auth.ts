import { Injectable } from '@angular/core';

export interface Usuario {
  email: string;
  password: string;
  nombre: string;
  rol: string;
}

// TODO: BLOQUE TEMPORAL CON DATOS QUEMADOS (MOCK)
// Reemplazar por llamadas HTTP al backend real cuando esté listo (HttpClient + endpoints de auth).
const USUARIOS_MOCK: Usuario[] = [
  { email: 'admin@financeup.com', password: 'admin123', nombre: 'Administrador', rol: 'admin' },
  { email: 'usuario@financeup.com', password: 'usuario123', nombre: 'Usuario Demo', rol: 'user' },
  { email: 'test@financeup.com', password: '123456', nombre: 'Test User', rol: 'user' }
];

const STORAGE_KEY = 'financeup_user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioActual: Usuario | null = null;

  constructor() {
    // Recupera la sesión si ya había un usuario logueado (persistencia entre recargas)
    const guardado = sessionStorage.getItem(STORAGE_KEY);
    if (guardado) {
      this.usuarioActual = JSON.parse(guardado);
    }
  }

  /**
   * Valida credenciales contra los usuarios quemados (mock).
   * Devuelve true si el login fue exitoso, false si las credenciales son incorrectas.
   */
  iniciarSesion(email: string, password: string): boolean {
    const usuario = USUARIOS_MOCK.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (!usuario) {
      return false;
    }

    this.usuarioActual = usuario;
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(usuario));
    return true;
  }

  /**
   * Devuelve el usuario autenticado actualmente, o null si no hay sesión activa.
   */
  obtenerUsuario(): Usuario | null {
    return this.usuarioActual;
  }

  /**
   * Devuelve el nombre del usuario autenticado.
   */
  obtenerNombre(): string {
    return this.usuarioActual?.nombre || 'Invitado';
  }

  /**
   * Indica si hay una sesión activa.
   */
  estaAutenticado(): boolean {
    return this.usuarioActual !== null;
  }

  /**
   * Cierra la sesión actual.
   */
  cerrarSesion(): void {
    this.usuarioActual = null;
    sessionStorage.removeItem(STORAGE_KEY);
  }
}