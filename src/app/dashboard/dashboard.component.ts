import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../shared/header.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private readonly router: Router) {}

  logout() {
    // Optionally add logout logic here
    this.router.navigate(['/']);
  }

  goToPolicy() {
    this.router.navigate(['/policy']);
  }

  goToClaims() {
    this.router.navigate(['/claims']);
  }

  goToBill() {
    this.router.navigate(['/bill']);
  }

  goToPayment() {
    this.router.navigate(['/payment']);
  }

  goToInsured() {
    this.router.navigate(['/insured']);
  }

  goToDownload() {
    this.router.navigate(['/download']);
  }

  goToSelfService() {
    this.router.navigate(['/self-service']);
  }

  goToNotification() {
    this.router.navigate(['/notification']);
  }
}
