import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MymenuComponent } from '../mymenu/mymenu.component';

@Component({
  selector: 'app-homepg',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MymenuComponent],
  templateUrl: './homepg.component.html',
  styleUrl: './homepg.component.css',
})
export class HomepgComponent {
  constructor(private http: HttpClient) {}
  data: any;

  getData() {
    this.http.get('https://api.isevenapi.xyz/api/iseven/6/').subscribe(
      (response) => {
        this.data = response;
        console.log('Data:', this.data.iseven); // Logging the iseven property
        alert('Data:' + this.data.iseven);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
