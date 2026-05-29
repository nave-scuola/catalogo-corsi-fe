import { Component, signal, computed } from '@angular/core';
import { DynamicCardRequest } from '../../models/rto/dynamic-card-request';
import { CorsoRTO } from '../../models/rto/corsoRTO.model';
import { DynamicCardContainerComponent } from '../../../../shared/components/dynamic-card/dynamic-card-container/dynamic-card-container.component';

@Component({
  selector: 'app-lista-corsi',
  imports: [DynamicCardContainerComponent],
  templateUrl: './lista-corsi.html',
  styleUrl: './lista-corsi.css',
})

export class ListaCorsi {
  filtroTesto = signal('');
  titolo = 'Catalogo Corsi';

  //esempio di lista di card dinamiche:
  corsi: CorsoRTO[] = [
    { idCorso: 1, titolo: 'Java', codiceCorso: 'JAVA', livello: 'Basso', descrizione: 'Corso Base di Java', durataOre: 900, categoria: 'Dev' },
    { idCorso: 2, titolo: 'Angular', codiceCorso: 'ANGULAR-001', livello: 'Medio', descrizione: 'Sviluppo frontend con Angular', durataOre: 450, categoria: 'Frontend' },
    { idCorso: 3, titolo: 'SQL Avanzato', codiceCorso: 'SQL-001', livello: 'Alto', descrizione: 'Query Avanzate e ottimizzazione', durataOre: 480, categoria: 'Database' }
  ];
  listaCards: DynamicCardRequest[] = this.corsi.map(corso => ({
    tipo: 'corso',
    payload: corso
  }));

  //esempio di card dinamica:
  corso: DynamicCardRequest = { tipo: 'corso', payload: { idCorso: 1, titolo: 'Java', codiceCorso: 'JAVA', livello: 'Basso', descrizione: 'Corso Base di Java', durataOre: 900, categoria: 'Dev' } };

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
}
