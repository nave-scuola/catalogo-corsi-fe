import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';
import { CorsoRTO } from '../../models/rto/corsoRTO.model';
import { DocenteRTO } from '../../models/rto/docenteRTO.model';
import { DocenteConCorsiRTO } from '../../models/rto/docenteConCorsiRTO.model';

@Injectable({ providedIn: 'root' })
export class DocenteApi {
  private http = inject(HttpClient);
  private baseUrl = environment.apiBaseUrl;

  // Task EX01: GET /docenti/{idDocente}/corsi
  getCorsiByIdDocente(idDocente: number): Observable<CorsoRTO[]> {
    return this.http.get<CorsoRTO[]>(`${this.baseUrl}/docenti/${idDocente}/corsi`);
  }

  // EX02
  getDocentiByTitoloCorso(titolo: string): Observable<DocenteRTO[]> {
    return this.http.get<DocenteRTO[]>(
      `${this.baseUrl}/corsi/ricerca-docenti?titolo=${encodeURIComponent(titolo)}`
    );
  }

  // EX03
  getAllDocenti(): Observable<DocenteConCorsiRTO[]> {
    return this.http.get<DocenteConCorsiRTO[]>(
      `${this.baseUrl}/docenti`
    );
  }

  // ex04
  getDocenteById(idDocente: number): Observable<DocenteConCorsiRTO> {
    return this.http.get<DocenteConCorsiRTO>(
      `${this.baseUrl}/docenti/${idDocente}`
    );
  }

  // ex05
  getDocentiByListaId(listaId: number[]): Observable<DocenteConCorsiRTO[]> {
    const params = listaId.map(id => `Lista ID=${id}`).join('&');
    return this.http.get<DocenteConCorsiRTO[]>(
      `${this.baseUrl}/docenti/lista-id?${params}`
    );

  }

  //ex06
  getDocentiByNomeCognome(nome: string, cognome: string) {
    return this.http.get<DocenteConCorsiRTO[]>(
      `${this.baseUrl}/docenti/nome-cognome?nome=${encodeURIComponent(nome)}&cognome=${encodeURIComponent(cognome)}`
    );
  }


}
