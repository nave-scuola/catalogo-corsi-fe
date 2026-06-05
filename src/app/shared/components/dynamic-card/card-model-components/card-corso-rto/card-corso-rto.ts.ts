import { Component, inject, input } from '@angular/core';
import { CorsoRTO } from '../../../../../features/catalogo-corsi/models/rto/corsoRTO.model';
import { ThemeStore } from '../../../../../features/catalogo-corsi/theme/theme.store';

@Component({
  selector: 'app-card-corso',
  standalone: true,
  templateUrl: './card-corso-rto.ts.html'
})
export class CardCorsoComponent {
  data= input.required<CorsoRTO>();
  theme= inject(ThemeStore);
}
