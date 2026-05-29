import { Injectable, computed, signal } from '@angular/core';
import { CorsoRTO } from '../models/rto/corsoRTO.model';

@Injectable({
  providedIn: 'root',
})
export class CorsoStore {
  corsi: CorsoRTO[] = [
    { idCorso: 1, titolo: 'Java', codiceCorso: 'JAVA', livello: 'Basso', descrizione: 'Corso Base di Java', durataOre: 900, categoria: 'Dev' },
    { idCorso: 2, titolo: 'Angular', codiceCorso: 'ANGULAR-001', livello: 'Medio', descrizione: 'Sviluppo frontend con Angular', durataOre: 450, categoria: 'Frontend' },
    { idCorso: 3, titolo: 'SQL Avanzato', codiceCorso: 'SQL-001', livello: 'Alto', descrizione: 'Query Avanzate e ottimizzazione', durataOre: 480, categoria: 'Database' }
  ];

  //filtro applicato al titolo, descrizione e categoria nello stesso form
  filtroTesto= signal('');

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

  getById(id: number): CorsoRTO | undefined {
    return this.corsi.find(item => item.idCorso === id);
  }
}
