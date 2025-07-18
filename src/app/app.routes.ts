import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./view/login/login-module').then(m => m.LoginModule)
  },
  {
    path: 'registrousuario',
    loadChildren: () => import('./view/registrousuario/registrousuario-module').then(m => m.RegistrousuarioModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./view/dashboard/dashboard-module').then(m => m.DashboardModule)
  },
];
