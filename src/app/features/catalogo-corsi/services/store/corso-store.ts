import { Injectable, signal, inject } from '@angular/core';
import { CorsoRTO } from '../../models/rto/corsoRTO.model';
import { CorsoApi } from '../api/corso.api';

@Injectable({ providedIn: 'root' })
export class CorsoStore {

  private api = inject(CorsoApi);

  private readonly _corsi = signal<CorsoRTO[]>([]);
  readonly corsi = this._corsi.asReadonly();

  private readonly _loading = signal(false);
  readonly loading = this._loading.asReadonly();

  private readonly _errore = signal<string | null>(null);
  readonly errore = this._errore.asReadonly();

  loadAll(): void {
    this._loading.set(true);
    this._errore.set(null);
    this.api.getAll().subscribe({
      next: items => { this._corsi.set(items); this._loading.set(false); },
      error: () => { this._errore.set('Errore nel caricamento'); this._loading.set(false); }
    });
  }

  private readonly _corso = signal<CorsoRTO | null>(null);
  readonly corso = this._corso.asReadonly();

  loadCorso(id: number) {
    this.api.getCorsoById(id).subscribe(c => this._corso.set(c));
  }

  creaCorso(rto: Omit<CorsoRTO, 'idCorso'>) {
    return this.api.creaCorso(rto);
  }

  modificaCorso(rto: CorsoRTO) {
    return this.api.modificaCorso(rto);
  }

  eliminaCorso(id: number) {
    return this.api.eliminaCorso(id);
  }
}
