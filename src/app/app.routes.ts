import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'prova',
        loadComponent: () => import('./prova/prova').then(m => m.Prova)
    },
];

