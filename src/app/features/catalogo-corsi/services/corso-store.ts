import { Injectable, computed, signal, inject } from '@angular/core';
import { CorsoRTO } from '../models/rto/corsoRTO.model';
import { FiltroCorsiRTO, defaultFiltroCorsi } from '../models/filtro-corsi.model/filtro-corsi.model';
import { CorsoApi } from './corso.api';

@Injectable({
  providedIn: 'root'
})
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

  // filtro testuale
  filtroTesto = signal<string>('');

  // filtro avanzato
  filtroAvanzato = signal<FiltroCorsiRTO>(defaultFiltroCorsi());

  applicaFiltroAvanzato(filtro: FiltroCorsiRTO): void {
    this.filtroAvanzato.set(filtro);
  }

  // normalizzazione
  private normalize(value: string): string {
    return value?.trim().toLowerCase() ?? '';
  }

  // match singolo corso
  private matchCorso(corso: CorsoRTO, filtro: FiltroCorsiRTO, testo: string): boolean {
    const t = this.normalize(testo);

    const matchTesto =
      !t ||
      this.normalize(corso.titolo).includes(t) ||
      this.normalize(corso.descrizione).includes(t) ||
      this.normalize(corso.categoria).includes(t);

    const matchCategoria =
      !filtro.categoria || this.normalize(corso.categoria).includes(this.normalize(filtro.categoria));

    const matchLivello =
      !filtro.livello || this.normalize(corso.livello).includes(this.normalize(filtro.livello));

    const matchTitolo =
      !filtro.titolo || this.normalize(corso.titolo).includes(this.normalize(filtro.titolo));

    const matchCodice =
      !filtro.codiceCorso || this.normalize(corso.codiceCorso).includes(this.normalize(filtro.codiceCorso));

    return matchTesto && matchCategoria && matchLivello && matchTitolo && matchCodice;
  }

  // computed finale
  corsiFiltrati = computed(() => {
    const testo = this.filtroTesto();
    const filtro = this.filtroAvanzato();

    return this.corsi().filter(corso => this.matchCorso(corso, filtro, testo));
  });

  listaCardsFiltrati = computed(() =>
    this.corsiFiltrati().map(corso => ({
      tipo: 'corso' as const,
      payload: corso
    }))
  );

  getById(id: number | string): CorsoRTO | undefined {
    const idNum = Number(id);
    return this.corsi().find(item => item.idCorso === idNum);
  }

  findCorsoByCodCorso(codice: string): void {
    this._loading.set(true);
    this._errore.set(null);

    this.api.findCorsoByCodCorso(codice).subscribe({
      next: corso => {
        this._corsi.set([corso]);
        this._loading.set(false);
      },
      error: () => {
        this._errore.set('Errore nel recupero del corso');
        this._loading.set(false);
      }
    });
  }

}
