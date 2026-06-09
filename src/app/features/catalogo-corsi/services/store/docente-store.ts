import { Injectable, inject, signal } from '@angular/core';
import { DocenteApi } from '../api/docente.api';
import { CorsoRTO } from '../../models/rto/corsoRTO.model';
import { DocenteRTO } from '../../models/rto/docenteRTO.model';
import { DocenteConCorsiRTO } from '../../models/rto/docenteConCorsiRTO.model';

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

  // ex02
  private readonly _docentiByTitolo = signal<DocenteRTO[]>([]);
  readonly docentiByTitolo = this._docentiByTitolo.asReadonly();

  loadDocentiByTitolo(titolo: string): void {
    this._loading.set(true);
    this._errore.set(null);

    this.api.getDocentiByTitoloCorso(titolo).subscribe({
      next: docenti => {
        this._docentiByTitolo.set(docenti);
        this._loading.set(false);
      },
      error: () => {
        this._errore.set('Errore nel recupero dei docenti per titolo corso');
        this._loading.set(false);
      }
    });
  }

  // ex03
  private readonly _listaDocenti = signal<DocenteConCorsiRTO[]>([]);
  readonly listaDocenti = this._listaDocenti.asReadonly();

  loadAllDocenti(): void {
    this._loading.set(true);
    this._errore.set(null);

    this.api.getAllDocenti().subscribe({
      next: docenti => {
        this._listaDocenti.set(docenti);
        this._loading.set(false);
      },
      error: () => {
        this._errore.set('Errore nel recupero della lista docenti');
        this._loading.set(false);
      }
    });
  }

  // ex04
  private readonly _docenteDettaglio = signal<DocenteConCorsiRTO | null>(null);
  readonly docenteDettaglio = this._docenteDettaglio.asReadonly();

  loadDocenteById(idDocente: number): void {
    this._loading.set(true);
    this._errore.set(null);

    this.api.getDocenteById(idDocente).subscribe({
      next: docente => {
        this._docenteDettaglio.set(docente);
        this._loading.set(false);
      },
      error: () => {
        this._errore.set('Errore nel recupero del docente');
        this._loading.set(false);
      }
    });
  }

  //ex05
  private readonly _docentiByListaId = signal<DocenteConCorsiRTO[]>([]);
  readonly docentiByListaId = this._docentiByListaId.asReadonly();

  loadDocentiByListaId(listaId: number[]): void {
    this._loading.set(true);
    this._errore.set(null);

    this.api.getDocentiByListaId(listaId).subscribe({
      next: docenti => {
        this._docentiByListaId.set(docenti);
        this._loading.set(false);
      },
      error: () => {
        this._errore.set('Errore nel recupero dei docenti per lista ID');
        this._loading.set(false);
      }
    });
  }

  //ex06
  private readonly _docentiByNomeCognome = signal<DocenteConCorsiRTO[]>([]);
  readonly docentiByNomeCognome = this._docentiByNomeCognome.asReadonly();

  loadDocentiByNomeCognome(nome: string, cognome: string): void {
    this._loading.set(true);
    this._errore.set(null);

    this.api.getDocentiByNomeCognome(nome, cognome).subscribe({
      next: docenti => {
        this._docentiByNomeCognome.set(docenti);
        this._loading.set(false);
      },
      error: () => {
        this._errore.set('Errore nel recupero dei docenti per nome/cognome');
        this._loading.set(false);
      }
    });
  }


}
