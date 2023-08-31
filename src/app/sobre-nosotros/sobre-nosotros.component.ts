import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-nosotros',
  templateUrl: './sobre-nosotros.component.html',
  styleUrls: ['./sobre-nosotros.component.css'],
})
export class SobreNosotrosComponent implements OnInit {
  linkWA: string = 'https://api.whatsapp.com/send?phone=541166943351';

  spech1: string =
    'Somos un emprendimiento familiar con mas de 40 años en el rubro. Realizamos trabajos de tapicería y fabricación de sillones. Contamos con una amplia variedad de modelos y colores. Contáctenos y te brindaremos un asesoramiento personalizado';

  constructor() {}

  ngOnInit(): void {}
}
