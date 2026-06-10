import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingService } from './core/loading.service';
import { ErrorStore } from './features/catalogo-corsi/services/store/error-store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  loadingService= inject(LoadingService);
  errorStore= inject(ErrorStore);
  title = 'catalogo-corsi-fe';
}
