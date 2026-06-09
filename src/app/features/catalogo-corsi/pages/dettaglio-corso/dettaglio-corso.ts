import { Component, input, inject, computed } from '@angular/core';
import { CorsoFacade } from '../../services/facade/corso-facade';

@Component({
  selector: 'app-dettaglio-corso',
  imports: [],
  templateUrl: './dettaglio-corso.html',
  styleUrl: './dettaglio-corso.css',
})

export class DettaglioCorso {
  id = input.required<number>();
  private facade = inject(CorsoFacade);
  corso = computed(() => this.facade.getById(this.id()));
}
