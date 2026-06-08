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

  // Qui aggiungeremo EX02, EX03, EX04, ecc.
}
