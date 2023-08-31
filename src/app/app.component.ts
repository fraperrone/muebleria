import { Component } from '@angular/core';
import { Sofa } from './Sofa';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'muebleria';

  constructor() {}

  ngOnInit(): void {}
}
