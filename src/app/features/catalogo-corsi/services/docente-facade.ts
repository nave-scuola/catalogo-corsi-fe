import { Injectable, inject } from '@angular/core';
import { DocenteStore } from './docente-store';

@Injectable({ providedIn: 'root' })
export class DocenteFacade {
  private store = inject(DocenteStore);

  readonly corsiDocente = this.store.corsiDocente;
  readonly loading = this.store.loading;
  readonly errore = this.store.errore;

  loadCorsiByIdDocente(idDocente: number): void {
    this.store.loadCorsiByIdDocente(idDocente);
  }
}
