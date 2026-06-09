import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DocenteFacade } from '../../../services/facade/docente-facade';
import { DynamicCardContainerComponent } from '../../../../../shared/components/dynamic-card/dynamic-card-container/dynamic-card-container.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-corso-task-ex02',
  imports: [ReactiveFormsModule, DynamicCardContainerComponent],
  templateUrl: './corso-task-ex02.html',
  styleUrl: './corso-task-ex02.css',
})
export class CorsoTaskEx02 {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  facade = inject(DocenteFacade);

  form = this.fb.nonNullable.group({
    titolo: ''
  });

  onSubmit(): void {
    const titolo = this.form.value.titolo?.trim();
    if (!titolo) return;
    this.facade.loadDocentiByTitolo(titolo);
  }

  goBack() {
    this.router.navigate(['/tasks']);
  }
}
