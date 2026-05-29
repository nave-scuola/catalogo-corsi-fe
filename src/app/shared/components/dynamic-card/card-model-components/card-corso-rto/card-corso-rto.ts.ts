import { Component, Input } from '@angular/core';
import { CorsoRTO } from '../../../../../features/catalogo-corsi/models/rto/corsoRTO.model';

@Component({
  selector: 'app-card-corso',
  standalone: true,
  templateUrl: './card-corso-rto.ts.html'
})
export class CardCorsoComponent {
  @Input() data!: CorsoRTO;
}
