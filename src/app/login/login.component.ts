import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  styleUrls: ['./login.component.css'],
  template: `
    <header class="header">
      <div class="header-content">
        <div class="logo">
          Customer Portal <span class="logo-jp">カスタマーポータル</span>
        </div>
        <nav class="nav-menu">
          <a href="#" class="nav-link"
            ><span class="nav-icon">🏠</span>ホーム</a
          >
          <a href="#" class="nav-link"
            ><span class="nav-icon">🛡️</span>サービス</a
          >
          <a href="#" class="nav-link"
            ><span class="nav-icon">📞</span>お問い合わせ</a
          >
          <button class="login-btn header-login-btn" (click)="login()">
            <span class="nav-icon">🔑</span>ログイン
          </button>
        </nav>
      </div>
    </header>
    <div class="login-container">
      <div class="login-content">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
          alt="Customer Portal Services"
          class="main-image"
        />
        <div class="image-caption">
          <span class="image-caption-text">
            保険契約・請求・請求書・支払い・被保険者など、さまざまなサービスを一元管理できるカスタマーポータルです。
          </span>
        </div>
      </div>
    </div>
  `,
})
export class LoginComponent {
  constructor(private auth: AuthService) {}

  login() {
    this.auth.loginWithOkta();
  }
}
