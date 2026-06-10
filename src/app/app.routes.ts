import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'docenti/ex01',
    loadComponent: () =>
      import('./features/catalogo-corsi/pages/docenti/docente-task-ex01/docente-task-ex01')
        .then(m => m.DocenteTaskEx01)
  },
  {
    path: 'corsi/ex02',
    loadComponent: () =>
      import('./features/catalogo-corsi/pages/corsi/corso-task-ex02/corso-task-ex02')
        .then(m => m.CorsoTaskEx02)
  },
  {
    path: 'docenti/ex03',
    loadComponent: () =>
      import('./features/catalogo-corsi/pages/docenti/docente-task-ex03/docente-task-ex03')
        .then(m => m.DocenteTaskEx03)
  },
  {
    path: 'docenti/ex04',
    loadComponent: () =>
      import('./features/catalogo-corsi/pages/docenti/docente-task-ex04/docente-task-ex04')
        .then(m => m.DocenteTaskEx04)
  },
  {
    path: 'docenti/ex05',
    loadComponent: () =>
      import('./features/catalogo-corsi/pages/docenti/docente-task-ex05/docente-task-ex05')
        .then(m => m.DocenteTaskEx05)
  },
  {
    path: 'docenti/ex06',
    loadComponent: () =>
      import('./features/catalogo-corsi/pages/docenti/docente-task-ex06/docente-task-ex06')
        .then(m => m.DocenteTaskEx06)
  },
  {
    path: 'corsi/fe404',
    loadComponent: () =>
      import('./features/catalogo-corsi/pages/corsi/corso-task-fe404/corso-task-fe404')
        .then(m => m.CorsoTaskFe404)
  },
  {
    path: 'corsi/fe403',
    loadComponent: () =>
      import('./features/catalogo-corsi/pages/corsi/corso-task-fe403/corso-task-fe403')
        .then(m => m.CorsoTaskFe403)
  },
  {
    path: 'tasks',
    loadComponent: () =>
      import('./features/catalogo-corsi/pages/tasks-hub/tasks-hub')
        .then(m => m.TasksHub)
  },
  { path: '', redirectTo: 'tasks', pathMatch: 'full' }
];
