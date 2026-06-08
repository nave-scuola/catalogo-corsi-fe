import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'corsi',
    loadChildren: () => import('./features/catalogo-corsi/catalogo-corsi.routes')
      .then(m => m.CATALOGO_CORSI_ROUTES)
  },
  { path: '', redirectTo: 'corsi', pathMatch: 'full' },
  { path: '**', redirectTo: 'corsi' }
];
