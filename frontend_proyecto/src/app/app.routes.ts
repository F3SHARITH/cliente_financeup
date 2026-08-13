import { Routes } from '@angular/router';
import { CentroAyudaConponent } from './pages/soporte/centro-ayuda/centro-ayuda';
import { LineaAyudaComponent } from './pages/soporte/linea-ayuda/linea-ayuda';

export const routes: Routes = [
    {
        path:'ayuda',
        component:CentroAyudaConponent
    },
    {
        path:'linea-ayuda',
        component:LineaAyudaComponent
    }
];
