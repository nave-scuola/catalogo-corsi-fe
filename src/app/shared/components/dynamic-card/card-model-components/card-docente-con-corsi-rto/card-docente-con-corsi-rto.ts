import { Component, input } from '@angular/core';
import { DocenteConCorsiRTO } from '../../../../../features/catalogo-corsi/models/rto/docenteConCorsiRTO.model';

@Component({
  selector: 'app-card-docente-con-corsi',
  standalone: true,
  templateUrl: './card-docente-con-corsi-rto.html'
})
export class CardDocenteConCorsiComponent {
  data= input.required<DocenteConCorsiRTO>();
}
