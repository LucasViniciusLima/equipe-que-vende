import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AuthGuardService } from './login/guards/auth-guard.service';
import { LoginService } from './login/login.service';
import { AuthInterceptorProviders } from './shared/_helpers/auth.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SaleDetailComponent } from './shared/components/sale-detail/sale-detail.component';
import { SalesService } from './shared/services/sales.service';
import { RankingComponent } from './pages/ranking/ranking.component';
import { RankingService } from './shared/services/ranking.service';
import { MediaComponent } from './pages/media/media.component';
import { AddNewMediaComponent } from './shared/components/add-new-media/add-new-media.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SaleDetailComponent,
    RankingComponent,
    MediaComponent,
    AddNewMediaComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    JwtModule.forRoot({
      config: {},
    }),    
  ],  
  providers: [LoginService, SalesService, RankingService, AuthGuardService, AuthInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
