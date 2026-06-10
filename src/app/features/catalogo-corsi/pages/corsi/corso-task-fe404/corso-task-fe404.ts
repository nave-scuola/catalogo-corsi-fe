import { Component, inject, effect } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CorsoFacade } from '../../../services/facade/corso-facade';
import { CorsoTO } from '../../../models/to/corsoTO.model';

@Component({
  selector: 'app-corso-task-fe404',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './corso-task-fe404.html',
  styleUrl: './corso-task-fe404.css'
})

export class CorsoTaskFe404 {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private facade = inject(CorsoFacade);

  form = this.fb.nonNullable.group({
    idCorso: 0,
    titolo: '',
    codiceCorso: '',
    livello: '',
    descrizione: '',
    durataOre: 0,
    categoria: ''
  });

  constructor() {
    effect(() => {
      const corso = this.facade.corso();
      if (corso) this.form.patchValue(corso);
    });
  }

  loadCorso() {
    const id = this.form.value.idCorso!;
    if (id > 0) this.facade.loadCorso(id);
  }

  crea() {
    const to: CorsoTO = this.form.getRawValue();
    to.idCorso = 0; // per creare
    this.facade.creaCorso(to).subscribe(() => alert('Corso creato!'));
  }

  modifica() {
    const to: CorsoTO = this.form.getRawValue();
    this.facade.modificaCorso(to).subscribe(() => alert('Corso modificato!'));
  }

  goBack() {
    this.router.navigate(['/tasks']);
  }
}