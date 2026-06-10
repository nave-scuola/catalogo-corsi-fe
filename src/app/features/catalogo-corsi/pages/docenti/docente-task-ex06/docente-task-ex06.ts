import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DocenteFacade } from '../../../services/facade/docente-facade';
import { DynamicCardContainerComponent } from '../../../../../shared/components/dynamic-card/dynamic-card-container/dynamic-card-container.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docente-task-ex06',
  standalone: true,
  imports: [ReactiveFormsModule, DynamicCardContainerComponent],
  templateUrl: './docente-task-ex06.html',
  styleUrl: './docente-task-ex06.css'
})
export class DocenteTaskEx06 {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  facade = inject(DocenteFacade);

  form = this.fb.nonNullable.group({
    nome: '',
    cognome: ''
  });

  onSubmit(): void {
    const nome = this.form.value.nome?.trim() ?? '';
    const cognome = this.form.value.cognome?.trim() ?? '';
    if (!nome && !cognome) return;

    this.facade.loadDocentiByNomeCognome(nome, cognome);
  }

  goBack() {
    this.router.navigate(['/tasks']);
  }
}
