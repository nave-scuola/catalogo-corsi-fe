import { Component, inject } from '@angular/core';
import { DynamicCardContainerComponent } from '../../../../shared/components/dynamic-card/dynamic-card-container/dynamic-card-container.component';
import { FiltroCorsi } from '../../components/filtro-corsi/filtro-corsi';
import { FiltroCorsiRTO } from '../../models/filtro-corsi.model/filtro-corsi.model';
import { CorsoFacade } from '../../services/corso-facade';
import { Router } from '@angular/router'

@Component({
  selector: 'app-lista-corsi',
  imports: [DynamicCardContainerComponent, FiltroCorsi],
  templateUrl: './lista-corsi.html',
  styleUrl: './lista-corsi.css',
})

export class ListaCorsi {
  facade = inject(CorsoFacade);
  router = inject(Router);
  filtroTesto = this.facade.filtroTesto;
  corsi= this.facade.listaCardsFiltrati;

  onFiltroApplicato(filtro: FiltroCorsiRTO): void {
    this.facade.applicaFiltroAvanzato(filtro);
  }  
  onCardClick(id: number): void {
    this.router.navigate(['/corsi', id]);
  }
}
