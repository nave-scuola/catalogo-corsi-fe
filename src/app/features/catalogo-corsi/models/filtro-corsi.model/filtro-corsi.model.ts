export interface FiltroCorsiRTO {
  categoria: string;
  livello: string;
  titolo: string;
  codiceCorso: string;
}

export function defaultFiltroCorsi(): FiltroCorsiRTO {
  return {
    categoria: '',
    livello: '',
    titolo: '',
    codiceCorso: ''
  };
}
