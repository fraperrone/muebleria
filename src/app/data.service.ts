import { Injectable } from '@angular/core';
import { Sofa } from './Sofa';
import { Carousel } from './Carousel';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  listaProductos: Sofa[] = [];
  listaCarousel: Carousel[] = [];
  constructor() {
    this.listaProductos = [
      new Sofa('Sofa 2 cuerpos', 'Negro', '1sof2negro.jpg'),
      new Sofa('Sofa 3 cuerpos con reposa pies', 'Negro', '3sof3negroA.jpg'),
      new Sofa('Sofa 1 cuerpo', 'Beige', '4sof1beige.jpg'),
      new Sofa('Sofa 1 cuerpo', 'Negro', '5sof1negro.jpg'),
      new Sofa('Sofa 2 cuerpos', 'gris', '6sof2gris.jpg'),
      new Sofa('Sofa 3 cuerpos con reposa pies', 'Gris', '7sof3grisA.jpg'),
      new Sofa('Sofa 3 cuerpos con reposa pies', 'Vino', '8sof3vinoA.jpg'),
      new Sofa('Sofa 2 cuerpos con reposa pies', 'Nego', '9sof2negroA.jpg'),
      new Sofa('Sofa 2 cuerpos', 'Vino', '10sof2vino.jpg'),
      new Sofa('Sofa 6 cuerpos', 'Gris', '11sof6gris.jpg'),
    ];
    this.listaCarousel = [
      new Carousel('carousel1.jpg'),
      new Carousel('carousel2.jpg'),
      new Carousel('carousel3.jpg'),
      new Carousel('carousel4.jpg'),
    ];
  }
}
