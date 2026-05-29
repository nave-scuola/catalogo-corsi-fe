import { Component, Input } from '@angular/core';
import { DocenteDettaglioRTO } from '../../../../../features/catalogo-corsi/models/rto/docenteDettaglioRTO.model';

@Component({
  selector: 'app-card-docente-dettaglio',
  standalone: true,
  templateUrl: './card-docente-dettaglio-rto.html'
})
export class CardDocenteDettaglioComponent {
  @Input() data!: DocenteDettaglioRTO;
}
