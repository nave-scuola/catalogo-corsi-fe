import { Injectable, inject } from '@angular/core';
import { CorsoStore } from '../services/corso-store';
import { FiltroCorsiRTO } from '../models/filtro-corsi.model/filtro-corsi.model';

@Injectable({ providedIn: 'root' })
export class CorsoFacade {
  private store = inject(CorsoStore);
  readonly listaCardsFiltrati = this.store.listaCardsFiltrati;

  filtroTesto = this.store.filtroTesto;
  getById(id: number) {
    return this.store.getById(id);
  }
  applicaFiltroAvanzato(filtro: FiltroCorsiRTO){
    return this.store.applicaFiltroAvanzato(filtro);
  }
}
