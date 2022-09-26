import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleComponent } from './sale/sale.component';
import { SalesComponent } from './sales/sales.component';
import { SalesRoutingModule } from './sales-routing.module';



@NgModule({
  declarations: [
    SaleComponent,
    SalesComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule
  ]
})
export class SalesModule { }
