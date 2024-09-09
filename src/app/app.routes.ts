import { Routes } from '@angular/router';
import { HomepgComponent } from './homepg/homepg.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';

export const routes: Routes = [
  { path: '', component: HomepgComponent },
  { path: 'abt', component: AboutComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'contact/abt', redirectTo: 'abt' },
  { path: 'abt/contact', redirectTo: 'contact' },
  { path: 'contact', component: ContactusComponent },
];
