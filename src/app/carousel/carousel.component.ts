import { Component, Input, OnInit } from '@angular/core';
import { Sofa } from '../Sofa';
import { Carousel } from '../Carousel';
import { DataService } from '../data.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  dirImg1: string;
  list: Carousel[] = [];

  constructor(dataService: DataService) {
    this.list = dataService.listaCarousel
  }

  ngOnInit(): void {
  }
}
