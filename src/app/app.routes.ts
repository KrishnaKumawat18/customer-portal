import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthCallbackComponent } from './auth/auth-callback/auth-callback.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'callback', component: AuthCallbackComponent },
  { path: 'dashboard', component: DashboardComponent },
];
