import { Injectable, inject } from '@angular/core';
import { CorsoStore } from '../store/corso-store';

@Injectable({ providedIn: 'root' })
export class CorsoFacade {
  private store = inject(CorsoStore);

  readonly corsi = this.store.corsi;
  readonly loading = this.store.loading;
  readonly errore = this.store.errore;

  loadAll(): void { this.store.loadAll(); }

  getById(id: number) {
    return this.store.getById(id);
  }
}
