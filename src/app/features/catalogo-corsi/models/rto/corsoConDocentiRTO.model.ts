import { CorsoRTO } from "./corsoRTO.model";
import { DocenteRTO } from "./docenteRTO.model";

export interface CorsoConDocentiRTO extends CorsoRTO{
    docenti: DocenteRTO[];
}