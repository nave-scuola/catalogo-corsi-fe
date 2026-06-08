import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'docenti/ex01',
    loadComponent: () =>
      import('./features/catalogo-corsi/pages/docente-task.ex01/docente-task-ex01')
        .then(m => m.DocenteCorsiEx01Page)
  },
  {
    path: 'corsi',
    loadChildren: () =>
      import('./features/catalogo-corsi/catalogo-corsi.routes')
        .then(m => m.CATALOGO_CORSI_ROUTES)
  },
  {
    path: 'tasks',
    loadComponent: () =>
      import('./features/catalogo-corsi/pages/tasks-hub/tasks-hub')
        .then(m => m.TasksHub)
  },
  { path: '', redirectTo: 'docenti/ex01', pathMatch: 'full' }
];
