import { Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FiltroCorsiRTO, defaultFiltroCorsi } from '../../models/filtro-corsi.model/filtro-corsi.model'

@Component({
  selector: 'app-filtro-corsi',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './filtro-corsi.html',
  styleUrl: './filtro-corsi.css'
})

export class FiltroCorsi {
  private fb = inject(FormBuilder);

  filtroApplicato = output<FiltroCorsiRTO>();

  filtroForm = this.fb.nonNullable.group(defaultFiltroCorsi());

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
