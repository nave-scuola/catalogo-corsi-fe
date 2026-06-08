import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DocenteFacade } from '../../services/docente-facade';
import { DynamicCardContainerComponent } from '../../../../shared/components/dynamic-card/dynamic-card-container/dynamic-card-container.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docente-task-ex01',
  standalone: true,
  imports: [ReactiveFormsModule, DynamicCardContainerComponent],
  templateUrl: './docente-task-ex01.html',
  styleUrl: './docente-task-ex01.css'
})
export class DocenteCorsiEx01Page {
  private fb = inject(FormBuilder);
  facade = inject(DocenteFacade);
  router = inject(Router);

  form = this.fb.nonNullable.group({
    idDocente: 0
  });

  onSubmit(): void {
    const id = this.form.value.idDocente;
    if (!id || id <= 0) return;
    this.facade.loadCorsiByIdDocente(id);
  }

  goBack() {
    this.router.navigate(['/tasks']);
  }
}
