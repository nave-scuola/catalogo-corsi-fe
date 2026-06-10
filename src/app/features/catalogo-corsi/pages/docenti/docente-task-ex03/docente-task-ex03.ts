import { Component, inject } from '@angular/core';
import { DocenteFacade } from '../../../services/facade/docente-facade';
import { DynamicCardContainerComponent } from '../../../../../shared/components/dynamic-card/dynamic-card-container/dynamic-card-container.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docente-task-ex03',
  standalone: true,
  imports: [DynamicCardContainerComponent],
  templateUrl: './docente-task-ex03.html'
})
export class DocenteTaskEx03 {
  private router = inject(Router);
  facade = inject(DocenteFacade);

  goBack() {
    this.router.navigate(['/tasks']);
  }
}
