import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'customer-portal';
  constructor(private auth: AuthService, private location: Location) {}
  ngOnInit() {
    // Only try silent renewal if not on /callback
    if (!window.location.pathname.startsWith('/callback')) {
      this.auth.trySilentRenewal();
    }
  }
}
