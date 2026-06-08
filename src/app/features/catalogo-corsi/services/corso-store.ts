import { Injectable, signal, inject } from '@angular/core';
import { CorsoRTO } from '../models/rto/corsoRTO.model';
import { CorsoApi } from './corso.api';

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

  getById(id: number | string): CorsoRTO | undefined {
    const idNum = Number(id);
    return this.corsi().find(item => item.idCorso === idNum);
  }
}
