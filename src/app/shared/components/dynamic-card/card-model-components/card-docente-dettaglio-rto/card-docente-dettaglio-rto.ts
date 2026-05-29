import { Component, input } from '@angular/core';
import { DocenteDettaglioRTO } from '../../../../../features/catalogo-corsi/models/rto/docenteDettaglioRTO.model';

@Component({
  selector: 'app-card-docente-dettaglio',
  standalone: true,
  templateUrl: './card-docente-dettaglio-rto.html'
})
export class CardDocenteDettaglioComponent {
  data= input.required<DocenteDettaglioRTO>();
}
