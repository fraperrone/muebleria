import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-nosotros',
  templateUrl: './sobre-nosotros.component.html',
  styleUrls: ['./sobre-nosotros.component.css'],
})
export class SobreNosotrosComponent implements OnInit {
  linkWA: string = 'https://api.whatsapp.com/send?phone=541166943351';

  constructor() {}

  ngOnInit(): void {}
}
