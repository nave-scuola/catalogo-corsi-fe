import { Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-filtro-corsi',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './filtro-corsi.html',
  styleUrl: './filtro-corsi.css'
})

export class FiltroCorsi {
  private fb = inject(FormBuilder);

  // Output tipizzato con i campi reali del filtro
  filtroApplicato = output<{
    categoria: string;
    livello: string;
    titolo: string;
    codiceCorso: string;
  }>();

  filtroForm = this.fb.nonNullable.group({
    categoria: [''],
    livello: [''],
    titolo: [''],
    codiceCorso: [''],
  });

  onSubmit(): void {
    if (this.filtroForm.valid) {
      this.filtroApplicato.emit(this.filtroForm.getRawValue());
    }
  }

  onReset(): void {
    this.filtroForm.reset();
    this.filtroApplicato.emit(this.filtroForm.getRawValue());
  }
}
