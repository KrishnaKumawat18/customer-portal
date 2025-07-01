import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth-callback',
  standalone: false,
  templateUrl: './auth-callback.component.html',
  styleUrl: './auth-callback.component.css',
})
export class AuthCallbackComponent implements OnInit {
  constructor(private route: ActivatedRoute, private auth: AuthService) {}

  ngOnInit() {
    // Only handle callback if there is a code in the URL and not already authenticated
    this.route.queryParams.subscribe((params) => {
      if (params['code'] && !this.auth.isAuthenticated()) {
        this.auth.handleAuthCallback(params);
      } else if (this.auth.isAuthenticated()) {
        window.location.replace('/dashboard');
      }
    });
  }
}
