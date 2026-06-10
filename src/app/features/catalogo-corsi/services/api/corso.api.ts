// features/catalogo-corsi/services/corso.api.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';
import { CorsoRTO } from '../../models/rto/corsoRTO.model';
import { CorsoTO } from '../../models/to/corsoTO.model';

@Injectable({ providedIn: 'root' })
export class CorsoApi {
    private http = inject(HttpClient);
    private baseUrl = environment.apiBaseUrl;

    getAll(): Observable<CorsoRTO[]> {
        return this.http.get<CorsoRTO[]>(`${this.baseUrl}/corsi`);
    }

    findCorsoByCodCorso(codice: string): Observable<CorsoRTO> {
        return this.http.get<CorsoRTO>(`${this.baseUrl}/catalogo-corsi/corsi/${codice}`);
    }

    getCorsoById(idCorso: number) {
        return this.http.get<CorsoRTO>(`${this.baseUrl}/corsi/corso/${idCorso}`);
    }

    creaCorso(to: CorsoTO): Observable<void> {
        return this.http.post<void>(`${this.baseUrl}/corsi`, to);
    }

    modificaCorso(to: CorsoTO): Observable<void> {
        return this.http.put<void>(`${this.baseUrl}/corsi/modifica-corso`, to);
    }

    eliminaCorso(idCorso: number) {
        return this.http.delete<void>(`${this.baseUrl}/corsi/${idCorso}`);
    }
}
