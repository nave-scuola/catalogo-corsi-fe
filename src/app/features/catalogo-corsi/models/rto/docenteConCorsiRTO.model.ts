import { CorsoRTO } from "./corsoRTO.model";
import { DocenteRTO } from "./docenteRTO.model";

export interface DocenteConCorsiRTO extends DocenteRTO{
    corsi: CorsoRTO[];
    // Campo @JsonIgnore per logica backend, viene ignorato da Swagger, per ora commentato
    // associazioneCorsi: DocenteCorsoSupportoListRTO;
}