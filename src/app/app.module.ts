import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthGuardService } from './login/guards/auth-guard.service';
import { LoginService } from './login/login.service';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { AuthInterceptorProviders } from './shared/_helpers/auth.interceptor';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {},
    })
  ],
  providers: [LoginService, AuthGuardService, AuthInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
