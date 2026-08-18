import { Routes } from '@angular/router';
import { FinanzasComponent } from './pages/finanzas/finanzas/finanzas';
import { InversionesComponent } from './pages/finanzas/inversiones/inversiones';
import { MetasComponent } from './pages/finanzas/finanzas-menu/metas/metas';

export const routes: Routes = [
    {
    path: '',
    redirectTo: 'finanzas', 
    pathMatch: 'full'
    },
    {
    path: 'finanzas',
    component: FinanzasComponent, 
    },
    {
    path: 'menu',
    component: FinanzasComponent, 
    },
    {
    path: 'inversiones',
    component: InversionesComponent, 
    },
    {
    path: 'metas',
    component: MetasComponent, 
    }

];

