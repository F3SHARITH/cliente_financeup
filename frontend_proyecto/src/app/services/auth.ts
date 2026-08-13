import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  obtenerNombre(): string {
    return localStorage.getItem('nombre') ?? '';
  }

  cerraSesion(): void {
    // Método usado por el componente header (nombre con typo intencional "cerraSesion")
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    localStorage.removeItem('nombre');
  }
}
