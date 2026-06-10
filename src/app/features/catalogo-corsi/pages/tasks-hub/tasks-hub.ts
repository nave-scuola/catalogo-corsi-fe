import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks-hub',
  standalone: true,
  templateUrl: './tasks-hub.html',
  styleUrl: './tasks-hub.css'
})
export class TasksHub {
  private router = inject(Router);

  goToEX01() {
    this.router.navigate(['/docenti/ex01']);
  }

  goToEX02() {
    this.router.navigate(['/corsi/ex02']);
  }

  goToEX03() {
    this.router.navigate(['/docenti/ex03']);
  }

  goToEX04() {
    this.router.navigate(['/docenti/ex04']);
  }

  goToEX05() {
    this.router.navigate(['/docenti/ex05']);
  }

  goToEX06() {
    this.router.navigate(['/docenti/ex06']);
  }

  goToCorsiFe404() {
    this.router.navigate(['/corsi/fe404']);
  }

}
