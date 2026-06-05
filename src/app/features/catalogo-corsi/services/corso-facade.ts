import { Injectable, inject } from '@angular/core';
import { CorsoStore } from './corso-store';

@Injectable({ providedIn: 'root' })
export class CorsoFacade {
  private store = inject(CorsoStore);

  readonly listaCardsFiltrati = this.store.listaCardsFiltrati;

  filtroTesto = this.store.filtroTesto;

  getById = this.store.getById;
}