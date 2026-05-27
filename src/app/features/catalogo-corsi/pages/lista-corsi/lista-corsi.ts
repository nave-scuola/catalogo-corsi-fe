import { Component } from '@angular/core';
import { Card } from '../../../../shared/components/card/card';

@Component({
  selector: 'app-lista-corsi',
  imports: [Card],
  templateUrl: './lista-corsi.html',
  styleUrl: './lista-corsi.css',
})

export class ListaCorsi {
  titolo = 'Catalogo Corsi';
}removeEventListener
