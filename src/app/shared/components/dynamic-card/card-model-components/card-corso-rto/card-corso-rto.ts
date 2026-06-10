import { Component, input, inject } from '@angular/core';
import { CorsoRTO } from '../../../../../features/catalogo-corsi/models/rto/corsoRTO.model';
import { CorsoFacade } from '../../../../../features/catalogo-corsi/services/facade/corso-facade';

@Component({
  selector: 'app-card-corso',
  standalone: true,
  templateUrl: './card-corso-rto.html',
  styleUrl: './card-corso-rto.css'
})

export class CardCorsoComponent {
  data = input.required<CorsoRTO>();

  private facade = inject(CorsoFacade);

  onElimina() {
    const corso = this.data();

    if (!corso?.idCorso) return;

    const conferma = confirm(
      `Sei sicuro di voler eliminare il corso "${corso.titolo}"?`
    );

    if (!conferma) return;

    this.facade.eliminaCorso(corso.idCorso).subscribe({
      next: () => {
        alert('Corso eliminato con successo!');
        // opzionale: ricaricare la pagina o emettere evento
      },
      error: () => alert('Errore durante l’eliminazione del corso.')
    });
  }
}
