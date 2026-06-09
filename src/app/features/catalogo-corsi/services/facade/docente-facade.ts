import { Injectable, inject } from '@angular/core';
import { DocenteStore } from '../store/docente-store';

@Injectable({ providedIn: 'root' })
export class DocenteFacade {
  private store = inject(DocenteStore);

  readonly corsiDocente = this.store.corsiDocente;
  readonly loading = this.store.loading;
  readonly errore = this.store.errore;

  loadCorsiByIdDocente(idDocente: number): void {
    this.store.loadCorsiByIdDocente(idDocente);
  }

  readonly docentiByTitolo = this.store.docentiByTitolo;

  loadDocentiByTitolo(titolo: string): void {
    this.store.loadDocentiByTitolo(titolo);
  }

  //ex03
  readonly listaDocenti = this.store.listaDocenti;

  loadAllDocenti(): void {
    this.store.loadAllDocenti();
  }

  //ex04
  readonly docenteDettaglio = this.store.docenteDettaglio;

  loadDocenteById(idDocente: number): void {
    this.store.loadDocenteById(idDocente);
  }

  //ex05
  readonly docentiByListaId = this.store.docentiByListaId;

  loadDocentiByListaId(listaId: number[]): void {
    this.store.loadDocentiByListaId(listaId);
  }

  //ex06
  readonly docentiByNomeCognome = this.store.docentiByNomeCognome;

  loadDocentiByNomeCognome(nome: string, cognome: string): void {
    this.store.loadDocentiByNomeCognome(nome, cognome);
  }

  

}
