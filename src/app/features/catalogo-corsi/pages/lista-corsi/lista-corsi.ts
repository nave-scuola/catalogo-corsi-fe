import { Component } from '@angular/core';
import { Card } from '../../../../shared/components/card/card';

@Component({
  selector: 'app-lista-corsi',
  imports: [Card],
  templateUrl: './lista-corsi.html',
  styleUrl: './lista-corsi.css',
})

export class ListaCorsi {
  titolo = 'Catalogo Corsi';
  urlPython= 'https://static.vecteezy.com/system/resources/previews/012/697/295/non_2x/3d-python-programming-language-logo-free-png.png';
  urlJava= 'https://cdn-blog.adafruit.com/uploads/2019/03/Capture-4.jpg';
  urlSigil= 'https://images.squarespace-cdn.com/content/v1/5fef3318f8ce9b562500206e/1638026137558-1NZMR0HJ05WGAXNJTHX6/sigil-vid.jpg';
}
