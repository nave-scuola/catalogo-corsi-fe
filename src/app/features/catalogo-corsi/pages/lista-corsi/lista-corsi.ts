import { Component } from '@angular/core';
import { Card } from '../../../../shared/components/card/card';
import { CorsoRTO } from '../../models/rto/corsoRTO.model';

@Component({
  selector: 'app-lista-corsi',
  imports: [Card],
  templateUrl: './lista-corsi.html',
  styleUrl: './lista-corsi.css',
})

export class ListaCorsi {
  titolo = 'Catalogo Corsi';
  readonly corsi: CorsoRTO[] = [
    { idCorso: 1, titolo: 'Java', codiceCorso: 'JAVA', livello: 'Basso', descrizione: 'Corso Base di Java', durataOre: 900, categoria: 'Dev' },
    { idCorso: 2, titolo: 'Angular', codiceCorso: 'ANGULAR-001', livello: 'Medio', descrizione: 'Sviluppo frontend con Angular', durataOre: 450, categoria: 'Frontend' },
    { idCorso: 3, titolo: 'SQL Avanzato', codiceCorso: 'SQL-001', livello: 'Alto', descrizione: 'Query Avanzate e ottimizzazione', durataOre: 480, categoria: 'Database' }
  ];
}
