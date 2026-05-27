import { DocenteRTO } from "./docenteRTO.model";

export interface DocenteDettaglioRTO extends DocenteRTO{
    cf: string;
    specializzazione: string;
}