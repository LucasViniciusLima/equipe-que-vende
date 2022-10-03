import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "./login/guards/auth-guard.service";
import { HomeComponent } from "./pages/home/home.component";
import { RankingComponent } from "./pages/ranking/ranking.component";


const APP_ROUTES: Routes = [
    { path: 'auth', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },    
    { path: 'ranking', component: RankingComponent, canActivate: [AuthGuardService] },    
    { path: 'sale', loadChildren: () => import('./pages/sales/sales.module').then(m => m.SalesModule), canActivate: [AuthGuardService] },    
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
}) export class AppRoutingModule { }