import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AuthCallbackComponent } from './auth/auth-callback/auth-callback.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth/auth.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FooterComponent } from './shared/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AuthCallbackComponent,
    DashboardComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FooterComponent],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
