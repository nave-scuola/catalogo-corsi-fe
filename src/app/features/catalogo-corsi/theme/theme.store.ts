import { Injectable, signal, computed } from '@angular/core';

export type Tema = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeStore {

    private readonly STORAGE_KEY = 'app-theme';
    private readonly _tema = signal<Tema>(
        (localStorage.getItem(this.STORAGE_KEY) as Tema) ?? 'dark'
    );

    readonly tema = this._tema.asReadonly();
    readonly themeClass = computed(() =>
        this._tema() === 'dark' ? 'theme-dark' : 'theme-light'
    );

    setTema(t: Tema): void {
        this._tema.set(t);
        localStorage.setItem(this.STORAGE_KEY, t);
    }

    toggleTema(): void {
        const nuovo = this._tema() === 'dark' ? 'light' : 'dark';
        this.setTema(nuovo);
    }
}
