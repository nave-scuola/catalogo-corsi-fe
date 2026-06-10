import { Injectable, inject } from '@angular/core';
import { CorsoStore } from '../store/corso-store';
import { CorsoTO } from '../../models/to/corsoTO.model';

@Injectable({ providedIn: 'root' })
export class CorsoFacade {
  private store = inject(CorsoStore);

  readonly corsi = this.store.corsi;
  readonly loading = this.store.loading;
  readonly errore = this.store.errore;
  corso = this.store.corso;

  loadAll(): void { this.store.loadAll(); }

  loadCorso(id: number) {
    this.store.loadCorso(id);
  }

  creaCorso(to: CorsoTO) {
    return this.store.creaCorso(to);
  }

  modificaCorso(to: CorsoTO) {
    return this.store.modificaCorso(to);
  }

  eliminaCorso(id: number) {
    return this.store.eliminaCorso(id);
  }
}
