import { Component, input } from '@angular/core';
import { CorsoReportRTO } from '../../../../../features/catalogo-corsi/models/rto/corsoReportRTO.model';

@Component({
  selector: 'app-card-corso-report',
  standalone: true,
  templateUrl: './card-corso-report-rto.html'
})
export class CardCorsoReportComponent {
  data= input.required<CorsoReportRTO>();
}
