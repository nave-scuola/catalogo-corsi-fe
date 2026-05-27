import { CorsoRTO } from "./corsoRTO.model";
import { DocenteRTO } from "./docenteRTO.model";
import { IscrizioniInfoRTO } from "./iscrizioniInfoRTO.model";
import { ValutazioniInfoRTO } from "./valutazioniInfoRTO.model";

export interface CorsoReportRTO extends CorsoRTO{
    docenti: DocenteRTO[];
    iscrizioni: IscrizioniInfoRTO;
    valutazioni: ValutazioniInfoRTO;
}