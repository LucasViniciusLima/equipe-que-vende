import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "./login/guards/auth-guard.service";
import { HomeComponent } from "./pages/home/home.component";


const APP_ROUTES: Routes = [
    { path: 'auth', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
}) export class AppRoutingModule { }