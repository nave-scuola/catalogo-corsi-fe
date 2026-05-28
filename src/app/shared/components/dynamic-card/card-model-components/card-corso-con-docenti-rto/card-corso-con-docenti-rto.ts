import { Component, Input } from '@angular/core';
import { CorsoConDocentiRTO } from '../../../../../features/catalogo-corsi/models/rto/corsoConDocentiRTO.model';

@Component({
  selector: 'app-card-corso-con-docenti',
  standalone: true,
  templateUrl: './card-corso-con-docenti-rto.html'
})
export class CardCorsoConDocentiComponent {
  @Input() data!: CorsoConDocentiRTO;
}
