// features/catalogo-corsi/services/corso.api.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { CorsoRTO } from '../models/rto/corsoRTO.model';

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
}
