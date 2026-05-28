import {
  Component,
  Input,
  ViewChild,
  ViewContainerRef,
  OnChanges
} from '@angular/core';
import { CARD_REGISTRY } from '../card-model-components/card-registry';
import { DynamicCardRequest } from '../../../../features/catalogo-corsi/models/rto/dynamic-card-request';

@Component({
  selector: 'app-dynamic-card-container',
  standalone: true,
  templateUrl: './dynamic-card-container.component.html'
})
export class DynamicCardContainerComponent implements OnChanges {
  @Input() data!: DynamicCardRequest;

  @ViewChild('vc', { read: ViewContainerRef, static: true })
  vc!: ViewContainerRef;

  ngOnChanges() {
    this.loadCard();
  }

  private loadCard() {
    this.vc.clear();

    const comp = CARD_REGISTRY[this.data.tipo];
    if (!comp) {
      console.error('Tipo card non supportato:', this.data.tipo);
      return;
    }

    const componentRef = this.vc.createComponent(comp);
    componentRef.setInput('data', this.data.payload);
  }
}
