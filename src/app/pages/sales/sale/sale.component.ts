import { Component, OnInit } from '@angular/core';
import { SalesService } from 'src/app/shared/services/sales.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  constructor(private readonly salesService: SalesService) { }

  ngOnInit(): void {
    this.salesService.getUserSales('957352c8-7b42-4631-9eb6-ea822865ddee33').subscribe(sales => {
      console.log(sales);
      //works
      //change to get checkout id by the service login or watever
    });
  }

}
