import { Injectable, computed, signal } from '@angular/core';
import { CorsoRTO } from '../models/rto/corsoRTO.model';
import { FiltroCorsiRTO, defaultFiltroCorsi } from '../models/filtro-corsi.model/filtro-corsi.model'

@Injectable({
  providedIn: 'root'
})
export class CorsoStore {
  corsi: CorsoRTO[] = [
    { idCorso: 1, titolo: 'Java', codiceCorso: 'JAVA', livello: 'Basso', descrizione: 'Corso Base di Java', durataOre: 900, categoria: 'Dev' },
    { idCorso: 2, titolo: 'Angular', codiceCorso: 'ANGULAR-001', livello: 'Medio', descrizione: 'Sviluppo frontend con Angular', durataOre: 450, categoria: 'Frontend' },
    { idCorso: 3, titolo: 'SQL Avanzato', codiceCorso: 'SQL-001', livello: 'Alto', descrizione: 'Query Avanzate e ottimizzazione', durataOre: 480, categoria: 'Database' }
  ];

  //filtro applicato al titolo, descrizione e categoria nello stesso form
  filtroTesto = signal<string>('');

  corsiFiltrati = computed(() => {
    const filtro = this.filtroTesto().toLowerCase();
    if (!filtro) return this.corsi;

    return this.corsi.filter(c =>
      c.titolo.toLowerCase().includes(filtro) ||
      c.descrizione.toLowerCase().includes(filtro) ||
      c.categoria.toLowerCase().includes(filtro)
    );
  });

  listaCardsFiltrati = computed(() =>
    this.corsiFiltrati().map(corso => ({
      tipo: 'corso' as const,
      payload: corso
    }))
  );

  filtroAvanzato = signal<FiltroCorsiRTO>(defaultFiltroCorsi());

  applicaFiltroAvanzato(filtro: FiltroCorsiRTO): void {
    this.filtroAvanzato.set(filtro);
  }

  corsiFiltrati = computed(() => {
    const testo = this.filtroTesto().toLowerCase();
    const f = this.filtroAvanzato();

    return this.corsi.filter(corso => {

      // filtro testuale (titolo, descrizione, categoria)
      const matchTesto =
        !testo ||
        corso.titolo.toLowerCase().includes(testo) ||
        corso.descrizione.toLowerCase().includes(testo) ||
        corso.categoria.toLowerCase().includes(testo);

      // filtro avanzato
      const matchCategoria =
        !f.categoria || corso.categoria.toLowerCase().includes(f.categoria.toLowerCase());

      const matchLivello =
        !f.livello || corso.livello.toLowerCase().includes(f.livello.toLowerCase());

      const matchTitolo =
        !f.titolo || corso.titolo.toLowerCase().includes(f.titolo.toLowerCase());

      const matchCodice =
        !f.codiceCorso || corso.codiceCorso.toLowerCase().includes(f.codiceCorso.toLowerCase());

      return matchTesto && matchCategoria && matchLivello && matchTitolo && matchCodice;
    });
  });

  getById(id: number | string): CorsoRTO | undefined {
    const idNum = Number(id);
    return this.corsi.find(item => item.idCorso === idNum);
  }
}
