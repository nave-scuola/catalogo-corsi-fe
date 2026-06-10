import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DocenteFacade } from '../../../services/facade/docente-facade';
import { DynamicCardContainerComponent } from '../../../../../shared/components/dynamic-card/dynamic-card-container/dynamic-card-container.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docente-task-ex05',
  standalone: true,
  imports: [ReactiveFormsModule, DynamicCardContainerComponent],
  templateUrl: './docente-task-ex05.html',
  styleUrl: './docente-task-ex05.css'
})
export class DocenteTaskEx05 {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  facade = inject(DocenteFacade);

  form = this.fb.nonNullable.group({
    listaId: ''
  });

  onSubmit(): void {
    const raw = this.form.value.listaId?.trim();
    if (!raw) return;

    // converte "1, 2, 5" → [1,2,5]
    const lista = raw
      .split(',')
      .map(v => Number(v.trim()))
      .filter(n => !isNaN(n) && n > 0);

    if (lista.length === 0) return;

    this.facade.loadDocentiByListaId(lista);
  }

  goBack() {
    this.router.navigate(['/tasks']);
  }
}
