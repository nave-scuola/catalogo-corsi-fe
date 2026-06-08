import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { CorsoRTO } from '../../catalogo-corsi/models/rto/corsoRTO.model';

@Injectable({ providedIn: 'root' })
export class DocenteApi {
  private http = inject(HttpClient);
  private baseUrl = environment.apiBaseUrl;

  // Task EX01: GET /docenti/{idDocente}/corsi
  getCorsiByIdDocente(idDocente: number): Observable<CorsoRTO[]> {
    return this.http.get<CorsoRTO[]>(`${this.baseUrl}/docenti/${idDocente}/corsi`);
  }
}
