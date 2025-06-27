import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  // Replace with Okta app settings
  private clientId = 'YOUR_OKTA_CLIENT_ID';
  private issuer = 'https://YOUR_OKTA_DOMAIN/oauth2/default';
  private redirectUri = 'http://localhost:4200/callback';
  private scope = 'openid profile email';
  private codeVerifier: string | null = null;

  constructor(private router: Router) {}

  // PKCE utilities
  private base64URLEncode(str: ArrayBuffer): string {
    return btoa(String.fromCharCode(...new Uint8Array(str)))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  }

  private async sha256(plain: string): Promise<ArrayBuffer> {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return await window.crypto.subtle.digest('SHA-256', data);
  }

  async loginWithOkta() {
    // Generate PKCE code verifier and challenge
    this.codeVerifier = this.base64URLEncode(
      window.crypto.getRandomValues(new Uint8Array(32))
    );
    sessionStorage.setItem('pkce_code_verifier', this.codeVerifier);
    const codeChallenge = this.base64URLEncode(
      await this.sha256(this.codeVerifier)
    );
    const params = [
      `client_id=${this.clientId}`,
      `redirect_uri=${encodeURIComponent(this.redirectUri)}`,
      `response_type=code`,
      `scope=${encodeURIComponent(this.scope)}`,
      `state=STATE`,
      `nonce=NONCE`,
      `code_challenge=${codeChallenge}`,
      `code_challenge_method=S256`,
    ].join('&');
    window.location.href = `${this.issuer}/v1/authorize?${params}`;
  }

  async handleAuthCallback(queryParams: any) {
    const code = queryParams['code'];
    const codeVerifier = sessionStorage.getItem('pkce_code_verifier');
    if (!code || !codeVerifier) {
      this.router.navigate(['/']);
      return;
    }
    // Exchange code for tokens (no client secret, PKCE used)
    const body = new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: this.clientId,
      redirect_uri: this.redirectUri,
      code: code,
      code_verifier: codeVerifier,
    });
    const response = await fetch(`${this.issuer}/v1/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    });
    if (response.ok) {
      const tokens = await response.json();
      sessionStorage.setItem('access_token', tokens.access_token);
      sessionStorage.setItem('id_token', tokens.id_token);
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/']);
    }
  }

  getAccessToken(): string | null {
    return sessionStorage.getItem('access_token');
  }

  logout() {
    sessionStorage.clear();
    window.location.href = `${
      this.issuer
    }/v1/logout?id_token_hint=${sessionStorage.getItem(
      'id_token'
    )}&post_logout_redirect_uri=${encodeURIComponent(
      'http://localhost:4200/'
    )}`;
  }

  isAuthenticated(): boolean {
    return !!this.getAccessToken();
  }
}
