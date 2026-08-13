import { Routes } from '@angular/router';
import { CentroAyudaConponent } from './pages/centro-ayuda/centro-ayuda';
import { FinanzasComponent } from './pages/finanzas/finanzas';

export const routes: Routes = [
    {
        path:'ayuda',
        component:CentroAyudaConponent
    },
];
