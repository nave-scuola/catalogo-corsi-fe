import { Injectable, inject, signal } from '@angular/core';
import { DocenteApi } from './docente.api';
import { CorsoRTO } from '../../catalogo-corsi/models/rto/corsoRTO.model';

@Injectable({ providedIn: 'root' })
export class DocenteStore {

  private api = inject(DocenteApi);

  private readonly _corsiDocente = signal<CorsoRTO[]>([]);
  readonly corsiDocente = this._corsiDocente.asReadonly();

  private readonly _loading = signal(false);
  readonly loading = this._loading.asReadonly();

  private readonly _errore = signal<string | null>(null);
  readonly errore = this._errore.asReadonly();

  loadCorsiByIdDocente(idDocente: number): void {
    this._loading.set(true);
    this._errore.set(null);

    this.api.getCorsiByIdDocente(idDocente).subscribe({
      next: corsi => {
        this._corsiDocente.set(corsi);
        this._loading.set(false);
      },
      error: () => {
        this._errore.set('Errore nel recuperare i corsi del docente');
        this._loading.set(false);
      }
    });
  }
}
