import { Routes } from '@angular/router';
import { FinanzasComponent } from './pages/finanzas/finanzas/finanzas';
import { menuComponent } from './pages/finanzas/menu/menu';

export const routes: Routes = [
    {
    path: '',
    redirectTo: 'menu', 
    pathMatch: 'full'
    },
    {
    path: 'finanzas',
    component: FinanzasComponent, 
    },
        {
    path: 'menu',
    component: menuComponent, 
    }
];

