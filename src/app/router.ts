import { Routes } from '@angular/router';

export const APP_ROUTE: Routes = [
   {
      path: '', redirectTo: 'home', pathMatch: 'full'
   },
   {
      path: 'home', loadChildren: './home/home.component.module#HomeModule',
   },
   {
      path: 'login', loadChildren: './login/login.component.module#LoginModule'
   },
];



