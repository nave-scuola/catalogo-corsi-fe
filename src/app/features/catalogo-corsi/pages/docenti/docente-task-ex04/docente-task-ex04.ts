import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DocenteFacade } from '../../../services/facade/docente-facade';
import { DynamicCardContainerComponent } from '../../../../../shared/components/dynamic-card/dynamic-card-container/dynamic-card-container.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docente-task-ex04',
  standalone: true,
  imports: [ReactiveFormsModule, DynamicCardContainerComponent],
  templateUrl: './docente-task-ex04.html',
  styleUrl: './docente-task-ex04.css'
})
export class DocenteTaskEx04 {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  facade = inject(DocenteFacade);

  form = this.fb.nonNullable.group({
    idDocente: 0
  });

  onSubmit(): void {
    const id = this.form.value.idDocente;
    if (!id || id <= 0) return;
    this.facade.loadDocenteById(id);
  }

  goBack() {
    this.router.navigate(['/tasks']);
  }
}
