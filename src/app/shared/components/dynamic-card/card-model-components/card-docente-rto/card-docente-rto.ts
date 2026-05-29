import { Component, input } from '@angular/core';
import { DocenteRTO } from '../../../../../features/catalogo-corsi/models/rto/docenteRTO.model';

@Component({
  selector: 'app-card-docente',
  standalone: true,
  templateUrl: './card-docente-rto.html'
})
export class CardDocenteComponent {
  data= input.required<DocenteRTO>();
}
