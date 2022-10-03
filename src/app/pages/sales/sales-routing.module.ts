import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SaleDetailComponent } from "src/app/shared/components/sale-detail/sale-detail.component";
import { SaleComponent } from "./sale/sale.component";
import { SalesComponent } from "./sales/sales.component";

const vendasRoutes: Routes = [
    {
        path: '',
        children: [
            { path: 'user/:checkout_id', component: SaleComponent, children: [ { path: ':sale_id', component: SaleDetailComponent} ] },
            { path: 'all', /*canActivate:[AdmGuardService],*/ component: SalesComponent, children: [ { path: ':sale_id', component: SaleDetailComponent} ] },
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(vendasRoutes)],
    exports: [RouterModule]
})
export class SalesRoutingModule { }