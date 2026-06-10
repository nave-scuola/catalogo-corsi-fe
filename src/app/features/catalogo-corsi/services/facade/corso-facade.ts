import { Injectable, inject } from '@angular/core';
import { CorsoStore } from '../store/corso-store';

@Injectable({ providedIn: 'root' })
export class CorsoFacade {
  private store = inject(CorsoStore);

  readonly corsi = this.store.corsi;
  readonly loading = this.store.loading;
  readonly errore = this.store.errore;
  corso = this.store.corso;

  loadAll(): void { this.store.loadAll(); }

  getById(id: number) {
    return this.store.getById(id);
  }

  loadCorso(id: number) {
    this.store.loadCorso(id);
  }

  creaCorso(rto: any) {
    return this.store.creaCorso(rto);
  }

  modificaCorso(rto: any) {
    return this.store.modificaCorso(rto);
  }
}
