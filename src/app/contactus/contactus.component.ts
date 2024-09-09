import { Component } from '@angular/core';
import { MymenuComponent } from '../mymenu/mymenu.component';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [MymenuComponent],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css',
})
export class ContactusComponent {}
