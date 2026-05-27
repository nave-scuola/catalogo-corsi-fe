import { Component } from '@angular/core';
import { ListaCorsi } from './features/catalogo-corsi/pages/lista-corsi/lista-corsi';

@Component({
  selector: 'app-root',
  imports: [ListaCorsi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'catalogo-corsi-fe';
}
