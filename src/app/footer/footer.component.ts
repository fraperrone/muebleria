import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  direccion: string;
  celular: string = '+54 9 11 6694-3351';
  email: string = 'gastongabriel.2016@gmail.com';
  instagramLink: string =
    'https://instagram.com/estaciondesillones?igshid=MzRlODBiNWFlZA==';
  facebookLink: string = 'https://www.facebook.com/estaciondesillones';
  whatsappLink: string = 'https://api.whatsapp.com/send?phone=541166943351';

  constructor() {}

  ngOnInit(): void {}
}
