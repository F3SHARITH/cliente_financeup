import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface FooterColumn {
  title: string;
  links: { label: string; path: string }[];
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  columns: FooterColumn[] = [
    {
      title: 'Producto',
      links: [
        { label: 'Educacion', path: '/educacion' },
        { label: 'Alianzas', path: '/alianzas' },
        { label: 'Perfil', path: '/perfil' }
      ]
    },
    {
      title: 'Soporte',
      links: [
        { label: 'Centro de ayuda', path: '/soporte' },
        { label: 'Contacto', path: '/contacto' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Términos', path: '/terminos' },
        { label: 'Privacidad', path: '/privacidad' }
      ]
    }
  ];
}