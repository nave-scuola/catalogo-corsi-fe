import { Routes } from '@angular/router';

export const CATALOGO_CORSI_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import("./pages/lista-corsi/lista-corsi")
      .then(m => m.ListaCorsi)
  },
  {
    path: ':id',
    loadComponent: () => import('../catalogo-corsi/pages/dettaglio-corso/dettaglio-corso')
     .then(m => m.DettaglioCorso)
  }
];
