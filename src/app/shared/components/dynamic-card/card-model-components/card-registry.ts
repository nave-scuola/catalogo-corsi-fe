import { Type } from '@angular/core';
import { CardCorsoComponent } from './card-corso-rto/card-corso-rto.ts.js';
import { CardCorsoConDocentiComponent } from './card-corso-con-docenti-rto/card-corso-con-docenti-rto.js';
import { CardCorsoReportComponent } from './card-corso-report-rto/card-corso-report-rto.js';
import { CardDocenteComponent } from './card-docente-rto/card-docente-rto.js';
import { CardDocenteConCorsiComponent } from './card-docente-con-corsi-rto/card-docente-con-corsi-rto.js';
import { CardDocenteDettaglioComponent } from './card-docente-dettaglio-rto/card-docente-dettaglio-rto.js';

export const CARD_REGISTRY: Record<string, Type<any>> = {
  corso: CardCorsoComponent,
  corsoConDocenti: CardCorsoConDocentiComponent,
  corsoReport: CardCorsoReportComponent,
  docente: CardDocenteComponent,
  docenteConCorsi: CardDocenteConCorsiComponent,
  docenteDettaglio: CardDocenteDettaglioComponent
};
