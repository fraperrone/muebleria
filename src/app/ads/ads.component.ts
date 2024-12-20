



import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css'],
})
export class AdsComponent implements OnInit {
  adsContent: string;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('assets/ads.txt', { responseType: 'text' }).subscribe(
      (data) => (this.adsContent = data),
      (error) => console.error('Error loading ads.txt', error)
    );
  }
}

