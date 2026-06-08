import { Injectable, inject } from '@angular/core';
import { CorsoStore } from '../services/corso-store';

@Injectable({ providedIn: 'root' })
export class CorsoFacade {
  private store = inject(CorsoStore);
  readonly listaCardsFiltrati = this.store.listaCardsFiltrati;

  filtroTesto = this.store.filtroTesto;
  getById(id: number) {
    return this.store.getById(id);
  }
}
