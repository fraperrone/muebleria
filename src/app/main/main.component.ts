import { Component, Input, OnInit } from '@angular/core';
import { Sofa } from '../Sofa';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  lista: Sofa[] = [];

  constructor(dataService: DataService) {
    this.lista = dataService.listaProductos;
  }

  ngOnInit(): void {}
}
