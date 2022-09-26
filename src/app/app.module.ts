import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthGuardService } from './login/guards/auth-guard.service';
import { LoginService } from './login/login.service';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { AuthInterceptorProviders } from './shared/_helpers/auth.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SaleDetailComponent } from './shared/components/sale-detail/sale-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SaleDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    JwtModule.forRoot({
      config: {},
    }),    
  ],  
  providers: [LoginService, AuthGuardService, AuthInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
