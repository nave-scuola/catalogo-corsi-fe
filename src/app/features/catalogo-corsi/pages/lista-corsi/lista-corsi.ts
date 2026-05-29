import { Component, inject } from '@angular/core';
import { DynamicCardContainerComponent } from '../../../../shared/components/dynamic-card/dynamic-card-container/dynamic-card-container.component';
import { CorsoStore } from '../../services/corso-store';

@Component({
  selector: 'app-lista-corsi',
  imports: [DynamicCardContainerComponent],
  templateUrl: './lista-corsi.html',
  styleUrl: './lista-corsi.css',
})

export class ListaCorsi {
  titolo = 'Catalogo Corsi';
  service = inject(CorsoStore);  
  filtroTesto = this.service.filtroTesto;
  corsi= this.service.listaCardsFiltrati;
}
