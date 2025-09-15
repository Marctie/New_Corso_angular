import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'prova',
    loadComponent: () => import('./prova/prova').then((m) => m.Prova),
  },

    {
      path: 'login',
      loadComponent: () => import('./login/login').then((m) => m.Login),
    },
];
