import { Routes } from '@angular/router';
import { UserScreenComponent } from './pages/user-screen/user-screen.component';

export const routes: Routes = [
  { path: '', component: UserScreenComponent }, // Default route
  { path: 'user', component: UserScreenComponent }, // Alternative route
  { path: '**', redirectTo: '' } // Wildcard route for 404 page
];
