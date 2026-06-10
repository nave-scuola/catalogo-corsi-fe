import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CorsoFacade } from '../../../services/facade/corso-facade';
import { DynamicCardContainerComponent } from '../../../../../shared/components/dynamic-card/dynamic-card-container/dynamic-card-container.component';

@Component({
  selector: 'app-corso-task-fe403',
  standalone: true,
  imports: [ReactiveFormsModule, DynamicCardContainerComponent],
  templateUrl: './corso-task-fe403.html',
  styleUrl: './corso-task-fe403.css'
})
export class CorsoTaskFe403 {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private facade = inject(CorsoFacade);

  form = this.fb.nonNullable.group({
    idCorso: 0
  });

  corso = this.facade.corso;

  loadCorso() {
    const id = this.form.value.idCorso!;
    if (id > 0) {
      this.facade.loadCorso(id);
    }
  }

  goBack() {
    this.router.navigate(['/tasks']);
  }
}
