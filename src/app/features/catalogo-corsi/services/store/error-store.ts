// core/stores/error.store.ts
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ErrorStore {
  private readonly _errore = signal<string | null>(null);

  readonly errore = this._errore.asReadonly();

  setError(msg: string): void {
    this._errore.set(msg);
  }

  clear(): void {
    this._errore.set(null);
  }
}
