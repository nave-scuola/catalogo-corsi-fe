import { Component, inject, effect } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CorsoFacade } from '../../../services/facade/corso-facade';

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
      if (corso) {
        this.form.patchValue(corso);
      }
    });
  }

  loadCorso() {
    const id = this.form.value.idCorso!;
    if (id > 0) {
      this.facade.loadCorso(id);
    }
  }

  crea() {
    const { idCorso, ...rto } = this.form.getRawValue();
    this.facade.creaCorso(rto).subscribe(() => alert('Corso creato!'));
  }

  modifica() {
    const rto = this.form.getRawValue();
    this.facade.modificaCorso(rto).subscribe(() => alert('Corso modificato!'));
  }

  goBack() {
    this.router.navigate(['/tasks']);
  }
}
