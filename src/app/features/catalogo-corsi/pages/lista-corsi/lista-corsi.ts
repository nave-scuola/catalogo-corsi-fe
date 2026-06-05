import { Component, inject } from '@angular/core';
import { DynamicCardContainerComponent } from '../../../../shared/components/dynamic-card/dynamic-card-container/dynamic-card-container.component';
import { CorsoStore } from '../../services/corso-store';
import { FiltroCorsi } from '../../components/filtro-corsi/filtro-corsi';
import { FiltroCorsiRTO } from '../../models/filtro-corsi.model/filtro-corsi.model';

@Component({
  selector: 'app-lista-corsi',
  imports: [DynamicCardContainerComponent, FiltroCorsi],
  templateUrl: './lista-corsi.html',
  styleUrl: './lista-corsi.css',
})

export class ListaCorsi {
  titolo = 'Catalogo Corsi';
  service = inject(CorsoStore);
  corsi = this.service.listaCardsFiltrati;

  onFiltroApplicato(filtro: FiltroCorsiRTO): void {
    this.service.applicaFiltroAvanzato(filtro);
  }

}
