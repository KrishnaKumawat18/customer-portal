import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthCallbackComponent } from './auth/auth-callback/auth-callback.component';
import { PolicyComponent } from './policy/policy.component';
import { ClaimsComponent } from './claims/claims.component';
import { BillComponent } from './bill/bill.component';
import { PaymentComponent } from './payment/payment.component';
import { InsuredComponent } from './insured/insured.component';
import { DownloadComponent } from './download/download.component';
import { SelfServiceComponent } from './self-service/self-service.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'callback', component: AuthCallbackComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'policy', component: PolicyComponent },
  { path: 'claims', component: ClaimsComponent },
  { path: 'bill', component: BillComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'insured', component: InsuredComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'self-service', component: SelfServiceComponent },
  { path: 'notification', component: NotificationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
