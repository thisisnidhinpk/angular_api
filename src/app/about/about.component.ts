import { Component } from '@angular/core';
import { MymenuComponent } from '../mymenu/mymenu.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MymenuComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
