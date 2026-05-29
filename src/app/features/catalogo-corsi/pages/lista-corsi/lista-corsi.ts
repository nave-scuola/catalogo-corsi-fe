import { Component, inject } from '@angular/core';
import { DynamicCardContainerComponent } from '../../../../shared/components/dynamic-card/dynamic-card-container/dynamic-card-container.component';
import { CorsoFacade } from '../../services/corso-facade';

@Component({
  selector: 'app-lista-corsi',
  imports: [DynamicCardContainerComponent],
  templateUrl: './lista-corsi.html',
  styleUrl: './lista-corsi.css',
})

export class ListaCorsi {
  titolo = 'Catalogo Corsi';
  facade = inject(CorsoFacade);  
  filtroTesto = this.facade.filtroTesto;
  corsi= this.facade.listaCardsFiltrati;
}
