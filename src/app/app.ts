import { Component, inject, effect } from '@angular/core';
import { ListaCorsi } from './features/catalogo-corsi/pages/lista-corsi/lista-corsi';
import { ThemeStore } from './features/catalogo-corsi/theme/theme.store';

@Component({
  selector: 'app-root',
  imports: [ListaCorsi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'catalogo-corsi-fe';
  theme = inject(ThemeStore);
  constructor() {
    effect(() => {
      document.body.className = this.theme.themeClass();
    });
  }
}
