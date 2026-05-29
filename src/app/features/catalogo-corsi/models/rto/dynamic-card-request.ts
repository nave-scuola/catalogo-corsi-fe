import { CorsoConDocentiRTO } from "./corsoConDocentiRTO.model";
import { CorsoRTO } from "./corsoRTO.model";
import { CorsoReportRTO } from "./corsoReportRTO.model";
import { DocenteConCorsiRTO } from "./docenteConCorsiRTO.model";
import { DocenteDettaglioRTO } from "./docenteDettaglioRTO.model";
import { DocenteRTO } from "./docenteRTO.model";

//Da qui si definiscono il tipo di card da creare.
export type RTOType =
  | 'corso'
  | 'corsoConDocenti'
  | 'corsoReport'
  | 'docente'
  | 'docenteConCorsi'
  | 'docenteDettaglio';


// Questa è la struttura da rispettare quando si costruisce un oggetto con dati provenienti dal backend
export interface DynamicCardRequest {
  tipo: RTOType;
  payload:
    | CorsoRTO
    | CorsoConDocentiRTO
    | CorsoReportRTO
    | DocenteRTO
    | DocenteConCorsiRTO
    | DocenteDettaglioRTO;
}
