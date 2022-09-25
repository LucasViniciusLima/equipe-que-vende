import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const APP_ROUTES: Routes = [
    { path: 'auth', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
    //{ path: ''}//home, canActivate[AuthGuardService]
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
}) export class AppRoutingModule { }