import { Component, inject } from '@angular/core';
import { DynamicCardContainerComponent } from '../../../../shared/components/dynamic-card/dynamic-card-container/dynamic-card-container.component';
import { CorsoFacade } from '../../services/facade/corso-facade';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-corsi',
  standalone: true,
  imports: [DynamicCardContainerComponent],
  templateUrl: './lista-corsi.html',
  styleUrl: './lista-corsi.css',
})
export class ListaCorsi {
  facade = inject(CorsoFacade);
  router = inject(Router);

  corsi = this.facade.corsi;

  onCardClick(id: number): void {
    this.router.navigate(['/corsi', id]);
  }
}
