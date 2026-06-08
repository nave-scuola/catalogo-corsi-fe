import { Component, inject } from '@angular/core';
import { DynamicCardContainerComponent } from '../../../../shared/components/dynamic-card/dynamic-card-container/dynamic-card-container.component';
import { CorsoFacade } from '../../services/corso-facade';
import { Router } from '@angular/router'

@Component({
  selector: 'app-lista-corsi',
  imports: [DynamicCardContainerComponent],
  templateUrl: './lista-corsi.html',
  styleUrl: './lista-corsi.css',
})

export class ListaCorsi {
  facade = inject(CorsoFacade);
  filtroTesto = this.facade.filtroTesto;
  corsi = this.facade.listaCardsFiltrati;

  router = inject(Router);

  onCardClick(id: number): void {
    this.router.navigate(['/corsi', id]);
  }
}
